import Section from "../../components/UI/Section";
import Footer from "../../components/footer/Footer.jsx";
import Search from "../../components/search/Search";
import Cities from "./components/cities/Cities";
import FormSubscribe from "./components/form/FormSubscribe";
import HotelTypes from "./components/hotelTypes/HotelTypes";
import Hotels from "./components/hotels/Hotels";
import TopBanner from "./components/topBanner/TopBanner";
const Home = () => {
  return (
    <div style={{ minHeight: "1000px" }}>
      {/* Top banner */}
      <Section style={{ backgroundColor: "#003580" }}>
        <TopBanner />
        <Search />
      </Section>
      {/* Cities */}
      <Section style={{ marginTop: "70px" }}>
        <Cities />
      </Section>
      {/* Types */}
      <Section>
        <HotelTypes />
      </Section>
      {/* Hotels */}
      <Section>
        <Hotels />
      </Section>
      {/* Form */}

      <Section style={{ backgroundColor: "#003580" }}>
        <FormSubscribe />
      </Section>
      {/* Footer */}
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export default Home;
