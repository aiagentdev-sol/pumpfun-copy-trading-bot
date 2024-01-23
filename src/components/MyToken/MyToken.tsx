import React from 'react'

export default function MyToken() {
    return (
        <div className='w-full h-full min-h-full flex-grow  px-6 md:px-[100px] bg-[blue] py-6 md:py-[50px] mt-[68px] md:mt-[80px] flex flex-col items-center gap-8 md:gap-[50px] max-w-[1440px] mx-auto'>
            <div className='text-xl md:text-3xl text-white font-semibold overflow-hidden w-full'>
                My Tokens
            </div>
            <div className='flex flex-col h-full min-h-full flex-grow  items-center text-white justify-center bg-[red]'>
                <div className='flex flex-col h-full items-center justify-center'>
                    <div className='text-xl font-semibold '>No token</div>
                    <div className='text-primary-900 mt-2'>
                        You don’t have any token here.<br /> Create Token now.
                    </div>
                    <button className='px-6 py-3 text-white bg-primary-200 rounded-xl text-sm  font-semibold mt-8'><span className='text-lg'>+</span> Create Token</button>
                </div>
            </div>
        </div>
    )
}
