import app from './app';
import './dataBase';

app.listen(app.get('port') , () => {console.log('listening in the port' , app.get('port'))})