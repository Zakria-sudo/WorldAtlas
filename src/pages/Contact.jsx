import React from 'react'

const Contact = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };

  return (
    <div className='text-white max-w-2xl w-full  mx-auto p-6 md:p-10 rounded-lg'>
      <h1 className='font-bold text-3xl text-center py-5'>Contact</h1>
      <form onSubmit={handleForm} className='flex flex-col gap-8'>
        <input 
          type='text' 
          name='username' 
          required 
          autoComplete='off' 
          placeholder='Enter your name' 
          className='w-full rounded border border-gray-500 py-2 px-4  text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <input 
          type='email' 
          name='email' 
          required 
          autoComplete='off' 
          placeholder='Enter your email' 
          className='w-full rounded border border-gray-500 py-2 px-4  text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <textarea 
          name='message' 
          rows={5} 
          required 
          placeholder='Enter Your Message' 
          className='w-full rounded border border-gray-500 py-2 px-4  text-white focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <button 
          type='submit' 
          className='bg-blue-600 w-full py-2 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;