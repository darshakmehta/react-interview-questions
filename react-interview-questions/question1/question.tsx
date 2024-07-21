import React, { Component } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

class UserList extends Component<{}, State> {
  state: State = {
    users: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>("https://api.example.com/users");
      this.setState({ users: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default UserList;
