<?php
// Since index.php is now in src/, paths change:
require_once __DIR__ . '/../vendor/autoload.php';

$cacheDir = __DIR__ . '/../cache';
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0755, true);
}

// Templates are now in the same directory (src/templates)
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
$twig = new \Twig\Environment($loader, [
    'cache' => $cacheDir,
    'auto_reload' => true
]);

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

switch ($uri) {
    case '/':
        echo $twig->render('pages/landing.twig', ['show_navbar' => true]);
        break;
    case '/sign-up':
        echo $twig->render('pages/auth-form.twig', ['show_navbar' => true]);
        break;
    case '/dashboard':
        echo $twig->render('pages/dashboard.twig', ['show_navbar' => false]);
        break;
    case '/tickets':
        echo $twig->render('pages/ticket-management.twig', ['show_navbar' => false]);
        break;
    default:
        http_response_code(404);
        echo $twig->render('pages/404.twig', ['show_navbar' => true]);
        break;
}