import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index',{ title: 'este es el index'}))
router.get('/testimonios',(req, res) => res.render('testimonios', {title: 'pagina testimonios'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'pagina contact me'}))

export default router