import React from 'react'
import Image from 'next/image'
export default function BigShadow() {
    return (
        <div className='hidden md:block absolute top-0 right-0'>
            <Image
                src="/decor/shadow_1.svg"
                alt="SVG Image"
                width={459.518}
                height={508.241}
                layout="fixed"
                objectFit="cover"
                className="custom-svg-class"
            />
            <style jsx>{`
      .custom-svg-class {
        fill: var(--dark-style-2, linear-gradient(207deg, #007CEF 8.69%, #54FF65 92.29%));
        filter: blur(400px);
      }
    `}
            </style>
        </div>
    )
}
