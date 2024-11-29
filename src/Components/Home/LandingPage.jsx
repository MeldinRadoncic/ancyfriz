import Layout from "../Layout/Layout";

import HeroBanner from "./HeroBanner";
import OurServices from './OurServices'
import OurCommitment from './OurCommitment'
import Gallery from './Gallery'
import OurProducts from './OurProducts'
import AboutFounder from "./AboutFounder";

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
    </Layout>
    </>
  );
};

export default LandingPage;
