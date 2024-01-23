import React from 'react'

interface Props {
    title: string;
    mintedNumber: number;
    imgUrl: string;
}
const DiscoverTokensComp: React.FC<Props> = ({ title, mintedNumber, imgUrl }) => {
    return (
        <div className='rounded-xl shadow-md flex flex-col font-semibold grow shrink-0 basis-0 overflow-hidden'>
            <img
                src={imgUrl}
                alt='token'
                className='aspect-[5/4] w-full object-cover object-center'
            />
            <div className='p-4 flex flex-col bg-secondary-200'>
                <div className='text-base truncate'>
                    {title}
                </div>
                <div className='text-xs text-secondary-400'>
                    {mintedNumber.toFixed(2).toLocaleString()} $USD
                </div>
            </div>
        </div>
    )
}

export default DiscoverTokensComp;