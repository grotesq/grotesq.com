@php
if( !isset( $activeType ) ) {
    $activeType = '';
}
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>그로테스큐 스튜디오 || Studio GrotesQ</title>
    <link href="https://fonts.googleapis.com/css?family=Gothic+A1|Poiret+One" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
</head>
<body>

<nav class="gq-nav navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
        <img src="/assets/images/logo-small.png" class="gq-nav__logo-image" alt="그로테스큐 스튜디오">
    </a>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item @if( $activeType === 'works' ) active @endif">
                <a class="nav-link" href="/works">Works</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="mailto:unknown@grotesq.com">Contact</a>
            </li>
        </ul>
    </div>
</nav>

@yield('body')

</body>
</html>
