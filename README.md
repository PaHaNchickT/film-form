# MVP Приложение "Производственные параметры фильма"

![promo](https://github.com/user-attachments/assets/3391ad77-606a-4a5c-a875-89407d951ddd)

Деплой: [https://film-form-mu.vercel.app/](https://film-form-mu.vercel.app/)

## Описание

- Данный MVP проект представляет собой клиентскую часть приложения для заполнения производственных параметров фильма;
- Форма воссоздана согласно макету, предоставленному в Figma;
- Форма адаптивная и максимально соответствует дизайну;
- Реализована проверка типов данных для всех необходимых полей;
- Валидация полей и работа выпадающих списков интуитивны и корректны.
- Написанный код чистый и структурированный, в будущем его будет легко поддерживать и развивать.

## Особенности

1. Кнопка «Следующий шаг» неактивна, пока обязательные поля не заполнены и не прошли валидацию. После выполнения всех условий она становится активной;
2. Все введенные данные сохраняются в LocalStorage при нажатии на кнопку «Следующий шаг». Данные загружаются при перезагрузке страницы, позволяя продолжить с того места, где пользователь остановился;

## Технологический стек

При разработке проекта использовались следующие технологии:

- **TypeScript и React** - для разработки;
- **Next.js** - для реализации SSR;
- **NextUI** - в качестве библиотеки компонентов;
- **TailWind** - для стилизации;
- **React Hook Form и Zod** - для реализации формы и её валидации;
- **ESLint, Prettier и Husky** - для линтинга и форматирования.

## Инструкции по запуску проекта локально

1. Установите Node.js
2. "Форкните" данный репозиторий: https://github.com/PaHaNchickT/film-form
3. Склонируйте только что созданный репозиторий: `https://github.com/<%your_github_username%>/film-form/`
4. Перейдите в папку `film-form`
5. Чтобы установить все зависимости, используйте `npm install`
6. Для запуска локального сервера используйте `npm run dev`
7. Проект запущен успешно!

## Руководство по скриптам

- `npm run dev` запускает локальный сервер в режиме разработки;
- `npm run start` запускает локальный сервер в режиме продакшена;
- `npm run lint` запускает линтер для проверки файлов;
- `npm run format:fix` запускает форматирование файлов;
- `npm run prepare` запускает выполнение локальных хуков husky;
- `npm run export` экспортирует приложение в статический HTML.

