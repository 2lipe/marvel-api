import { IMarvelDataResult } from '../Interfaces/Marvel/IMarvelDataResult';

export class MarvelDataResult {
  id: number;
  name: string;
  description: string | null;
  variantUri: string;
  thumbnailUri: string;
  favorite: boolean;

  constructor(data: IMarvelDataResult) {
    this.id = data.id;
    this.name = data.title ? data.title : data.name;
    this.description = data.description;
    this.thumbnailUri = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    this.favorite = false;

    data.urls.forEach(item => {
      if (item.type === 'detail') {
        this.variantUri = item.url;
      }
    });
  }
}
