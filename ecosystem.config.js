module.exports = {
    apps: [
      {
        name: 'clash-dashboard',
        script: 'http-server',
        args: './dist -p 60003',
        source_map_support: false,
        error_file: `../.pm2/logs/clash-dashboard-error.log`,
        out_file: `../.pm2/logs/clash-dashboard-out.log`,
        time: true,
        pid_file: `../.pm2/pids/clash-dashboard.pid`,
      },
    ],
  };
