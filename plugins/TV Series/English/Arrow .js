//Arrow | English

const { cmd, commands } = require('../../../commands')

let start1 = 1
let start3 = 3
let start7 = 7
let start8 = 8
let start10 = 10

cmd({
    pattern: "arrow",
    alias: ["001.01"],
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {
            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let j = 0; j < sendjid.length; j++) {

                await conn.sendMessage(sendjid[j], {
                    caption: "Arrow | 2012 - 2020 | English | TV Series | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/b045071036852fadac8a1.jpg" }
                })
                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪①' }) // Season - 1
                for (let i = 1; i <= 9; i++) {
                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S01E0' + filenum + '_2012_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S01E0' + filenum + ' 2012 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S01E' + filenum + '_2013_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S01E' + filenum + ' 2013 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪②' }) // Season - 2
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S02E0' + filenum + '_2013_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S02E0' + filenum + ' 2013 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S02E' + filenum + '_2014_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S02E' + filenum + ' 2014 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪③' }) // Season - 3
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S03E0' + filenum + '_2014_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S03E0' + filenum + ' 2014 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S03E' + filenum + '_2015_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S03E' + filenum + ' 2015 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪④' }) // Season - 4
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S04E0' + filenum + '_2015_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S04E0' + filenum + ' 2015 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S04E' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S04E' + filenum + ' 2016 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑤' }) // Season - 5
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S05E0' + filenum + '_2016_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S05E0' + filenum + ' 2016 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S05E' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S05E' + filenum + ' 2017 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑥' }) // Season - 6
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S06E0' + filenum + '_2017_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S06E0' + filenum + ' 2017 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 23; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S06E' + filenum + '_2018_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S06E' + filenum + ' 2018 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑦' }) // Season - 7
                for (let i = 1; i <= 9; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S07E0' + filenum + '_2018_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S07E0' + filenum + ' 2018 .mkv'
                    })
                } start1 = 1
                for (let i = 10; i <= 22; i++) {

                    const filenum = start10++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S07E' + filenum + '_2019_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S07E' + filenum + ' 2019 .mkv'
                    })
                } start10 = 10

                conn.sendMessage(sendjid[j], { text: '🅂🄴🄰🅂🄾🄽 ⓪⑧' }) // Season - 8
                for (let i = 1; i <= 7; i++) {

                    const filenum = start1++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S08E0' + filenum + '_2019_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S08E0' + filenum + ' 2019 .mkv'
                    })
                } start1 = 1
                for (let i = 8; i <= 9; i++) {

                    const filenum = start8++

                    await conn.sendMessage(sendjid[j], {
                        document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S08E0' + filenum + '_2020_@nadithpro.mkv' },
                        mimetype: config.MKVTYPE,
                        fileName: '@nadithpro Arrow S08E' + filenum + ' 2020 .mkv'
                    })
                } start8 = 8
                await conn.sendMessage(sendjid[j], {
                    document: { url: config.DBLINK + config.ENTVLINK + 'Arrow_S08E10_2020_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Arrow S08E10 2020 .mkv'
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
