import { useState } from 'react';
import contactsData from './contacts.json';
import './App.css';

console.log('Initial Data:', contactsData);

function App() {
  const spliceIndex = 5;
  const [displayContacts, setdisplayContacts] = useState(contactsData.slice(0, spliceIndex));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(spliceIndex, contactsData.lenght));

  const addRandomContact = e => {
    if (remainingContacts.length === 0) return (e.target.style.pointerEvents = 'none');
    else {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length + 0);
      setdisplayContacts([...displayContacts, remainingContacts[randomIndex]]);
      setRemainingContacts(remainingContacts.filter(contactToRemove => contactToRemove.id !== remainingContacts[randomIndex].id));
    }
  };

  const sortBy = by => {
    const tempArr = [...displayContacts];
    if (by === 'popularity') {
      setdisplayContacts(tempArr.sort((a, b) => a.popularity - b.popularity));
    }
    if (by === 'name') {
      setdisplayContacts(tempArr.sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  return (
    <div className='App'>
      <h1>LAB | React IronContacts</h1>

      <button
        onClick={e => {
          addRandomContact(e);
        }}>
        {remainingContacts.length === 0 ? 'No more contacts to add' : 'Add Random Contact'}
      </button>

      <button
        onClick={() => {
          sortBy('popularity');
        }}>
        Sort by Popularity
      </button>

      <button
        onClick={() => {
          sortBy('name');
        }}>
        Sort by Name
      </button>

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
          {displayContacts.map(contact => {
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
