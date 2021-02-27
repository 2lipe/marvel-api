import { IMarvelThumbnail } from './IMarvelThumbnail';
import { IMarvelUrl } from './IMarvelUrl';

export interface IMarvelDataResult {
  id: number;
  name: string;
  title: string;
  description: string | null;
  urls: IMarvelUrl[];
  thumbnail: IMarvelThumbnail;
}
