module.exports = {
  apps : [{
    name: "ssr",
    script: "./index.js",
    env: {
      NODE_ENV: "development",
    },
    env_prod: {
      NODE_ENV: "production",
    }
  }]
}
