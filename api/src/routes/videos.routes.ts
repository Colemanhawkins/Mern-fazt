import {Router} from 'express';
import * as videoController from './Videos.controller';

const router = Router();

router.get('/videos', videoController.getVideos);

router.post('/videos' , videoController.createVideo);

router.get('/videos/:id' , videoController.getVideo);

router.put('/videos/:id', videoController.updateVideo);

router.delete('/videos/:id', videoController.deleteVideo);

export default router;