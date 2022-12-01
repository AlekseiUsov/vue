module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  globals: {
    "vue-jest": {
      experimentalCSSCompile: false,
      resources: {
        scss: ["./src/styles/main.scss"],
      },
    },
  },
  transform: {
    "^.+.js$": "babel-jest",
    "^.+.vue$": "vue-jest",
    ".+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
