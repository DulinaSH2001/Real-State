import React from 'react'

export default function Header() {
  return (
  <header className='bg-slate-100'>
    <div className="flex justify-between items-center max-w-6xl mx-auto">
    <h1 className='font-bold text-xl xl:text-xl flex flex-wrap'>
      <span className='text-slate-700'>Indra</span>
      <span className='text-slate-300'>Tech</span>
    </h1>
    <form >
      <input type='text' placeholder='search...' />
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>add</button>

    </form>
    </div>
  </header>
  )
}
