import React, { useState } from "react";

type User = {
  name: string;
  age: number;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({ name: "", age: 0 });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, age: Number(event.target.value) });
  };

  const handleSubmit = () => {
    console.log(`User Name: ${user.name}, User Age: ${user.age}`);
  };

  return (
    <div>
      <input type="text" value={user.name} onChange={handleNameChange} />
      <input type="number" value={user.age} onChange={handleAgeChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserProfile;
