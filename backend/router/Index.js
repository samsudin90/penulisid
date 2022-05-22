import express from 'express'
import multer from 'multer'
import { getBlog, getBlogById, search, setBlog, delBlog } from '../controllers/blogController.js'

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname )
    }
})

const fileFilter = (req, file, cb) => {
    if(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({storage: fileStorage})

const router = express.Router()

router.get('/', getBlog)
router.get('/:id', getBlogById)
router.post('/cari', search)
router.post('/', upload.single('image'), setBlog)
router.delete('/:id', delBlog)

export default router