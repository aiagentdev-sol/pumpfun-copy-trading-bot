import React from 'react'
import Image from 'next/image'
export default function LeftShadow() {
    return (
        <div className='hidden md:block absolute top-0 left-0'>
            <Image
                src="/decor/shadow_2.svg"
                alt="SVG Image"
                width={632.505}
                height={624.453}
                layout="fixed"
                objectFit="cover"
                className="custom-svg-class"
            />
            <style jsx>{`
      .custom-svg-class {
        fill: var(--dark-style-2, linear-gradient(207deg, #007CEF 8.69%, #54FF65 92.29%));
        opacity: 0.3;
        filter: blur(120px);
      }
    `}
            </style>
        </div>
    )
}
