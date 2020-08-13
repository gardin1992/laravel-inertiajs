<!DOCTYPE html>
<html class="h-full bg-gray-200">

<head>
    <meta name="google-site-verification" content="YaB_jTNZLF2t2QpnlxClsRe4wPNErPKLIck4NzGXtqE" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    {{-- Inertia --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign" defer></script>

    {{-- Ping CRM --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.startsWith" defer></script>

    <script src="{{ mix('/js/app.js') }}" defer></script>

    <title>Testando InertiaJS</title>
    <meta name="description" content="Testando InertiaJS - Testando o Laravel Mais InertiaJS" />
    <meta name="keywords" content="laravel, inertiaJs, testando" />
    <meta name="robots" content="all" />
    <meta name="language" content="pt-br" />
    <meta name="author" content="João Antonio Gardin Vieira" />

    <meta property="og:title" content="Testando InertiaJS" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Testando InertiaJS - Testando o Laravel Mais InertiaJS" />
    <meta property="og:image" content="https://pacific-retreat-74728.herokuapp.com/imageteste.png" />
    <meta property="og:url" content="https://pacific-retreat-74728.herokuapp.com/" />
    <meta property="og:site_name" content="50 dicas " />

    <meta name="twitter:url" content="https://pacific-retreat-74728.herokuapp.com/">
    <meta name="twitter:title" content="Testando InertiaJS">
    <meta name="twitter:description" content="Testando InertiaJS - Testando o Laravel Mais InertiaJS">
    <meta name="twitter:image" content="https://pacific-retreat-74728.herokuapp.com/imageteste.png">
    
    @routes
</head>

<body class="font-sans leading-none text-gray-700 antialiased">

    @inertia

</body>

</html>