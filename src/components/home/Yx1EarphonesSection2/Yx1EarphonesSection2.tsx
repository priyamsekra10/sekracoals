import Button from "@/components/common/Button/Button";

import yx1EarphonesDesktop from "@/assets/home/desktop/image-earphones-yx1.jpg";
import yx1EarphonesMobile from "@/assets/home/mobile/image-earphones-yx1.jpg";
import yx1EarphonesTablet from "@/assets/home/tablet/image-earphones-yx1.jpg";
import Container from "@/components/common/Container";
import coal3 from "@/assets/home/desktop/img3.jpeg";
import coal4 from "@/assets/home/desktop/img4.jpeg";

type Yx1EarphonesSectionProps2 = {
  className?: string;
};

export default function Yx1EarphonesSection2({
  className,
}: Yx1EarphonesSectionProps2) {
  return (
    <section className={className}>
      <Container className="flex flex-col gap-[1.5rem] md:gap-[0.6875rem] lg:flex-row lg:gap-[1.875rem]">
        <div className="overflow-hidden rounded-lg lg:w-1/2">
          <picture>
            <source
              media="(min-width: 1024px)"
              width={540}
              height={320}
              srcSet={coal3.src}
            />
            <source
              media="(min-width: 640px)"
              width={678}
              height={640}
              srcSet={coal3.src}
            />
            <img
              width={654}
              height={400}
              className="h-full max-h-[12.5rem] min-h-[12.5rem] w-full object-cover lg:max-h-[20rem] lg:min-h-[20rem]"
              loading="lazy"
              src={coal3.src}
              alt="YX1 Earphones"
            />
          </picture>
        </div>
        <div className="flex h-full max-h-[12.5rem] min-h-[12.5rem] w-full flex-col items-start justify-center overflow-hidden rounded-lg bg-neutral-400 lg:max-h-[20rem] lg:min-h-[20rem] lg:w-1/2 ">

          <picture>
            <source
              media="(min-width: 1024px)"
              width={540}
              height={320}
              srcSet={coal4.src}
            />
            <source
              media="(min-width: 640px)"
              width={678}
              height={640}
              srcSet={coal4.src}
            />
            <img
              width={654}
              height={400}
              className="h-full max-h-[12.5rem] min-h-[12.5rem]  object-cover lg:max-h-[20rem] lg:min-h-[20rem]"
              loading="lazy"
              src={coal4.src}
              alt="YX1 Earphones"
            />
          </picture>

        </div>
      </Container>
    </section>
  );
}
