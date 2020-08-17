<!DOCTYPE html>
<html class="h-full bg-gray-200">

<head>
    <meta name="google-site-verification" content="YaB_jTNZLF2t2QpnlxClsRe4wPNErPKLIck4NzGXtqE" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    <title>Testando InertiaJS</title>

    @if(isset($page['props']['event']))
    <meta name="author" content="{{ $page['props']['event']->author }}" />
    <meta name="keywords" content="{{ $page['props']['event']->keywords }}" />
    <meta name="description" content="{{ $page['props']['event']->description }}" />

    <meta property="og:type" content="{{ $page['props']['event']->type }}" />
    <meta property="og:title" content="{{ $page['props']['event']->title }}" />
    <meta property="og:description" content="{{ $page['props']['event']->description }}" />
    <meta property="og:image" content="{{ $page['props']['event']->image }}" />
    <meta property="og:url" content="{{ $page['props']['event']->url }}" />
    <meta property="og:site_name" content="{{ $page['props']['event']->site_name }}" />

    <meta name="twitter:url" content="{{ $page['props']['event']->url }}">
    <meta name="twitter:title" content="{{ $page['props']['event']->title }}">
    <meta name="twitter:description" content="{{ $page['props']['event']->description }}">
    <meta name="twitter:image" content="{{ $page['props']['event']->image }}">
    @else
    <meta name="author" content="" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />

    <meta property="og:type" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta property="og:site_name" content="" />

    <meta name="twitter:url" content="">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    @endif

    {{-- Inertia --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign" defer></script>

    {{-- Ping CRM --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.startsWith" defer></script>

    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes
</head>

<body class="font-sans leading-none text-gray-700 antialiased">

    @inertia

</body>

</html>