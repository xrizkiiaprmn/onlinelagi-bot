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
    case "vidioP":
      await senderVidioPlatinum(sock, messageBody, senderId);
      break;
    case "vidioD":
      await senderVidioDiamond(sock, messageBody, senderId);
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
    text: `${fragmentTemplate[0]}\n\nWeTV VIP Sharing ${descDurasi} Bulan\n\n• Email/No. HP : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Sharing hanya digunakan di 1 Device\n- Dilarang mengganti Email dan Password\n- Tidak termasuk Fasttrack\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
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

const senderVidioPlatinum = async (sock, messageBody, senderId) => {
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

const senderVidioDiamond = async (sock, messageBody, senderId) => {
  const [targetId, , type, descDurasi, email, pass] = messageBody;

  await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
    text: `${fragmentTemplate[0]}\n\nVidio Diamond ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n\n- Dilarang mengganti Email\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
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
    const [targetId, , type, descDurasi, linkInvite, alamat] = messageBody;
    await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
      text: `${fragmentTemplate[0]}\n\nSpotify Premium ${type} ${descDurasi} Bulan\n\n• Link Invite : ${linkInvite}\n• Alamat : ${alamat}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
    });

    await sock.sendMessage(senderId, {
      text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
    });
  } else if (messageBody[2].toLowerCase() === "individu") {
    const [targetId, , type, descDurasi, email, pass] = messageBody;
    await sock.sendMessage(`${targetId}@s.whatsapp.net`, {
      text: `${fragmentTemplate[0]}\n\nSpotify Premium ${type} ${descDurasi} Bulan\n\n• Email : ${email}\n• Password : ${pass}\n\n🔴 *Syarat dan Ketentuan Garansi :*\n- Full Garansi\n- Dilarang mengganti Email dan Password\n- Garansi Hangus Jika Melanggar Syarat dan Ketentuan\n- Membeli = Setuju\n\n${fragmentTemplate[1]}`,
    });

    await sock.sendMessage(senderId, {
      text: `🟢 Berhasil mengirim informasi pesanan ke ${targetId}!`,
    });
  }

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

module.exports = { sendInformation };
