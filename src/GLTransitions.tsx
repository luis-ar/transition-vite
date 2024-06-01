import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  continueRender,
  delayRender,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Params, ParamsTypes } from "./gl-transition";
import { DrawFn, initialize } from "./init";
import { IVideoFile } from "./type";

export const GLTransitions: React.FC<{
  name: string;
  paramsTypes: ParamsTypes;
  defaultParams: Params;
  videoFiles: IVideoFile[];
}> = ({ name, defaultParams, paramsTypes, videoFiles }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [handle] = useState(() => delayRender());
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const [drawFn, setDrawFn] = useState<DrawFn | null>(null);

  const init = useCallback(async () => {
    const fn = await initialize({
      name,
      defaultParams,
      paramsTypes,
      canvas: canvas.current as HTMLCanvasElement,
      width,
      height,
      fps,
      videoFiles,
    });
    setDrawFn(fn);
    continueRender(handle);
  }, [
    defaultParams,
    fps,
    handle,
    height,
    name,
    paramsTypes,
    width,
    videoFiles,
  ]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (drawFn) {
      drawFn(frame);
    }
  }, [drawFn, frame]);

  return <canvas ref={canvas} width={width} height={height} />;
};
