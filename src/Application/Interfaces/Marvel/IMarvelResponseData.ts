import { IMarvelDataResult } from './IMarvelDataResult';

export interface IMarvelResponseData {
  limit: number;
  total: number;
  count: number;
  offset: number;
  results: IMarvelDataResult[];
}
