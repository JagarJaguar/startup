const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function chatProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  socketServer.on('connection', (socket) => {
    const connection = { id: uuid.v4(), alive: true, ws: socket };
    connections.push(connection);

    socket.on('message', function message(data) {
      connections.forEach((c) => {
        if (c.id !== connection.id && c.ws.readyState === WebSocket.OPEN) {
          c.ws.send(JSON.stringify({ type: 'message_sent' }));
        }
      });
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      connection.alive = true;
    });

    // Remove the closed connection so we don't try to forward anymore
    socket.on('close', () => {
      const pos = connections.findIndex((o, i) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
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