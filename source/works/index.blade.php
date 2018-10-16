@php
    $activeType = 'works';

    $title = 'Our Works';
    $metaDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';
    $ogTitle = 'Our Works';
    $ogType = 'website';
    $ogUrl = 'https://grotesq.com/works/';
    $ogDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark" style="min-height: 100vh">
        <h1><span>Our Works</span></h1>

        <div class="container">
            <ul>
                <li><a href="/works/welaaa-app-v2/">스마트 러닝 서비스 윌라 2.0 리뉴얼</a></li>
                <li><a href="/works/welaaa-web/">스마트 러닝 윌라 웹 서비스</a></li>
            </ul>
        </div>
    </div>
@endsection
