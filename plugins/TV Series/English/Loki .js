//Loki | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10

cmd({
    pattern: "loki",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Loki | 2021 | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/37182ab2edd09e82371a7.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Loki_S01E0' + filenum + '_2021_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Loki S01E0' + filenum + ' 2021 .mkv'
                    })
                } start1 = 1
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
