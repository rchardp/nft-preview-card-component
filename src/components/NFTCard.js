import React from 'react';

export const NFTCard = () => {
  return (
    <div className='w-[326px] sm:w-[350px] bg-dark-blue-800 rounded-2xl p-6 flex flex-col gap-5'>
      <div className=' relative group'>
        <img className='rounded-lg' src='./images/image-equilibrium.jpg' alt='nft card' />
        <div className='absolute top-0 rounded-lg bg-cyan/40 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300'>
          <img className='w-[48px]' src='./images/icon-view.svg' alt='' />
        </div>
      </div>

      <div className='text-[18px] flex flex-col gap-5'>
        <div className='flex flex-col gap-3.5'>
          <h2 className='text-white font-semibold text-[1.25em]'>
            <a className='hover:text-cyan' href='/'>
              Equilibrium #3429
            </a>
          </h2>
          <p className='text-[0.9em] sm:text-[1em] font-light leading-normal'>
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className='flex justify-between text-base'>
          <div className='text-cyan font-semibold flex items-center gap-2'>
            <img className='h-[20px]' src='./images/icon-ethereum.svg' alt='' />
            <span>0.041 ETH</span>
          </div>
          <div className='flex items-center gap-1'>
            <img className='h-[16px]' src='./images/icon-clock.svg' alt='' />
            <span>3 days left</span>
          </div>
        </div>
      </div>

      <hr className='border-dark-blue-700 sm:mt-1 -mt-2.5' />

      <div className='flex gap-4 items-center -mt-1'>
        <div className='w-[33px] outline outline-1 outline-white rounded-full'>
          <img src='./images/image-avatar.png' alt='Jules Wyvern avatar' />
        </div>
        <div>
          Creation of
          <a className='ml-1 text-white hover:text-cyan' href='/'>
            Jules Wyvern
          </a>
        </div>
      </div>

    </div>
  );
}
