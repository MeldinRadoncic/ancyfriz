import Layout from "../Layout/Layout";

import HeroBanner from "./HeroBanner";
import OurServices from './OurServices'
import OurCommitment from './OurCommitment'

const LandingPage = () => {
  return (
    <>
    <Layout>

      <HeroBanner />
      <OurServices />
      <OurCommitment />
    </Layout>
    </>
  );
};

export default LandingPage;
