import React from 'react'
import Image from 'next/image'
export default function RightDecor() {
    return (
        <div className='hidden md:block absolute top-0 right-0'>
            <Image
                src="/decor/Decor_Right.png"
                alt="SVG Image"
                width={547}
                height={613}
                layout="fixed"
                objectFit="cover"
            />
        </div>
    )
}
