import { Contacts } from "./Contacts"

export const ContactsList = ({filteredContacts, handDelete}) => {
    // let props;
    // if (name.filter) {
    //     props = name.filter;
    // }
    // else {
    //     props = name.contacts;
    // }
    return (
        <ul>
            {filteredContacts.map((el) =>
                <Contacts 
                    key={el.id} 
                    id={el.id} 
                    name={el.name} 
                    number={el.number} 
                    handDelete={handDelete}
                />
            )}
        </ul>
    )
}