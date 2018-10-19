@php
    $activeType = 'works';

    $title = '짐카: 이사 말고 짐카';
    $metaDescription = '1인 가구 이사 서비스 짐카 서비스를 개발했습니다.';
    $ogTitle = '짐카: 이사 말고 짐카';
    $ogType = 'website';
    $ogUrl = 'https://www.grotesq.com/works/zimcar/';
    $ogImage = 'https://www.grotesq.com/assets/images/works/thumbnail/zimcar.png';

    $ogImageWidth = 1000;
    $ogImageHeight = 500;
    $ogDescription = '1인 가구 이사 서비스 짐카 서비스를 개발했습니다.';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>짐카</span></h1>

        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/zimcar/zc-3.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                1인 가구 이사 서비스를 제공하는 짐카의 서비스를 개발했습니다.<br>
                Typeform으로 신청받아 스프레드시트로 수기 관리를 하는 형태를 고도화해 신청부터 배차까지 전산화하고 많은 부분을 자동화했습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/zimcar/zc-2.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                AngularJS로 개발되어 Cordova로 패키징 되었습니다.<br>
                백엔드는 Laravel로 구축되었고 MongoDB에 데이터를 누적해 데이터 분석에 활용됩니다.
            </p>
        </div>
    </div>

    <div class="gq-section gq-section--dark">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/zimcar/zc-1.png" alt="" class="gq-image-landscape">
            </div>
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
                                <li>Laravel Framework</li>
                                <li>MongoDB</li>
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
                                <li>AngularJS</li>
                                <li>Cordova</li>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
