"use client";
import { Player } from "@remotion/player";
import { GLTransitions } from "./GLTransitions";
import { Sequence } from "remotion";
import { ITrackItem } from "./type";

function MyPlayer({ trackItems }: { trackItems: ITrackItem[] }) {
  return (
    <Player
      compositionWidth={1200}
      compositionHeight={700}
      fps={30}
      durationInFrames={30 * trackItems.length * 30}
      component={MyComp}
      controls
      inputProps={{ trackItems }}
    />
  );
}

const MyComp = ({ trackItems }: { trackItems: ITrackItem[] }) => {
  return (
    <>
      {trackItems.map((item) => {
        return (
          <Sequence
            from={item.display.from}
            durationInFrames={item.display.to}
            key={item.id}
          >
            <GLTransitions
              name={item.inputProps.name}
              paramsTypes={item.inputProps.paramsTypes}
              defaultParams={item.inputProps.defaultParams}
              videoFiles={item.videoFiles}
            />
          </Sequence>
        );
      })}
    </>
  );
};

export default MyPlayer;
