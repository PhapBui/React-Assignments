import { useEffect } from "react";
import { useDispatch } from "react-redux";
import hotelApi from "../../api/hotelApi";
import Section from "../../components/UI/Section";
import Search from "../../components/search/Search";
import { hotelActions } from "../../features/hotelSlice";
import Cities from "./components/cities/Cities";
import FormSubscribe from "./components/form/FormSubscribe";
import HotelTypes from "./components/hotelTypes/HotelTypes";
import Hotels from "./components/hotels/Hotels";
import TopBanner from "./components/topBanner/TopBanner";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await hotelApi.getAll();
        if (res.status === 0) throw new Error(res.message);

        dispatch(hotelActions.getAllHotel(res.result));
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotel();
  }, [dispatch]);

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
    </div>
  );
};

export default Home;
