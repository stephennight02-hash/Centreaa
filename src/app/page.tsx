import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeVision } from "@/components/sections/home/HomeVision";
import { HomeTeam } from "@/components/sections/home/HomeTeam";
import { HomeNews } from "@/components/sections/home/HomeNews";

/**
 * Homepage de Centreaa (Maquette V1)
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeVision />
      <HomeServices />
      <HomeTeam />
      <HomeNews />
    </>
  );
}
