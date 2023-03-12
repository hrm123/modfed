import express from 'express';
import controller from '../controllers/resume';
const router = express.Router();

router.get('/:name', controller.parseResume);
router.post('/:name', controller.saveResume);

module.exports = router;