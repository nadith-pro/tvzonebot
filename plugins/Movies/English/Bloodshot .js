const { cmd, commands } = require('../../../commands')

cmd({
    pattern: "bloodshot",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Bloodshot | 2020 | English | Movie | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/866bfe79238d5248b6cff.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Bloodshot_2020_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Bloodshot 2020 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
