## Задание
Страница новостей с заголовками новости, использование TailwindCss. Корректная верстка и расположение элементов. На данной странице перечислены все новости из Postgresql с помощью Prisma. Prisma seeding. Использование компонентов, а не формирование всех элементов в Page.tsx. Динамические пути к конкретной новости, на которой отображается заголовок новости и ее описание, дата, необязательное изображение.

## Скриншот

![](https://github.com/Zhastik/zhaslan_dusaev_20421_news/blob/main/News.gif)

![alt text](https://github.com/Zhastik/zhaslan_dusaev_20421_news/blob/main/home.png)

![alt text](https://github.com/Zhastik/zhaslan_dusaev_20421_news/blob/main/page.png)

## Пояснение

app - основная директория домашней страницы, laylout - общие части всех страниц, page - отдельный tsx файл отвечающий за вёрстку каждого сайта

prisma - ORM, создание schema для базы данных, prisma client - для связи с бд, seed - для первых пунктов заполнения бд

dockerfile and docker compose - для создания контейнера с проектом