import Footer from "./components/Footer";
import {
  model3Img,
  modelYImg,
  modelSImg,
  modelXImg,
} from "./components/images";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import createScrollSnap from "scroll-snap";
import { useEffect } from "react";

const Home = () => {
  const scrollSnap = () => {
    createScrollSnap(document.getElementById("home-main"), {
      snapDestinationY: "100%",
    });
  };

  useEffect(() => {
    scrollSnap();
  }, []);

  const sectionsData = [
    { id: 1, title: "Model 3", img: model3Img, urlName: "model3" },
    { id: 2, title: "Model Y", img: modelYImg, urlName: "modely" },
    { id: 3, title: "Model X", img: modelXImg, urlName: "modelx" },
    { id: 4, title: "Model S", img: modelSImg, urlName: "models" },
  ];

  return (
    <main id="home-main">
      <Navbar menuSte={true} homePage={true} />
      {sectionsData.map((section) => (
        <Section data={section} key={section.id} />
      ))}
      <Footer />
    </main>
  );
};

export default Home;
