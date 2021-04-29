import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import NatureIcon from "@material-ui/icons/Nature";
import MapIcon from "@material-ui/icons/Map";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./About.css";
import AboutCard from "./AboutCard";

const About = () => {
  const aboutData = [
    {
      title: "EXPLORE THE WORLD",
      icon: LanguageIcon,
    },
    {
      title: "MEET NATURE",
      icon: NatureIcon,
    },
    {
      title: "FIND YOUR WAY",
      icon: MapIcon,
    },
    {
      title: "LIVE A HEALTHIER LIFE",
      icon: FavoriteIcon,
    },
  ];
  return (
    <div className='py-5 about-section'>
      <div className='container py-5'>
        <div className='row'>
          {aboutData.map((item, ind) => (
            <AboutCard item={item} key={ind}>
              <item.icon style={{ fontSize: 40, color: "#003133" }} />
            </AboutCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
