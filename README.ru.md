# rh-forumapi

rh-forumapi это Node-JS библиотека, написанная на TypeScript, позволяющая разработчикам взаимодействовать со встроенным XenForo API в https://forum.robo-hamster.com

## 📦 Установка

Используйте менеджер пакетов [npm](https://www.npmjs.com) для установки библиотеки.

```bash
npm install rh-forumapi
```

## 📚 Использование

```javascript
const { RHapi } = require('rh-forumapi');

// Объявите переменную, используемую для обращения к API
const api = new RHapi('ВАШ_ТОКЕН');

api.promoteUser(1, 1).then(data => {
  // Если запрос успешен
  if (data.success === true) { 
    // Выведите в консоль текущие группы пользователя
    console.log(`Группы пользователя: ${data.groups}`)
  } else {
    // Выведите ошибку в консоль
    console.error(data)
  }
})
```

## ⚙️ Содействие

По любым предложениям/багам обращайтесь в Telegram: @miroshhhhha

Просьба перед написанием поверить, установлена ли последняя версия библиотеки.

## License

[MIT](https://github.com/miroshhhhha/rh-forumapi/blob/main/LICENSE.md)
