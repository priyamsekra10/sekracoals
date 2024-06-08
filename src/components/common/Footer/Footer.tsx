import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import DesktopNavigationLink from "@/components/common/Navigation/DesktopNavigation/DesktopNavigationLink/DesktopNavigationLink";
import navigationLinks from "@/data/navigationLinks.json";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 pb-[2.37rem] pt-[3.25rem] text-neutral-100 sm:pb-[2.88rem] sm:pt-[3.75rem] 2xl:pb-[3rem] 2xl:pt-[4.69rem]">
      <Container>
        <span className="absolute left-1/2 top-0 block h-[0.25rem] w-[6.3125rem] -translate-x-1/2 bg-orange sm:left-[unset] sm:-translate-x-0"></span>
        <div className="flex flex-col items-center sm:items-stretch">
          <div className="flex flex-col items-center gap-12 sm:items-start sm:justify-between sm:gap-8 lg:flex-row">
            <div className="text-neutral-400 text-4xl ">
              SEKRA COALS
            </div>
            <ul className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <DesktopNavigationLink href={link.href}>
                    {link.name}
                  </DesktopNavigationLink>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-12 text-center text-base opacity-50 sm:mt-8 sm:text-left lg:max-w-[33.75rem]">
            Sekra Trading Company

          </p>
          <div className="mt-12 flex flex-col justify-between gap-12 sm:flex-row sm:gap-0 lg:mt-20 2xl:mt-12">
            <p className="text-center text-base font-bold opacity-50">
              Copyright 2024. All Rights Reserved
            </p>

          </div>
        </div>
      </Container>
    </footer>
  );
}
