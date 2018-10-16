@php
    $activeType = 'works';

    $title = 'Welaaa App 2.0';
    $metaDescription = '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다. React Native, Firebase, Native 연동';
    $ogTitle = 'Welaaa App 2.0';
    $ogType = 'website';
    $ogUrl = 'https://grotesq.com/works/welaaa-app-v2/';
    $ogImage = 'https://grotesq.com/assets/images/works/welaaa-app-v2/welaaa-app.png';

    $ogImageWidth = 1656;
    $ogImageHeight = 1096;
    $ogDescription = '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다. React Native, Firebase, Native 연동';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>Welaaa App 2.0</span></h1>

        <div class="container">
            <div class="text-center">
                <img class="gq-image-portrait" src="/assets/images/works/welaaa-app-v2/welaaa-1.png" alt="">
                <img class="gq-image-portrait d-none d-md-inline" src="/assets/images/works/welaaa-app-v2/welaaa-2.png" alt="">
                <img class="gq-image-portrait" src="/assets/images/works/welaaa-app-v2/welaaa-3.png" alt="">
            </div>

            <p class="mt-5">
                (주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다.<br>
                기존의 웹뷰 하이브리드 방식에서 네이티브 방식으로 전면 개편했습니다.
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
                            Application
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>React Native</li>
                                <li>MobX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
