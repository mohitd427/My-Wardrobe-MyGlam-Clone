import React from 'react'
import PropTypes from "prop-types";
import { Box } from '@chakra-ui/react';


const YoutubeVideo = () => {
  return (
    <Box  >
   <iframe width={"400px"}  height={"400px"}   src="https://www.youtube.com/embed/b8XUb6geVXc" title="POPxo Makeup - No Drama - Mini Lip Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Box>
);
  
}

export default YoutubeVideo;

YoutubeVideo.propTypes = {
    embedId: PropTypes.string.isRequired
  };