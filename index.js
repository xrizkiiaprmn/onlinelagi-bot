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
    const selectedListMessageId =
      messages[0].message?.listResponseMessage?.singleSelectReply
        ?.selectedRowId;

    if (admin.find((data) => data === remoteJid) !== undefined) {
      if (messageBody === "$menu") {
        await sock.sendMessage(remoteJid, {
          text: "✳️ Menu Utama Bot ONLINE.LAGI\n\n• $hai - untuk menyapa bot\n• $menu - untuk menampilkan menu utama bot\n• $send [parameter] - untuk mengirim informasi produk ke pembeli\n• $format - untuk menampilkan menu format $send product\n• $format [product] - untuk melihat format $send product",
        });
      } else if (messageBody === "$hai") {
        await sock.sendMessage(remoteJid, {
          text: `Hallo Admin!`,
        });
      } else if (messageBody === "$send") {
        await sock.sendMessage(remoteJid, {
          text: "✳️ Peringatan\n\nIsi parameter dulu ya, dan sesuaikan dengan format yang ada",
        });
      } else if (messageBody.startsWith("$send")) {
        const messageSplit = messageBody.split(" ");
        messageSplit.shift();
        await controller.sendInformation(sock, messageSplit, `${remoteJid}`);
      } else if (messageBody === "$format") {
        await sock.sendMessage(remoteJid, {
          text: "✳️ Menu Format Bot ONLINE.LAGI\n\n• $format youtube - untuk menampilkan format $send YouTube Premium\n• $format netflix - untuk menampilkan format $send Netflix\n• $format viu - untuk menampilkan format $send Viu Premium\n• $format canva - untuk menampilkan format $send Canva Pro\n• $format wetv - untuk menampilkan format $send WeTV VIP\n• $format iqiyi - untuk menampilkan format $send iQIYI Premium\n• $format vidio - untuk menampilkan format $send Vidio Platinum\n• $format spotify - untuk menampilkan format $send Spotify Premium\n• $format hbogo - untuk menampilkan format $send HBO GO Premium\n• $format disney - untuk menampilkan format $send Disney+ Hotstar\n• $format prime - untuk menampilkan format $send Prime Video",
        });
      } else if (messageBody.startsWith("$format")) {
        await controller.sendFormat(sock, messageBody, `${remoteJid}`);
      } else if (messageBody) {
        await sock.sendMessage(remoteJid, { text: "Ngomong opo?" });
      }
    } else {
      if (messageBody === "Hi") {
        const sections = [
          {
            title: "Katalog",
            rows: [
              {
                title: "Akun Premium",
                rowId: "option1",
                description: "Lihat pricelist akun premium ONLINE.LAGI",
              },
              {
                title: "Lisensi Lifetime Retail",
                rowId: "option2",
                description:
                  "Lihat pricelist lisensi lifetime retail ONLINE.LAGI",
              },
            ],
          },
          {
            title: "Pemesanan",
            rows: [
              {
                title: "Admin",
                rowId: "option3",
                description: "Lakukan pemesanan melalui admin ONLINE.LAGI",
              },
              {
                title: "Pembayaran",
                rowId: "option4",
                description: "Lihat metode pembayaran di ONLINE.LAGI",
              },
            ],
          },
        ];

        const listMessage = {
          title: "✳️ Selamat Datang di ONLINE.LAGI",
          text: "Disini kami menjual berbagai Akun Premium dan Lisensi Lifetime.",
          footer: "Simak kami lebih lanjut dengan memilih opsi dibawah ini",
          buttonText: "Lihat Yuk!",
          sections,
        };

        await sock.sendMessage(remoteJid, listMessage);
      } else if (selectedListMessageId === "option1") {
        await sock.sendMessage(remoteJid, {
          image: { url: "./media/premium.png" },
          caption: "✳️ Pricelist Akun Premium ONLINE.LAGI",
        });
      } else if (selectedListMessageId === "option2") {
        await sock.sendMessage(remoteJid, {
          image: { url: "./media/lisensi.png" },
          caption: "✳️ Pricelist Lisensi Lifetime Retail ONLINE.LAGI",
        });
      } else if (selectedListMessageId === "option3") {
        const vcard =
          "BEGIN:VCARD\n" + // metadata of the contact card
          "VERSION:3.0\n" +
          "FN:Rizki Agung Permana\n" + // full name
          "ORG:ONLINE.LAGI;\n" + // the organization of the contact
          "TEL;type=CELL;type=VOICE;waid=6285704321147:+62 857 0432 1147\n" + // WhatsApp ID + phone number
          "END:VCARD";

        await sock.sendMessage(remoteJid, {
          text: "✳️ Silahkan melakukan pesanan melalui admin ya\n• Hubungi kontak dibawah ini",
        });

        await sock.sendMessage(remoteJid, {
          contacts: {
            displayName: "Rizki Agung Permana",
            contacts: [{ vcard }],
          },
        });
      } else if (selectedListMessageId === "option4") {
        await sock.sendMessage(remoteJid, {
          image: { url: "./media/qris.png" },
          caption: `✳️ Metode Pembayaran di ONLINE.LAGI\n\n• QRIS\n\tScan QRIS diatas.\n\n• DANA / OVO / GOPAY / LINKAJA / SHOPEEPAY\n\t085704321147 A. N. RIZKI AGUNG PERMANA\n\n• BANK CENTRAL ASIA (BCA)\n\t3301073681 A. N. RIZKI AGUNG PERMANA\n\n• BANK RAKYAT INDONESIA (BRI)\n\t004101024978538 A. N. RIZKI AGUNG PERMANA\n\n• BANK JAGO\n\trizkiiaprmn A.N. RIZKI AGUNG PERMANA`,
        });
      }
    }
  });
}

connectToWhatsApp();
