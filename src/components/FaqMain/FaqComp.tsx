import { isPositiveAmount } from '@metaplex-foundation/js';
import React from 'react'

interface Props {
    title: string;
    content: string;
}
const FaqComp: React.FC<Props> = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className='w-full p-6 flex max-w-[800px] rounded-xl bg-secondary-200'>
            <div className='w-full flex flex-col'>
                <div className='flex justify-between items-center w-full overflow-y-hidden relative'>
                    <div className='text-base md:text-xl pr-4 font-semibold text-white'>{title}</div>
                    <div className='text-white text-3xl cursor-pointer font-bold absolute top-[-7px] right-[0px] z-10' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (<div className='text-sm md:text-base font-normal text-primary-900 pt-2 pr-4'>{content}</div>)}
            </div>
        </div>
    )
}

export default FaqComp;