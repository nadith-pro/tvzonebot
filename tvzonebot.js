 //-------------------------------TV_Zone_Bot-------------------------------\\
//---------------------------Powered_By_@nadithpro---------------------------\\

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

			fs.readdirSync("./plugins/").forEach((plugin) => {
				if (path.extname(plugin).toLowerCase() == ".js") {
					require("./plugins/" + plugin);
				}
			});

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

			if (body == 'start' || body == 'alive' || body == 'Start' || body == 'Alive') {

				await conn.sendMessage(from, { react: { text: '👾', key: mek.key } })
				await conn.sendMessage(from, { text: "I'm Alive 🤩" })
			}
			if (body.includes('group') || body.includes('link') || body == 'group' || body == 'Group' || body == 'link' || body == 'Link') {

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
			}

			switch (command) {

				case 'start':
				case 'alive': {

					await conn.sendMessage(from, { text: "I'm 01 Alive 🤩" })
					await conn.sendMessage(from, { react: { text: '👾', key: mek.key } })
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
