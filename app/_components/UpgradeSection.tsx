import Image from 'next/image';
import check from '../../public/assets/check.png';

type UpgradeSectionProps = {};

const UpgradeSection: React.FC<UpgradeSectionProps> = () => {
  const features: string[] = [
    "Deleted footage access",
    "Members only live streams",
    "Access to all unlisted content",
    "Members only live chat",
    "Discord voice channel access"
  ];

  return (
    <div className="relative mt-24 mb-24 my-12 p-[1px] rounded-lg bg-gradient-to-r from-[#ffe785]/10 to-[#ffe785]/10">
      <div className="absolute inset-0 rounded-lg blur-xl bg-gradient-to-r from-[#ffe785]/20 via-[#ffe785]/20 to-[#ffe785]/20" />
      <div className="relative bg-customDark rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          Upgrade to <span className="bg-gradient-to-r from-[#ffe785] to-[#b4934b] text-transparent bg-clip-text">Latent+</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-6">
              Elevate your experience by becoming a premium member. Get early access to episodes
              and exclusive content!
            </p>
            <button className="bg-gradient-to-r font-semibold from-[#ffe477] via-[#ead16d] to-[#b4934b] hover:from-[#b4934b] hover:via-[#d2be6d] hover:to-[#b4934b] focus:outline-none px-6 py-3 rounded-md text-black
              hover:bg-[#C4A028] transition-colors duration-200">
              Join Latent+
            </button>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={check} alt="Check icon" className="w-8 h-8" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeSection;
