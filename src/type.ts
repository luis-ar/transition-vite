export interface IVideoFile {
  src: string;
  viewportWidth: number;
  viewportHeight: number;
  viewportX: number;
  viewportY: number;
}
export interface ITrackItem {
  id: string;
  name: string;
  display: {
    from: number;
    to: number;
  };
  inputProps: {
    name: string;
    paramsTypes: {};
    defaultParams: {};
  };
  videoFiles: IVideoFile[];
}
