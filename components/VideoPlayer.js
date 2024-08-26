import React from 'react';

export default function VideoPlayer({ videoUrl }) {
  return (
    <video width="100%" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
