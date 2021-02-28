export const USER_MESSAGES = {
  createSuccess: 'User as created with success',
  createFailure: 'Create user failure',

  oldPasswordNotPass: 'You need inform old password',
  invalidCredentials: 'Credentials is not valid',

  userUpdated: 'User updated with success',
  userUpdatedFailure: 'User updated failure',

  sessionSucess: 'Create session with success',
  sessionFailure: 'Create session failure',
} as const;

export const COMIC_MESSAGES = {
  addSucess: 'Comic add with success.',
  addFailure: 'Failure with add comic',

  getSuccess: 'Get comics with success',
  getFailure: 'Cannot get comics',

  removeSuccess: 'Remove comic from favorites with success',
  removeFailure: 'Failure to remove comic from favorites',
} as const;

export const CHARACTER_MESSAGES = {
  addSucess: 'Character add with success',
  addFailure: 'Failure with add character',

  getSucess: 'Get character with success',
  getFailure: 'Cannot get characters',

  removeSuccess: 'Remove character from favorites with success',
  removeFailure: 'Failure to remove character from favorites',
} as const;

export const TOKEN_MESSAGES = {
  missingToken: 'Token is missing',
  invalidToken: 'Invalid token',
} as const;

export const SERVER_MESSAGES = {
  manyRequests: 'Too many requests',
};

export const DATABASE_MESSAGES = {
  successConnect: 'Success database connection!',
};
