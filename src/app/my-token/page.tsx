'use client';
import { useState } from 'react';
// import { useWallet } from "@solana/wallet-adapter-react";
import { toMetaplexFileFromBrowser } from '@metaplex-foundation/js';
import { createSPLToken } from '@/contexts/createSPLToken';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import LandingHeader from '@/components/LandingHeader/LandingHeader';
import HotTokens from '@/components/HotTokens/HotTokens';
import DiscoverTokens from '@/components/DiscoverTokens/DiscoverTokens';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import FaqMain from '@/components/FaqMain/FaqMain';
import MyToken from '@/components/MyToken/MyToken';
import Link from 'next/link';

export default function Home() {

  const wallet = useWallet()
  const { connection } = useConnection()

  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenLogo, setTokenLogo] = useState<File | null>()
  const [tokenDecimal, setTokenDecimal] = useState(9)
  const [tokenBalance, setTokenBalance] = useState(0)

  const handleCreateToken = async () => {
    if (
      tokenName != "" &&
      tokenSymbol != "" &&
      tokenLogo != null &&
      tokenBalance != 0
    ) {
      if (!wallet.publicKey) return;
      const _file = await toMetaplexFileFromBrowser(tokenLogo);
      await createSPLToken(wallet.publicKey, wallet, connection, tokenBalance, tokenDecimal, true, tokenName, tokenSymbol, "", "", _file, "string")
    } else {
      alert("Invalid params")
    }
  }


  return (
    <main className='w-full flex flex-col min-w-[100vw] h-full min-h-screen bg-secondary-300'>
      <LandingHeader />
      <div className='force-h w-full h-full min-h-full grow  px-6 md:px-[100px] py-6 md:py-[50px] mt-[68px] md:mt-[80px] flex flex-col items-center gap-8 md:gap-[50px] max-w-[1440px] mx-auto'>
        <div className='text-xl md:text-3xl text-white font-semibold overflow-hidden w-full'>
          My Tokens
        </div>
        <div className='flex flex-col h-full min-h-full grow  items-center text-white justify-center'>
          <div className='flex flex-col h-full items-center justify-center'>
            <div className='text-xl font-semibold '>No token</div>
            <div className='text-primary-900 mt-2 text-center'>
              You don’t have any token here.<br /> Create Token now.
            </div>
            <Link href='/create-token' className='px-6 py-3 text-white bg-primary-200 rounded-xl text-sm  font-semibold mt-8'><span className='text-lg'>+</span> Create Token</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
