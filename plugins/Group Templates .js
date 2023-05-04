const { cmd, commands } = require('../commands')

cmd({
    pattern: "link",
    alias: ["group","glink","tvzone","grouplink","tvzonelink"],
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            const cap = `We Wormly Welcome Our All New Members To ＴＶ ＺＯＮＥ

නවතම Movies & TV Shows, @nadithpro විසින් නිර්මාණය කරන ලද විශේෂිත වූ Bot System එකක් මගින් මෙම ගෲප් එකට ලබාදෙනු ලැබේ.
					
ＴＶ ＺＯＮＥ | ⓪①  》
https://chat.whatsapp.com/Jjql6tXPn902WL3VVygqZI
					
ＴＶ ＺＯＮＥ | ⓪②  》
https://chat.whatsapp.com/GelXK153gpj48ZYSNDwe7a
					
ＴＶ ＺＯＮＥ | ⓪③  》
https://chat.whatsapp.com/GvGYvuNC3YcGrVOtrdB3mw
					
ＴＶ ＺＯＮＥ | ⓪④  》
https://chat.whatsapp.com/HPrDZQ3RRf28EQjZpsHsfx
					
ＴＶ ＺＯＮＥ | ⓪⑤  》
https://chat.whatsapp.com/Leo32m4dMQGIDfSiHV6jjg
					
ＴＶ ＺＯＮＥ | ⓪⑥  》
https://chat.whatsapp.com/Hhp5SqCOG8r5p8V18GcwMG
					
					
©Powered By @nadithpro | Founder & Admin`

            await conn.sendMessage(from, {
                caption: cap,
                footer: '©Powered By @nadithpro | Founder & Admin',
                image: { url: config.TV_LOGO }
            })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })

cmd({
    pattern: "tempsend",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            const cap = `We Wormly Welcome Our All New Members To ＴＶ ＺＯＮＥ

නවතම Movies & TV Shows, @nadithpro විසින් නිර්මාණය කරන ලද විශේෂිත වූ Bot System එකක් මගින් මෙම ගෲප් එකට ලබාදෙනු ලැබේ.
					
ＴＶ ＺＯＮＥ | ⓪①  》
https://chat.whatsapp.com/Jjql6tXPn902WL3VVygqZI
					
ＴＶ ＺＯＮＥ | ⓪②  》
https://chat.whatsapp.com/GelXK153gpj48ZYSNDwe7a
					
ＴＶ ＺＯＮＥ | ⓪③  》
https://chat.whatsapp.com/GvGYvuNC3YcGrVOtrdB3mw
					
ＴＶ ＺＯＮＥ | ⓪④  》
https://chat.whatsapp.com/HPrDZQ3RRf28EQjZpsHsfx
					
ＴＶ ＺＯＮＥ | ⓪⑤  》
https://chat.whatsapp.com/Leo32m4dMQGIDfSiHV6jjg
					
ＴＶ ＺＯＮＥ | ⓪⑥  》
https://chat.whatsapp.com/Hhp5SqCOG8r5p8V18GcwMG
					
					
©Powered By @nadithpro | Founder & Admin`


            conn.sendMessage(from, { react: { text: config.RTYPE1, key: mek.key } })

            for (let i = 0; i < sendjid.length; i++) {

                await conn.sendMessage(sendjid[i], {
                    caption: cap,
                    footer: '©Powered By @nadithpro | Founder & Admin',
                    image: { url: config.TV_LOGO }
                })
            } conn.sendMessage(from, { react: { text: config.RTYPE2, key: mek.key } })

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
