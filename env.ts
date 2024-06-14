import { envField as e } from "astro/config";

export const schema = {
  PUBLIC_API_URL: e.string({
    context: "client",
    access: "public",
    optional: true,
  }),
  PUBLIC_PORT: e.number({
    context: "server",
    access: "public",
    default: 4321,
  }),
  API_SECRET: e.string({ context: "server", access: "secret" }),
};
