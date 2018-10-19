@php
    $activeType = 'works';

    $title = 'Series Eight';
    $metaDescription = '가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다. Laravel, Vue.js';
    $ogTitle = 'Series Eight';
    $ogType = 'website';
    $ogUrl = 'https://www.grotesq.com/works/series-eight/';
    $ogImage = 'https://www.grotesq.com/assets/images/works/series-eight/series-eight-w-1.png';

    $ogImageWidth = 1000;
    $ogImageHeight = 500;
    $ogDescription = '가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다. Laravel, Vue.js';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>Series Eight</span></h1>

        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/series-eight/series-eight-w-1.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다.<br>
                사용자들이 최대한 편하고 빠르게 가방을 검색하고 예약할 수 있도록 UX 개선에 노력했습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/series-eight/series-eight-w-2.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                반응형으로 제작되어 모든 디바이스에서 동일한 컨텐츠를 최적화된 형태로 경험할 수 있습니다.<br>
                주문/결제 화면은 Vue.js로 개발되어 번거로운 과정을 최소화하고 자연스러운 흐름으로 주문하고 결제할 수 있습니다.
            </p>
        </div>
    </div>

    <div class="gq-section gq-section--dark">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/series-eight/series-eight-admin.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                자체적으로 구축된 물류 시스템으로 운영됩니다.<br>
                배송 시스템도 자체적으로 운영하기 때문에, 배송요원과 사무담당자의 빠른 커뮤니케이션이 중요했습니다. 관리 시스템 자체도 반응형으로 구현되어 물류 상태가 실시간으로 공유될 수 있도록 구축했습니다.
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
                                <li>Laravel Framework</li>
                                <li>API Base Structure</li>
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
                                <li>Vue.js</li>
                                <li>Sass + BEM</li>
                                <li>Responsive Web</li>
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
                                <li>Kakao Biztalk</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
