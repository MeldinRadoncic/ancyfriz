import Layout from "../Layout/Layout";

import HeroBanner from "./HeroBanner";
import OurServices from './OurServices'
import OurCommitment from './OurCommitment'
import Gallery from './Gallery'

const LandingPage = () => {
  return (
    <>
    <Layout>

      <HeroBanner />
      <OurServices />
      <OurCommitment />
      <Gallery />
    </Layout>
    </>
  );
};

export default LandingPage;
