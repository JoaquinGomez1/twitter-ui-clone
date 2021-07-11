module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    });

    return config;
  },
};
