@php
    $activeType = 'works';

    $title = 'Welaaa Web Service';
    $metaDescription = '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를 구축했습니다. React, next.js, Sass, SSR, AWS, Elastic Beanstalk';
    $ogTitle = 'Welaaa Web Service';
    $ogType = 'website';
    $ogUrl = 'https://grotesq.com/works/welaaa-web/';
    $ogImage = 'https://grotesq.com/assets/images/works/welaaa-web/welaaa-1.png';
    $ogDescription = '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를 구축했습니다. React, next.js, Sass, SSR, AWS, Elastic Beanstalk';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>Welaaa Web Service</span></h1>

        <div class="container">
            <img class="gq-image-landscape" src="/assets/images/works/welaaa-web/w-w-1.png" alt="">

            <p class="mt-5">
                (주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를 제작했습니다.<br>
                앱과 웹이 동일한 API를 참조하도록 설계 되었기 때문에, 웹 서비스는 웹 애플리케이션과 같은 형태로 구현 되었습니다.<br>
                React 기반의 SPA처럼 동작하면서도 SEO 대응을 위한 서버사이드 렌더링을 고려해 next.js 기반으로 구축되었습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <img class="gq-image-landscape" src="/assets/images/works/welaaa-web/welaaa-1.png" alt="">

            <p class="mt-5">
                윌라 웹 서비스는 반응형으로 구축되었습니다.<br>
                단일 컨텐츠로 스마트폰, 태블릿, 데스크탑을 모두 커버하기 때문에 유지보수 단계에서도 단일 컨텐츠 변경으로 모든 디바이스에 반영할 수 있도록 작업 되어 있습니다.<br>
                벡터 그래픽을 최대한 많이 배치했기 때문에, 고해상도 디스플레이에서도 깔끔하게 표현됩니다.
            </p>
        </div>
    </div>

    <div class="gq-section gq-section--dark">
        <div class="container">
            <img class="gq-image-landscape" src="/assets/images/works/welaaa-web/w-w-3.png" alt="">

            <p class="mt-5">
                결제는 아임포트를 이용해 구축되었습니다. 아임포트를 통해 데스크탑과 모바일에서 모두 최적화된 UX를 제공합니다.<br>
                배포는 아마존 웹서비스의 엘라스틱 빈스톡을 이용해 이루어집니다. 오토스케일링과 로드밸런서를 통해 트래픽 부하를 분산합니다.<br>
                인스턴스 롤링 배포를 통해 메인터넌스 없는 무중단 운영이 가능하도록 설계되어 있습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <h2><span>Technical Summary</span></h2>

            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-header">
                            Backend
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>next.js</li>
                                <li>ExpressJS</li>
                                <li>Server-side Rendering</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-header">
                            Frontend
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>ReactJS</li>
                                <li>MobX</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-header">
                            etc
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>Amazon Web Services</li>
                                <li>Elastic Beanstalk</li>
                                <li>Iamport Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
