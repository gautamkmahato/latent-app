import React from 'react'
import PrivacyPolicy from './_components/PrivacyPolicy'
import UpgradeSection from '../_components/UpgradeSection'

export default function page() {
    return (
        <>
            <PrivacyPolicy />
            <div className='px-14'>
                <UpgradeSection />
            </div>
        </>
    )
}
