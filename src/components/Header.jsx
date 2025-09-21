import React from 'react'

function Header() {
  return (
    <>
    <div className='bg-[#D9D9D9] w-full h-[50px] fixed flex justify-center items-center'>
            <p className='font-inter font-medium text-[20px] leading-[150%] tracking-[0]'>
                Discover our bestsellers: SHOP NOW
            </p>
    </div>

    <div className='flex justify-center items-center'>
        <img src="src/assets/logo.png" alt="Everlume logo" />
    </div>

    <div className='flex justify-center items-center'>
        <hr className='w-[1102px] h-[0px] border-[1px]'></hr>
    </div>

    <br />

    <div className='flex items-center justify-evenly '>
        <p>Shop</p>
        <p>About</p>
        <p>World of Everlume</p>
    </div>

    <div>
        <img src="" alt="" />
        <img src="" alt="" />
    </div>

    
    </>
  )
}

export default Header