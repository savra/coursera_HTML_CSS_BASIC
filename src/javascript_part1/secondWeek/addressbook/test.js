let phoneBook = {
    contacts: []
};
let command = "ADD Ivan 555-10-01,555-10-03";

let commandName = command.substring(0, command.indexOf(" "));
executeCommand(commandName);

command = "ADD Ivan 555-10-01,555-20-03";

commandName = command.substring(0, command.indexOf(" "));
executeCommand(commandName);

command = "ADD GGGd 555-10-01,555-20-03";

commandName = command.substring(0, command.indexOf(" "));
executeCommand(commandName);

command = "REMOVE_PHONE 555-20-03";
commandName = command.substring(0, command.indexOf(" "));
executeCommand(commandName);
showPhoneBook();


function executeCommand(commandName) {
    if (commandName === "ADD") {
        addContact(command.substring(commandName.length + 1))
    } else if (commandName === "REMOVE_PHONE") {
        removePhone(command.substring(commandName.length + 1));
    } else if (commandName === "SHOW") {
        showPhoneBook();
    }
}

function addContact(contactName) {
    let contact = {};
    contact.name = contactName.substring(0, contactName.indexOf(" "));
    contact.phone = contactName.substring(contact.name.length + 1).split(",");

    if (phoneBook.contacts.length === 0) {
        phoneBook.contacts.push(contact);
        return;
    }

    let isContactMatch = false;

    for (let i = 0; i < phoneBook.contacts.length; i++) {
        if (contact.name.toLowerCase() === phoneBook.contacts[i].name.toLowerCase()) {
            isContactMatch = true;
            for (let j = 0; j < phoneBook.contacts[i].phone.length; j++) {
                for (let k = 0; k < contact.phone.length; k++) {
                    if (phoneBook.contacts[i].phone[j] === contact.phone[k]) {
                        contact.phone.splice(k, 1);
                        k = 0;
                    }
                }
            }

            phoneBook.contacts[i].phone.push(...contact.phone);
            return;
        }
    }

    if (!isContactMatch) {
        phoneBook.contacts.push(contact);
    }
}

function removePhone(phoneNumber) {
    let wasDeleted = false;
    for (let i = 0; i < phoneBook.contacts.length; i++) {
        for (let j = 0; j < phoneBook.contacts[i].phone.length; j++) {
            if (phoneBook.contacts[i].phone[j] === phoneNumber) {
                phoneBook.contacts[i].phone.splice(j, 1);
                wasDeleted = true;
                return wasDeleted;
            }
        }
    }

    return wasDeleted;
}

function showPhoneBook() {
    phoneBook.contacts.sort((a, b) => {
        return new Intl.Collator().compare(a.name, b.name);
    });

    phoneBook.contacts.forEach((contact) => {
        console.log(contact.name + ": " + contact.phone.toString());
    })
}