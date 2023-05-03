//Lucifer | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10
let start11 = 11

cmd({
    pattern: "lucifer",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {
            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Lucifer | 2016 - 2021 | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/ff8f51fc805fbe22b5564.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S01E0' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S01E0' + filenum + ' 2016 18+ .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 13; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S01E' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S01E ' + filenum + ' 2016 18+ .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪②' }) // Season - 2
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S02E0' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S02E0' + filenum + ' 2016 18+ .mkv'
                    })
                } start1 = 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S02E10_2016_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S02E10 2016 18+ .mkv'
                })

                for (let i = 11; i <= 18; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S02E' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S02E' + filenum + ' 2017 .mkv'
                    })
                } start11 = 11

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪③' }) // Season - 3
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S03E0' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S03E0' + filenum + ' 2017 18+ .mkv'
                    })
                } start1 = 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S03E10_2018_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S03E10 2017 18+ .mkv'
                })

                for (let i = 11; i <= 26; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S03E' + filenum + '_2018_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S03E' + filenum + ' 2018 .mkv'
                    })
                } start11 = 11

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪④' }) // Season - 4
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S04E0' + filenum + '_2019_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S04E0' + filenum + ' 2019 18+ .mkv'
                    })
                } start1 = 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S04E10_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S04E10 2019 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑤' }) // Season - 5
                for (let i = 1; i <= 8; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S05E0' + filenum + '_2020_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S05E0' + filenum + ' 2020 18+ .mkv'
                    })
                } start1 = 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S05E09_2021_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S05E09 2021 18+ .mkv'
                })
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S05E10_2021_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S05E10 2021 18+ .mkv'
                })

                for (let i = 11; i <= 16; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S05E' + filenum + '_2021_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S05E' + filenum + ' 2021 .mkv'
                    })
                } start11 = 11

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑥' }) // Season - 6
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S06E0' + filenum + '_2021_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Lucifer S06E0' + filenum + ' 2021 18+ .mkv'
                    })
                } start1 = 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Lucifer_S06E10_2021_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Lucifer S06E10 2021 18+ .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
