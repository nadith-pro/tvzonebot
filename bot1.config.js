module.exports = {
    apps: [{
        name: 'bot1',
        script: './tvzonebot.js',
        watch: false,
        instances: 1,
        exec_mode: 'cluster',
    }],

    deploy: {
        production: {
            user: 'root',
            host: ['192.9.228.230'],
            ref: 'origin/master',
            repo: 'git@github.com:nadith-pro/bot1.git',
            path: '/ubuntu/tvzonebot/bot1',
            "pre-deploy-local": "",
            'post-deploy': 'npm install && pm2 startOrRestart bot.config.js',
            "pre-setup": "",
        }

    }
};