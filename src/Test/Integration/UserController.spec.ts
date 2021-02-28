import { createUserMock } from '../Mocks/UserControllerMocks';

describe('UserController', () => {
  it('SHOULD_BE_POST_TO_CREATE_USER', async () => {
    const user = {
      name: 'Alan Poe',
      email: 'Alan@gmail.com',
      password: '1234',
    };

    const response = await global.testRequest.post('/api/user/create').send(user);
    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_INIT_SESSION', async () => {
    const user = {
      email: 'Alan@gmail.com',
      password: '1234',
    };

    const response = await global.testRequest.post('/api/user/session').send(user);
    expect(response.status).toBe(200);
  });

  it('SHOULD_BE_POST_TO_UPDATE_USER', async () => {
    const user = await createUserMock();

    const updateUser = {
      id: user.id,
      name: 'Alan Poe',
      email: 'felipe@felipe.com',
      oldPassword: '1234',
      password: '456123',
    };

    const response = await global.testRequest
      .post('/api/user/update')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDY1MzNlYy02NGU3LTQ1NGQtYTc1Mi1jNzFkZjAxNDBhMjMiLCJpYXQiOjE2MTQ0NzQ4NjZ9.4A3TpXP04XWCGzAoT1jphWHxJ4DvDuhyKjJdkqcVnc4',
      )
      .send(updateUser);

    expect(response.status).toBe(200);
  });
});
