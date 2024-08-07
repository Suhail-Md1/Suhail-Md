const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrYXg2VjJuTmNHVVRnWkJCMGdMMFdhUWFwTDZ0S0M2NU5KTW5vSEVqbnN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPOTJ3azZWMVFUdW1fRzNoRldFUENnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4ZWMxYWI4LTgzM2MtNDc4OC04NmE5LTYyMTg0ZWZhMTgzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyMjQsXG4gICAgICAyNDUsXG4gICAgICAxNTQsXG4gICAgICA4NyxcbiAgICAgIDMxLFxuICAgICAgMTgxLFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDI1MSxcbiAgICAgIDUsXG4gICAgICAyNTMsXG4gICAgICAyNDgsXG4gICAgICAxMDQsXG4gICAgICAyMjAsXG4gICAgICAxMDIsXG4gICAgICAxMzUsXG4gICAgICAyNixcbiAgICAgIDE2MCxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDIyNCxcbiAgICAgIDI0NixcbiAgICAgIDE3OCxcbiAgICAgIDE2MSxcbiAgICAgIDEzMixcbiAgICAgIDI0MixcbiAgICAgIDE2NixcbiAgICAgIDE0OSxcbiAgICAgIDE1MixcbiAgICAgIDg0LFxuICAgICAgMTk3LFxuICAgICAgMjE4LFxuICAgICAgMjMyLFxuICAgICAgMTM3LFxuICAgICAgMTg3LFxuICAgICAgMTAsXG4gICAgICAyMjAsXG4gICAgICAyMjIsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVBXSDQ0MjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2ODk5MzQ4Nzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTAzODM4MjU1MTE0Njo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZU9sUGdERUlMSXpiVUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhoQlFTTnVrTlp1U0M3cUNuNmhCc3hobFpycExDN2ZLZ3RJQjFqSGJEWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlUyN1RMcVRyTEFXbk9vaFNSczI2NjdMK00yL3ZkUGVEcFZpaFdpYU0wNGVCRTYrbUZjVit3UFhXWWRoOVRsSloyNDUvNTU0akYrTGhuQno5ZjNxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXlKR0VGYTAvdXJkVlNGcEszUFJTaWk4eFpiZ0g2V0dpTWtleGRwR2dOWlArQitJRzh3K1BwaGpVbHk1SWhRTGpoQVU3WjJXUDhtY1NteG9iNDRKamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY4OTkzNDg3OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzI1ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFESXlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURJeS5qc29uIjogIntcImtleURhdGFcIjpcIjVQVWg2aXA3YXliZ2F2QXk2RnBPdXZybDhzS2xGYnRMNlVpdURrblZ5M2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1NzI5NDA4NyxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4MzcxOTYzNTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
