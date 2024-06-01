import createTexture from "gl-texture2d";
import { getCubeTransition } from "./cube-transition";
import { createTransition, Params, ParamsTypes } from "./gl-transition";

export type DrawFn = (frame: number) => void;

const loadVideo = (src: string) => {
  return new Promise<HTMLVideoElement>((resolve, reject) => {
    const video = document.createElement("video");
    video.src = src;
    video.crossOrigin = "anonymous";
    video.loop = false; // Ensure the video does not loop
    video.muted = true;
    video.autoplay = false;
    video.oncanplaythrough = () => resolve(video);
    video.onerror = reject;
    video.onabort = reject;
    video.play(); // Ensure the video starts playing immediately
  });
};

export const initialize = async ({
  name,
  defaultParams,
  paramsTypes,
  canvas,
  fps,
  videoFiles,
}: {
  name: string;
  defaultParams: Params;
  paramsTypes: ParamsTypes;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  fps: number;
  videoFiles: {
    src: string;
    viewportWidth: number;
    viewportHeight: number;
    viewportX: number;
    viewportY: number;
  }[]; // Modificado para incluir la posición del viewport
}) => {
  const videos = await Promise.all(
    videoFiles.map((video) => loadVideo(video.src))
  ); // Modificado para cargar videos desde videoFiles

  const cubeTransition = await getCubeTransition({
    file: name,
    defaultParams,
    paramsTypes,
  });

  const gl = canvas.getContext("webgl") as WebGLRenderingContext;
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, -1, 4, 4, -1]),
    gl.STATIC_DRAW
  );

  const textures = videos.map((video, index) => {
    const texture = createTexture(gl, video);
    texture.minFilter = gl.LINEAR;
    texture.magFilter = gl.LINEAR;
    return {
      texture,
      viewportWidth: videoFiles[index].viewportWidth,
      viewportHeight: videoFiles[index].viewportHeight,
      viewportX: videoFiles[index].viewportX,
      viewportY: videoFiles[index].viewportY,
    }; // Modificado para incluir la posición del viewport
  });

  const transition = createTransition(gl, cubeTransition, {
    resizeMode: "cover",
  });

  let currentVideoIndex = 0;
  let nextVideoIndex = 1;
  let transitionInProgress = false;
  let progress = 0;

  return () => (frame: number) => {
    const currentVideo = videos[currentVideoIndex];
    const nextVideo = videos[nextVideoIndex];

    // Update the viewport for each video
    gl.viewport(
      textures[currentVideoIndex].viewportX,
      textures[currentVideoIndex].viewportY,
      textures[currentVideoIndex].viewportWidth,
      textures[currentVideoIndex].viewportHeight
    );

    // Update the textures with the current video frame
    textures[currentVideoIndex].texture.setPixels(currentVideo);
    textures[nextVideoIndex].texture.setPixels(nextVideo);

    if (
      !transitionInProgress &&
      currentVideo.currentTime >= currentVideo.duration
    ) {
      // Start the transition when the current video ends
      transitionInProgress = true;
      progress = 0;
      nextVideo.currentTime = 0; // Reset the next video
      nextVideo.play(); // Ensure the next video starts playing
    }

    if (transitionInProgress) {
      // Increment progress for the transition
      progress += 1 / (fps * 2); // Transition over 2 seconds
      if (progress >= 1) {
        // Complete the transition
        transitionInProgress = false;
        progress = 0;
        currentVideoIndex = nextVideoIndex;
        nextVideoIndex = (nextVideoIndex + 1) % videos.length;
        currentVideo.play(); // Ensure the current video continues playing
      }
    }

    transition.draw({
      progress,
      from: textures[currentVideoIndex].texture,
      to: textures[nextVideoIndex].texture,
      width: textures[currentVideoIndex].viewportWidth,
      height: textures[currentVideoIndex].viewportHeight,
      params: defaultParams,
    });
  };
};
