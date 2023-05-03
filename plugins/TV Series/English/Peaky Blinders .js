//Peaky Blinders | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10

cmd({
    pattern: "peakyblinders",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Peaky Blinders | 2013 - 2022 | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/8c4e480a6372730ed5aee.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S01E0' + filenum + '_2013_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S01E0' + filenum + ' 2013 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪②' }) // Season - 2
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S02E0' + filenum + '_2014_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S02E0' + filenum + ' 2014 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪③' }) // Season - 3
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S03E0' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S03E0' + filenum + ' 2016 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪④' }) // Season - 4
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S04E0' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S04E0' + filenum + ' 2017 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑤' }) // Season - 5
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S05E0' + filenum + '_2019_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S05E0' + filenum + ' 2019 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑥' }) // Season - 6
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Peaky_Blinders_S06E0' + filenum + '_2022_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Peaky Blinders S06E0' + filenum + ' 2022 18+ .mkv'
                    })
                } start1 = 1


            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
