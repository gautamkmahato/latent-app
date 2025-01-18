import React from 'react'
import StarsGallery from './_components/StarsGallery'
import UpgradeSection from '../_components/UpgradeSection';

export default function page() {
    return (
        <>
            <StarsGallery />
            <div className='px-14'>
                <UpgradeSection />
            </div>
        </>
    )
}
