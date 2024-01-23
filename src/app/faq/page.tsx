'use client';
import {useState} from 'react';
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

export default function Home() {

  const wallet  = useWallet()
  const {connection} = useConnection()

  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenLogo, setTokenLogo] = useState<File | null>()
  const [tokenDecimal, setTokenDecimal] = useState(9)
  const [tokenBalance, setTokenBalance] = useState(0)

  // const [isShowOrigin, setIsShowOrigin] = useState(false);
  // const wallet = useWallet();
  // const [loading, setLoading] = useState(false);
  // const handleNftStake = async () => {
  //   if (!mint) return;
  //   try {
  //     const tx = await stakeNFT(wallet, mint, setLoading);
  //     if (!tx || !wallet.publicKey) return;
  //     await stake(tx, wallet.publicKey?.toBase58(), setLoading, getNfts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleCreateToken = async () => {
    if (
      tokenName != "" &&
      tokenSymbol != "" &&
      tokenLogo != null &&
      tokenBalance != 0
    ) {
      if (!wallet.publicKey ) return;
      const _file = await toMetaplexFileFromBrowser(tokenLogo);
      await createSPLToken(wallet.publicKey, wallet, connection, tokenBalance, tokenDecimal, true, tokenName, tokenSymbol, "", "", _file, "string")
    } else {
      alert("Invalid params")
    }
  }
  
  const handleNameChange = (value: string) => {
    setTokenName(value)
  }
  const handleSymbolChange = (value: string) => {
    setTokenSymbol(value)
  }
  const handleLogoFileChange = ( files: FileList | null ) => {
    if (files) {
      setTokenLogo(files[0])
    } else {
      setTokenLogo(null)
    }
  }
  const handleDecimalChange = (value: string) => {
    setTokenDecimal(parseInt(value))
  }
  const handleBalanceChange = (value: string) => {
    setTokenBalance(parseInt(value))
  }
  
  return (
    <main className='w-full min-w-[100vw] h-full min-h-screen bg-secondary-300'>
      <LandingHeader />
      <FaqMain />
      <Banner />
      <Footer />
    </main>
  );
}
