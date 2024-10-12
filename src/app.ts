import express from 'express'
import compression from "compression"
import routes from '@api/routes'
import config from './config'

const app = express()

app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(config.port, () => {
  console.log(`Express server is listening at http://localhost:${config.port}`)
})
