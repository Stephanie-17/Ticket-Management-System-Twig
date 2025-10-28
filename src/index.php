<?php
require_once __DIR__ . '/../vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');
$twig = new \Twig\Environment($loader);

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($uri) {
    case '/':
    case '/index.php':
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