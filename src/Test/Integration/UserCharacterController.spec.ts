import {
  createFavoriteCharacterMock,
  createFavoriteCharacterUserMock,
  createFavoriteComicUserMock,
  createUserMock,
} from '../Mocks/UserControllerMocks';

describe('UserCharacterController', () => {
  it('SHOULD_BE_POST_TO_ADD_FAVORITE_CHARACTER', async () => {
    const user = await createUserMock();

    const favoriteCharacte = {
      userId: user.id,
      characterId: '12345',
      name: 'Call of Cthulhu',
      description: 'Call of Cthulhu',
      thumbnailUri: 'http://marvel.com',
      variantUri: 'http://marvel.com',
    };

    const response = await global.testRequest
      .post('/api/user/character/add-favorite-character')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZmRlMzQ4Yi04MmZlLTQ1NjQtOTg3Zi00ZjM3MjhhZDcxOTkiLCJpYXQiOjE2MTQ0ODkzNjh9.cK2XriHjdvT8DM117xU50yUr4WfrQHNrpD2PNusgZeo',
      )
      .send(favoriteCharacte);

    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_POST_TO_REMOVE_FAVORITE_CHARACTER', async () => {
    const user = await createFavoriteCharacterUserMock();
    createFavoriteComicUserMock();

    const favoriteCharacter = {
      userId: user.id,
      characterId: '12345',
    };

    const response = await global.testRequest
      .post('/api/user/character/remove-favorite-character')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDY1MzNlYy02NGU3LTQ1NGQtYTc1Mi1jNzFkZjAxNDBhMjMiLCJpYXQiOjE2MTQ0NzQ4NjZ9.4A3TpXP04XWCGzAoT1jphWHxJ4DvDuhyKjJdkqcVnc4',
      )
      .send(favoriteCharacter);

    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_POST_TO_GET_FAVORITE_CHARACTER', async () => {
    const user = await createFavoriteCharacterUserMock();
    createFavoriteCharacterMock();

    const response = await global.testRequest
      .get(`/api/user/character/${user.id}/favorite-character`)
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZmRlMzQ4Yi04MmZlLTQ1NjQtOTg3Zi00ZjM3MjhhZDcxOTkiLCJpYXQiOjE2MTQ0ODkzNjh9.cK2XriHjdvT8DM117xU50yUr4WfrQHNrpD2PNusgZeo',
      );

    expect(response.status).toBe(200);
  });
});
