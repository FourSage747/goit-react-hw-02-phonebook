import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";

export const Phonebook = ({createUser, userFilter, handDelete, name}) => {
  return (
    <div>
        <Section title="Phonebook">
            <Form createUser={createUser}/>
        </Section>
        <Section title="Contacts">
          <Filter title="Find contacts by name" userFilter={userFilter}/>
          <Contacts name={name} handDelete={handDelete} />
        </Section>
    </div>
  );
};
