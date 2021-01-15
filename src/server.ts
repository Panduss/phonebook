import express, {NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import setupDb from './db'
import {ContactsApi} from "./index";

const app = express();
const port = '8080';

app.use(morgan(morgan.compile('[:date[web]] :method :url :status (millis :response-time) :remote-addr :referrer')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/contacts', (req: Request, res: Response, next: NextFunction) => {
    ContactsApi.addContact(
        req.body.firstNames,
        req.body.lastName,
        req.body.email,
        req.body.phone,
        req.body.address
    )
        .then(result => res.status(200).send(result))
        .catch(next);
})

app.use((error: any, req: Request, res: Response) => {
    res.json(error).send();
});

setupDb()
    .then(() => app.listen(port, () => console.log(`Listening on port ${port}`)))
    .catch(err => console.error(err))