import { ContactsList } from "./ContactsList"

export const Contacts = ({name, handDelete}) => {
    let props;
    if (name.filter) {
        props = name.filter;
    }
    else {
        props = name.contacts;
    }
    return (
        <ul>
            {props.map((contact) => (
                <ContactsList 
                    key={contact.id} 
                    id={contact.id} 
                    name={contact.name} 
                    number={contact.number} 
                    handDelete={handDelete}
                />
            ))}
        </ul>
    )
}