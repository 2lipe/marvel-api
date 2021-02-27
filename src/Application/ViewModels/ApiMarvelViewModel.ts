import { MarvelDataResult } from '../DataResults/MarvelDataResult';
import { IMarvelResponseData } from '../Interfaces/Marvel/IMarvelResponseData';

export class ResponseApiMarvelViewModel {
  limit: number;
  total: number;
  count: number;
  offset: number;
  results: MarvelDataResult[];

  constructor(data: IMarvelResponseData) {
    this.limit = data.limit;
    this.total = data.total;
    this.count = data.count;
    this.offset = data.offset;

    const marvelDataResultList: MarvelDataResult[] = [];

    data.results.map(item => {
      const marvelDataResult = new MarvelDataResult(item);

      marvelDataResultList.push(marvelDataResult);
    });

    this.results = marvelDataResultList;
  }
}
