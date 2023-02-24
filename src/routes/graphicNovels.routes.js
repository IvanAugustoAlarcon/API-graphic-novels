import { Router, application } from 'express'
import { getGraphicNovels,addGraphicNovels, deleteNovel, getAuthorName } from '../controllers/graphicNovels.controller.js'

const router = Router()

router.get('/api/novels', getGraphicNovels)
router.post('/api/addNovel', addGraphicNovels)
router.delete('/api/deleteNovel/:id_novel', deleteNovel)
router.post('/api/authorName', getAuthorName)

export default router