function chatProxy(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;

    socket.on('message', function message(data) {
      socketServer.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'message_sent' }));
        }
      });
    });

    socket.on('pong', () => {
      socket.isAlive = true;
    });
  });

  // Keep active connections alive
  const interval = setInterval(() => {
    socketServer.clients.forEach((client) => {
      if (!client.isAlive) {
        return client.terminate();
      } else {
        client.isAlive = false;
        client.ping();
      }
    });
  }, 10000);

  httpServer.on('close', () => {
    clearInterval(interval);
  });
}