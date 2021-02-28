import {
  createFavoriteCharacterMock,
  createFavoriteCharacterUserMock,
  createFavoriteComicMock,
  createFavoriteComicUserMock,
  createUserMock,
} from '../Mocks/UserControllerMocks';

describe('UserComicConctroller', () => {
  it('SHOULD_BE_POST_TO_ADD_FAVORITE_COMIC', async () => {
    const user = await createUserMock();

    const favoriteComic = {
      comicId: '123456789',
      title: 'Call of Cthulhu',
      description: 'Call of Cthulhu',
      thumbnailUri: 'http://marvel.com',
      variantUri: 'http://marvel.com',
      userId: user.id,
    };

    const response = await global.testRequest
      .post('/api/user/comic/add-favorite-comic')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDY1MzNlYy02NGU3LTQ1NGQtYTc1Mi1jNzFkZjAxNDBhMjMiLCJpYXQiOjE2MTQ0NzQ4NjZ9.4A3TpXP04XWCGzAoT1jphWHxJ4DvDuhyKjJdkqcVnc4',
      )
      .send(favoriteComic);
    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_POST_TO_REMOVE_FAVORITE_COMIC', async () => {
    const user = await createFavoriteComicUserMock();
    createFavoriteComicMock();

    const favoriteComic = {
      comicId: '12345789',
      userId: user.id,
    };

    const response = await global.testRequest
      .post('/api/user/comic/remove-favorite-comic')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDY1MzNlYy02NGU3LTQ1NGQtYTc1Mi1jNzFkZjAxNDBhMjMiLCJpYXQiOjE2MTQ0NzQ4NjZ9.4A3TpXP04XWCGzAoT1jphWHxJ4DvDuhyKjJdkqcVnc4',
      )
      .send(favoriteComic);
    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_POST_TO_GET_FAVORITE_COMIC', async () => {
    const user = await createFavoriteCharacterUserMock();
    createFavoriteCharacterMock();

    const userId = user.id;

    const response = await global.testRequest
      .get(`/api/user/comic/${userId}/favorite-comic`)
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZmRlMzQ4Yi04MmZlLTQ1NjQtOTg3Zi00ZjM3MjhhZDcxOTkiLCJpYXQiOjE2MTQ0ODkzNjh9.cK2XriHjdvT8DM117xU50yUr4WfrQHNrpD2PNusgZeo',
      );

    expect(response.status).toBe(200);
  });
});
