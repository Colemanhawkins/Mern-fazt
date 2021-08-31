import express from 'express';
import config from './config'
import videosRoutes from './routes/videos.routes'
import morgan from 'morgan';
import cors from 'cors'

const app = express();

app.set('port', config.PORT || 3001)

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(videosRoutes);

export default app