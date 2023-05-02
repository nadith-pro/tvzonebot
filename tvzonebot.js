
const sendjid = [
	"120363147199269922@g.us", //group1
	"120363150136785770@g.us", //group2
	"120363148843656696@g.us", //group3
	"120363129257594933@g.us", //group4
	"120363129742656377@g.us", //group5
	"120363131670750632@g.us", //group6
	"120363148588064645@g.us"] //group7

let res

const {
	default: makeWASocket,
	useMultiFileAuthState,
	DisconnectReason,
	getContentType,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	jidDecode,
	LolConnect,
	proto } = require("@adiwajshing/baileys")
const fs = require('fs')
const { exec } = require('child_process')
const P = require('pino')
const qrcode = require('qrcode-terminal')
const util = require('util')
const config = require('./config')
const prefix = '.'
const owner = ['94761327688']
const axios = require('axios')
const connectToWA = async () => {
	const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
	const conn = makeWASocket({
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		auth: state,
	})

	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
				connectToWA()
			}
		} else if (connection === 'open') {
			console.log('Installing plugins 🔌...\n')

			const path = require('path');

			/*fs.readdirSync("./plugins/").forEach((plugin) => {
				if (path.extname(plugin).toLowerCase() == ".js") {
					require("./plugins/" + plugin);
				}
			});*/

			fs.readdirSync("./plugins/Movies/English/").forEach((plugin) => {
				if (path.extname(plugin).toLowerCase() == ".js") {
					require("./plugins/Movies/English/" + plugin);
				}
			});

			fs.readdirSync("./plugins/TV Series/English/").forEach((plugin) => {
				if (path.extname(plugin).toLowerCase() == ".js") {
					require("./plugins/TV Series/English/" + plugin);
				}
			});

			console.log('ＴＶ ＺＯＮＥ Bot Started ⚡⚡⚡')
		}
	})

	conn.ev.on('creds.update', saveCreds)

	conn.ev.on('messages.upsert', async (mek) => {
		try {
			mek = mek.messages[0]
			if (!mek.message) return

			mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid === 'status@broadcast') return
			const type = getContentType(mek.message)
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid

			const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : (type == "templateButtonReplyMessage") && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''


			const isCmd = body.startsWith(prefix)
			const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''

			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
			const senderNumber = sender.split('@')[0]
			const botNumber = conn.user.id.split(':')[0]
			const pushname = mek.pushName || 'Sin Nombre'

			const isMe = botNumber.includes(senderNumber)
			const isowner = owner.includes(senderNumber) || isMe

			const reply = (teks) => {
				conn.sendMessage(from, { text: teks }, { quoted: mek })
			}

			const isSUB = from == config.SENDJID ? true : false

			const events = require('./commands')
			const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
			if (isCmd) {
				const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
				if (cmd) {
					if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

					try {
						cmd.function(conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted });
					} catch (e) {
						console.error("[PLUGIN ERROR] ", e);
					}
				}
			}
			events.commands.map(async (command) => {
				if (body && command.on === "body") {
					command.function(conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted });
				} else if (mek.q && command.on === "text") {
					command.function(conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted });
				} else if (
					(command.on === "image" || command.on === "photo") &&
					mek.type === "imageMessage"
				) {
					command.function(conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted });
				} else if (
					command.on === "sticker" &&
					mek.type === "stickerMessage"
				) {
					command.function(conn, mek, q, { reply, config, isSUB, from, sendjid, isowner, isMe, pushname, botNumber, senderNumber, sender, isGroup, args, isCmd, command, body, quoted });
				}
			});

			switch (command) {

				case 'jid': try {
					if (!from) return
					reply(from)
				}
					catch (e) {
						await conn.sendMessage(from, { text: '*Error ⛔*' }, { quoted: mek })
					}

					break

				case 'start': {

					//	if (!isGroup) return

					const startmsg = `*🍁𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕋𝕍 ℤ𝕆ℕ𝔼 𝔹𝕆𝕋*
	
	🔰 TV Zone Group එකට පහළින් Join වන්න.
					
	 𖣔 Thank You 𖣔
	 ━━━━━━━━━━`

					const templateButtons = [
						//{ urlButton: { displayText: 'WebSite 🖥️', url: 'https://tv.nadith.pro/' } },
						//{ urlButton: { displayText: 'Join TV Zone', url: 'https://chat.whatsapp.com/Ltkp9BEYl632dE7T6bT58i' } },
						{ quickReplyButton: { displayText: 'Owner', id: prefix + 'owner' } },
					]
					const buttonMessage = {
						caption: startmsg,
						footer: config.FOOTER1,
						templateButtons: templateButtons,
						image: { url: config.TV_LOGO }
					}
					conn.sendMessage(from, buttonMessage)

				}
					break

				case 'series': {

					if (!isSUB) return

					const startmsg = `
🔰 TV Zone හි TV Series Menu වෙත සාදරයෙන් පිලිගනිමු. අවශ්‍ය TV Series එක තෝරා ගන්න.
	
`
					const sections = [
						{
							title: "》 ENGLISH | TV Series",
							rows: [
								{ title: "☞︎︎︎  Arrow", rowId: prefix + 'arrow', description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  Game Of Thrones", rowId: "got", description: "SINHALA SUBTITLES" },
								{ title: "☞︎︎︎  Deception", rowId: "deception", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  Legend Of The Seeker", rowId: "legendoftheseeker", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  Kung Fu Panda - The Dragon Knight", rowId: "kungfupandathedragonknight", description: "Sinhala Subtitles" },
							]
						}
					]
					const listMessage = {
						text: startmsg,
						footer: config.FOOTER1,
						title: "*ＴＶ ＺＯＮＥ*",
						buttonText: "View Menu",
						sections
					}
					await conn.sendMessage(from, listMessage)
				}
					break

				case 'arrow': {

					if (!isSUB) return

					const startmsg = `*🍁 Arrow 🍁*
	
□ After many years in a sheltered rich-boy life, Oliver Queen is stranded on an island after his father's yacht crashes and must learn to survive on his own. Five years later he is found alive and well after he was presumed to be dead. After he returns to his hometown of Starling City, he begins his crusade to rid it of nasty villains, drug dealers, mob bosses, and criminals by becoming an arrow-shooting vigilante.
`
					const sections = [
						{
							title: "》 Arrow | ENGLISH | TV Series",
							rows: [
								{ title: "☞︎︎︎  All", rowId: prefix + 'arrow_all', description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  Template", rowId: "arrow_temp", description: "SINHALA SUBTITLES" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪①", rowId: "arrow_S01", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪②", rowId: "arrow_S02", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪③", rowId: "Arrow_S03", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪④", rowId: "Arrow_S04", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪⑤", rowId: "Arrow_S05", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪⑥", rowId: "Arrow_S06", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪⑦", rowId: "Arrow_S07", description: "Sinhala Subtitles" },
								{ title: "☞︎︎︎  🅂🄴🄰🅂🄾🄽 ⓪⑧", rowId: "Arrow_S08", description: "Sinhala Subtitles" },
							]
						}
					]
					const listMessage = {
						text: startmsg,
						footer: config.FOOTER1,
						title: "*ＴＶ ＺＯＮＥ*",
						buttonText: "View Menu",
						sections
					}
					await conn.sendMessage(from, listMessage)
				}
					break

				//......................................................TV Seies_English..............................................................\\


				case 'gitpull': {

					exec('cd /Users/nadithpro/tvzoneseriesbot && git pull', (err, stdout, stderr) => {

						if (err) {
							console.error(`Error: ${err}`);
							conn.sendMessage(from, { text: 'Error ☹️', key: mek.key })
							return;
						}
						conn.sendMessage(from, { text: 'Git Pull Successful 👾', key: mek.key })
					});
				}
					break


				default:

					if (isowner && body.startsWith('>')) {
						try {
							await reply(util.format(await eval(`(async () => {${body.slice(1)}})()`)))
						} catch (e) {
							await reply(util.format(e))
						}
					}

			}

		} catch (e) {
			const isError = String(e)

			console.log(isError)
		}
	})
}

connectToWA()
