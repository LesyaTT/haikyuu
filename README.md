# HAIKYUU
Тестовый проект на стеке **Laravel/ReactJS/Tailwind**

## Как развернуть проект локально:
```
git clone https://github.com/LesyaTT/haikyuu.git
npm install
```
Затем внести изменения в файл .env:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

```
php artisan migrate
php artisan db:seed
npm run dev
php artisan serve
```
