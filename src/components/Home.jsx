import NavBar from "./NavBar";
import Tagline from "./Tagline";
import { Card, FirstCard } from "./Card";
import Form from "./Form";
import HeroSection from "./HeroSection";
import Why from "./Why";
import Appointment from "./Appointment";
import Footer from "./Footer";
import TeamCard from "./TeamCard";
import { useRef } from "react";
import Transformation from "./Transformation";
import Events from "./Events";
export default function Home() {
  const formref = useRef();

  const Scrolltoref = () => {
    formref.current.scrollIntoView({
      behaviour: "smooth ",
    });
  };



  return (
    <>
      <NavBar Scrolltoref={Scrolltoref} />
      <HeroSection Scrolltoref={Scrolltoref}/>
      <FirstCard />
      <Tagline />
      <Card />
      <Why />
      <Transformation />
      <TeamCard />
      <Events />
      <div ref={formref}>
        <Form />
      </div>
      <Appointment />
      <Footer />
    </>
  );
}
