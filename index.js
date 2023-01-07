const makeWASocket = require("@adiwajshing/baileys").default;
const { Browsers } = require("@adiwajshing/baileys");
const { useMultiFileAuthState } = require("@adiwajshing/baileys");
const controller = require("./sender");
const fs = require("fs");

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_whatsapp");

  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    browser: Browsers.macOS("Desktop"),
  });

  let dataUsersJson = fs.readFileSync("./users.json", { encoding: "utf8" });
  dataUsersJson = JSON.parse(dataUsersJson);

  let admins = new Set();
  let customers = new Set();

  for (let admin of dataUsersJson.admin) {
    admins.add(admin);
  }

  for (let customer of dataUsersJson.customer) {
    customers.add(customer);
  }

  const updateUsers = async (data) => {
    if (!data) {
      return;
    } else {
      if (
        dataUsersJson.customer.find((customer) => customer === data) &&
        dataUsersJson.admin.find((admin) => admin === data)
      )
        return;

      dataUsersJson.customer.push(data);
      const dataEdited = JSON.stringify(dataUsersJson, null, 2);
      fs.writeFileSync("./users.json", dataEdited, { encoding: "utf8" });

      for (let admin of dataUsersJson.admin) {
        admins.add(admin);
      }

      for (let customer of dataUsersJson.customer) {
        customers.add(customer);
      }
    }
  };

  updateUsers("");

  sock.ev.on("connection.update", ({ connection }) => {
    if (connection === "close") {
      saveCreds();
      connectToWhatsApp();
    }
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    try {
      const messageBody = messages[0].message.conversation;
      const remoteJid = messages[0].key.remoteJid;
      const selectedListMessageId =
        messages[0].message?.listResponseMessage?.singleSelectReply
          ?.selectedRowId;

      updateUsers(remoteJid);

      if (admins.has(remoteJid)) {
        if (messageBody?.startsWith("$send")) {
          const messageSplit = messageBody.split(" ");
          messageSplit.shift();
          await controller.sendInformation(sock, messageSplit, `${remoteJid}`);
        } else if (messageBody === "Halo") {
          const sections = [
            {
              title: "Informasi Toko",
              rows: [
                { title: "Akun Premium", rowId: "premium" },
                { title: "Lisensi Lifetime Retail", rowId: "lisensi" },
                { title: "Pembayaran", rowId: "payment" },
              ],
            },
            {
              title: "Format Kirim Informasi Pesanan",
              rows: [
                {
                  title: "YouTube Premium",
                  rowId: "option1",
                },
                {
                  title: "Netflix",
                  rowId: "option2",
                },
                {
                  title: "Viu Private",
                  rowId: "option3",
                },
                {
                  title: "Canva Pro",
                  rowId: "option4",
                },
                {
                  title: "WeTV VIP",
                  rowId: "option5",
                },
                {
                  title: "iQIYI Premium",
                  rowId: "option6",
                },
                {
                  title: "Vidio Platinum",
                  rowId: "option7",
                },
                {
                  title: "Vidio Diamond",
                  rowId: "option8",
                },
                {
                  title: "Spotify Premium",
                  rowId: "option9",
                },
                {
                  title: "HBO GO Premium",
                  rowId: "option10",
                },
                {
                  title: "Disney+ Hotstar",
                  rowId: "option11",
                },
                {
                  title: "Prime Video",
                  rowId: "option12",
                },
              ],
            },
          ];

          const listMessage = {
            title: "✳️ Hai Admin! Selamat Datang di ONLINE.LAGI",
            text: "Disini kita menjual berbagai Akun Premium dan Lisensi Lifetime.",
            footer: "Simak menu pendukung admin dibawah ini",
            buttonText: "Semangat Jualan!",
            sections,
          };

          await sock.sendMessage(remoteJid, listMessage);
        }

        switch (selectedListMessageId) {
          case "premium":
            await sock.sendMessage(remoteJid, {
              image: { url: "./media/premium-full.png" },
              caption: "✳️ Pricelist Akun Premium ONLINE.LAGI",
            });
            break;
          case "lisensi":
            await sock.sendMessage(remoteJid, {
              image: { url: "./media/lisensi.png" },
              caption: "✳️ Pricelist Lisensi Lifetime Retail ONLINE.LAGI",
            });
            break;
          case "payment":
            await sock.sendMessage(remoteJid, {
              image: { url: "./media/qris.png" },
              caption: `✳️ Metode Pembayaran di ONLINE.LAGI\n\n• QRIS\n\tScan QRIS diatas.\n\n• DANA / OVO / GOPAY / LINKAJA / SHOPEEPAY\n\t085704321147 A. N. RIZKI AGUNG PERMANA\n\n• BANK CENTRAL ASIA (BCA)\n\t3301073681 A. N. RIZKI AGUNG PERMANA\n\n• BANK RAKYAT INDONESIA (BRI)\n\t004101024978538 A. N. RIZKI AGUNG PERMANA\n\n• BANK JAGO\n\trizkiiaprmn A.N. RIZKI AGUNG PERMANA`,
            });
            break;
          case "option1":
            await sock.sendMessage(remoteJid, {
              text: "$send target youtube durasi email pass ...masaBerlaku",
            });
            break;
          case "option2":
            await sock.sendMessage(remoteJid, {
              text: "$send target netflix durasi satuanDurasi email pass profile pin",
            });
            break;
          case "option3":
            await sock.sendMessage(remoteJid, {
              text: "$send target viu durasi email pass",
            });
            break;
          case "option4":
            await sock.sendMessage(remoteJid, {
              text: "$send target canva durasi linkInvite",
            });
            break;
          case "option5":
            await sock.sendMessage(remoteJid, {
              text: "$send target wetv durasi email pass",
            });
            break;
          case "option6":
            await sock.sendMessage(remoteJid, {
              text: "$send target iqiyi type durasi email pass",
            });
            break;
          case "option7":
            await sock.sendMessage(remoteJid, {
              text: "$send target vidioP type durasi email pass",
            });
            break;
          case "option8":
            await sock.sendMessage(remoteJid, {
              text: "$send target vidioD type durasi email pass",
            });
            break;
          case "option9":
            await sock.sendMessage(remoteJid, {
              text: "$send target spotify type durasi linkInvite alamat",
            });

            await sock.sendMessage(remoteJid, {
              text: "$send target spotify type durasi email pass",
            });
            break;
          case "option10":
            await sock.sendMessage(remoteJid, {
              text: "$send target hbogo type durasi email pass",
            });
            break;
          case "option11":
            await sock.sendMessage(remoteJid, {
              text: "$send target disney type durasi email pass",
            });
            break;
          case "option12":
            await sock.sendMessage(remoteJid, {
              text: "$send target prime type durasi email pass",
            });
            break;
        }
      } else if (customers.has(remoteJid)) {
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
            image: { url: "./media/premium-full.png" },
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
    } catch (e) {
      updateUsers(messages[0].key.remoteJid);
    }
  });
}

connectToWhatsApp();
