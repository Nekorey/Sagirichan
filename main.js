const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const toMs = require('ms')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./abilbotz.js')
nocache('./abilbotz.js', module => console.log(`${module} Sudah Di Update Bro !`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} Sudah Di Update Bro !`))

const starts = async (abilbotz = new WAConnection()) => {
abilbotz.logger.level = 'warn'
abilbotz.version = [2, 4143, 3]
function _0x3ab7(_0x323e7b,_0xf98192){var _0x19281d=_0x1928();return _0x3ab7=function(_0x3ab720,_0x21b17e){_0x3ab720=_0x3ab720-0x1bc;var _0x34c2b2=_0x19281d[_0x3ab720];return _0x34c2b2;},_0x3ab7(_0x323e7b,_0xf98192);}var _0x3ccdec=_0x3ab7;function _0x1928(){var _0x3e76b1=['31092mOhVGa','60XhHTIy','9209120wvQyih','30KoevrD','4261710hEoKWp','33472oxxMwt','94rPJnNt','551642pNnrId','Opera','3102920jecioL','9197784MfyLqh','3.0','YT ABIL\x20BOTZ','browserDescription'];_0x1928=function(){return _0x3e76b1;};return _0x1928();}(function(_0x2afb88,_0x3230a3){var _0x5142ea=_0x3ab7,_0x5104b1=_0x2afb88();while(!![]){try{var _0x45924c=parseInt(_0x5142ea(0x1bd))/0x1*(parseInt(_0x5142ea(0x1be))/0x2)+-parseInt(_0x5142ea(0x1bc))/0x3+parseInt(_0x5142ea(0x1c6))/0x4*(-parseInt(_0x5142ea(0x1c7))/0x5)+parseInt(_0x5142ea(0x1c9))/0x6*(parseInt(_0x5142ea(0x1bf))/0x7)+parseInt(_0x5142ea(0x1c1))/0x8+parseInt(_0x5142ea(0x1c2))/0x9+-parseInt(_0x5142ea(0x1c8))/0xa;if(_0x45924c===_0x3230a3)break;else _0x5104b1['push'](_0x5104b1['shift']());}catch(_0x4cf233){_0x5104b1['push'](_0x5104b1['shift']());}}}(_0x1928,0xe60d9),abilbotz[_0x3ccdec(0x1c5)]=[_0x3ccdec(0x1c4),_0x3ccdec(0x1c0),_0x3ccdec(0x1c3)]);
console.log(color('[ Youtube : https://bit.ly/3nEyhWk ]'))
console.log(color('[ Whatsapp : https://Wa.me/6282293295376 ]'))
console.log(color('[ Github : https://github.com/AbilBotz ]'))
abilbotz.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('SILAHKAN SCAN QRNYA 🪀'))
})
fs.existsSync('./session.json') && abilbotz.loadAuthInfo('./session.json')
abilbotz.on('connecting', () => {
start('2', 'Menghubungkan')
})
abilbotz.on('open', () => {
success('2', 'CONNECT TO YOUR WHATSAPP WEB')
teks = `https://chat.whatsapp.com/CS4ESARec5o476nHesGIDt` 
 abilbotz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('✓'), color('SUCCESSFUL TO JOINED TO DEVELOPER GRUP')) 
})
await abilbotz.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(abilbotz.base64EncodedAuthInfo(), null, '\t'))

abilbotz.on('chat-update', async (message) => {
        require('./abilbotz.js') (abilbotz, message, _welkom)
    })
abilbotz.on("group-participants-update", async (anu) => {
				  const isWelkom = _welkom.includes(anu.jid)
				  try {
				  groupMet = await abilbotz.groupMetadata(anu.jid)
				  groupMembers = groupMet.participants
				  groupAdmins = getGroupAdmins(groupMembers)
				  mem = anu.participants[0]
			      console.log(anu)
			      try {
			        pp_user = await abilbotz.getProfilePicture(mem)
			      } catch (e) {
			        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
			      }
			      try {
			        pp_grup = await abilbotz.getProfilePicture(anu.jid)
			      } catch (e) {
			        pp_grup =
			          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
			      }
			      if (anu.action == "add" && mem.includes(abilbotz.user.jid)) {
			        abilbotz.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")
			      }
                if (!isWelkom) return
                if (anu.action == "add" && mem.includes(abilbotz.user.jid)) {
                abilbotz.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")}
                if (anu.action == 'add' && !mem.includes(abilbotz.user.jid)) {
                if (!isWelkom) return
                mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                groupName = mdata.subject
                memeg = mdata.participants.length
                let v = abilbotz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0] 
                teks = `Halo  *@${num.split('@')[0]}*
Selamat Datang Di Grub *${mdata.subject}*
Jangan Lupa Intro :
*Nama :*
*Umur :*
*Gender :*
*Askot :*
*_Semoga Betah Yoo_*`
                buff = await getBuffer(pp_user)
                abilbotz.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		        }
                if (anu.action == 'remove' && !mem.includes(abilbotz.user.jid)) {
                if (!isWelkom) return                 
                mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = abilbotz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Selamat Tinggal @${num.split('@')[0]}\nJangan Gentayangan Yaa`
                buff = await getBuffer(pp_user)
                abilbotz.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Mari Kita Doakan Bersama Agar Arwahnya Tenang`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE BEBAN'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'promote') {
        	    mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = abilbotz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                pa = `*P R O M O T E D E T E C T E D*\n\nNomor : ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                abilbotz.sendMessage(mdata.id, { contentText: `${pa}`, footerText: `*Selamat Karena Telah Di Promote🥳*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'demote') {
            	mdata = await abilbotz.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = abilbotz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                nani = `*D E M O T E D E T E C T E D*\n\nNomor : ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                abilbotz.sendMessage(mdata.id, { contentText: `${nani}`, footerText: `*Jabatan Kamu Sebagai Leluhur Grup Ini Telah Di Copot🗿*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}
                
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log(color('Module', 'green'), color(`'${module} Dipantau Oleh Abil'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
    
starts()
