# 🔗 [Русскоязычная версия README (ссылка)](https://github.com/miroshhhhha/rh-forumapi/blob/main/README.ru.md)
# rh-forumapi 

rh-forumapi on Node-JS package, mis on kirjutatud TypeScriptis, mis võimaldab arendajatel suhelda sisseehitatud XenForo API-ga https://forum.arzguard.com 

## 📦 Paigaldamine Kasutage paketihaldurit [npm](https://www.npmjs.com) teegi paigaldamiseks.

```bash
npm install rh-forumapi
```

## 📚 Kasutamine

```javascript
const { RHapi } = require('rh-forumapi');

// Tehke uue constanti koos teie tokeniga
const api = new RHapi('TEIE_TOKEN');

api.promoteUser(1, 1).then(data => {
  // Kui request on edukas
  if (data.success === true) { 
    // Näitame konsoolis praegused kasutajagrupid
    console.log(`Kasutajagrupid: ${data.groups}`)
  } else {
    // Näitame vea konsooli
    console.error(data)
  }
})
```

## ⚙️ Kaasaaitamine

Kõikide pakkumiste/bagide korral pöörduge Telegrami poole: @miroshhhha

Palume enne kirjutamist uskuda, kas packagi viimane versioon on paigaldatud.

## License [MIT](https://github.com/miroshhhhha/rh-forumapi/blob/main/LICENSE.md)
