// Event-driven programming in Node.js
const EventEmitter = require('events');

console.log('=== Events in Node.js ===');

// 1. Basic EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Add event listeners
myEmitter.on('message', (data) => {
    console.log('Received message:', data);
});

myEmitter.on('error', (error) => {
    console.error('Error occurred:', error.message);
});

// Emit events
console.log('1. Basic events:');
myEmitter.emit('message', 'Hello from EventEmitter!');
myEmitter.emit('message', { user: 'John', text: 'How are you?' });

// 2. Once listener (runs only once)
myEmitter.once('startup', () => {
    console.log('2. Application started (this runs only once)');
});

myEmitter.emit('startup');
myEmitter.emit('startup'); // This won't trigger the listener

// 3. Multiple listeners for same event
myEmitter.on('data', (data) => {
    console.log('Listener 1 received:', data);
});

myEmitter.on('data', (data) => {
    console.log('Listener 2 processed:', data.toUpperCase());
});

console.log('\n3. Multiple listeners:');
myEmitter.emit('data', 'hello world');

// 4. Real-world example: Simple chat system
class ChatRoom extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.users = [];
    }
    
    addUser(username) {
        this.users.push(username);
        this.emit('userJoined', username);
    }
    
    removeUser(username) {
        this.users = this.users.filter(user => user !== username);
        this.emit('userLeft', username);
    }
    
    sendMessage(username, message) {
        this.emit('message', { username, message, timestamp: new Date() });
    }
}

console.log('\n4. Chat room example:');
const chatRoom = new ChatRoom('General');

// Set up event listeners
chatRoom.on('userJoined', (username) => {
    console.log(`${username} joined the chat`);
});

chatRoom.on('userLeft', (username) => {
    console.log(`${username} left the chat`);
});

chatRoom.on('message', (data) => {
    console.log(`[${data.timestamp.toLocaleTimeString()}] ${data.username}: ${data.message}`);
});

// Simulate chat activity
chatRoom.addUser('Alice');
chatRoom.addUser('Bob');
chatRoom.sendMessage('Alice', 'Hello everyone!');
chatRoom.sendMessage('Bob', 'Hi Alice!');
chatRoom.removeUser('Alice');

// 5. Error handling
console.log('\n5. Error handling:');
setTimeout(() => {
    myEmitter.emit('error', new Error('Something went wrong!'));
}, 100);