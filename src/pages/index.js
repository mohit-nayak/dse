import * as React from 'react';
import MainLayout from '../layouts/mainLayout';
import FeaturesGrid from '../components/sections/FeaturesGrid/FeaturesGrid';
import HeroBanner from '../components/sections/HeroBanner/HeroBanner';
import TestimonialSlider from '../components/sections/TestimonialSlider/TestimonialSlider';
import Pricing from '../components/sections/Pricing/Pricing';
import CustomPlan from '../components/sections/CustomPlan/CustomPlan';
import ContactMe from '../components/sections/ContactMe1/ContactMe1';
import WhyMe from '../components/sections/WhyMe/WhyMe';
import FAQ from '../components/sections/FAQ/FAQ';

const IndexPage = () => {
    return (
        <MainLayout>
            <title>DSE</title>

            <HeroBanner />
            <FeaturesGrid />
            <TestimonialSlider />
            <Pricing />
            <CustomPlan/>
            <ContactMe />
            <WhyMe />
            <FAQ />
        </MainLayout>
    )
}

export default IndexPage
