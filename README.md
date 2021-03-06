**Запуск**  
`yarn install`  
`npm run build`  
`npm run start`

**О задании** 
1. Бд SQLite  
2. Не используются готовые компоненты/либы для работы непосредственно с таблицами  
3. Что такое плагины для валидации? И для чего их тут можно использовать? Или это так статические анализаторы названы?  
4. Используется https://www.npmjs.com/package/sqlite3, не ОРМ.
5. На верселе не работает чтение из файла бд, поэтому без деплоя.


Нужно разработать таблицу в формате Single Page Application.

**Требования к таблице.**

1. Таблица должна содержать 4 колонки:
    1. Дата
    2. Название
    3. Количество
    4. Расстояние
2. База данных может быть PostgreSQL
3. Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих списков и текстового поля:
    1. Выбор колонки, по которой будет фильтрация
    2. Выбор условия (равно, содержит, больше, меньше)
    3. Поле для ввода значения для фильтрации
4. Таблица должна содержать пагинацию

Вся таблица должна работать без перезагрузки страницы.

**Можно использовать:**

- Возможности Node.js
- React/Axios
- CSS библиотеки

**Нельзя использовать:**

- Библиотеки с готовыми компонентами или плагины для React, которые предоставляют готовый функционал, требуемый в задании
- Библиотеки и плагины для валидации
- Библиотеки и плагины для работы с БД, ORM
- CMS системы

**Критерии оценки:**

- Работоспособность согласно ТЗ
- Архитектура решения
- Удобство чтения кода и комментарии
- Удобство проверки
