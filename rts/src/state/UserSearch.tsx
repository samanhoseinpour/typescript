import { useState, useRef, useEffect } from 'react';

export const db = [
  { name: 'Sarah', age: 19 },
  { name: 'Maria', age: 20 },
  { name: 'Lisa', age: 22 },
  { name: 'Linda', age: 20 },
];

type dbSchema = { name: string; age: number } | undefined;

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<dbSchema>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    const findUser = db.find((user) => {
      return user.name === name;
    });

    if (!findUser) {
      alert('Can not find the user');
    }

    setUser(findUser);
    setName('');
  };

  return (
    <div>
      <h3>Find User</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleClick}>Find</button>

      <div>
        <p>Name: {user?.name}</p>
        <p>Age: {user?.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
