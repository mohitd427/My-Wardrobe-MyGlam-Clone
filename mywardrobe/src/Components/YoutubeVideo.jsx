import React from 'react'
import PropTypes from "prop-types";


const YoutubeVideo = () => {
  return (
    <div>
   <iframe width="530" height="426" src="https://www.youtube.com/embed/b8XUb6geVXc" title="POPxo Makeup - No Drama - Mini Lip Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
);
  
}

export default YoutubeVideo;

YoutubeVideo.propTypes = {
    embedId: PropTypes.string.isRequired
  };