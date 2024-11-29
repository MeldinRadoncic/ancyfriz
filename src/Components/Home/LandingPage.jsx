import Layout from "../Layout/Layout";

import HeroBanner from "./HeroBanner";
import OurServices from './OurServices'
import OurCommitment from './OurCommitment'
import Gallery from './Gallery'
import OurProducts from './OurProducts'
import AboutFounder from "./AboutFounder";
import OurTestimonials from "./OurTestimonials";
import CTA from './CTA'

const LandingPage = () => {
  return (
    <>
    <Layout>

      <HeroBanner />
      <OurServices />
      <OurCommitment />
      <Gallery />
      <OurProducts />
      <AboutFounder />
      <OurTestimonials />
      <CTA />
    </Layout>
    </>
  );
};

export default LandingPage;
