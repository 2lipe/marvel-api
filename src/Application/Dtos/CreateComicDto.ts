export interface CreateComicDto {
  comicId: string;
  title: string;
  description?: string;
  thumbnailUri?: string;
  variantUri?: string;
  userId: string;
}
