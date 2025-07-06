module.exports = {
  apps: [
    {
      name: 'verity-web',
      script: 'npm',
      args: 'start',
      cwd: 'immerge-therapeutics/',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4200
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ],
}