// Filename: sophisticatedCode.js
// Description: This code implements a web-based chat application with multiple rooms and real-time messaging using WebSockets.

// Import necessary modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create an Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Track active rooms and connected sockets
const activeRooms = new Set();
const activeSockets = new Map();

// Handle socket connections
io.on('connection', (socket) => {
  // Assign a unique user ID to the socket
  const userId = socket.id;

  // Initialize user data
  const userData = {
    id: userId,
    name: `User${Math.floor(Math.random() * 1000)}`, // Random username
    room: ''
  };

  // Store socket in active sockets map
  activeSockets.set(userId, socket);

  // Send user ID to the client
  socket.emit('userConnected', userId);

  // Join a room
  socket.on('joinRoom', (roomId) => {
    // Leave current room if any
    if (userData.room !== '') {
      socket.leave(userData.room);
    }

    // Join requested room
    socket.join(roomId);
    userData.room = roomId;

    // Register room as active
    activeRooms.add(roomId);

    // Notify room members about the user joining
    socket.to(userData.room).emit('userJoined', userData);
  });

  // Handle incoming messages
  socket.on('message', (message) => {
    // Broadcast message to the room
    socket.to(userData.room).emit('message', message);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    // Remove user from active sockets and rooms
    activeSockets.delete(userId);

    if (userData.room !== '') {
      activeRooms.delete(userData.room);
      socket.to(userData.room).emit('userLeft', userId);
    }
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Export server for testing purposes
module.exports = server;