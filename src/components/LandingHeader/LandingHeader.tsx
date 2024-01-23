import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ConnectButton from './ConnectButton'
import { useData } from "@/contexts/showSideBarContext";
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation'
export default function LandingHeader() {
    const { showSideBar, setShowSideBar } = useData();
    const pathname = usePathname()
    const [pathName, setPathName] = React.useState('');
    React.useEffect(() => {
      if (pathname) {
        setPathName(pathname);
      }
    }, [pathname])
    return (
        <div className='w-full fixed top-0 z-20'>
            <div className='px-5 md:px-[100px] py-4 md:py-6 bg-secondary-200 flex flex-col items-center justify-center w-full '>
                <div className='max-w-[1440px] w-full flex justify-between items-center'>
                    <Link href='/'>
                    <Image
                        src='/icons/logo.png'
                        alt='Logo Icon'
                        width={147}
                        height={39}
                    />
                    </Link>
                    <div className='hidden md:flex text-xs lg:text-sm xl:text-base items-center text-[white] font-semibold'>
                        <Link href='/create-token' className={` ${pathName == '/create-token' && 'text-primary-200'} py-2 px-2 xl:px-4 hover:text-primary-200`}>
                            Create Token
                        </Link>
                        <Link href='my-token' className={` ${pathName == '/my-token' && 'text-primary-200'} py-2 px-2 xl:px-4 hover:text-primary-200`}>
                            My Tokens
                        </Link>
                        <Link href='/' className={` ${pathName == '/hot-token' && 'text-primary-200'} py-2 px-2 xl:px-4 hover:text-primary-200`}>
                            Hot Tokens
                        </Link>
                        <Link href='/faq' className={` ${pathName == '/faq' && 'text-primary-200'} py-2 px-2 xl:px-4 hover:text-primary-200`}>
                            FAQ
                        </Link>
                        <Link href='/#contact' className={` ${pathName == '/contact' && 'text-primary-200'} py-2 px-2 xl:px-4 hover:text-primary-200`}>
                            Contact
                        </Link>
                    </div>
                    {
                        showSideBar ? (
                            <Image
                                src='/icons/x.svg'
                                alt='cross'
                                width={20}
                                height={20}
                                onClick={() => setShowSideBar(false)}
                            />
                        ) : (
                            <div className='flex items-center gap-2 lg:gap-4'>
                                <div className='hidden lg:flex items-center gap-2 lg:gap-4'>
                                    <Link href='https://x.com/miragelaunchpad?s=21&t=cy46oI2IX70z78oS7znwTg'>
                                        <Image
                                            src='/icons/twitter.svg'
                                            alt='twitter'
                                            width={22}
                                            height={22}
                                        />
                                    </Link>
                                    <Link href='https://t.me/miragelaunchpad'>
                                        <Image
                                            src='/icons/Telegram.svg'
                                            alt='telegram'
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                    <Link href='https://discord.gg/c89NbRqzmq'>
                                        <Image
                                            src='/icons/discord.svg'
                                            alt='discord'
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                </div>
                                <Image
                                    src='/icons/UK.svg'
                                    alt='uk'
                                    width={24}
                                    height={24}
                                    className='rounded-full'
                                    onClick={() => setShowSideBar(!showSideBar)}
                                />
                                <ConnectButton />
                            </div >
                        )
                    }
                </div >
            </div >
            <div className='md:hidden w-full'>
                {
                    showSideBar && (<Sidebar />)
                }
            </div>
        </div>
    )
}
