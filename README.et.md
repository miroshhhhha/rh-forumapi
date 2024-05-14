# rh-forumapi 

rh-forumapi on Node-JS package, mis on kirjutatud TypeScriptis, mis võimaldab arendajatel suhelda sisseehitatud XenForo API-ga https://forum.robo-hamster.com 

## 📦 Paigaldamine Kasutage paketihaldurit [npm] (https://www.npmjs.com) teegi paigaldamiseks.

```bash
npm install rh-forumapi
```

## 📚 Kasutamine

```javascript
api.promoteUser('1', '1').then(data => {
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
## License [MIT](https://github.com/miroshhhha/rh-forumapi/blob/main/LICENSE.md)
