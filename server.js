const WebSocket = require('ws')

const server = new WebSocket.Server({port: 3000})

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if (message === 'exit') {
                ws.close()
            } else {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message)
                }
            }
            
        })
    })
    ws.send('hi there')
})