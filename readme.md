# The Joke API

![CI](https://github.com/UltiRequiem/joke/workflows/CI/badge.svg)
[![Code Coverage](https://codecov.io/gh/ultirequiem/joke-api/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/joke-api)

A blazing fast jokes REST API made with [Oak](https://github.com/oakserver/oak)
on [Deno Deploy](https://deno.com/deploy/docs) 🦕 🚀

## API

### `GET /`

> https://joke.deno.dev

Get a random joke ✨

```json
{
  "id": 229,
  "type": "general",
  "setup": "What do you call an alligator in a vest?",
  "punchline": "An in-vest-igator!"
}
```

### `GET /:id`

> https://joke.deno.dev/350

Did you like a joke? Get the same whenever you want 🦀

```json
{
  "id": 350,
  "type": "general",
  "setup": "Why did the tree go to the dentist?",
  "punchline": "It needed a root canal."
}
```

### `GET /type/:type`

> https://joke.deno.dev/type/programming

Looking for a specific type of jokes? You're lucky 🐌

```json
[
  {
    "id": 15,
    "type": "programming",
    "setup": "What's the best thing about a Boolean?",
    "punchline": "Even if you're wrong, you're only off by a bit."
  },
  {
    "id": 16,
    "type": "programming",
    "setup": "What's the object-oriented way to become wealthy?",
    "punchline": "Inheritance"
  },
  ...
]
```

All available types are listed on `GET /type` 🕵️‍♂️

## Licence

Licensed under the MIT License 📄
