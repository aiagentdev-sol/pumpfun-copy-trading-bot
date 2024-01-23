import React from 'react'

interface Props {
    no: number;
    title: string;
    imgUrl: string;
    mintNumber: number;
}
const HotTokensComp:React.FC<Props> = ({no, title, imgUrl, mintNumber}) => {
  return (
    <div className='rounded-xl hover:bg-secondary-200 cursor-pointer gap-2 p-3 flex items-center leading-7 text-white'>
        <div className='text-lg font-semibold w-6'>
            {no}
        </div>
        <div className='flex items-center gap-4 grow shrink-0 basis-0 '>
            <img 
                src={imgUrl}
                alt='token image'
                className='w-16 h-16 object-cover object-center rounded-full'
            />
            <div className='flex flex-col font-semibold'>
                <div className='text-base'>
                    {title}
                </div>
                <div className='text-xs text-secondary-400'>
                    {mintNumber.toLocaleString()} $USD
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotTokensComp;