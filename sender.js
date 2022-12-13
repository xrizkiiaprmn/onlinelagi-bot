const fragmentTemplate = [
  "🛒 *Informasi Pesanan di ONLINE.LAGI*",
  "✳️ *Terimakasih Telah Membeli Produk ONLINE.LAGI*",
];

const sendInformation = async (sock, messageBody, senderId) => {
  const product = messageBody[1];

  switch (product) {
    case "youtube":
      await senderYoutube(sock, messageBody, senderId);
      break;
    case "netflix":
      await senderNetflix(sock, messageBody, senderId);
      break;
    case "viu":
      await senderViu(sock, messageBody, senderId);
      break;
    case "canva":
      await senderCanva(sock, messageBody, senderId);
      break;
    case "wetv":
      await senderWetv(sock, messageBody, senderId);
      break;
    case "iqiyi":
      await senderIqiyi(sock, messageBody, senderId);
      break;
    case "vidio":
      await senderVidio(sock, messageBody, senderId);
      break;
    case "spotify":
      await senderSpotify(sock, messageBody, senderId);
      break;
    case "hbo":
      await senderHbogo(sock, messageBody, senderId);
      break;
    case "disney":
      await senderDisney(sock, messageBody, senderId);
      break;
    case "prime":
      await senderPrime(sock, messageBody, senderId);
      break;
  }
};

const sendFormat = async (sock, messageBody, remoteJid) => {
  const messageSplit = messageBody.split(" ");
  const product = messageSplit[1];

  switch (product) {
    case "youtube":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk YouTube Premium\n\n• $send target youtube durasi email pass ...masaBerlaku\n• ex : $send 6285704321147 youtube 4 onlinelagi@gmail.com $onlinelagi Masa Berlaku 13 Desember 2022 - 13 April 2023",
      });
      break;
    case "netflix":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Netflix\n\n• $send target netflix durasi satuanDurasi email pass profile pin\n• ex : $send 6285704321147 netflix 1 Bulan onlinelagi@gmail.com $onlinelagi Profile-1 2378",
      });
      break;
    case "viu":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Viu Premium\n\n• $send target viu durasi email pass\n• ex : $send 6285704321147 viu 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "canva":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Canva Pro\n\n• $send target canva durasi linkInvite\n• ex : $send 6285704321147 canva 1 https://canva.com/",
      });
      break;
    case "wetv":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk WeTV VIP\n\n• $send target wetv durasi email pass\n• ex : $send 6285704321147 wetv 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "iqiyi":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk iQIYI Premium\n\n• $send target iqiyi type durasi email pass\n• ex : $send 6285704321147 iqiyi Sharing 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "vidio":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Vidio Platinum\n\n• $send target vidio type durasi email pass\n• ex : $send 6285704321147 vidio Sharing 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "spotify":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Spotify Premium (Invite)\n\n• $send target spotify type durasi linkInvite\n• ex : $send 6285704321147 spotify Invite 1 https://spotify.com/\n\n✳️ Format $send produk Spotify Premium (Individu)\n\n• $send target spotify type durasi email pass\n• ex : $send 6285704321147 spotify Individu 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "hbogo":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk HBO GO Premium\n\n• $send target hbogo type durasi email pass\n• ex : $send 6285704321147 hbogo Sharing 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "disney":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Disney+ Hotstar\n\n• $send target disney type durasi email pass\n• ex : $send 6285704321147 disney Sharing 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
    case "prime":
      await sock.sendMessage(remoteJid, {
        text: "✳️ Format $send produk Prime Video\n\n• $send target prime type durasi email pass\n• ex : $send 6285704321147 prime Sharing 1 onlinelagi@gmail.com $onlinelagi",
      });
      break;
  }
};

const senderYoutube = async (sock, messageBody, senderId) => {
  const [targetId, , descDurasi, email, pass, ...descProduct] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${
      fragmentTemplate[0]
    }\n\nYouTube Premium ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Masa Berlaku ${descProduct.join(
      " "
    )}\n- Full Garansi\n- Diperbolehkan mengganti password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${
      fragmentTemplate[1]
    }`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderNetflix = async (sock, messageBody, senderId) => {
  const [targetId, , descDurasi, durasiDesc, email, pass, profile, pin] =
    messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nNetflix ULTRA HD Sharing ${descDurasi} ${durasiDesc}\n\n• Email : ${email}\n• Password : ${pass}\n\n• Profile : ${profile}\n• PIN : ${pin}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Masa Berlaku 28-30 Hari\n- Full Garansi\n- Sharing hanya digunakan di 1 Device\n- Dilarang mengganti Email, Password, serta Profile dan PIN\n- Disarankan untuk tidak login logout terlalu sering\n- Dilarang mengotak ngatik billing\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderViu = async (sock, messageBody, senderId) => {
  const [targetId, , descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nViu Premium Private ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Garansi jika backfree, kalau ke Banned no Garansi\n- Diperbolehkan mengganti Password\n- Disarankan login di 1 Device\n- Jika ada notif limit screen bisa ditunggu / clear data dan dicoba berkala\n- Solusi lain, customer bisa download dan nonton secara offline\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderCanva = async (sock, messageBody, senderId) => {
  const [targetId, , descDurasi, linkInvite] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nCanva Pro Invite ${descDurasi} Bulan\n\n• Link Invite : ${linkInvite}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- 1 Tahun GARANSI 2 Bulan\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderWetv = async (sock, messageBody, senderId) => {
  const [targetId, , descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nWeTV VIP Sharing ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing hanya digunakan di 1 Device\n- Dilarang mengganti Email dan Password\n- Tidak termasuk Fasttrack\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderIqiyi = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\niQIYI Premium ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Dilarang mengganti Email dan Password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderVidio = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nVidio Platinum ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing hanya digunakan di 1 Device\n- Dilarang mengganti Email dan Password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderSpotify = async (sock, messageBody, senderId) => {
  if (messageBody[2].toLowerCase() === "invite") {
    const [targetId, , type, descDurasi, linkInvite] = messageBody;
    await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
      text: `${fragmentTemplate[0]}\n\nSpotify Premium ${type} ${descDurasi} Bulan\n\n• Link Invite : ${linkInvite}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
    });
  } else if (messageBody[2].toLowerCase() === "individu") {
    const [targetId, , type, descDurasi, email, pass] = messageBody;
    await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
      text: `${fragmentTemplate[0]}\n\nSpotify Premium ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Dilarang mengganti Email dan Password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
    });
  }

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderHbogo = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nHBO GO Premium ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing hanya digunakan di 1 Device\n- Dilarang mengganti Email dan Password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderDisney = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nDisney+ Hotstar Premium ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing Dilarang Logout\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

const senderPrime = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nPrime Video ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing anya digunakan di 1 Device\n- Dilarang mengganti Email & Password \n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
  });

  await sock.sendMessage(senderId, {
    text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
  });

  console.info(
    `Success -> Berhasil Mengirimkan Informasi Produk Ke ${targetId}!`
  );
};

module.exports = { sendInformation, sendFormat };
