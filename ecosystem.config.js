module.exports = {
  apps : [{
    name: "ssr",
    script: "./index.js",
    instances  : 4,
    exec_mode  : "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_prod: {
      NODE_ENV: "production",
    }
  }]
}
