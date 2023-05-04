const { cmd, commands } = require('../commands')

cmd({
    pattern: "jid",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!from) return
            reply(from)

        } catch (e) {
            reply('*Error ⛔*')
            console.log(e)
        }
    })

cmd({
    pattern: "gitpull",
    filename: __filename
},
    async (conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted }) => {
        try {

            if (!isSUB) return

            exec('cd /Users/nadithpro/tvzonebot && git pull', (err, stdout, stderr) => {

                if (err) {
                    console.error(`Error: ${err}`);
                    conn.sendMessage(from, { text: 'Error ☹️', key: mek.key })
                    return;
                }
                conn.sendMessage(from, { text: 'Git Pull Successful 👾', key: mek.key })
            });

        } catch (e) {
            reply('ERROR !!')
            console.log(e)
        }
    })
