import WebSocket from 'ws';
import { Metaplex } from "@metaplex-foundation/js";
import { SPL_ACCOUNT_LAYOUT, TokenAccount } from "@raydium-io/raydium-sdk";
import { PublicKey, Connection, Keypair, TransactionInstruction } from '@solana/web3.js'
import { getMint, TOKEN_PROGRAM_ID, getAccount, NATIVE_MINT, getAssociatedTokenAddress } from '@solana/spl-token';

import { getAllTokenPrice, getTokenPrice } from "./config";
import { getAtaList } from "./utils/spl";
import { getBuyTxWithJupiter, getSellTxWithJupiter } from "./utils/swapOnlyAmm";
import base58 from 'bs58'
import axios from 'axios';
import cron from "node-cron";
import { RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT, MAXIMUM_BUY_AMOUNT, SELL_UPPER_PERCENT, SELL_LOWER_PERCENT, LOWER_MC, UPPER_MC, JITO_KEY } from './constants';
import { execute } from './utils/legacy';
import { readJson } from './utils';
import { getPumpCurveData } from './utils/pump';
import { createClient } from 'redis';

const connection = new Connection(RPC_ENDPOINT)
const ws = new WebSocket(RPC_WEBSOCKET_ENDPOINT);
const keyPair = Keypair.fromSecretKey(base58.decode(process.env.PRIVATE_KEY as string));

const metaplex = Metaplex.make(connection);
let geyserList: any = []
// const wallet = TARGET_WALLET as string;
const wallets = readJson();
console.log("🚀 ~ wallet:", wallets)
let buyTokenList: string[] = [];
let activeBuyToken: string = "";
let activeSellToken: string = "";

const getMetaData = async (mintAddr: string) => {
	let mintAddress = new PublicKey(mintAddr);

	// Private code
}

let tokenList: any;
tokenList = getAllTokenPrice()

const connectRedis = () => {
	redisClient.on('connect', function () {
		console.log('Redis database connected' + '\n');

		// Function to send a request to the WebSocket server

		ws.on('open', async function open() {
			wallets.map(async (wallet: any) => {
				await sendRequest(wallet)
			})
			console.log("send request\n")
		});
	});

	redisClient.on('reconnecting', function () {
		console.log('Redis client reconnecting');
	});

	redisClient.on('ready', function () {
		console.log('Redis client is ready');
	});

	redisClient.on('error', function (err) {
		console.log('Something went wrong ' + err);
	});

	redisClient.on('end', function () {
		console.log('\nRedis client disconnected');
		console.log('Server is going down now...');
		process.exit();
	});

	redisClient.connect();
}

connectRedis();


ws.on('message', async function incoming(data: any) {
	// Private code
});

export async function sendRequest(inputpubkey: string) {

// Private code

}

const EVERY_5_SEC = "*/5 * * * * *";
try {
	cron
		.schedule(EVERY_5_SEC, async () => {
			try {
				const accountInfo = await connection.getAccountInfo(keyPair.publicKey)

				const tokenAccounts = await connection.getTokenAccountsByOwner(keyPair.publicKey, {
					programId: TOKEN_PROGRAM_ID,
				},
					"confirmed"
				)
				// Private code
			} catch (error) {
				// console.log("🚀 ~ wallets.map ~ error:", error)
				return
			}
		})
		.start();
} catch (error) {
	console.error(
		`Error running the Schedule Job for fetching the chat data: ${error}`
	);
}
