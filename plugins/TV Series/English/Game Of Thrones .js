//Game Of Thrones | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10

cmd({
    pattern: "got",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {
            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Game Of Thrones | 2011 - 2019 | 18+ | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/5418c0b778599033406e5.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S01E0' + filenum + '_2011_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S01E0' + filenum + ' 2011 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S01E10_2011_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S01E10 2011 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪②' }) // Season - 2
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S02E0' + filenum + '_2012_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S02E0' + filenum + ' 2012 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S02E10_2012_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S02E10 2012 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪③' }) // Season - 3
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S03E0' + filenum + '_2013_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S03E0' + filenum + ' 2013 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S03E10_2013_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S03E10 2013 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪④' }) // Season - 4
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S04E0' + filenum + '_2014_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S04E0' + filenum + ' 2014 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S04E10_2014_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S04E10 2014 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑤' }) // Season - 5
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S05E0' + filenum + '_2015_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S05E0' + filenum + ' 2015 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S05E10_2015_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S05E10 2015 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑥' }) // Season - 6
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S06E0' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S06E0' + filenum + ' 2016 18+ .mkv'
                    })
                } start1 = 1
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S06E10_2016_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Game Of Thrones S06E10 2016 18+ .mkv'
                })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑦' }) // Season - 7
                for (let i = 1; i <= 7; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S07E0' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S07E0' + filenum + ' 2017 18+ .mkv'
                    })
                } start1 = 1

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑧' }) // Season - 8
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Game_Of_Thrones_S08E0' + filenum + '_2019_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Game Of Thrones S08E0' + filenum + ' 2019 18+ .mkv'
                    })
                } start1 = 1
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
