import { Router } from 'express'
import NcmController from '@controllers/ncm'

const router = Router()

router.get('ncm/', NcmController.get)
router.get('ncm/:ncm', NcmController.getById)
router.put('ncm/:ncm', NcmController.update)
router.post('ncm', NcmController.create)
router.delete('ncm/:ncm', NcmController.remove)

export default router