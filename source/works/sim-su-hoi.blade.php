@php
    $activeType = 'works';

    $title = '전설은 살아있다 : 40년 우정을 낚다, 심수회';
    $metaDescription = '한국을 대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는 공통의 매개체를 통해 돌아보는 전시 입니다.';
    $ogTitle = '전설은 살아있다 : 40년 우정을 낚다, 심수회';
    $ogType = 'exhibition';
    $ogUrl = 'https://www.grotesq.com/works/sim-su-hoi/';
    $ogImage = 'https://www.grotesq.com/assets/images/works/sim-su-hoi/sim-su-hoi-cover.png';

    $ogImageWidth = 1280;
    $ogImageHeight = 720;
    $ogDescription = '한국을 대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는 공통의 매개체를 통해 돌아보는 전시 입니다.';
@endphp

@extends('_layouts.master')

@section('body')
    <div class="gq-section gq-section--dark">
        <h1><span>전설은 살아있다 : 40년 우정을 낚다, 심수회</span></h1>

        <div class="container">
            <div class="gq-youtube-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BiRXyN8VRt0?rel=0" frameborder="0"
                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>

            <p class="mt-5">
                제 19회 부천국제 만화축제 에서 진행한 전시 프로젝트입니다.
                한국을 대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는 공통의 매개체를 통해 돌아보는 전시를 기획했습니다.<br/>
            </p>
        </div>
    </div>
    <div class="gq-section">
        <div class="container">
            <p class="text-center">
                <img src="../../assets/images/works/sim-su-hoi/sim-su-hoi-poster.jpg" alt="" class="gq-image-landscape">
            </p>
        </div>
    </div>
    <div class="gq-section gq-section--dark">
        <div class="container">
            <p>
                전시 기획, 디자인을 총괄했으며, FTV와 협업하여 '<a href="https://www.youtube.com/watch?v=AChEDeZWdtY" target="_blank">낚시인피플</a>'도
                함께 기획했습니다.
            </p>
            <div class="gq-youtube-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AChEDeZWdtY" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
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
                            Exhibition
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li>Managing Direct</li>
                                <li>Exhibition Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
