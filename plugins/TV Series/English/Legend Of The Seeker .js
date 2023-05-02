//Legend Of The Seeker  | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10

cmd({
    pattern: "legendoftheseeker",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Legend Of The Seeker | 2008 - 2010 | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/5c46864e8c4c70a5426f0.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1

                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S01E01&E02_2008_@nadithpro.mkv' + filenum + '_2012_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Legend Of The Seeker S01E01 & S01E02 .mkv'
                })
                for (let i = 3; i <= 7; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S01E0' + filenum + '_2008_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S01E0' + filenum + ' 2008 .mkv'
                    })
                } start1 = 1
                for (let i = 8; i <= 9; i++) {

                    const filenum = start8++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S01E0' + filenum + '_2009_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S01E0' + filenum + ' 2009 .mkv'
                    })
                } start8 = 8
                for (let i = 10; i <= 22; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S01E' + filenum + '_2009_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S01E' + filenum + ' 2009 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪②' }) // Season - 2
                for (let i = 1; i <= 6; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S02E0' + filenum + '_2009_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S02E0' + filenum + ' 2009 .mkv'
                    })
                } start1 = 1
                for (let i = 7; i <= 9; i++) {

                    const filenum = start7++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S02E0' + filenum + '_2010_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S02E0' + filenum + ' 2010 .mkv'
                    })
                } start7 = 7
                for (let i = 10; i <= 22; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Legend_Of_The_Seeker_S02E' + filenum + '_2010_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Legend Of The Seeker S02E' + filenum + ' 2010 .mkv'
                    })
                } start10 = 10
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
