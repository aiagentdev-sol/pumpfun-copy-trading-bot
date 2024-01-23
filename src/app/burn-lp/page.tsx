import Image from 'next/image'
import React from 'react'

export default function BurnLp() {
    return (
        <div className="w-full h-full min-h-screen flex items-start pt-6 sm:pt-0 sm:items-center justify-center bg-secondary-200  sm:bg-secondary-300">
            <div className="flex flex-col max-w-[480px] w-full bg-secondary-200 rounded-xl p-6 gap-6">
                <div className='flex items-center justify-between'>
                    <div className='text-white text-2xl font-semibold'>
                        Burn
                    </div>
                    <Image
                        src='/icons/x.svg'
                        alt='cross'
                        width={24}
                        height={24}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className="text-sm text-secondary-400">Wallet Address</p>
                    <div className='p-2 w-full gap-2 flex items-center text-white rounded-xl bg-secondary-300'>
                        <Image
                            src="/icons/avatar-image.png"
                            alt="avatar image"
                            width={32}
                            height={32}
                            className='object-cover object-center w-8 h-8'
                        />
                        <p className='truncate w-[90%] text-sm'>
                            0x8ad129ykba801298t1wopskgdfiyaasdas7gdas532vgd8b6123
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className="text-sm text-secondary-400">Token Info</p>
                    <div className='p-2 w-full gap-2 flex items-center text-white rounded-xl bg-secondary-300'>
                        <Image
                            src="/icons/Polygon_token.png"
                            alt="Polygon Token"
                            width={32}
                            height={32}
                            className='object-cover object-center w-8 h-8'
                        />
                        <div className='flex flex-col font-normal'>
                            <div className='text-sm'>
                                CRC Token - Sol
                            </div>
                            <div className='text-xs text-secondary-900'>
                                <span>
                                    Amount: 9
                                </span>
                                &nbsp;&nbsp;&nbsp;
                                <span>
                                    Token to Mint: 1000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-secondary-400 text-sm font-normal'>
                        You will receive
                    </div>
                    <div className='text-white font-semibold text-sm'>
                        0.283201 Sol
                    </div>
                </div>
                <button
                    className="w-full py-3 px-6 text-[white] text-sm font-semibold text-center rounded-xl bg-primary-200"
                >
                    Burn It
                </button>
            </div>
        </div>
    )
}
