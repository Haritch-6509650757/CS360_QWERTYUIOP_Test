module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'users-permissions': {
    config: {
      jwtsecret: env('JWT_SECRET', 'defaultSecret'),
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});
