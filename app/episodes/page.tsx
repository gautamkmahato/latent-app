import UpgradeSection from '../_components/UpgradeSection'
import EpisodesList from './_components/EpisodesList'
import PremiumEpisodesList from './_components/PremiumEpisodesList'

export default function page() {
    return (
        <>
            <EpisodesList />
            <PremiumEpisodesList />
            <div className='px-14'>
                <UpgradeSection />
            </div>
        </>
    )
}
