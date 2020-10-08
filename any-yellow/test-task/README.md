#### Разработать тестовый Single Page Application (SPA) для учета занятий о беге. 
Разработка подразумевает использование ReactJS.

**Сверстать простой макет с учетом правил Responsive Web Design.**

В итоге должен получиться адаптивный макет, работающий как на десктопе, так и на мобильном телефоне. Дизайн и разметка находится в zeplin (стоит внимательно изучить функционал [zeplin](http://zeplin.io)) 
 - состояние для  mobile:   логин `zeplin3@yellow.id` / пароль `mobile_test`
 - состояние для desktop:  логин `zeplin4@yellow.id` / пароль `mobile_test`
   
**Интеграция фронтенд приложение с бэкенд REST API.** 

Документация: https://jogtracker.herokuapp.com/api/swagger

Авторизация в API происходит с использованием токена, который нужно отправлять в качестве хэдера с каждым запросом, требующим авторизированного пользователя. http://take.ms/ZWrtf 

```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf' 'https://jogtracker.herokuapp.com/api/v1/auth/user'
```
 
**Реализовать механизм сессии.**

По нажатии на `let me in` получить токен и сохранить его в локальном хранилище, после чего отобразить список всех пробежек текущего пользователя. 

https://jogtracker.herokuapp.com/api/swagger#!/auth/postV1AuthUuidlogin
для получения токена можно использовать строку «hello» 
https://jogtracker.herokuapp.com/api/swagger#!/data/getV1DataSync 

Дизайн http://take.ms/kHnB5 

**Реализовать форму внесения/редактирования информации о забеге.**

Вызывается по нажатию на (+)

Дизайн http://take.ms/cPdN7
- https://jogtracker.herokuapp.com/api/swagger#!/data/postV1DataJog 
- https://jogtracker.herokuapp.com/api/swagger#!/data/putV1DataJog 

**Реализовать фильтрацию записей о беге**

При клики на иконку фильтра появляется панель, в которой можно выбрать диапазон дат (date picker), после чего отображаются только записи, соответствующие критерию
Дизайн http://take.ms/rbLJR 

**Задеплоить проект на heroku**

Исходный код проекта с историей коммитов должен быть залит в репозиторий https://bitbucket.org/ или https://github.com/ 

**Тесты**
Реализовать несколько тестов с использованием Jest Framework 
https://facebook.github.io/jest/


P.S. не забываем что макет адаптивный
