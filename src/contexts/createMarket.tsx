import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, MintLayout, } from '@solana/spl-token';
import { Connection, PublicKey, Transaction, SystemProgram, Keypair, TransactionInstruction, sendAndConfirmTransaction } from '@solana/web3.js';
import { WalletContextState } from "@solana/wallet-adapter-react";
import { MarketV2, DEVNET_PROGRAM_ID, TxVersion, MAINNET_PROGRAM_ID, TokenAccount, SPL_ACCOUNT_LAYOUT } from '@raydium-io/raydium-sdk';

// const marketProgramId = DEVNET_PROGRAM_ID.OPENBOOK_MARKET;
const marketProgramId = MAINNET_PROGRAM_ID.OPENBOOK_MARKET;

// mainnet created market Id : 'F9KzEFGJECyabR8EanVdkiVZXs7FLosfQixBqpVCg7p1'

export async function createMarket(
    connection: Connection,
    wallet: WalletContextState,
    baseMint: PublicKey,
    baseDecimal: number,
    quoteMint: PublicKey,
    quoteDecimal: number,
    orderSize: number,
    tickSize: number
) {
    console.log("devnet : marketProgramId ====>", marketProgramId.toBase58());
    console.log("mainnet : marketProgramId ====>", MAINNET_PROGRAM_ID.OPENBOOK_MARKET.toBase58());
    let marketId: PublicKey | null = null;
    if (wallet.publicKey != null) {
        try {
            console.log("hello!!!");
            const { innerTransactions, address } = await MarketV2.makeCreateMarketInstructionSimple({
                connection,
                wallet: wallet.publicKey,
                baseInfo: {
                    mint: baseMint,
                    decimals: baseDecimal
                },
                quoteInfo: {
                    mint: quoteMint,
                    decimals: quoteDecimal
                },
                dexProgramId: marketProgramId,
                lotSize: orderSize,
                tickSize,
                makeTxVersion: TxVersion.LEGACY
            })
            console.log("innter Transactions ====>", innerTransactions);
            console.log("address ====>", address);
            console.log("marketId ===>", address.marketId.toBase58());
            marketId = address.marketId;

            for (let i = 0; i < innerTransactions.length; i++) {
                const transaction = new Transaction();
                for (let j = 0; j < innerTransactions[i].instructions.length; j++) {
                    transaction.add(innerTransactions[i].instructions[j]);
                }
                if (wallet != undefined && wallet.signTransaction != undefined) {
                    try {
                        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
                        transaction.feePayer = wallet.publicKey;

                        let signedTx = await wallet.signTransaction(transaction);

                        const signature = await connection.sendRawTransaction(signedTx.serialize());
                        console.log("signature ====>", signature);
                    } catch (err) {
                        console.log("transaction error ===>", err);
                        marketId = null;
                    }
                }

            }
        } catch (err) {
            console.log("err ===>", err);
            marketId = null;
        }
    }
    return marketId;

}