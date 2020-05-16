const envPreset = [
  "@babel/preset-env",
  {
    modules: false,
    useBuiltIns: "usage",
    corejs: 3,
  },
];

module.exports = (api) => {
  api.cache(true);

  return {
    presets: [envPreset],
  };
};
