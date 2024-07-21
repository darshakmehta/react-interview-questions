import React, { useState } from 'react';

type User = {
  name: string;
  age: number;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Bug 1: No check for empty value
    setUser({ ...user, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Bug 2: Potentially invalid conversion of empty string to number
    setUser({ ...user, age: Number(event.target.value) });
  };

  const handleSubmit = () => {
    // Bug 3: User might be empty or invalid
    console.log(`User Name: ${user.name}, User Age: ${user.age}`);
  };

  return (
    <div>
      <input
        type='text'
        value={user.name}
        onChange={handleNameChange}
        // Bug 4: Missing aria-label for accessibility
      />
      <input
        type='number'
        value={user.age}
        onChange={handleAgeChange}
        // Bug 5: Missing aria-label for accessibility
      />
      <button onClick={handleSubmit}>
        Submit
        {/* Bug 6: Button might be disabled based on user input */}
      </button>
    </div>
  );
};

export default UserProfile;
