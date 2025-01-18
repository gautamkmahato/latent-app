import EpisodeCard from "./LatentEpisodes";
import Footer from "./Footer";
import Hero from "./Hero";
import LockedCard from "./PremiumEpisodesList";
import MobileApp from "./MobileAppSection";
import Navbar from "./Navbar";
import UpgradeSection from "./UpgradeSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="">
        <Hero />

        <EpisodeCard />

        <div className="px-16">
          <UpgradeSection />
        </div>
          <LockedCard />
        <div className="px-16">
          <MobileApp />
        </div>
      </div>
    </div>
  );
};

export default Index;
