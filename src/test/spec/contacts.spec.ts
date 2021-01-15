import {ContactsApi} from "../../index";
import {mockContact} from "../data";
import Contact from "../../entities/Contact";

describe('Test POST /contacts endpoint', () => {

    test('Creating new contact', async () => {
        await expect(ContactsApi.addContact(
            mockContact.firstNames,
            mockContact.lastName,
            mockContact.email,
            mockContact.phone,
            mockContact.address
        )).resolves.toEqual<Contact>(
            expect.objectContaining({
                id: expect.any(Number),
                firstNames: mockContact.firstNames,
                lastName: mockContact.lastName,
                email: mockContact.email,
                phone: expect.objectContaining({
                    id: expect.any(Number),
                    mobile: mockContact.phone.mobile
                }),
                address: expect.objectContaining({
                    id: expect.any(Number),
                    country: "UK",
                    zip: "NW1 6XE",
                    city: "London",
                    street: "Baker St",
                    number: 221,
                    addition: "b"
                })
            })
        )
    })

})