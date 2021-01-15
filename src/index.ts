import Phone from "./entities/Phone";
import Address from "./entities/Address";
import Contact from "./entities/Contact";
import {addContact} from "./providers/contacts";

interface ContactApiInterface {
    addContact: (firstNames: string, lastName: string, email: string, phone: Phone, address?: Address) => Promise<Contact>;
}

export const ContactsApi: ContactApiInterface = {
    addContact: addContact
}