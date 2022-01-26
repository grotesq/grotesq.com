import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { THUMBNAIL_INFOS } from '../../public/galleryInfos';

const GalleryContainer = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  padding-top: 3.75rem;
  padding-bottom: 5rem;
  font-size: 1.25rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    font-size: 0.875rem;
  }
`;

function GalleryItem({ src, title, url }: { src: string | StaticImageData; title: string; url: string }) {
  return (
    <div>
      {url !== '' ? (
        <a href={url} target="_blank" title={title} rel="noreferrer noopener">
          <Image src={src} />
          <p className="pt-5">{title}</p>
        </a>
      ) : (
        <div onClick={() => alert('컨텐츠 준비중입니다 :)')}>
          <Image src={src} />
          <p className="pt-5">{title}</p>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const router = useRouter();
  return (
    <GalleryContainer>
      <div className="grid sm:grid-cols-3 gap-x-5 gap-y-8 sm:gap-y-16 ">
        {router.pathname === '/'
          ? THUMBNAIL_INFOS.slice(0, 6).map((thumb) => (
              <GalleryItem src={thumb.src} title={thumb.title} key={thumb.title} url={thumb.url} />
            ))
          : THUMBNAIL_INFOS.map((thumb) => (
              <GalleryItem src={thumb.src} title={thumb.title} key={thumb.title} url={thumb.url} />
            ))}
      </div>
    </GalleryContainer>
  );
}
