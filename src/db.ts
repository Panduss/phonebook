import {createConnection} from 'typeorm';
import Contacts from './entities/Contact';
import Phone from './entities/Phone';
import Address from './entities/Address';

export default () =>
    createConnection({
        type: "postgres",
        url: 'postgres://postgres:secret@localhost:5432/contacts_zsh',
        entities: [
            Contacts,
            Phone,
            Address
        ],
        synchronize: true,
        logging: true
    }).then(_ => console.log('Connected to Postgres with TypeORM'))