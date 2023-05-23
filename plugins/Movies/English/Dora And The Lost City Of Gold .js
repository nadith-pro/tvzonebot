const { cmd, commands } = require('../../../commands')

let delays = (60000)

const delay = (delayInms) => {
	return new Promise(resolve => setTimeout(resolve, delayInms));
}

cmd({
    pattern: "doraandthelostcityofgold",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            conn.sendMessage(from, { react: { text: config.RTYPE3, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: "Dora And The Lost City Of Gold | 2019 | English | Movie | Sinhala Subtitles | TV Zone | " + config.FOOTER,
                    footer: config.FOOTER,
                    image: { url: "https://telegra.ph/file/e956c5649ad6ca37b27ae.jpg" }
                })

                conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

                await conn.sendMessage(sendjid[i], {
                    document: { url: 'https://cloud.nadith.pro/en_mv/Dora_And_The_Lost_City_Of_Gold_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Dora And The Lost City Of Gold 2019 .mkv'
                })
                let delayres1 = await delay(delays);

                await conn.sendMessage(sendjid[i], {
                    document: { url: 'https://cloud.nadith.pro/en_mv/Dora_And_The_Lost_City_Of_Gold_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Dora And The Lost City Of Gold 2019 .mkv'
                })
                let delayres2 = await delay(delays);

                await conn.sendMessage(sendjid[i], {
                    document: { url: 'https://cloud.nadith.pro/en_mv/Dora_And_The_Lost_City_Of_Gold_2019_@nadithpro.mkv' },
                    mimetype: config.MKVTYPE,
                    fileName: '@nadithpro Dora And The Lost City Of Gold 2019 .mkv'
                })
                let delayres3 = await delay(delays);

            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
