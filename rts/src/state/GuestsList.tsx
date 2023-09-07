import { useState } from 'react';

const GuestsList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guests List</h3>

      <ul>
        {guests.map((guest: string) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestsList;
