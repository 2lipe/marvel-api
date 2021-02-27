import fetch from 'node-fetch';

import { envConfigs } from '../Configs/env-configs';
import { fetchConfigs } from '../Configs/fetch-configs';

const marvelUrl = envConfigs.apiMarvelUrl;
const ts = envConfigs.apiMarvelTS;
const key = envConfigs.apiMarvelKey;
const hash = envConfigs.apiMarvelHash;

export async function getMarvelApi<T>(route: string): Promise<T> {
  try {
    const url = `${marvelUrl}/${route}?ts=${ts}&apiKey=${key}&hash=${hash}`;

    const res = await fetch(url, fetchConfigs.getOptions);

    const payload: T = await res.json();

    return payload;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getMarvelApiBySearchParameter<T>(route: string, searchParameter: string): Promise<T> {
  try {
    const url = `${marvelUrl}/${route}?ts=${ts}&apiKey=${key}&hash=${hash}&${searchParameter}`;

    const res = await fetch(url, fetchConfigs.getOptions);

    const payload: T = await res.json();

    return payload;
  } catch (err) {
    throw new Error(err);
  }
}
