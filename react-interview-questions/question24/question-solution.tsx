// Question 24: How can you create a type-safe controlled form component in React with TypeScript?

import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  password: string;
};

const ControlledForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ControlledForm;
