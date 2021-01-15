import Contact from "../entities/Contact";
import {getRepository} from "typeorm";

export async function addContact(firstNames, lastName, email, phone, address): Promise<Contact> {
    if (!firstNames) {
        throw new Error("First name cannot be empty!")
    }
    if (!lastName) {
        throw new Error("Last name cannot be empty!")
    }
    if (!phone.mobile) {
        throw new Error("Mobile phone cannot be empty!")
    }

    const contactRepository = getRepository(Contact);

    const contact = {
        firstNames: firstNames,
        lastName: lastName,
        email: email,
        phone: phone,
        ...(address && {address: address})
    }

    return contactRepository.save(contact);
}