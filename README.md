# FlowDesk - Ticket Management System

A modern ticket management application converted from React to PHP/Twig, featuring client-side authentication and ticket management.

## 🚀 Features

- **User Authentication** - Sign up and login with client-side session management
- **Ticket Management** - Create, read, update, and delete tickets
- **Dashboard Analytics** - View ticket statistics and overview
- **Responsive Design** - Tailwind CSS for modern, mobile-friendly UI
- **Client-Side State Management** - JavaScript context for user sessions and ticket data

## 🛠 Tech Stack

- **Backend**: PHP with custom routing
- **Templating**: Twig
- **Frontend**: Vanilla JavaScript with ES6 modules
- **Styling**: Tailwind CSS + PostCSS
- **State Management**: Custom JavaScript context with localStorage
- **Package Management**: Composer (PHP) + npm (JavaScript)

## 📁 Project Structure

```
Ticket-Management/
├── src/
│   ├── js/
│   │   └── context/
│   │       ├── authContext.js      # Authentication management
│   │       ├── ticketContext.js    # Ticket state management
│   │       └── storage.js          # LocalStorage utilities
│   ├── styles/                     # CSS/styles directory
│   └── templates/
│       ├── components/
│       │   ├── navbar.twig         # Navigation component
│       │   ├── footer.twig         # Footer component
│       │   ├── create-task.twig    # Create ticket modal
│       │   └── feature-card.twig   # Feature cards for landing
│       ├── pages/
│       │   ├── landing.twig        # Homepage
│       │   ├── auth-form.twig      # Login/Signup form
│       │   ├── dashboard.twig      # User dashboard
│       │   ├── ticket-management.twig # Ticket CRUD interface
│       │   └── 404.twig            # Not found page
│       └── base.twig               # Base layout template
├── public/
│   └── index.php                   # Application entry point
├── vendor/                         # Composer dependencies
├── images/                         # Static images/assets
├── cache/                          # Twig cache directory
├── node_modules/                   # npm dependencies
├── composer.json                   # PHP dependencies
├── package.json                    # JavaScript dependencies
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

## 🚦 Getting Started

### Prerequisites

- PHP 7.4 or higher
- Composer
- Node.js and npm
- Web server (Apache/Nginx) or PHP built-in server

### Installation

1. **Clone and setup**
   ```bash
   cd Ticket-Management
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

4. **Build CSS (if using Tailwind build process)**
   ```bash
   npm run build-css
   # or if you have a watch script
   npm run dev
   ```

5. **Start development server**
   ```bash
   # Using PHP built-in server
   php -S localhost:8000 -t public
   
   # Or configure your web server to point to /public directory
   ```

6. **Access the application**
   - Open `http://localhost:8000` in your browser

## 🎯 Usage

### Authentication
- **Sign Up**: Navigate to `/sign-up` to create a new account
- **Login**: Toggle to login mode on the same page
- **Logout**: Use the logout button in dashboard/tickets pages

### Ticket Management
- **Dashboard**: View ticket statistics at `/dashboard`
- **Manage Tickets**: Full CRUD operations at `/tickets`
- **Create Tickets**: Use the "+ Create New Task" button
- **Edit/Delete**: Use action buttons on each ticket card

## 🔧 Configuration

### PHP/Twig Setup
- Main routing handled in `public/index.php`
- Templates located in `src/templates/`
- Twig cache stored in `cache/` directory

### JavaScript Context
- **Authentication**: `src/js/context/authContext.js`
- **Ticket Management**: `src/js/context/ticketContext.js`
- **Storage Utilities**: `src/js/context/storage.js`

### Styling
- Tailwind CSS configured in `tailwind.config.js`
- PostCSS processing via `postcss.config.js`
- Custom CSS properties for theming

## 🛣 Application Routes

| Route | Template | Description |
|-------|----------|-------------|
| `/` | `landing.twig` | Landing page with features |
| `/sign-up` | `auth-form.twig` | Authentication form |
| `/dashboard` | `dashboard.twig` | User dashboard with analytics |
| `/tickets` | `ticket-management.twig` | Ticket management interface |
| *404* | `404.twig` | Not found page |

## 🎨 Components

- **Navbar**: Conditional display (hidden on dashboard/tickets)
- **Footer**: Consistent footer across all pages
- **Create Task Modal**: Popup form for new tickets
- **Feature Cards**: Landing page component

## 🔒 Data Persistence

- Uses browser localStorage for data persistence
- No database required
- User data stored under `ticketapp_*` keys
- Ticket data scoped to user email

## 🚀 Deployment

### Production Setup
1. Ensure PHP environment meets requirements
2. Run `composer install --no-dev`
3. Build production CSS: `npm run build`
4. Configure web server to point to `public/` directory
5. Set proper file permissions for `cache/` directory

### Server Configuration
**Apache (.htaccess in public/):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

## 🐛 Troubleshooting

### Common Issues

**JavaScript imports failing:**
- Check file paths in import statements
- Ensure correct MIME types for `.js` files

**Twig template errors:**
- Verify `cache/` directory is writable
- Check template extends paths

**Styling not loading:**
- Verify Tailwind build process completed
- Check CSS file paths in templates

**Authentication issues:**
- Clear browser localStorage
- Check console for JavaScript errors

## 📝 Development

### Adding New Pages
1. Create template in `src/templates/pages/`
2. Add route in `public/index.php`
3. Include necessary JavaScript in template's script block

### Styling Guidelines
- Use Tailwind utility classes
- Follow existing component patterns
- Maintain responsive design

## 🤝 Contributing

1. Follow existing code structure
2. Maintain consistent Twig/JavaScript patterns
3. Test all authentication flows
4. Verify responsive behavior

## 📞 Support

Check browser console for client-side issues and PHP error logs for server-side problems.

---

## Author
FlowDesk
Developed by Stephanie
📧 [emenikesteph@gmail.com]
