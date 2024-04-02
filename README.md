# Абсолютно импортозамещенный Proxy для обхода CORS 

Весь код представлен одним файлом index.js, в нем нет ничего лишнего, можете проверить безопасность данного решения сами. 

## Как использовать? 

Вам нужно указать в запросе URL вида:
```http://proxyHost/targetHost/url```

- proxyHost - хост, на котором размещен ваш proxy
- targetHost - хост целевого ресурса 
- url - адрес запрашиваемого контента 

Например я использую его для получения списка тредов 2ch.hk так: 
```http://127.0.0.1:3000/2ch.hk/b/catalog.json```

- proxyHost - 127.0.0.1:3000
- targetHost - 2ch.hk 
- url - b/catalog.json

## Как развернуть?

1. Клонировать репозиторий 
2. Перейти в его папку 
3. Выполнить ```npm ci```
4. Запустить ```npm run start```

Для этого у вас должны быть установлены npm и Node, с.м. google.com 


##

[![Static Badge](https://img.shields.io/badge/twitch-grey?style=for-the-badge&logo=twitch)](https://www.twitch.tv/fantomas_izy) [![Static Badge](https://img.shields.io/badge/contact-grey?style=for-the-badge&logo=telegram)](https://t.me/Pavel_Poroshin_3)
[![Static Badge](https://img.shields.io/badge/donate-grey?style=for-the-badge&logo=bitcoin)](https://www.donationalerts.com/r/verticallychallenged)