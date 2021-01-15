import {createConnection} from 'typeorm';

export default () =>
    createConnection({
        type: "postgres",
        url: 'postgres://postgres:secret@localhost:5432/contacts_zsh',
        entities: [
            // Database models here
        ],
        synchronize: true,
        logging: true
    }).then(_ => console.log('Connected to Postgres with TypeORM'))