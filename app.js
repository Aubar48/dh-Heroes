const express = require ('express')
const path = require('path')
const app = express()
app.use(express.static('DH-Heroes'))
const PORT = 3030;
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT} `))
// app.get('/', (req, res) =>{
//     let contenido = 'Hola, Bienvenidooo al falso home para probar el res.send, el sendFile, envia archivos'
//     res.send(contenido)
// })
//configuraciones

//rutas
app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/babbage', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'babbage.html'))
})
app.get('/clarke', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'clarke.html'))
})
app.get('/hamilton', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'hamilton.html'))
})
app.get('/lovelace', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'lovelace.html'))
})
app.get('/turing', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'turing.html'))
})
app.get('/hopper', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'hopper.html'))
})


app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})
