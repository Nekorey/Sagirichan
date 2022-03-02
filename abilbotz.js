/* BASE = ABIL
   SCRIPT ORI = ABIL
   RECODE = ABIL
*/

/* SCRIPT INI FREE JADI JANGAN DIJUAL GW MASIH BLJAR JADI JANGAN DI HINA GW MANUSIA YANG MASIH PERLU BANYAK BLJAR KALAU ADA FITUR YG ERROR / PENGEN REQUEST FITUR ATAU TAMPILAN MENU BISA CHAT GW DI WA AJA
*/

/* YOUTUBE = ABIL BOTZ
   WHATSAPP = https://wa.me/6282293295376
   GITHUB = github.com/AbilBotz
*/

// GK SEMUA BIKINAN GW ADA YG COPAS HEHEHEHE 🗿
// APIKEYNYA? LOGIN AJA DI WEB LOLHUNAN AMA ZEKS.ME BUAT DAPETIN
// DONASI? CHAT GW

//_____________THANKS TO DI PALING BAWAH SC_____________//


const 
{ 
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader');
const client = new WAConnection()
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const { fetchJosn, fetchText, kyun } = require('./lib/fetcher')

     //---Lib---//
     
const { color, bgcolor } = require('./lib/color')
const { antiSpam } = require('./lib/antispam')
require('./lib/fetcher')
const { mess } = require('./message/mess')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const premium = require('./lib/premium');
const setGelud = require('./lib/gameGelud.js')
const simple = require('./lib/simple.js')

     //---Settings---//

let botname = '_｢ Sagiri ｣_' //NAMA BOT
let lolkey = '32921e19919a452af56ed6a0' //Ganti Pake Api Lu Sendiri Biar Limitnya Gak Cepet Abis , Login Di api.lolhuman.xzy Untuk Mendapatkan Api Gratis
let zekskey = 'KmBzWN0kreRb4XYJZzIUH7NZ43P' // Ganti Pake Api Lu Sendiri Biar Limitnya Gak Cepet Abis , Login Di zeks.me Untuk Mendapatkan Api Gratis
let ownername = '_｢ Radi ｣_' //NAMA OWNER
let owner = '6281327242447' // NOMOR OWNER
let symbol = '*冬*'
let faketeks = `*_｢ AbilBotz 0.2 ｣ 冬_*` 

     //---Donasi---//

let ovo = 'http://bit.ly/qrovo'
let gopay = 'http://bit.ly/qrgopay'
let allpay = 'http://bit.ly/Allpay'

banChats = true; 
readGc = true; 
readPc = true;
autovn = false;
autoketik = true;

let hit_today = []
let tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let ky_ttt = []

 //---Data--//

let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let absen = JSON.parse(fs.readFileSync('./database/absen.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

    //---ModuleExport---//

module.exports = abilbotz = async (abilbotz, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.ky_ttt
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const ytabilbotz = "6282293295376@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = abilbotz.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6282293295376@s.whatsapp.net`, `6282293295376@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await abilbotz.chats.all()
const groupMetadata = isGroup ? await abilbotz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isRegister = register.includes(sender)
const isBanned = ban.includes(sender)
const isPremium = premium.checkPremiumUser(sender, _premium)
const c = args.join(' ')
const m = simple.smsg(abilbotz, mek)
const isListMsg = (type == 'listResponseMessage')
const conts = mek.key.fromMe ? abilbotz.user.jid : abilbotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? abilbotz.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
idttt = []
players1 = []
players2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
players1.push(t.player1)
players2.push(t.player2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer2 = isGroup ? players2.includes(sender) : false
const isOwner = ownerNumber.includes(sender)
const arg = budy.slice(command.length + 2, budy.length)
try{
hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
} catch {
hit_total = { 
value : "-"
}
}
hitall = `${hit_total.value}`
const Wib = moment().utcOffset('+0700').format('HH:mm')
const Wita = moment().utcOffset('+0800').format('HH:mm')
const Wit = moment().utcOffset('+0900').format('HH:mm')
const p1 = await abilbotz.getStatus(sender)
const uptime = process.uptime();
const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam🌉'
}
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌚"; break;
case 1: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌚"; break;
case 2: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌚"; break;
case 3: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌔"; break;
case 4: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌔"; break;
case 5: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌄"; break;
case 6: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"; break;
case 7: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🌄"; break;
case 8: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 ☀️"; break;
case 9: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 ☀️"; break;
case 10: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 ☀️"; break;
case 11: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌞"; break;
case 12: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
case 13: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌞"; break;
case 14: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌞"; break;
case 15: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🌞"; break;
case 16: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 ☀️"; break;
case 17: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌄"; break;
case 18: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌄"; break;
case 19: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌙"; break;
case 20: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌙"; break;
case 21: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌙"; break;
case 22: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌙"; break;
case 23: jamss = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌚"; break;
}
var tampilUcapan = "" + jamss;
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu}\nSebelum Menggunakan Fitur Bot Verify Terlebih Dahulu Ya`
const daftar2 = 'Silahkan Verify Kak Bisa Dengan Cara Click Button Message Dibawah 🙏'
const daftar3 = [{buttonId: `.verify`,buttonText: {displayText: `KLIK DISINI`,},type: 1,},]
const kon1 = `Hai kak ${pushname} Itu Ownerku Mau Tanya Soal Apa Ya?😗`
const kon2 = `${faketeks}`
const kon3 = [{buttonId: `!sc`,buttonText: {displayText: `Sc Bot`,},type: 1,},{buttonId: `!sewabot`,buttonText: {displayText: `Sewa Bot`,},type: 1,}]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = abilbotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Take Here","listType": "SINGLE_SELECT","sections": list}}, {})
return abilbotz.relayWAMessage(po, {waitForAck: true})
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const sotoy = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍐',
'🍊 : 🍋 : 🔔', 
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',        
'🍐 : 🍒 : 🍋',
'🍐 : 🍒 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍌 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍋 Win👑',
'🔔 : 🔔 : 🍇',
'🔔 : 🍇 : 🍇', 
'🔔 : 🍐 : 🔔',
'🍌 : 🍌 : 🍌 Win👑'
]
countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
countDownDate = new Date("2022-04-02").getTime();
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
var ampun = await abilbotz.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await abilbotz.chatRead(jid)
})
var chatss = await abilbotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await abilbotz.chatRead(jid)
})
if (autovn) {
if (autovn === false) return
await abilbotz.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await abilbotz.updatePresence(from, Presence.composing)
}

   //---Koneksi 1---//

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
} 
const reply = (teks) => {
abilbotz.sendMessage(from, teks, text, {quoted:mek})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await abilbotz.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
abilbotz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendMess = (hehe, teks) => {
abilbotz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? abilbotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : abilbotz.sendMessage(from, teks.trim(), extendedText, { quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const Ytabilbotz = fs.readFileSync ('pee.jpg')
const costum = (pesan, tipe, target, target2) => {
abilbotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
const p2 = '.'

    //---ButtonMessage---//

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
  };
  abilbotz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
  );
};
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
abilbotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fstatus
})
}
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await abilbotz.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
abilbotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendBug = async (target) => {
await abilbotz.relayWAMessage(
abilbotz.prepareMessageFromContent(
target,
abilbotz.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await abilbotz.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
abilbotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await abilbotz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
abilbotz.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: fstatus,
contexInfo: abilbotz
})
}

   //---Fakenya---//

const katalog = (teks) => {
res = abilbotz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "AbilBotz😈", "thumbnail": fs.readFileSync('pee.jpg'), "surface": 'CATALOG' }}, {quoted:fstatus})
abilbotz.relayWAMessage(res)}
const fakeyt = (teks) => { 
abilbotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: false, sendEphemeral: false, "externalAdReply": { "title": `hallo ${pushname}🗿` , "body": `YT : ABIL BOTZ`, "mediaType": "2", "thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg", "mediaUrl": "https://tps.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA", "thumbnail": fs.readFileSync('pee.jpg'), "sourceUrl": "", },mentionedJid:[sender]}, quoted : fstatus})};

const fakestatus = (teks) => { abilbotz.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": faketeks, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('pee.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282293295376-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "YT : ABIL BOTZ", 'jpegThumbnail': fs.readFileSync('pee.jpg')}}}

const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu}, ${pushname}`, 
                            orderTitle: `Jangan Lupa Nafas Bro`,
                            thumbnail: Ytabilbotz, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

     //---Koneksi 2---//

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
abilbotz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const isRegistered = checkRegisteredUser(sender)
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
abilbotz.sendMessage(to, media, type, { quoted: fstatus, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
abilbotz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
abilbotz.groupRemove(from, [sender])
}     

     //---Koneksi 3---//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('| SPAM  |', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('Cooldown 5 Detik !')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('| SPAM  |', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('JANGAN SPAM !!!')}
if (isCmd && !isOwner) antiSpam.addFilter(from)

if (isCmd && !isGroup) {console.log(color('| PRIBADI |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (isGroup && !isCmd) {console.log(color('| GROUP |', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!mek.key.fromMe && banChats === false) return

     //---Case/Menu/Fitur---//
     
abilbotz.setStatus(`${botname} || Active Time : ${kyun(uptime)} || ${banChats ? 'PUBLIC-MODE' : 'SELF-MODE'}`).catch((_)=>_);

settingstatus = new Date() * 1;
switch (command) {
case 'lolkey':
case 'cekapikey':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
abilbotz.sendMessage(from, teks, text, {quoted: mek})
break

case 'menu':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('pee.jpg')
ok = `_｢ Indonesia Time ｣_
❍ Date : ${date}
❍ Wib : ${Wib}
❍ Wita : ${Wita}
❍ Wit : ${Wit}

_｢ User Info ｣_
❍ Name : *${pushname}*
❍ Bio : *${p1 ? `${p1.status}` : '-'}*
❍ Nomor : *wa.me/${sender.split("@")[0]}*
❍ Status : *${isOwner ? 'Owner' :  'User'}*

_｢ Bot Info ｣_
❍ Bot Name : *${botname}*
❍ Owner Name : *${ownername}*
❍ Prefix : 「${prefix}」
❍ Mode : *${banChats ? 'PUBLIC' : 'SELF'}*
❍ Lib : *Baileys*
❍ Calender : *${date}*
❍ Time : *${jmn}*
❍ Speed : *${latensi.toFixed(4)} second*
❍ Runtime : *${kyun(run)}*

_｢ Thanks To 🪀 ｣_
❍ Allah Swt
❍ Ortu
❍ Farrz
❍ AbilBotz
❍ All Creator Bot`
but = [{ buttonId: `.allmenu`, buttonText: { displayText: '‗ ❍ 𝐀𝐥𝐥 𝐌𝐞𝐧𝐮' }, type: 1 }]
sendButLocation(from, lolot, ok, img, but)
break

case 'allmenu':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
lolot = `*${ucapanWaktu} ${pushname}*`
img = fs.readFileSync('pee.jpg')
ok = `_｢ Indonesia Time ｣_
❍ Date : ${date}
❍ Wib : ${Wib}
❍ Wita : ${Wita}
❍ Wit : ${Wit}

_｢ Bot Info ｣_
❍ Bot Name : *${botname}*
❍ Owner Name : *${ownername}*
❍ Prefix : 「${prefix}」
❍ Mode : *${banChats ? 'PUBLIC' : 'SELF'}*
❍ Lib : *Baileys*
❍ Calender : *${date}*
❍ Speed : *${latensi.toFixed(4)} second*
❍ Runtime : *${kyun(run)}*

_｢ Group ｣_
${symbol} ${prefix}welcome *_1/0_*
${symbol} ${prefix}antilink *_1/0_*
${symbol} ${prefix}antivirtex *_1/0_*
${symbol} ${prefix}hidetag
${symbol} ${prefix}tagall
${symbol} ${prefix}sider
${symbol} ${prefix}promoteall
${symbol} ${prefix}demoteall
${symbol} ${prefix}resetlinkgc
${symbol} ${prefix}kontag
${symbol} ${prefix}totag
${symbol} ${prefix}linkgc
${symbol} ${prefix}listonline
${symbol} ${prefix}leave
${symbol} ${prefix}opengc
${symbol} ${prefix}closegc
${symbol} ${prefix}linkgrub
${symbol} ${prefix}promote *_Tag_*
${symbol} ${prefix}demote *_Tag_*
${symbol} ${prefix}add *_62xxx_*
${symbol} ${prefix}kick *_Tag_*
${symbol} ${prefix}hedsot *_Tag_*
${symbol} ${prefix}rulesgroup
${symbol} ${prefix}setdesc *_Teks_*
${symbol} ${prefix}setpp *_Reply Image_*
${symbol} ${prefix}setname *_Teks_*
${symbol} ${prefix}getpp *_Tag_*
${symbol} ${prefix}delete *_Reply Teks_*

_｢ Sticker ｣_
${symbol} ${prefix}attp *_Teks_*
${symbol} ${prefix}ttp *_Teks_*
${symbol} ${prefix}stiker *_Reply Image_*
${symbol} ${prefix}doge
${symbol} ${prefix}patrick
${symbol} ${prefix}gawgura
${symbol} ${prefix}stickeranime

_｢ Download ｣_
${symbol} ${prefix}play
${symbol} ${prefix}ytsearch
${symbol} ${prefix}tiktokmusic
${symbol} ${prefix}pinterest

_｢ Convert Menu ｣_
${symbol} ${prefix}toimg *_Reply Sticker_*
${symbol} ${prefix}tomp3
${symbol} ${prefix}tovideo
${symbol} ${prefix}tinyurl *_Link_*
${symbol} ${prefix}shorturl *_Link_*
${symbol} ${prefix}cuttly *_Link_*
${symbol} ${prefix}imgtourl *_Reply Image_*
${symbol} ${prefix}tourl *_Reply Image_*

_｢ Store ｣_
${symbol} ${prefix}store
${symbol} ${prefix}sewabot
${symbol} ${prefix}buypremium
${symbol} ${prefix}payment
${symbol} ${prefix}gopay
${symbol} ${prefix}ovo
${symbol} ${prefix}donasi

_｢ Other ｣_
${symbol} ${prefix}cekpremium
${symbol} ${prefix}listpremium
${symbol} ${prefix}readmore
${symbol} ${prefix}runtime
${symbol} ${prefix}speed
${symbol} ${prefix}script
${symbol} ${prefix}nulis *_Teks_*
${symbol} ${prefix}report *_Teks_*
${symbol} ${prefix}delete *_Reply Teks_*

_｢ Game ｣_
${symbol} ${prefix}absensi
${symbol} ${prefix}absen
${symbol} ${prefix}truth
${symbol} ${prefix}dare
${symbol} ${prefix}slots
${symbol} ${prefix}tebakkalimat
${symbol} ${prefix}tebaktebakan
${symbol} ${prefix}tebaklirik
${symbol} ${prefix}tebakkimia
${symbol} ${prefix}tebakjenaka
${symbol} ${prefix}suit
${symbol} ${prefix}tictactoe *_Tag_*
${symbol} ${prefix}delsesittt
${symbol} ${prefix}gelud *_Tag_*
${symbol} ${prefix}delsesigelud

_｢ Owner ｣_
${symbol} ${prefix}self
${symbol} ${prefix}public
${symbol} ${prefix}>
${symbol} ${prefix}x
${symbol} ${prefix}eval
${symbol} ${prefix}setsymbol *_Symbol_*
${symbol} ${prefix}restart
${symbol} ${prefix}upswteks *_Teks_*
${symbol} ${prefix}upswsticker *_Reply Sticker_*
${symbol} ${prefix}upswaudio *_Reply Audio_*
${symbol} ${prefix}upswvideo *_Reply Video_*
${symbol} ${prefix}upswimage *_Reply Img_*
${symbol} ${prefix}owner
${symbol} ${prefix}setnamebot *_Bot Name_*
${symbol} ${prefix}setppbot *_Reply Img_*
${symbol} ${prefix}setbiobot *_Teks_*
${symbol} ${prefix}setthumb *_Reply Img_*
${symbol} ${prefix}ban *_Tag_*
${symbol} ${prefix}unban *_Tag_*
${symbol} ${prefix}clearall
${symbol} ${prefix}premium *_add 62xxx_*
${symbol} ${prefix}premium *_del 62xxx_*
${symbol} ${prefix}bc *_Teks_*
${symbol} ${prefix}bcgc *_Teks_*
${symbol} ${prefix}tobc
${symbol} ${prefix}q

_｢ Thanks To 🪀 ｣_
❍ Allah Swt
❍ Ortu
❍ Farrz
❍ AbilBotz
❍ All Creator Bot`
but = [{ buttonId: `.allmenu`, buttonText: { displayText: '‗ ❍ Donasi' }, type: 1 }]
sendButLocation(from, lolot, ok, img, but)
break


// STORE MENUNYA

case 'store':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
img = fs.readFileSync('./media/thumb.jpg')
store =
`ABIL BOTZ ( SHOP )
MENYEDIAKAN BERBAGAI MACAM STORE`
storee =
`𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗦𝗘𝗪𝗔𝗕𝗢𝗧
➛ PERMANEN = 10K / GRUP
➛ PERBULAN = 8K / GRUP
➛ PERMINGGU = 5K / GRUB

𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧
➛ 10K ( SCRIPT BIASA )
➛ 30K ( SCRIPT GG )
➛ TIDAK UNTUK DIJUAL LAGI
➛ Minat ? Pc Wa.me/6282293295376

𝗝𝗜K𝗔 𝗕𝗘𝗥𝗠𝗜𝗡𝗔𝗧...
Silahkan Hubungi Owner 🙏
Wa.me/6282293295376
( ABIL STORE ) - ( ABIL BOTZ )`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '☰ CHAT OWNER' }, type: 1 }
]
sendButLocation(from, store, storee, img, but, { thumbnail: Buffer.alloc(0) })
break

case 'buypremium':
case 'buyprem':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
	gopeynya = fs.readFileSync('./media/thumb.jpg')
 menunya = `╭──「 *_HARGA PREMIUM_* 」
│❏  10.000 ( PREMIUM USER )
│❏  18.000 ( BOT + PREMIUM USER )
│❏  NOTE : BOTNYA PERMANEN YO
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  SERING UPDATE BOT
│❏  FITUR BANYAK & LANGKAH
╰────
╭─[ KEUNTUNGAN ]
│❏  JAGA GRUB
│❏  BUAT STICKER
│❏  FITUR PREMIUM
│❏  BUAT MAENAN 
╰────
╭─[ *MINAT CHAT* ]
│❏ wa.me/6282293295376?text=buy+premium
╰────
╭─[ *TES BOT? PC OWNER* ]
│❏  Wa.me/6282293295376
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  OVO
│❏  DANA
│❏  PULSA ( + 10K )
╰────`
  teks =`٬࿊⃟☃ _${botname}_ By Abil Ganz\nThanks Yang Udah Order Sukses Selalu Yoo 🛐`
  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PAYMENT'}, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWABOT'}, type: 1 }
        ]
sendButLocation(from, menunya, teks, gopeynya, but)
break

case 'sewabot':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
	gopeynya = fs.readFileSync('./media/thumb.jpg')
 menunya = `╭──「 *_SEWA BOT_* 」
│❏  PERMANEN : IDR 10.000 ( 10K )
│❏  1 BULAN : IDR 8.000 ( 8K )
│❏  1 MINGGU : IDR 5.000 ( 5K )
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  SERING UPDATE BOT
│❏  FITUR BANYAK & LANGKAH
╰────
╭─[ KEUNTUNGAN ]
│❏  JAGA GRUB
│❏  BUAT STICKER
│❏  BUAT MAENAN 
╰────
╭─[ *MINAT CHAT* ]
│❏ wa.me/6282293295376?text=sewa+bot
╰────
╭─[ *TES BOT? PC OWNER* ]
│❏  Wa.me/6282293295376
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  OVO
│❏  DANA
│❏  PULSA ( + 10K )
╰────`
  teks =`٬࿊⃟☃ MAKASIH KAK YANG UDAH SEWABOT SEMOGA LANCAR REZEKINYA JANGAN LUPA DONASI KAK ☕`
  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PAYMENT'}, type: 1 },
          { buttonId: `${prefix}buypremium`, buttonText: { displayText: 'BUY PREMIUM'}, type: 1 }
        ]
sendButLocation(from, menunya, teks, gopeynya, but)
break

case 'donasi':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
	gambar = fs.readFileSync('./media/thumb.jpg')
	teksnya = `╭───────────────❏
 | DONASI ABIL BOTZ 📝
╰───────────────❏
╭───────────────❏
 | serius mau donasi bg ?
 | 📢 yg serius donasi makasih
 | Yaa Nih Link Donasinya
 | ❍┤𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𝗗𝗢𝗡𝗔𝗦𝗜📝
 | ❍┤ヅ Gopay :
 | ❍┤${gopay}
 | ❍┤ヅ Ovo : 
 | ❍┤${ovo}
 | ❍┤ヅ Allpayment :
 | ❍┤${allpay}
╰───────────────❏`
teks =
`Makasih Kak Yang Udah Donasi Semoga Rejekinya Lancar 👌`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '🏷️ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '👤 OWNER' }, type: 1 }
        ]
        sendButLocation(from, teksnya, teks, gambar, but)
break

case 'payment':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 listMsg = {
 buttonText: '𝐏𝐀𝐘??𝐄𝐍𝐓𝐍𝐘𝐀 🏷️',
 footerText: 'ABIL BOTZ',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Metode Pembayaran disini`,
 sections: [
                     {
                      "title": `NIH KAK METODE PEMBAYARANNYA\nKALAU UDAH TRANSFER LANGSUNG KONFIRMASI KE OWNER YAA\nAGAR BISA LANGSUNG DI PROSES 👌`,
 rows: [
                          {
                              "title": "GOPAY 🏷️",
                              "rowId": ".gopay"
                           },
                           {
                              "title": "OVO 🏷️",
                              "rowId": ".ovo"
                           },
                           {
                              "title": "OWNER 🏷️",
                              "rowId": ".owner"
                           }
                        ]
                     }],
 listType: 1
}
abilbotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'gopay':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
gopeynya = 'https://bit.ly/qrgopay'
buff = await getBuffer(gopeynya)
teksnya = `Hai kak ${pushname}
Silahkan scan kode pembayaran di Bawah Dengan Cara Klik Linknya\nhttps://bit.ly/qrgopay\nAN: ABIL
*TUTORIAL SCAN*
1. PASTIAN AKUN GOPAY UDH PREMIUM
2. PENCET BAYAR
3. SCAN
4. MASUKIN NOMINAL
5. TF`
teks = `*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '👤 OWNER'}, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '🏷️ DONASI'}, type: 1 }
        ]    
sendButLocation(from, teksnya, teks, gopeynya, but)
break

case 'ovo':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ovonya = 'https://i.ibb.co/FVHPCnM/1d08115f3d3f.jpg'
buff = await getBuffer(ovonya)
teksnya = `Hai kak ${pushname}
Silahkan scan kode pembayaran di Bawah Dengan Cara Klik Linknya\nhttps://bit.ly/qrovo\nAN: Abil Store
*TUTORIAL SCAN*
1. PASTIAN AKUN OVO UDH PREMIUM
2. PENCET SCAN
3. SCAN QRNYA
4. MASUKIN NOMINAL
5. TF`
teks = `*NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '👤 OWNER'}, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '🏷️ DONASI'}, type: 1 }
        ]    
sendButLocation(from, teksnya, teks, ovonya, but)
break

// BAGIAN DARI OTHER MENU
case 'premiumcheck':
case 'cekpremium':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isPremium) return reply(mess.only.prem)
const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
break

case 'listprem':
case 'listpremium':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
let txt = `「 *PREMIUM USER LIST* 」\n\n`
let men = [];
for (let i of _premium){
men.push(i.id)
const checkExp = ms(i.expired - Date.now())
txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
mentions(txt, men, true)
break

// FITUR DOWNLOAD

case 'play':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
if (!isPremium) return reply(mess.only.prem)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await abilbotz.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: caption })
get_audio = await getBuffer(result.link)
await abilbotz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: fstatus })
})
})
break

case 'ytsearch':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
if (!isPremium) return reply(mess.only.prem)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break

case 'tiktokmusic':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
if (!isPremium) return reply(mess.only.prem)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await abilbotz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fstatus })
break

case 'pinterest':
reply(mess.wait)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
if (!isPremium) return reply(mess.only.prem)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await abilbotz.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break

//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'absensi':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
absen.push(sender)
fs.writeFileSync('./database/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:\n`
for (let sender of absen) {
teks += `\n々 @${sender.split('@')[0]} ✓\n`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
abilbotz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik\n\n${prefix}absen waktu\n\nlist menit yang tersedia.\n\n600000 | 1200000 | 1800000\n\njadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./database/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:\n`
for (let sender of absen) {
teks += `\n々 @${sender.split('@')[0]} ✓\n`
}
teks += `Absensi : ${sender.length}\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap\n\nKetik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
abilbotz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./message/absen.json', JSON.stringify(absen))
}, tem)
break

case 'truth':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
abilbotz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: fstatus })
break

case 'dare':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
dera = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
abilbotz.sendMessage(from, dera, image, { caption: '*dare*\n\n'+ der, quoted: fstatus })
break

case 'slot':
case 'slots':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
abilbotz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
break

case 'tebakkalimat':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
abilbotz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus})
}, 60000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break

case 'tebaktebakan':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
abilbotz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break

case 'tebaklirik':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
abilbotz.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, get, text, {quoted: fstatus})
}, 0) // 1000 = 1s,
break

case 'tebakkimia':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
abilbotz.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, get, text, {quoted: fstatus}) 
}, 0) // 1000 = 1s,
break

case 'tebakjenaka':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
abilbotz.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: fstatus}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
abilbotz.sendMessage(from, tebakjenaka, text, {quoted: fstatus}) 
}, 0) // 1000 = 1s,
break

case 'suit':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break

case 'tictactoe':
case 'ttt':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
abilbotz.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break

case 'delsesittt':
case 'resetgame':
case 'delttt':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait)
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses Mereset Game')
break

case 'gelud':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./Bil/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./Bil/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`
abilbotz.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break

case 'delsesigelud':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./Bil/' + from + '.json')) {
fs.unlinkSync('./Bil/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
   } else {
reply('Tidak ada sesi yang berlangsung')
}
break


// AKHIR GAME MENU

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
abilbotz.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: fstatus, 
})
   sendButMessage (from, kon1, kon2, kon3, { quoted: mek})
   break

case 'readmore':
  reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
  break

  case 'rulesgroup':
  reply(`*Desc :* \n${groupMetadata.desc}`)
  break

  case 'bay':
  reply(`Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)`)
  break

  case 'selamatdatang':
  reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
  break

case 'groupbot':
reply(`https://chat.whatsapp.com/CS4ESARec5o476nHesGIDt`)
break

case "runtime":
case "test":
run = process.uptime();
teks = `*${kyun(run)}*`;
reply(teks);
break
case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break

case 'sc':
case 'script':
case 'sourcecode':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
ini_text = `Script
https://youtube.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA`
reply(ini_text)
break

// CONVERT MENU
case 'toimg':
case 'toimage':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await abilbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `JANGAN LUPA SUBREK YT : ABIL BOTZ`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
abilbotz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await abilbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
abilbotz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: fstatus })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await abilbotz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
abilbotz.sendMessage(from, buffer, video, { quoted: fstatus, caption: 'Success' })
fs.unlinkSync(ran)
})
break
case 'tinyurl':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `Tinyurl : ${get_result}`
reply (ini_txt)
break
case 'shorturl':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `shorturl : ${get_result}`
reply (ini_txt)
break
case 'cuttly':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `cuttly : ${get_result}`
reply (ini_txt)
break 
case 'imgtourl':
case 'img2url':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
reply(mess.wait) 
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  abilbotz.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
abilbotz.sendMessage(from, ibb, image, { quoted: fstatus , caption: caps})
})
.catch(err => {
throw err
})
break
case 'tourl':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await abilbotz.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break

// GROUP MENUNYA

case 'demoteall':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
abilbotz.groupDemoteAdmin(from, members_id)
break

case 'promoteall':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
abilbotz.groupMakeAdmin(from, members_id)
break

case 'sider':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
infom = await abilbotz.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'resetlinkgc':
 case 'resetlinkgroup':
 case 'revoke':
 if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
  json = ['action', 'inviteReset', from]
 abilbotz.query({json, expect200: true})
  reply('Sukses Mereset Link Group')
 break

case 'kontag':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break

case 'totag':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 359996400,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await abilbotz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 359996400,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
ini_buffer = fs.readFileSync(file)
abilbotz.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
  reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
}
break
case 'link':
case 'linkgc':
case 'linkgrup' :
case 'linkgroup':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await abilbotz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
abilbotz.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'online':
case 'listonline':
case 'here':                
case 'nyimak':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
 try {
 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
 let online = [...Object.keys(abilbotz.chats.get(ido).presences), abilbotz.user.jid]
 abilbotz.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fstatus, contextInfo: { mentionedJid: online }})
 } catch (e) {
 reply(`${e}`)
}
 break

case 'leave':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroupAdmins) return reply(mess.only.admin)
  setTimeout( () => {
  abilbotz.groupLeave(from) 
  }, 2000)
  setTimeout( () => {
  reply('Byee...')
  }, 0)
  break

case 'welcome':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan`)
if ((args[0]) === '1') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antilink':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiLink) return reply(`Udah aktif`)
  antilink.push(from)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antilink.indexOf(from)
  antilink.splice(anu, 1)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'antivirtex':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiVirtex) return reply(`Udah aktif`)
  antivirtex.push(from)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI AKTIFKAN 」*\n\nYang Ngirim Virtex Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antivirtex.indexOf(from)
  antivirtex.splice(anu, 1)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'opengc' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
abilbotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
abilbotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await abilbotz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
abilbotz.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'promote' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
abilbotz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
abilbotz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
abilbotz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
abilbotz.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
try {
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await abilbotz.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Eror, user private acc')
if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await abilbotz.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
}
} catch {
return 
}
break
case 'kick' :
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
abilbotz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
abilbotz.groupRemove(from, mentioned)
}
break
case 'hedsot':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
heds = 'Bismillah Hedsot >_< :\n'
for (let _ of mentioned) {
heds += `@${_.split('@')[0]}\n`
}
mentions(heds, mentioned, true)
abilbotz.groupRemove(from, mentioned)
mentions(heds, mentioned, true)
abilbotz.groupAdd(from, [num])
} else {
mentions(`Berhasil Meng hedsot kepalanya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
abilbotz.groupRemove(from, mentioned)
}
break
case 'tagall':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
abilbotz.groupUpdateSubject(from, `${body.slice(9)}`)
abilbotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fstatus })
break
case 'setdesc':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
abilbotz.groupUpdateDescription(from, `${body.slice(9)}`)
abilbotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fstatus })
break
case 'setpp':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await abilbotz.downloadAndSaveMediaMessage(mek, './database/media_user')
await abilbotz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await abilbotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
abilbotz.sendMessage(from, options, text)
break
case 'getpp':
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
   if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
   linkpp = await abilbotz.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   abilbotz.sendMessage(from, buffer, image, {caption: "Nih", quoted: fstatus })
   } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
   mberr = mek.message.extendedTextMessage.contextInfo.participant
   linkpp = await abilbotz.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   abilbotz.sendMessage(from, buffer, image, { quoted: fstatus, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
   } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
   mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
   linkpp = await abilbotz.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
   buffer = await getBuffer(linkpp)
   abilbotz.sendMessage(from, buffer, image, { quoted: fstatusi, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
   break

// STICKER MENUNYA

case 'attp':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
abilbotz.sendMessage(from, buffer, sticker, { quoted: fstatus })
break

case 'ttp':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay) 
break

case 'sticker':
case 'stiker':
case 's':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await abilbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Yt Abil Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await abilbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await abilbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
abilbotz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fstatus })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break

case 'doge':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'patrick':
case 'pat':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendStickerFromUrl(from, pjr)
}
)
break

case 'gura':
case 'gawgura':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
case 'stickeranime':
reply(mess.wait)
if (isBanned) return reply(mess.Ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fstatus})
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break

// OWNER MENUNYA

case 'setnamebot':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(9)
abilbotz.updateProfileName(anu)
reply(`Sukses mengganti nama ke ${body.slice(9)}`)
break

case 'setppbot':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
abilbotz.updatePresence(from, Presence.composing)
if (!isQuotedImage) return reply('Reply imagenya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await abilbotz.downloadAndSaveMediaMessage(encmedia)
await abilbotz.updateProfilePicture(botNumber, mediau)
reply('Succes Ngab')
break

case 'setbiobot':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
abilbotz.setStatus(`${iyek}`)
reply(`Sukses mengganti bio ke ${body.slice(8)}`)
break 

case 'bc':
reply(mess.wait)
if (!isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = await abilbotz.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}sc`, buttonText: {displayText: 'Script🤤'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'Sewa🤤'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await abilbotz.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fstatus})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break

case 'bcgc':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await groupMembers 
tagss = abilbotz.participant
if (isMedia && !abilbotz.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buffer = await abilbotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
abilbotz.sendMessage(_.jid, buffer, image, {caption: `*𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 𝙂𝙍𝙐𝙋*\n\n${body.slice(6)}\n\nAbil Botz`})
}
reply('')
} else {
for (let _ of anu) {
sendMess(_.jid, `𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 𝙂𝙍𝙐𝙋\n\n${body.slice(6)}\n\n${botname}`)
}
reply('Sukses broadcast group')
}
break

case 'tobc':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return  reply(mess.only.owner)
abilbotz.updatePresence(from, Presence.composing)
anu = await abilbotz.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await abilbotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
abilbotz.sendMessage(_.jid, buff, audio, { quoted: fstatus })
}
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await abilbotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
abilbotz.sendMessage(_.jid, buff, sticker, { quoted: fstatus, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
} else{
reply('reply sticker/audio')
}
break

case 'del':
                case 'delete':
                if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
                    abilbotz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break

case 'q':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
break

case 'premium':  
if (!isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
if (args[0] === 'add') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
  } else {
premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
  } else if (args[0] === 'del') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
reply(mess.success)
  } else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
reply('*Success Unpremium User*')
}
  } else {
reply(mess.wrongFormat)
}
break

case 'clearall':{
reply(mess.wait)
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
let chiit = await abilbotz.chats.all()
for (let i of chiit){
abilbotz.modifyChat(i.jid, 'clear', {
includeStarred: false
})
}
reply(`Succes Delete All Chat🙂`)
}
break

case 'setthumb':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply('Reply imagenya blokk!')
const messimagethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await abilbotz.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`pee.jpg`)
await sleep(2000)
fs.writeFileSync(`pee.jpg`, downiamgethumb)
reply('Succes')
break

case 'ban':
if (!isOwner && !mek.key.fromMe) return
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${bnnd} telah dibanned!`)
break

case 'unban':
if (!isOwner && !mek.key.fromMe) return
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakestatus(`Nomor ${ya} telah di unban!`)
break

// SELF PUBLIK

case 'public':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return
if (banChats === true) return 
banChats = true
reply(`Sukses mode publik gan`)
break

case 'self':
reply(mess.wait)
if (!isOwner && !mek.key.fromMe ) return
if (banChats === false) return
banChats = false
reply(`Success mode self gan`)
break

// BUTTON VERIFY
// #COPY DHANI

case 'verify':
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const SerialUser = createSerial(18)
 try {
ppimg = await abilbotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, SerialUser)
verif = ` *PENDAFTARAN USER* 」

💠Nama : *${pushname}*
💠API : *+${sender.split('@')[0]}*
💠Serial : *${SerialUser}*
💠Total : *${_registered.length} Pengguna*`

ok = `${botname}`
img = fs.readFileSync('pee.jpg')
but = [{buttonId: `.menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, verif, ok, img, but)
setTimeout( () => {
reply(`*Terimakasih Telah Mendaftarkan Diri Ke Database Bot*`)
}, 3000)
break

      //----------------------------------------
      // THANKS TO
      // ALLAH SWT
      // ORTU
      // FARRZ
      // MHANKBARBAR
      // DHANI BOT
      // ZEEONEOFC
      // ARIFIRAZZAQ
      // IKY
      // ZEROYT7
      // KURRXD
      // KIRBOTZX
      // ALL MY SUBSCRIBER
      // ALL CREATOR BOT
      //----------------------------------------

default:
if (budy.includes(`cekprefix`)) {
reply(`prefix saat ini : ${prefix}`)
}
if (fs.existsSync(`./message/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./message/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   abilbotz.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./message/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		abilbotz.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/" + from + ".json");
	}
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  abilbotz.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
abilbotz.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
abilbotz.sendMessage(from, ucapan1, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
abilbotz.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
abilbotz.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 abilbotz.sendMessage(from, ucapan, text, {quoted: fstatus, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
	let evaled = await eval(budy.slice(2))
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	reply(`${evaled}`)
} catch (err) {
	reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
	return abilbotz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: fstatus })
} catch (err) {
	e = String(err)
	reply(e)
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}




