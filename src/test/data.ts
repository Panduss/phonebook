import Contact from "../entities/Contact";
import Phone from "../entities/Phone";
import Address from "../entities/Address";

export const mockPhone: Phone = {
    mobile: "+44622949402"
}

export const mockAddress: Address = {
    country: "UK",
    zip: "NW1 6XE",
    city: "London",
    street: "Baker St",
    number: 221,
    addition: "b"
}

export const mockContact: Contact = {
    firstNames: "Dr John",
    lastName: "Watson",
    email: "watson.john@md.co.uk",
    phone: mockPhone,
    address: mockAddress
}
