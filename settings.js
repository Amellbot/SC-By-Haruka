//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['15064043432']
global.premium = ['15064043432']
global.ownernomer = '15064043432'
global.ownername = '𝑺𝑬𝑶𝑼𝑳 𝑨𝑴𝑬𝑳𝑰𝑶'
global.botname = '𝑺𝑬𝑼𝑻𝑰𝑶𝑳 𝑨𝑴𝑬𝑳𝑰𝑶 𝑩𝑶𝑻'
global.footer = '© ᴛᴀᴘ ᴍᴇ ɪɴ ᴀᴍᴇʟʟ'
global.ig = 'https://github.com/dominator454'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/dominator454/Gojo-Satoru'
global.myweb = 'https://youtube.com/channel/UCuYd8PWkU5QDCExj-ku8bGQ'
global.packname = '𝑺𝑬𝑶𝑼𝑳 𝑻𝑯𝑬 𝑨𝑴𝑬𝑳𝑳 𝑩𝑶𝑻'
global.author = '𝑰𝑻𝒁 𝑴𝑬 𝑺𝑶𝑼𝑳 𝑨𝑴𝑬𝑳𝑰𝑶/𝑨𝑴𝑬𝑳'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '𝑩𝑬𝑹𝑯𝑨𝑺𝑰𝑳',
    admin: '𝑭𝑰𝑻𝑼𝑹 𝑰𝑵𝑰 𝑲𝑯𝑼𝑺𝑼𝑺 𝑨𝑫𝑴𝑰𝑵 𝑩𝑬𝑺𝑻𝑰𝑬𝑬!',
    botAdmin: '𝑯𝑨𝒀 𝑩𝑬𝑺𝑻𝒀 𝑩𝑶𝑻 𝑯𝑨𝑹𝑼𝑺 𝑱𝑨𝑫𝑰 𝑨𝑫𝑴𝑰𝑵!',
    owner: '𝑭𝑰𝑻𝑼𝑹 𝑰𝑵𝑰 𝑲𝑯𝑼𝑺𝑼𝑺 𝑷𝑬𝑵𝑪𝑰𝑷𝑻𝑨 𝑺𝑨𝒀𝑨 𝑲𝑨𝑲𝑨!',
    group: '𝑴𝑨𝑨𝑭 𝑰𝑵𝑰 𝑲𝑯𝑼𝑺𝑼𝑺 𝑮𝑹𝑼𝑷!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
