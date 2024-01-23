import React from 'react'
import FaqComp from './FaqComp'

export default function FaqMain() {
    const tempFaq = [
        {
            title: 'What is Mirage Launchpad? ',
            content: 'Mirage is a pioneering automatized launchpad for tokens on the Solana ecosystem, create, edit and launch your tokens on a seamless and easy-to-use platform designed by Web3 creators for Web3 creators, no knowledge of coding needed to use Mirage. '
        },
        {
            title: 'When will I have my token ready? ',
            content: 'Mirage is a pioneering automatized launchpad for tokens on the Solana ecosystem, create, edit and launch your tokens on a seamless and easy-to-use platform designed by Web3 creators for Web3 creators, no knowledge of coding needed to use Mirage. '
        },
        {
            title: 'What benefits do the Mirage NFTs provide? ',
            content: 'Mirage is a pioneering automatized launchpad for tokens on the Solana ecosystem, create, edit and launch your tokens on a seamless and easy-to-use platform designed by Web3 creators for Web3 creators, no knowledge of coding needed to use Mirage. '
        },
    ]
    return (
        <div className='w-full px-6 md:px-[100px] py-6 md:py-[100px] mt-[68px] md:mt-[80px] flex flex-col items-center gap-8 md:gap-[50px] max-w-[1440px] mx-auto'>
            <div className='text-center text-3xl md:text-5xl text-white font-semibold overflow-hidden'>
                Frequently Asked Question
            </div>
            <div className='gap-4 w-full flex flex-col items-center'>
                {tempFaq.map((item, index) => (
                    <FaqComp title={item.title} content={item.content} key={index} />
                ))}
            </div>
            <div className='flex flex-col items-center gap-[30px] text-white text-base md:text-xl'>
                    <div className='text-center'>
                    Didn’t find what you looking for,<br />feel free to contact us.
                    </div>
                    <button className='px-6 py-2 text-white bg-primary-200 rounded-xl text-sm  font-semibold'>Contact Us</button>
            </div>
        </div>
    )
}
