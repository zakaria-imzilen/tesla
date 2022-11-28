import Footer from "./components/Footer";
import {
  model3Img,
  model4Img,
  modelSImg,
  modelXImg,
} from "./components/images";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import createScrollSnap from "scroll-snap";
import { useEffect } from "react";

const Home = () => {
  const scrollSnap = () => {
    createScrollSnap(document.getElementsByTagName(`main`)[0], {
      snapDestinationY: "100%",
    });
  };

  useEffect(() => {
    scrollSnap();
  }, []);

  const sectionsData = [
    { id: 1, title: "Modal 3", img: model3Img },
    { id: 2, title: "Modal 4", img: model4Img },
    { id: 3, title: "Modal X", img: modelXImg },
    { id: 4, title: "Modal S", img: modelSImg },
  ];

  return (
    <main>
      <Navbar menuSte={true} />
      {sectionsData.map((section) => (
        <Section data={section} key={section.id} />
      ))}
      <Footer />
    </main>
  );
};

export default Home;
