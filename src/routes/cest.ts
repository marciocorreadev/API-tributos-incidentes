import { Router } from 'express'
import CestController from '@controllers/cest'

const router = Router()
router.get('/cest', CestController.get)
router.get('/cest/:cest', CestController.getById)
router.post('/cest', CestController.create)
router.put('/cest/:cest', CestController.update)
router.delete('/cest/:cest', CestController.remove)

export default router