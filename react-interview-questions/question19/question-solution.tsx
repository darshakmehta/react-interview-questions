// Question 19: How can you implement a reusable form component with TypeScript using React Hook Form?

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
};

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type='number'
          {...register('age', {
            required: 'Age is required',
            valueAsNumber: true,
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormComponent;
