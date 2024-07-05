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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3c2dGZBWDVSRTBTa0cvdTNFdnJmQk5PMHRHNVRPclJnSjVOUUx1S2xRUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEVoSWg5U0hUVXlVd2lsTjdFUEZid1wiLFxuICBcInBob25lSWRcIjogXCJiZGFlNjk3Yi05YjYwLTQxMTEtYWNlMy0wNjdhOGJlMWU3YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxMTMsXG4gICAgICAxOTYsXG4gICAgICAzMSxcbiAgICAgIDE1MyxcbiAgICAgIDU1LFxuICAgICAgNCxcbiAgICAgIDIxMyxcbiAgICAgIDEwNixcbiAgICAgIDQ0LFxuICAgICAgMTY0LFxuICAgICAgMTYsXG4gICAgICAyMTcsXG4gICAgICAyNTIsXG4gICAgICAxNjQsXG4gICAgICAzOSxcbiAgICAgIDkzLFxuICAgICAgMTEzLFxuICAgICAgMTY2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMjQ3LFxuICAgICAgNjEsXG4gICAgICAyMSxcbiAgICAgIDU1LFxuICAgICAgMTE4LFxuICAgICAgMjM0LFxuICAgICAgMTIyLFxuICAgICAgMTcwLFxuICAgICAgMzYsXG4gICAgICAxMTIsXG4gICAgICAxNDIsXG4gICAgICAyMTcsXG4gICAgICAxMTAsXG4gICAgICA4MixcbiAgICAgIDM2LFxuICAgICAgODEsXG4gICAgICA4LFxuICAgICAgNjUsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkVXOEJXWTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2ODk5MzQ4Nzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTAzODM4MjU1MTE0Njo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZU9sUGdERU5DZ29MUUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhoQlFTTnVrTlp1U0M3cUNuNmhCc3hobFpycExDN2ZLZ3RJQjFqSGJEWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVXhSSXhWZW5xazJvYk5vdmNFaDFtcVk4R0lFS0VmNmM2ajhvUEZNSmg0YXhBM0xBYkdabElaVXZhTVg5bGlvR2EzRjRjTXV4c3dKV2loVzFmM2wrQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVUU2NTRmTVRhTmVUcnIrSGtBU1VMdFNvY1BUUTNXNStvNUIzTlVCY2VlQTN4eGQxQ3VnZmFhWTlKTmYzV1g5dkRpQzhLV1gxWkpLU3kxRXQxRndRQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY4OTkzNDg3OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxOTMxMDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
