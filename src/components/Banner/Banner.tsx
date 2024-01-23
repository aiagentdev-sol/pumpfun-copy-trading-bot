import React from 'react'
import BannerContent from './BannerContent'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='w-full px-5 md:px-[100px] py-6 md:py-[50px] md:mb-[50px] flex items-center justify-center '>
            <div id = "contact" className='relative w-full max-w-[1440px] py-16 flex flex-col rounded-md overflow-hidden items-center justify-center text-white font-semibold bg-cover bg-center' style={{backgroundImage: 'url("/green_back.png")'}}>
                <BannerContent />
                <div className='absolute left-0 bottom-0 z-[7]'>
                    <img src="/left.png" alt='left_group' className='hidden lg:block' />
                    <img src="/decor/left.png" alt='left_group' className='block lg:hidden' />
                </div>
                <div className='absolute right-0 top-[0]'>
                    <img src="/right.png" alt='right_group' className='hidden lg:block' />
                    <img src="/decor/right.png" alt='right_group' className='block lg:hidden' />
                </div>
            </div>
        </div>
    )
}
