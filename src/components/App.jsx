import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: null,
  };

  createUser = (data) => {
    const  isAlredyContacts = this.state.contacts.find(el => el.name === data.name);
    if (isAlredyContacts) return alert(`${data.name} is alredy in contacts.`)

    const newContacts = {
      ...data,
      id: nanoid(),
    }
    this.setState((prev) => ({
      contacts: [newContacts, ...prev.contacts],
    }))
  }

  userFilter = (filters) => {
    if (!filters.trim()) {
      return this.setState({filter: null});
    }
    this.setState((prev) => ({
      filter: prev.contacts.filter((el) => el.name.toLowerCase().includes(filters.toLowerCase())),
    }));
  }

  handDelete = (id) =>  {
    if (this.state.filter) {
      this.setState((prev) => ({
        filter: prev.contacts.filter((el) => el.id !== id),
      }));
    } else {
      this.setState((prev) => ({
        contacts: prev.contacts.filter((el) => el.id !== id),
      }));
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        
      <Phonebook 
        createUser={this.createUser} 
        userFilter={this.userFilter} 
        handDelete={this.handDelete} 
        name={this.state} 
      />
      </div>
    );
  }
}
