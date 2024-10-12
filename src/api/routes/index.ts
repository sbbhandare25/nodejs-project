import getHelloWorld from '@api/controller/getHelloWorld'
import express from 'express'

const router = express.Router()

router.get('/hello', getHelloWorld)

export default router
