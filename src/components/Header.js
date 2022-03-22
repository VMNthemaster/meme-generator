import React from 'react'

const Header = () => {
  return (
    <header className='header flex space-x-2 h-[10vh] container bg-gradient-to-r from-purple-700 to-purple-400 rounded-md '>
        <div className='flex space-x-2 mx-4 my-2 items-center gap-3'>
            <img className='h-[7vh]' src='../../assets/header-logo.png' alt='header-logo' />
            <h2 className='text-white font-[gabriola] text-3xl'>Meme Generator</h2>
        </div>
    </header>
  )
}

export default Header