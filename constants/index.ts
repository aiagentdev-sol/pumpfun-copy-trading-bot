export const RPC_ENDPOINT="https://mainnet.helius-rpc.com/?api-key="
export const RPC_WEBSOCKET_ENDPOINT='wss://atlas-mainnet.helius-rpc.com/?api-key='
export const MAXIMUM_BUY_AMOUNT=process.env.MAXIMUM_BUY_AMOUNT
export const SELL_UPPER_PERCENT=process.env.SELL_UPPER_PERCENT || 0.1;
export const SELL_LOWER_PERCENT=process.env.SELL_LOWER_PERCENT || -0.1;
export const UPPER_MC=process.env.UPPER_MC || 10000000000;
export const LOWER_MC=process.env.LOWER_MC || 0;