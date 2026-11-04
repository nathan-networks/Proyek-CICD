export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly"
      }
    }
  }
];