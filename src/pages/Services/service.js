import React, {useState} from "react";
import Hero from "../../componenets/Hero";
import Navbar from "../../componenets/Navbar";
import Foot from "../../componenets/Footer";
import Servicesvg from "../../assets/service.svg"
import HomeCard from "../../componenets/Homecard";
import Mobilesvg from "../../assets/mobile.svg"

const Services = () => {
  const [state, setState] = useState([
])
  return (
    <React.Fragment>
      <Navbar />
      <Hero title="This is our services page" subtitle="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

">
        <div
          style={{
            height: "25rem",
            width: "100%",
              background: `url(${Servicesvg}) no-repeat center/cover`
          }}
        ></div>
      </Hero>
      <section className= "section container title">
        <div className="columns">
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        </div>
        <div className="columns">
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        <HomeCard title="Mobile Responsive" subtitle="Design" img={Mobilesvg} hasBorder/>
        </div>
      </section>
      <Foot />
    </React.Fragment>
  );
};
export default Services;
