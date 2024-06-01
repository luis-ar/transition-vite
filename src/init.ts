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
  width,
  height,
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
  videoFiles: string[];
}) => {
  const videos = await Promise.all(videoFiles.map(loadVideo));

  const cubeTransition = await getCubeTransition({
    file: name,
    defaultParams,
    paramsTypes,
  });

  const gl = canvas.getContext("webgl") as WebGLRenderingContext;
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, -1, 4, 4, -1]),
    gl.STATIC_DRAW
  );
  gl.viewport(0, 0, width, height);
  const textures = videos.map((video) => {
    const texture = createTexture(gl, video);
    texture.minFilter = gl.LINEAR;
    texture.magFilter = gl.LINEAR;
    return texture;
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

    // Update the textures with the current video frame
    textures[currentVideoIndex].setPixels(currentVideo);
    textures[nextVideoIndex].setPixels(nextVideo);

    if (
      !transitionInProgress &&
      currentVideo.currentTime >= currentVideo.duration
    ) {
      transitionInProgress = true;
      progress = 0;
      nextVideo.currentTime = 0;
      nextVideo.play();
    }

    if (transitionInProgress) {
      progress += 1 / (fps * 2);
      if (progress >= 1) {
        transitionInProgress = false;
        progress = 0;
        currentVideoIndex = nextVideoIndex;
        nextVideoIndex = (nextVideoIndex + 1) % videos.length;
        currentVideo.play();
      }
    }

    transition.draw({
      progress,
      from: textures[currentVideoIndex],
      to: textures[nextVideoIndex],
      width,
      height,
      params: defaultParams,
    });
  };
};
