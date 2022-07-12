import { Middleware, randomItem, type RouterMiddleware } from "./deps.ts";
import { CustomPublicError } from "./error.ts";
import { jokes, jokesByType, jokeTypes } from "./data.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = randomItem(jokes);
};

export const NumberMiddleware: RouterMiddleware<"/:id"> = (ctx) => {
  const id = parseInt(ctx.params.id);

  if (Number.isNaN(id)) {
    throw new CustomPublicError(`ID: "${id}" is not valid.`);
  }

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    throw new CustomPublicError(`Joke with ID "${id}" not found.`);
  }

  ctx.response.body = joke;
};

export const AllTypesMiddleware: RouterMiddleware<"/type"> = (ctx) => {
  ctx.response.body = jokeTypes;
};

export const TypeMiddleware: RouterMiddleware<"/type/:type"> = (ctx) => {
  const type = ctx.params.type;

  if (!(type in jokesByType)) {
    throw new CustomPublicError(`Joke category with type "${type}" not found.`);
  }

  ctx.response.body = jokesByType[type];
};

export const NOCORSMiddleware: Middleware = (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
};

export const ErrorsMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof CustomPublicError) {
      ctx.response.body = { error: err.message };
    } else {
      throw err;
    }
  }
};
