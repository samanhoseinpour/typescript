import axios from 'axios';

interface UserInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const fetchUserById = async (userId: number) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const { data } = await axios.get(url);

  const { id, name, email, phone } = data as UserInfo;

  logUserInfo(id, name, email, phone);
};

const logUserInfo = (
  id: number,
  name: string,
  email: string,
  phone: string
) => {
  console.log(`
    User with the ID : ${id}
    With the name of : ${name}
    With the email of : ${email}
    With the phone number of : ${phone}
  `);
};

fetchUserById(3);
