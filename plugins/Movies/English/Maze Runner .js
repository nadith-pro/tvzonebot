const { cmd, commands } = require('../../../commands')

cmd({
    pattern: "mazerunner",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Maze Runner | 2014 - 2018 | English | Movie Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/7949e74749ddc7f61291b.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Maze_Runner_2014_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Maze Runner 2014 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Maze_Runner_The_Scorch_Trials_2015_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Maze Runner The Scorch Trials 2015 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Maze_Runner_The_Death_Cure_2018_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Maze Runner The Death Cure 2018 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
