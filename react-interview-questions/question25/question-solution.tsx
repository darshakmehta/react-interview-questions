// Question 25: How can you implement a custom hook for form validation in React with TypeScript?

import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  password: string;
};

type Errors = {
  [key in keyof FormState]?: string;
};

const useFormValidation = (initialState: FormState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (callback: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      callback();
    }
  };

  return { form, errors, handleChange, handleSubmit };
};

const FormComponent: React.FC = () => {
  const { form, errors, handleChange, handleSubmit } = useFormValidation({
    name: '',
    email: '',
    password: '',
  });

  const submitForm = () => {
    console.log('Form submitted', form);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormComponent;
