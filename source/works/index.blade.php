@php
    $activeType = 'works';

    $title = 'Our Works';
    $metaDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';
    $ogTitle = 'Our Works';
    $ogType = 'website';
    $ogUrl = 'https://www.grotesq.com/works/';
    $ogDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark" style="min-height: 100vh">
        <h1><span>Our Works</span></h1>

        <div class="container">
            <ul class="list-unstyled row gq-works">
                <li class="col-sm-6 col-md-4">
                    <div class="gq-works__list-item">
                        <a href="/works/welaaa-app-v2/">
                            <div class="gq-works__thumbnail" style="background-image: url('/assets/images/works/thumbnail/welaaa-app-v2.png')"></div>
                            <div class="gq-works__contents">
                                <div class="gq-works__title">스마트 러닝 서비스 윌라 2.0 리뉴얼</div>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="col-sm-6 col-md-4">
                    <div class="gq-works__list-item">
                        <a href="/works/welaaa-web/">
                            <div class="gq-works__thumbnail" style="background-image: url('/assets/images/works/thumbnail/welaaa-web.png')"></div>
                            <div class="gq-works__contents">
                                <div class="gq-works__title">스마트 러닝 윌라 웹 서비스</div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
@endsection
