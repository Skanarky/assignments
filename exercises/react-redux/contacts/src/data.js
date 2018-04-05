const redux = require("redux");

const initialState = {
    contacts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
        return {
            contacts: [...state.contacts, action.contact]
        }
        case "REMOVE_CONTACT":
        return {
            contacts: state.contacts.filter(contact => contact.name.toLowerCase() !== action.name.toLowerCase())
        }
        case "CHANGE_CONTACT":
        return {
            contacts: state.contacts.map(contact => {
                if (contact.name.toLowerCase() === action.name.toLowerCase()) {
                    return { ...contact, ...action.editedContact}
                } else {
                    return contact;
                }
            })
        }
        case "RESET_CONTACT":
        return initialState;
        default:
            return state;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addContact = contact => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    })
}

const removeContact = name => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        name
    })
}
const resetContact = () => {
    store.dispatch({
        type: "RESET_CONTACT",
    })
}

const changeContact = (name, editedContact) => {
    store.dispatch({
        type: "CHANGE_CONTACT",
        name,
        editedContact
    })
}

addContact({
    name: "Ili",
    phone: "999-999-0909",
    email: "il@gmail.com"
})
addContact({
    name: "Ben",
    phone: "999-999-0909",
    email: "il@gmail.com"
})

// removeContact("Ili")
// resetContact();

changeContact("Ben", {phone: "999-111-8800", email: "bennnnn@gmail.com"});
changeContact("ben", {phone: "999-222-8811", email: "benW@gmail.com"});