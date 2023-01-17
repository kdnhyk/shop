import Image from "next/image";
import styled from "styled-components";

const CarouselBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  img {
    width: 100%;
  }
`;

interface IsCarousel {
  images: { id: string; src: string; alt: string }[];
}

export default function Carousel({ images }: IsCarousel) {
  return (
    <CarouselBlock>
      {images.map((img) => {
        return (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={200}
            height={200}
          ></Image>
        );
      })}
    </CarouselBlock>
  );
}
