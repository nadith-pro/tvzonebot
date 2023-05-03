const { cmd, commands } = require('../../../commands')

cmd({
    pattern: "meninblack",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Men In Black | 1997 - 2019 | English | Movie Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/7d05b01d05a9117d05f7c.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Men_In_Black_1997_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Men In Black 1997 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Men_In_Black_2002_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Men In Black 2002 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Men_In_Black_2012_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Men In Black 2012 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Men_In_Black_International_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Men In Black International 2019 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
