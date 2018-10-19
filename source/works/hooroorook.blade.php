@php
    $activeType = 'works';

    $title = '아이유의 후루룩 칼국수';
    $metaDescription = '인터렉티브 무비 컨텐츠였던 아이유의 후루룩 칼국수 프로젝트를 진행했습니다.';
    $ogTitle = '아이유의 후루룩 칼국수';
    $ogType = 'website';
    $ogUrl = 'https://www.grotesq.com/works/hooroorook/';
    $ogImage = 'https://www.grotesq.com/assets/images/works/thumbnail/hooroorook.jpg';

    $ogImageWidth = 1000;
    $ogImageHeight = 500;
    $ogDescription = '인터렉티브 무비 컨텐츠였던 아이유의 후루룩 칼국수 프로젝트를 진행했습니다.';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>아이유의 후루룩 칼국수</span></h1>

        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/hooroorook/hrr-screen-1(1600-559).png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                농심에서 진행한 아이유의 후루룩 칼국수 프로모션 프로젝트를 진행했습니다.<br>
                대규모 트래픽이 예상되어 미리 로드밸런싱 처리를 진행했고, 프로모션 첫날에만 100만명이 넘는 사용자들이 몰렸지만 원활하게 서비스 되었습니다.
            </p>
        </div>
    </div>

    <div class="gq-section">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/hooroorook/hrr-screen-7(1600-847).png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                사용자의 입력이 컨텐츠에 반영되는 인터렉티브 무비 형태로 작업되었습니다.<br>
                사진 등을 영상에 실시간으로 합성하기 위한 VFX 기술등이 도입되었습니다.<br>
                영상에 대한 빠른 처리를 위해 AVM 기반의 Action Script 3.0으로 개발 되었습니다.
            </p>

        </div>
    </div>

    <div class="gq-section gq-section--dark">
        <div class="container">
            <div class="text-center">
                <img src="/assets/images/works/hooroorook/hrr-screen-8.png" alt="" class="gq-image-landscape">
            </div>

            <p class="mt-5">
                박보검님의 풋풋한 모습들도 볼 수 있습니다.
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
                                <li>Code Igniter</li>
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
                                <li>Flash</li>
                                <li>Action Script 3.0</li>
                                <li>VFX</li>
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
                                <li>Hardware Load Balancing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
