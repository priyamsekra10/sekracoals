import AudioGearSection from "@/components/common/AudioGearSection/AudioGearSection";
import CategorySection from "@/components/common/CategorySection/CategorySection";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import Yx1EarphonesSection from "@/components/home/Yx1EarphonesSection/Yx1EarphonesSection";
import Yx1EarphonesSection2 from "@/components/home/Yx1EarphonesSection2/Yx1EarphonesSection2";
import Yx1EarphonesSection3 from "@/components/home/Yx1EarphonesSection3/Yx1EarphonesSection3";
import Yx1EarphonesSection4 from "@/components/home/Yx1EarphonesSection4/Yx1EarphonesSection4";
import Yx1EarphonesSection5 from "@/components/home/Yx1EarphonesSection5/Yx1EarphonesSection5";

export default function Home() {
  return (
    <main className="pb-[7.5rem] md:pb-[6rem] xl:pb-[10rem]">
      <HeroSection className="pb-[6.875rem] pt-[calc(6.875rem+var(--navigation-height))] xl:pb-[9.875rem] xl:pt-[calc(8rem+var(--navigation-height))]" />
      <CategorySection className="mt-[5.75rem] lg:mt-[9.1875rem]" />
      <Yx1EarphonesSection className="mt-[1.5rem] md:mt-[2rem] xl:mt-[3rem]" />
      <Yx1EarphonesSection2 className="mt-[1.5rem] md:mt-[2rem] xl:mt-[3rem]" />
      <Yx1EarphonesSection3 className="mt-[1.5rem] md:mt-[2rem] xl:mt-[3rem]" />
      {/* <Yx1EarphonesSection4 className="mt-[1.5rem] md:mt-[2rem] xl:mt-[3rem]" />
      <Yx1EarphonesSection5 className="mt-[1.5rem] md:mt-[2rem] xl:mt-[3rem]" /> */}

    </main>
  );
}
