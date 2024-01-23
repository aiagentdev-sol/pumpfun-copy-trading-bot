import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, MintLayout, Token } from '@solana/spl-token';
import { Connection, PublicKey, Transaction, SystemProgram, Keypair, TransactionInstruction, sendAndConfirmRawTransaction } from '@solana/web3.js';
import { WalletContextState } from "@solana/wallet-adapter-react";


export async function burnToken(
    connection: Connection,
    wallet: WalletContextState,
    mintAddress: PublicKey,
    tokenAccount: PublicKey
) {
    if (wallet.publicKey != null) {
        const amount = await connection.getTokenAccountBalance(tokenAccount);
        console.log("amount ===>", amount);
        if (amount.value.uiAmount == null) {
            alert("amount is 0");
            return;
        }
        const burnInstruction = Token.createBurnInstruction(TOKEN_PROGRAM_ID, mintAddress, tokenAccount, wallet.publicKey, [], amount.value.uiAmount * 10 ** amount.value.decimals);
        const transaction = new Transaction();
        transaction.add(burnInstruction);
        const lastBlockHash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = lastBlockHash.blockhash;
        transaction.feePayer = wallet.publicKey;
        if (wallet.signTransaction != undefined) {
            const signedTX = await wallet.signTransaction(transaction);

            const signature = await sendAndConfirmRawTransaction(connection, signedTX.serialize());
            console.log("transaction signature ===>", signature);
        }

    }
}