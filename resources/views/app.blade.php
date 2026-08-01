<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="{{ asset('assets/css/all.css') }} ">

    <!-- Core stylesheet -->
    @vite('resources/css/app.css')
    @inertiaHead

</head>
<body class="font-se antialiased">

<!-- Inertia.js root element -->
@inertia

<!-- Core JavaScript -->
@vite('resources/js/app.js')

</body>
</html>
