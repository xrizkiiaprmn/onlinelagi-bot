const makeWASocket = require("@adiwajshing/baileys").default;
const { Browsers } = require("@adiwajshing/baileys");
const { useMultiFileAuthState } = require("@adiwajshing/baileys");
const controller = require("./sender");

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_whatsapp");

  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    browser: Browsers.macOS("Desktop"),
  });

  const admin = ["6285704321147@s.whatsapp.net"];

  sock.ev.on("connection.update", ({ connection }) => {
    if (connection === "close") {
      saveCreds();
      connectToWhatsApp();
    }
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const messageBody = messages[0].message?.conversation;
    const remoteJid = messages[0].key.remoteJid;

    if (admin.find((data) => data === remoteJid) !== undefined) {
      if (messageBody === "$menu") {
        await sock.sendMessage(remoteJid, {
          text: "✳️ Menu Utama Bot ONLINE.LAGI\n\n• $hai - untuk menyapa bot\n• $menu - untuk menampilkan menu utama bot\n• $send [parameter] - untuk mengirim informasi produk ke pembeli\n• $format - untuk menampilkan menu format $send product\n$format product - untuk melihat format $send product",
        });
      } else if (messageBody === "$hai") {
        await sock.sendMessage(remoteJid, {
          text: `Hallo Admin!`,
        });
      } else if (messageBody.startsWith("$send")) {
        const messageSplit = messageBody.split(" ");
        messageSplit.shift();
        await controller.sendInformation(sock, messageSplit);
      } else if (messageBody === "$format") {
        await sock.sendMessage(remoteJid, {
          text: "Menu Format Bot ONLINE.LAGI\n\n$format yt - untuk menampilkan format $send YouTube Premium\n$format netflix - untuk menampilkan format $send Netflix\n$format viu - untuk menampilkan format $send Viu Premium\n$format canva - untuk menampilkan format $send Canva Pro\n$format wetv - untuk menampilkan format $send WeTV VIP\n$format iqiyi - untuk menampilkan format $send iQIYI Premium\n$format vidio - untuk menampilkan format $send Vidio Platinum\n$format spotify - untuk menampilkan format $send Spotify Premium\n$format hbogo - untuk menampilkan format $send HBO GO Premium\n$format disney - untuk menampilkan format $send Disney+ Hotstar\n$format prime - untuk menampilkan format $send Prime Video\n",
        });
      } else if (messageBody.startsWith("$format")) {
        await controller.sendFormat(sock, messageBody);
      } else if (messageBody) {
        await sock.sendMessage(remoteJid, { text: "Ngomong opo?" });
      }
    }
  });
}

connectToWhatsApp();
