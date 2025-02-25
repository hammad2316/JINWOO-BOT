/*project_name : JINWOO BOT
@author : MALVIN KING
@youtube :  
@instagram : malvinking20
@telegram : t.me/malvintech
@github : kingmalvn 
@tiktok : malvinquotes
@whatsapp : +923376218605) yah WhatsApp number hai jisne bahut lagwane lagva sakta hai
کالا ڈاکو واٹس ایپ بورڈ کس نے بنوانا ہے فری
*/
 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your Xploader session id here; must start with Jinwoo-Bot:~

//=================================================//
global.botname = process.env.BOT_NAME || 'ᎫᏆΝᏔϴϴ ᏴϴͲ' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '263714757857' 
//Type your main number here

//=================================================//
global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['263780934873', '263780166288'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Malvin' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/techlord01?igsh=OHB3b3BqMjZpMjdy=="

//=================================================//
global.wm = process.env.GL_WM || "©ᎫᏆΝᏔϴϴ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "ᎫᏆΝ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.prefixz = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©ᎫᏆΝᏔϴϴ*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
