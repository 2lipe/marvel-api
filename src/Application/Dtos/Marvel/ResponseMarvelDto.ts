import { IMarvelResponseData } from '../../../Application/Interfaces/Marvel/IMarvelResponseData';

export default interface ResponseMarvelDto {
  code: number;
  etag: string;
  status: string;
  copyright: string;
  attributionHTML: string;
  attributionText: string;
  data: IMarvelResponseData;
}
