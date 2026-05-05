import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Get lang from url param
  const lang = context.params.lang;

  // If changed

  return next();
});
