module.exports = {
  preset: "ts-jest",
  "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true,
      },
    ],
  },
};