const { WebSocketServer } = require('ws');
const { WebSocket } = require('ws');
const uuid = require('uuid');

function chatProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer, path: '/ws'});

  // Keep track of all the connections so we can forward messages
  let connections = [];

  socketServer.on('connection', (socket) => {
    const connection = { id: uuid.v4(), alive: true, ws: socket };
    connections.push(connection);
    console.log(`New WebSocket connection: ${connection.id}`);

    socket.on('message', function message(data) {
      try {
        // Forward the message to all other connections
        connections.forEach((c) => {
          if (c.id !== connection.id && c.ws.readyState === WebSocket.OPEN) {
            c.ws.send(JSON.stringify({ 
              type: 'message_sent',  // Changed to match frontend expectation
              data: JSON.parse(data)
            }));
          }
        });
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
      }
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      connection.alive = true;
    });

    // Remove the closed connection so we don't try to forward anymore
    socket.on('close', () => {
      const pos = connections.findIndex((o) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
        console.log(`WebSocket connection closed: ${connection.id}`);
      }
    });
  });

  // Keep active connections alive
  const interval = setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);

  httpServer.on('close', () => {
    clearInterval(interval);
  });
}

module.exports = { chatProxy };