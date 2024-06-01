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
  videoFiles: string[];
}
