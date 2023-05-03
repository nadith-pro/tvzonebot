const { cmd, commands } = require('../../../commands')

cmd({
    pattern: "lucy",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Lucy | 2014 | English | Movie | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/6f9d13f6090259b9cb15a.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Lucy_2014_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucy 2014 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
