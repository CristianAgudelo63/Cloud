const Express = require('express')
const App = Express()
const Port = 8080

App.get('/api', (req, res) => {
  res.send("Hola");
})

App.listen(Port, () => {
  console.log(`Servidor corriendo en el puerto: ${Port}`)
})