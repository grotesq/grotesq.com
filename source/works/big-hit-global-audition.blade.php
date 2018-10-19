@php
    $activeType = 'works';

    $title = 'Big Hit Global Audition';
    $metaDescription = '빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.';
    $ogTitle = 'Big Hit Global Audition';
    $ogType = 'website';
    $ogUrl = 'https://www.grotesq.com/works/big-hit-global-audition/';
    $ogImage = 'https://www.grotesq.com/assets/images/works/big-hit-global-audition/bighit-user-1.png';

    $ogImageWidth = 1600;
    $ogImageHeight = 1067;
    $ogDescription = '빅히트 엔터테인먼트의 글로벌 오디션 사이트. QR코드를 이용한 접수 자동화 시스템을 구축했습니다.';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>Big Hit Global Audition</span></h1>

        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/big-hit-global-audition/bighit-user-1.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                빅히트 엔터테인먼트의 글로벌 오디션 사이트를 구축했습니다.<br>
                전세계를 대상으로 하는 사이트인 만큼 글로벌 CDN을 구축하고 다국어를 적용했습니다.<br>
                반응형 웹사이트로 사용자들이 손쉽게 오디션을 접수하고 확인하고 참여할 수 있습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <img src="/assets/images/works/big-hit-global-audition/bighit-user-2_3.png" alt="" class="gq-image-landscape">

            <p class="mt-5">
                기존의 오디션은 이메일로 워드 파일을 받아 담당자가 손으로 정리하는 시스템으로 많은 인력 리소스가 필요했고 실수할 확률이 높았습니다.<br>
                신규 시스템에서는 문서 작업 없이 사용자가 바로 신청할 수 있도록 하고, 신청서는 관리자가 쉽게 조회가 가능하며, 오디션 현장에서도 QR 코드를 이용해
                빠르게 접수 내용을 조회하고 등록할 수 있도록 했습니다.
            </p>

            <p>
                
            </p>
        </div>
    </div>

    <div class="gq-section gq-section--dark">
        <div class="container">
            <img src="/assets/images/works/big-hit-global-audition/bighit-admin-2.png" alt="" class="gq-image-landscape">
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
                                <li>Symphony Framework</li>
                                <li>Laravel Libraries</li>
                                <li>i18n for PHP</li>
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
                                <li>React</li>
                                <li>React Dynamic Loader</li>
                                <li>i18n for Javascript</li>
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
                                <li>Cloud Front with S3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
