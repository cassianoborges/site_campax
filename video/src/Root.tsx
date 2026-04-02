import React from "react";
import { Composition } from "remotion";
import { CampaxVideo, VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH, TOTAL_FRAMES } from "./CampaxVideo";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="CampaxVideo"
        component={CampaxVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
    </>
  );
};
