"use client";

import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ArrowLine, ExitIcon, WalletIcon, WhiteWalletIcon } from "./SvgIcon";

interface Props {
  showSideBar?: boolean;
}
const ConnectButton: FC<Props> = ({ showSideBar }) => {
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();
  return (
    <button className="rounded-xl bg-primary-200 text-[white] tracking-[0.32px] py-2 px-4 group relative">
      {publicKey ? (
        <>
          <div className="flex items-center justify-center text-[12px] lg:text-[16px]">
            {publicKey.toBase58().slice(0, 4)}....
            {publicKey.toBase58().slice(-4)}
            <div className="rotate-90 w-3 h-3">
              <ArrowLine />
            </div>
          </div>
          <div className="w-[200px] absolute left-0 top-10 hidden group-hover:block">
            <ul className="border-[0.75px] border-[#89C7B5] rounded-lg bg-[#162923] p-2 mt-2">
              <li>
                <button
                  className="flex gap-2 items-center text-[white] tracking-[-0.32px]"
                  onClick={() => setVisible(true)}
                >
                  <WalletIcon /> Change Wallet
                </button>
              </li>
              <li>
                <button
                  className="flex gap-2 items-center text-[white] tracking-[-0.32px]"
                  onClick={disconnect}
                >
                  <ExitIcon /> Disconnect
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div
          className="flex items-center justify-center gap-1 text-[12px] lg:text-[16px]"
          onClick={() => setVisible(true)}
        >
          <WhiteWalletIcon />{" "}
          {showSideBar ? (
            <span className="">Connect Wallet</span>
          ) : (
            <div>
              <span className="hidden md:inline">Connect Wallet</span>
              <span className="md:hidden">Connect</span>
            </div>
          )}
        </div>
      )
      }
      {/* <div className=""></div> */}
    </button >
  );
};

export default ConnectButton;
