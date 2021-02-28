export const createUserMock = async () => {
  const newUser = {
    name: 'Alan Poe',
    email: `Alan${Math.random()}@mail.com`,
    password: '1234',
  };

  const response = await global.testRequest.post('/api/user/create').send(newUser);
  return response.body.data;
};

export const createFavoriteComicUserMock = async () => {
  const newUser = {
    name: 'Alan Poe',
    email: `Alan${Math.random()}@mail.com`,
    password: '1234',
  };

  const response = await global.testRequest.post('/api/user/create').send(newUser);
  return response.body.data;
};

export const createFavoriteComicMock = async () => {
  const user = await createFavoriteComicUserMock();
  const favoriteComicUser = {
    characterId: '12345',
    name: 'Marvel',
    description: 'Marvel',
    thumbnailUrl: 'http://teste.com',
    detailUrl: 'http://teste.com',
    userId: user.id,
  };

  const response = await global.testRequest
    .post('/api/user/comic/add-favorite-comic')
    .set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZmRlMzQ4Yi04MmZlLTQ1NjQtOTg3Zi00ZjM3MjhhZDcxOTkiLCJpYXQiOjE2MTQ0ODkzNjh9.cK2XriHjdvT8DM117xU50yUr4WfrQHNrpD2PNusgZeo',
    )
    .send(favoriteComicUser);
  return response.body.data;
};

export const createFavoriteCharacterUserMock = async () => {
  const newUser = {
    name: 'Alan Poe',
    email: `Alan${Math.random()}@mail.com`,
    password: '1234',
  };
  const response = await global.testRequest.post('/api/user/create').send(newUser);
  return response.body.data;
};

export const createFavoriteCharacterMock = async () => {
  const user = await createFavoriteCharacterUserMock();
  const favoriteCharacterUser = {
    comicId: '12345789',
    title: 'Marvel',
    description: 'Marvel',
    thumbnailUrl: 'http://teste.com',
    detailUrl: 'http://teste.com',
    userId: user.id,
  };

  const response = await global.testRequest
    .post('/api/user/character/add-favorite-character')
    .set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZmRlMzQ4Yi04MmZlLTQ1NjQtOTg3Zi00ZjM3MjhhZDcxOTkiLCJpYXQiOjE2MTQ0ODkzNjh9.cK2XriHjdvT8DM117xU50yUr4WfrQHNrpD2PNusgZeo',
    )
    .send(favoriteCharacterUser);
  return response.body.data;
};
