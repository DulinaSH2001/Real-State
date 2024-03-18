import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      
       const res = await fetch('/api/auth/signin', {
       method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
      // Handle response based on success or failure
      // Example:
       if (data.success === false) {
         setError(data.message);
         setLoading(false);
         
       } else {
        setError(null);
      navigate('/Home');

         // Navigate to the dashboard or home page
       }
    } catch (error) {
      console.error('Error during sign in:', error);
      setError('An error occurred during sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='p-3 max-w-lg mx-auto'>  
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
          <input
            type='email'
            placeholder='Email'
            className='border p-3 border-gray-300 rounded-lg'
            id='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 p-3 rounded-lg'
            id='password'
            onChange={handleChange}
          />
          
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
         
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <div className='flex gap-2 mt-5'>
          <p>Don't have an account?</p>
          <Link to={"/SignUp"} className='text-blue-700'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
