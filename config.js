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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_20_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNqSkg1R2doS1N6d2xiWmgwTGxrYnNsc2xjRkxXYzR4UnJvenRmYlh2bUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyNzIwMDA1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FERDk5M0VBNkY3OUEyMzE4QzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzU0MDUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyNzIwMDA1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGNDU1OTRDRDlFNEQ3QkQ1MDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzU0MDUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQ3ejJFTnE0UzNDTWZrLUIyVlZ5QlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzUwYjE4OTEtNWMwNS00M2M0LTk5NmItMjFkZmQ2ODdhYzJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDg4LFxuICAgICAgMzQsXG4gICAgICAyMjgsXG4gICAgICAxMzgsXG4gICAgICAxMTUsXG4gICAgICA1MSxcbiAgICAgIDIzOCxcbiAgICAgIDE3NyxcbiAgICAgIDQwLFxuICAgICAgMjUzLFxuICAgICAgMjAzLFxuICAgICAgMTE4LFxuICAgICAgMTIzLFxuICAgICAgMjIyLFxuICAgICAgNTgsXG4gICAgICAyOSxcbiAgICAgIDMxLFxuICAgICAgMTMsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE0NSxcbiAgICAgIDU3LFxuICAgICAgMTY0LFxuICAgICAgMTI0LFxuICAgICAgMTgyLFxuICAgICAgNjUsXG4gICAgICAxMjgsXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDEzMyxcbiAgICAgIDIyNCxcbiAgICAgIDE2OCxcbiAgICAgIDEzNyxcbiAgICAgIDYxLFxuICAgICAgOTYsXG4gICAgICAyMTYsXG4gICAgICAzOSxcbiAgICAgIDM5LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOejhzT0lQRUwyRjdiTUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpBSUlVOTNZS2pMVEhpcDQyTzVsSTk0ajMyeW9pekxpcGxSWDhwQW11M289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHg2UU9HeVE2YkVXMXZ2WEFSdFRPOEplR0xZdTE1OXo2aytGZ0ZKN0Q5QXBtSXVjVHoyNmF5c0VnWVExRDNJcXFVenJHVWlRQWNDUzlkRHN3Vm80Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSklZZWVqbmFnRmwxZ1d4dUJWU1d2SVBqNzVYR2FMUXVUZmdTcGE1MjM0Q0hRTHpIZUdMcmxnakFJdWFtcHBYTk9iSSs3NUV0dTBqOWNPUzVtY2NHQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI3MjAwMDUwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMYW5keXN0ZWNoXCIsXG4gICAgXCJsaWRcIjogXCIyMjI5NjkzODUyMjYzMTE6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjcyMDAwNTA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzU0MDQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmMrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMEt5MkdHVWhTK1RSeDA4Y0hzNWNLeStNYkpVVEVUcWhRNUtHakVQdVNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyMzI4NTUxMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE3MTgxNzkxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkQS5qc29uIjogIntcImtleURhdGFcIjpcIjVncjEyeTQzWFpvS28rak5ncWtMSDZGYU1zcmdXL3NFa0svc3Nmd3JIME09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIzMjg1NTEzMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxOTAyMjA2MTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5c1RudVkwSVRqb2JpMXJEMGk3eU56b2Y1RXY0NitocFQ2cEtYK1JlaERVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyMzI4NTUxMzIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE5MDIyMjE4N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkRC5qc29uIjogIntcImtleURhdGFcIjpcImRkdmZoM2xCeGpFbTc5UWRHRVBwS2ZLZ1lZZmhOYkV3Tmhya2V1U1VJeFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIzMjg1NTEzMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzQsMywyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE5MTkyNjcwNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkRS5qc29uIjogIntcImtleURhdGFcIjpcIlBOeXpXaUhZa0dzZkZLYmNIWDROVnJwN3FUV0dWZUFDd1hETEhuSVBmNEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIzMjg1NTEzMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzQsMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxOTE5MjgzMjRcIn0iCn0="  // PUT your SESSION_ID 


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
