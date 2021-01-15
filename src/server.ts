import express, {Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import setupDb from './db'

const app = express();
const port = '8080';

app.use(morgan(morgan.compile('[:date[web]] :method :url :status (millis :response-time) :remote-addr :referrer')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((error: any, req: Request, res: Response) => {
    res.json(error).send();
});

setupDb()
    .then(() => app.listen(port, () => console.log(`Listening on port ${port}`)))
    .catch(err => console.error(err))