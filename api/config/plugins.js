module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'users-permissions': {
    config: {
      jwtsecret: env('JWT_SECRET'),
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});
