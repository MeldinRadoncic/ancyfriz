import Layout from "../Layout/Layout";

import HeroBanner from "./HeroBanner";
import WhyChooseUs from "./WhyChooseUs";
import OurServices from './OurServices'

const LandingPage = () => {
  return (
    <>
    <Layout>

      <HeroBanner />
      <WhyChooseUs />
      <OurServices />
    </Layout>
    </>
  );
};

export default LandingPage;
