import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProp {
  user: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProp> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleClick = () => {
    const findUser = this.props.user.find((user) => {
      return user.name === this.state.name;
    });

    if (!findUser) {
      alert('Can not find the user');
    }

    this.setState({ user: findUser });
    this.setState({ name: '' });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <h3>Find User</h3>

        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleClick}>Find</button>

        <div>
          <p>Name: {user?.name}</p>
          <p>Age: {user?.age}</p>
        </div>
      </div>
    );
  }
}

export default UserSearch;
