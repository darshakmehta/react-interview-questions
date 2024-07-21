// Question 21: How can you handle component state with Immer.js to ensure immutability in a complex state structure in TypeScript?

import React, { useReducer } from 'react';
import produce from 'immer';

type State = {
  users: { id: number; name: string }[];
};

type Action =
  | { type: 'add_user'; payload: { id: number; name: string } }
  | { type: 'update_user'; payload: { id: number; name: string } };

const initialState: State = {
  users: [],
};

const reducer = (state: State, action: Action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'add_user':
        draft.users.push(action.payload);
        break;
      case 'update_user':
        const user = draft.users.find((u) => u.id === action.payload.id);
        if (user) {
          user.name = action.payload.name;
        }
        break;
      default:
        break;
    }
  });
};

const UserComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUser = () => {
    dispatch({
      type: 'add_user',
      payload: { id: Date.now(), name: 'New User' },
    });
  };

  const updateUser = (id: number) => {
    dispatch({ type: 'update_user', payload: { id, name: 'Updated User' } });
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => updateUser(user.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
