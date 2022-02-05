module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
    };
  },
};
