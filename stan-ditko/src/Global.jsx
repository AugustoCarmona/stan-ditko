import md5 from 'md5';

export const ts = 1;
export const publicKey = 'c70bee055661b1eabc28f40a0fea1796';
export const privateKey = '30f2e89f510eda443fbccf782ceb9046a4e7ef7d';
export let hash = md5(ts + privateKey + publicKey )
export let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;