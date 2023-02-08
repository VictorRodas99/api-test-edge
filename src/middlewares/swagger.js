import swaggerUI from 'swagger-ui-express'
import swaggerSpec from '../config/swagger.config.json' assert { type: 'json' }

export const swaggerDocs = (app) => {
  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

  app.get('/api/docs.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
