# John Paul D. Arellano – Portfolio (Laravel + Inertia.js + React)

IT ELEC01 – Advanced Web Development · Midterm Laboratory Activity

My portfolio, converted from plain PHP/MySQL to **Laravel 12 + Inertia.js + React + Tailwind CSS**.
The **Gallery** section is now a full CRUD feature (`projects` table) with server-side validation.

## Requirements
- PHP 8.2+, Composer
- Node.js 20+ and npm
- SQLite (default) or MySQL via XAMPP

## Setup (fresh install)

These files sit on top of a normal Laravel project. To start from zero:

```bash
composer create-project laravel/laravel ucu-portfolio
cd ucu-portfolio
composer require inertiajs/inertia-laravel
npm install
npm install react react-dom @inertiajs/react @vitejs/plugin-react
```

Then copy every file from this repository into the project folder (overwrite when asked), and run:

```bash
php artisan migrate        # creates the projects table
php artisan storage:link   # makes uploaded images public
php artisan db:seed        # optional: adds the 3 sample projects
composer run dev           # or: php artisan serve  +  npm run dev
```

Open http://127.0.0.1:8000 for the portfolio and http://127.0.0.1:8000/projects to manage the gallery.

### Using MySQL (XAMPP) instead of SQLite
In `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=root
DB_PASSWORD=
```
Create the `portfolio_db` database in phpMyAdmin, then run `php artisan migrate`.

## Where things are
| Part | File |
|---|---|
| Migration | `database/migrations/2026_10_31_000000_create_projects_table.php` |
| Model | `app/Models/Project.php` |
| Resource controller + validation | `app/Http/Controllers/ProjectController.php` |
| Public page controller | `app/Http/Controllers/PortfolioController.php` |
| Routes | `routes/web.php` |
| Flash message sharing | `app/Http/Middleware/HandleInertiaRequests.php` (registered in `bootstrap/app.php`) |
| CRUD pages | `resources/js/Pages/Projects/Index.jsx`, `Create.jsx`, `Edit.jsx` |
| Public page | `resources/js/Pages/Portfolio.jsx` |
| Components | `resources/js/Components/` – `ProjectForm`, `FormField`, `FlashMessage`, `ConfirmDeleteModal`, `Navbar`, `Footer`, `SectionTitle`, `SkillItem`, `GalleryCard` |
| Original design | `resources/css/portfolio.css` |

## Features
- Create / list / edit / delete projects with image upload
- 7 fields with validation: required, min/max, url, date, before_or_equal, in, unique (ignores current record on update), image/mimes/max, custom messages
- Errors shown under each field; typed values kept on failed submit
- Success flash message after create, update, delete
- Delete confirmation modal
- Bonus: search and pagination on the Index page
