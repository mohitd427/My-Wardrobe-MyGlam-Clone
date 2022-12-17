
import { Box, Image, Show } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Banner";
import {Bestseller, BestsellerMob} from "../Components/Bestseller";
import Catagories from "../Components/Catagories";
import Check from "../Components/Check";
import MinibannerContainer from "../Components/MinibannerContainer";
import MinibannerContainer2 from "../Components/MinibannerContainer2";
import MinibannerContainer3 from "../Components/MinibannerContainer3";
import SingleImage from "../Components/SingleImage";
import Vid from "../Components/Vid";

const cards = [
  "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527.png",
  "https://files.myglamm.com/site-images/original/popxo1920x527.gif",
  "https://files.myglamm.com/site-images/original/Manish1920x527.jpg",
  "https://files.myglamm.com/site-images/original/Homepage-1920x527_3.jpeg",
];
const cards1 = [
  "https://files.myglamm.com/site-images/original/2240x614-Gifting-Store-KV-refresh.jpg",
  "https://files.myglamm.com/site-images/original/1920x527.jpg",
];

const ImageContainer = [
  "https://files.myglamm.com/site-images/original/final-glow-SK-banner-700x488.gif",
  "https://files.myglamm.com/site-images/original/Beauty-Calender-desktop-700x488.jpg",
  "https://files.myglamm.com/site-images/original/Influencer-Store700x488.png",
];
const ImageContainer2 = [
  "https://files.myglamm.com/site-images/original/Virtual-Try-On_12.jpg",
  "https://files.myglamm.com/site-images/original/banner@2x-3_2.jpg",
];

export function Home() {
  return (
    <Box backgroundColor={"#f4f4f4"}>
      <>
      {/* <ImageCrousal/> */}
      <Check cards={cards} />
      <SingleImage img="https://files.myglamm.com/site-images/original/ULt2240x614.jpg" />
      <Check cards={cards1} />
      <MinibannerContainer />
      <SingleImage img="https://files.myglamm.com/site-images/original/make2240X614.jpg" />
      <MinibannerContainer2 />
      <MinibannerContainer3 />
      <Catagories />
      <SingleImage img="https://files.myglamm.com/site-images/original/Sleek-banner-Web.jpg" />
      <Banner imgs={ImageContainer} col={3}/>   
      <Banner imgs={ImageContainer2} col={2}/>
      <Bestseller/>
      <BestsellerMob/>
      <SingleImage img="https://files.myglamm.com/site-images/original/RE2240x614.jpg"/>
      <SingleImage img="https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png"/>      
      <Vid/>
      </>
    </Box>
  );
}
