import {Router} from 'express'
import ControlerOrfanatos from '../controllers/ControlerOrfanatos'
const router = Router()


router.get('/', ControlerOrfanatos.index)


export default router