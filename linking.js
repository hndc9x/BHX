const config = {
  screens: {
    Home: {
      path: 'home',
    },
    User: {
      path: 'User',
    },
    UserDetails: {
      path: 'details/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
