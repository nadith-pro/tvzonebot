const { cmd, commands } = require('../../../commands')

cmd({
    pattern: "maleficent",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Maleficent | 2014 - 2019 | English | Movie Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/5d5858e6f37d6c986b1df.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Maleficent_2014_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Maleficent 2014 .mkv'
                })
                await conn.sendMessage(sendjid[i], {
                    document: { url: config.DBLINK + config.ENMVLINK + 'Maleficent_Mistress_Of_Evil_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Maleficent Mistress Of Evil 2019 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
