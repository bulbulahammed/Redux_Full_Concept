import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// This kind of situation where we have to handle more data we should follow the useReducer hook

  const submit = (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='space-y-6 shadow-md p-10' onSubmit={submit}>
        <div className='flex flex-col max-w-xs'>
          <label htmlFor='name'>First Name</label>
          <input
            className="bg-gray-100 border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
            type='text'
            name='name'
            id='name'
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='flex flex-col max-w-xs'>
          <label htmlFor='name'>Last Name</label>
          <input
            className="bg-gray-100 border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
            type='text'
            name='name'
            id='name'
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='flex flex-col max-w-xs'>
          <label htmlFor='name'>Email</label>
          <input
            className="bg-gray-100 border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
            type='text'
            name='name'
            id='name'
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col max-w-xs'>
          <label htmlFor='name'>Password</label>
          <input
            className="bg-gray-100 border-2 border-gray-200 rounded-lg p-2 focus:outline-none"
            type='password'
            name='name'
            id='name'
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='px-4 py-3 bg-indigo-500 text-white rounded-md'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
