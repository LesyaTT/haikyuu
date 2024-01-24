# HAIKYUU
Тестовый проект на стеке **Laravel/ReactJS/Tailwind**

## Как развернуть проект локально:
```
git clone https://github.com/LesyaTT/haikyuu.git
npm install
```
**Затем внесите изменения в файл .env:**

DB_CONNECTION=*измените это значение*  
DB_HOST=*измените это значение*  
DB_PORT=*измените это значение*  
DB_DATABASE=*измените это значение*  
DB_USERNAME=*измените это значение*  
DB_PASSWORD=*измените это значение*

```
php artisan migrate
php artisan db:seed
npm run dev
php artisan serve
```
