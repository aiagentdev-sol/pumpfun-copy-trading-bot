'use client';
import {useState} from 'react';
import ConnectButton from "@/components/ConnectButton";
import Header from "@/components/Header";
// import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { toMetaplexFileFromBrowser } from '@metaplex-foundation/js';
import { createSPLToken } from '@/contexts/createSPLToken';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import LandingHeader from '@/components/LandingHeader/LandingHeader';
import HotTokens from '@/components/HotTokens/HotTokens';
import DiscoverTokens from '@/components/DiscoverTokens/DiscoverTokens';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import { RAYDIUM_MAINNET, Clmm } from '@raydium-io/raydium-sdk';

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
      <HotTokens />
      <DiscoverTokens />
      <Banner />
      <Footer />
      {/* <div className="bg-slate-900 w-full">
        <div className="w-2/5 py-32 m-auto">
          <div>
            <p className="text-lg text-white font-medium my-2">Name: </p>
            <input 
              className="w-full bg-transparent border-2 rounded-3xl text-lg py-2 px-4 text-cyan-100" 
              onChange={(e) => handleNameChange(e.target.value)}
              value={tokenName}
            />
          </div>
          <div>
            <p className="text-lg text-white font-medium my-2">Symbol: </p>
            <input 
              className="w-full bg-transparent border-2 rounded-3xl text-lg py-2 px-4 text-cyan-100"
              onChange={(e) => handleSymbolChange(e.target.value)}
              value={tokenSymbol}
            />
          </div>
          <div>
            <p className="text-lg text-white font-medium my-2">Token Logo: </p>
            <input 
              type="file" 
              className="w-full bg-transparent border-2 rounded-3xl text-lg py-2 px-4 text-cyan-100" 
              accept='image/png, image/jpeg'
              onChange={(e) => handleLogoFileChange(e.target.files)}
            />
          </div>

          <div>
            <p className="text-lg text-white font-medium my-2">Decimals: </p>
            <input
              type="number"
              className="w-full bg-transparent border-2 rounded-3xl text-lg py-2 px-4 text-cyan-100"
              onChange={(e) => handleDecimalChange(e.target.value)}
              value={tokenDecimal}
            />
          </div>
          <div>
            <p className="text-lg text-white font-medium my-2">
              Tokens to Mint:{" "}
            </p>
            <input
              type="number"
              className="w-full bg-transparent border-2 rounded-3xl text-lg py-2 px-4 text-cyan-100"
              onChange={(e) => handleBalanceChange(e.target.value)}
              value={tokenBalance}
            />
          </div>
          
          <div className="mt-8">
            <button 
              className="block w-[250px] py-4 px-8 rounded-3xl text-black text-xl font-bold bg-green-400 m-auto"
              onClick={handleCreateToken}

            >
              Create Token
            </button>
          </div>
        </div>
      </div> */}
    </main>
  );
}
