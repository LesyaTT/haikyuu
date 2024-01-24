# HAIKYUU
Тестовый проект на стеке **Laravel/ReactJS/Tailwind**

## Как развернуть проект локально:
```
git clone https://github.com/LesyaTT/haikyuu.git
npm install
```
**Затем внести изменения в файл .env:**

DB_CONNECTION=mysql__
DB_HOST=127.0.0.1__
DB_PORT=3306__
DB_DATABASE=laravel__
DB_USERNAME=root__
DB_PASSWORD=

```
php artisan migrate
php artisan db:seed
npm run dev
php artisan serve
```
