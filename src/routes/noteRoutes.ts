import { Router } from 'express';
import { getNotes, createNote } from '../controllers/noteController';

const router = Router();

router.get('/', getNotes);      
router.post('/', createNote);  

export default router;
