import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeFeatures } from "@/components/sections/home/HomeFeatures";
import { HomeServices } from "@/components/sections/home/HomeServices";
import { HomeJourney } from "@/components/sections/home/HomeJourney";
import { HomeVision } from "@/components/sections/home/HomeVision";
import { HomeEnvironment } from "@/components/sections/home/HomeEnvironment";
import { HomeTeam } from "@/components/sections/home/HomeTeam";
import { HomeNews } from "@/components/sections/home/HomeNews";

/**
 * Homepage de Centreaa (Maquette V1)
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomeJourney />
      <HomeVision />
      <HomeEnvironment />
      <HomeTeam />
      <HomeNews />
    </>
  );
}
