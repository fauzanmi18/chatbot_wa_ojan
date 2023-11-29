const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const defaultMsg = require('./defaultMsg')

const startBot= () => {
  const client = new Client()
  
  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
  })
  
  client.on('authenticated', () => {
    console.log('Bot sudah siap!');
    console.log('Client Login');
  });
  
  client.on('message', (message) => {
    const lowerCaseMessage = message.body.toLowerCase()
    switch (lowerCaseMessage) {
      case 'halo':
        message.reply(defaultMsg)
        break;
      case '1':
        message.reply('Kami memiliki berbagai produk berkualitas. Untuk informasi lebih lanjut, kunjungi situs web kami.')
        break;
      case '2':
        message.reply('Layanan kami mencakup berbagai kebutuhan Anda. Untuk detail lebih lanjut, silakan hubungi kami.')
        break;
      case '3':
        message.reply('Mohon tunggu sebentar, Customer Service kami akan segera menghubungi anda')
        break;
      default:
        message.reply('Maaf, saya tidak mengerti pertanyaan Anda. Untuk informasi lebih lanjut, hubungi customer service kami.')
    }
  })
  
  client.on('disconnected', (reason) => {
    console.log(`Client telah logout. Reason: ${reason}`)
  })
  
  client.initialize()
}
startBot()
