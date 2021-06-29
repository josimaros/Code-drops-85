import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from './swagger.json'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson))

app.get('/terms', (request, response) => {
  return response.json({
    message: 'Termos de serviços'
  })
})

app.use('/v1', router)

app.listen(3000, () => console.log('O servidor estar rodando na porta 3000'))