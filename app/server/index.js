const Express = require('express')
const App = Express()
const Port = 8080

App.get('/', (req, res) => {
  res.send('Hello World!')
})

App.listen(Port, () => {
  console.log(`Servidor corriendo en el puerto: ${Port}`)
})
