import { useState } from 'react';
import contactsData from './contacts.json';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  console.log(contacts);
  return (
    <div className='App'>
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🌟'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
