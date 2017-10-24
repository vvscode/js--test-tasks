# Тестовое задание Sirion.soft

## Краткий перечень заданий:

- Создать форму авторизации и регистрации.
- Зарегистрировать пользователя.
- Авторизоваться, получить токен в ответ. Записать его в `localStorage`.
- Сделать редирект на личный кабинет.
- При загрузке компонента личного кабинета отправить запрос на сервер и получить массив данных.
- На странице личного кабинета отобразить блоки со страховками на основе полученной информации с сервера.
- Сделать адаптивную вёрстку.
- Дополнительное задание: анимация перехода между формами.
- Код должен быть выложен на GitHub, а сам фронтенд на GitHub pages (этот же репозиторий, ветка gh-pages).

## Макет


## Подробное описание:

1. При выполнении задания использовать фреймворк [Vue.js](https://ru.vuejs.org/index.html). Использовать другие фреймворки запрещено, общаться напрямую с DOM запрещено.
2. Для создание проекта использовать [vue cli](https://github.com/vuejs/vue-cli) и его шаблон — [webpack simple](https://github.com/vuejs-templates/webpack-simple).
3. При создании использовать компонентный подход (что делить на компоненты на ваше усмотрение).
4. При создании проекта использовать [editorconfig](http://editorconfig.org/), конфигурационный файл:
```javascript
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = false
```
5. Создать форму регистрации [на макете "SingLogIn" форма registration.png](https://github.com/vvscode/js--test-tasks/tree/master/sirion-Soft/test-task/mockups).
6. Api для отправки данных с формы регистрации (для работы с api используем нативный `fetch`):
- url: http://test-task-api.insirion.ru/user/registration
- метод: `POST`
- Content-Type: `application/json`
- название полей для отправки: `email, password, phone (поле логин не используем)`
- успешный HTTP статус: `201`
7. Создать форму авторизации [на макете "SingLogIn" форма authorization.png](https://github.com/vvscode/js--test-tasks/tree/master/sirion-Soft/test-task/mockups).
- url: http://test-task-api.insirion.ru/user/authorization
- метод: `POST`
- Content-Type: `application/json`
- название полей для отправки: `email, password`
- успешный HTTP статус: `200`
8. После успешной авторизации в ответ приходит token (jwt), который надо сохранить в `localStorage`.
9. На формах должна быть валидация на стороне клиента, а также вывод ошибок с сервера. Реализация валидации и способ вывода ошибок на ваше усмотрение.
10. После записи токена сделать редирект на личный кабинет. Для этого необходимо использовать роутер [vue router](https://router.vuejs.org/ru/). Структура ссылок от корня сайта:
- Авторизация: `/authorization`
- Регистрация: `/registration`
- Личный кабинет: `/cabinet`
11. При входе в личный кабинет запросить данные с:
- url: http://test-task-api.insirion.ru/user/insurance
- метод: `GET`
- в заголовок запроса (header) добавить полученный токен (token-sirion: *полученный токен*)
- успешный HTTP статус: `200`
12. В ответ придёт массив, который надо использовать для рендеринга блока страховок [макет "main base"](https://github.com/vvscode/js--test-tasks/tree/master/sirion-Soft/test-task/mockups). По названиям полей в массиве можно понять что куда вставлять.
13. В блоках должно быть реализовано поведение как [в макете "GUI"](https://github.com/vvscode/js--test-tasks/tree/master/sirion-Soft/test-task/mockups).
14. Сделать адаптивную вёрстку как на макетах [Mobile, Tablet](https://github.com/vvscode/js--test-tasks/tree/master/sirion-Soft/test-task/mockups). Использовать `flexbox`.
15. Дополнительное задание: сделать анимацию перехода от формы авторизации к форме регистрации (подсказка: искать в документации роутера).
-----------
Примечание:
- Для валидации и вывода ошибок можно использовать бибилиотеки `Vue.js`. Каталоги библиотек `Vue.js`: [awesome-vue](https://github.com/vuejs/awesome-vue), [vue-curated](https://curated.vuejs.org/).
- Всю вёрстку писать самим, т. е. не использовать ui библиотеки. Возможно написание как чистого `css`, так и через препроцессоры.