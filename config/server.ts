export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  proxy: true,
  port: env.int("PORT", 1337),
  url: env("HOST_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
