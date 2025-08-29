// Basic HTTP server creation
const http = require('http');

console.log('=== Basic HTTP Server ===');

// Create a simple server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Write response
    res.write('<h1>Hello from Node.js!</h1>');
    res.write('<p>This is a basic HTTP server</p>');
    res.write(`<p>Request URL: ${req.url}</p>`);
    res.write(`<p>Request Method: ${req.method}</p>`);
    
    // End response
    res.end();
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop');
});

// Handle server events
server.on('error', (error) => {
    console.error('Server error:', error);
});

process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});