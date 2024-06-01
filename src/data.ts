import { staticFile } from "remotion";
import { ITrackItem } from "./type";
export const trackItems: ITrackItem[] = [
  {
    id: "1",
    name: "cube",

    display: {
      from: 0,
      to: 900,
    },
    inputProps: {
      name: staticFile("cube.glsl"),
      paramsTypes: {
        persp: "float",
        unzoom: "float",
        reflection: "float",
        floating: "float",
      },
      defaultParams: {
        persp: 0.7,
        unzoom: 0.3,
        reflection: 0.4,
        floating: 3,
      },
    },
    videoFiles: [
      {
        src: "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4",
        viewportWidth: 400,
        viewportHeight: 300,
        viewportX: 100,
        viewportY: 50,
      },
      {
        src: "https://ik.imagekit.io/snapmotion/flat.mp4",
        viewportWidth: 600,
        viewportHeight: 400,
        viewportX: 200,
        viewportY: 100,
      },
    ],
  },
  {
    id: "2",
    name: "PolkaDotsCurtain",
    display: {
      from: 900,
      to: 1800,
    },

    inputProps: {
      name: staticFile("polkadot.glsl"),
      paramsTypes: { dots: "float", center: "vec2" },
      defaultParams: { dots: 20, center: [0, 0] },
    },
    videoFiles: [
      {
        src: "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4",
        viewportWidth: 400,
        viewportHeight: 300,
        viewportX: 100,
        viewportY: 50,
      },
      {
        src: "https://ik.imagekit.io/snapmotion/flat.mp4",
        viewportWidth: 600,
        viewportHeight: 400,
        viewportX: 200,
        viewportY: 30,
      },
    ],
  },
  {
    id: "3",
    name: "cannabisleaf",
    display: {
      from: 1800,
      to: 2700,
    },
    inputProps: {
      name: staticFile("cannabisleaf.glsl"),
      paramsTypes: {},
      defaultParams: {},
    },
    videoFiles: [
      {
        src: "https://ik.imagekit.io/snapmotion/75475-556034323_medium.mp4",
        viewportWidth: 400,
        viewportHeight: 300,
        viewportX: 100,
        viewportY: 50,
      },
      {
        src: "https://ik.imagekit.io/snapmotion/flat.mp4",
        viewportWidth: 600,
        viewportHeight: 400,
        viewportX: 200,
        viewportY: 30,
      },
    ],
  },

  // {
  //   id: "4",
  //   name: "ButterflyWaveScrawler",
  //   display: {
  //     from: 2700,
  //     to: 3600,
  //   },
  //   inputProps: {
  //     name: staticFile("butterflywavecrawler.glsl"),
  //     paramsTypes: {
  //       amplitude: "float",
  //       waves: "float",
  //       colorSeparation: "float",
  //     },
  //     defaultParams: { amplitude: 1, waves: 30, colorSeparation: 0.3 },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "5",
  //   name: "ZoomBlur",
  //   display: {
  //     from: 3600,
  //     to: 4500,
  //   },
  //   inputProps: {
  //     name: staticFile("zoomblur.glsl"),
  //     paramsTypes: {
  //       strength: "float",
  //     },
  //     defaultParams: {
  //       strength: 0.3,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "6",
  //   name: "windowslice",
  //   display: {
  //     from: 4500,
  //     to: 5400,
  //   },
  //   inputProps: {
  //     name: staticFile("windowslice.glsl"),
  //     paramsTypes: {
  //       count: "float",
  //       smoothness: "float",
  //     },
  //     defaultParams: {
  //       count: 10.0,
  //       smoothness: 0.5,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "7",
  //   name: "InvertedPageCurl",
  //   display: {
  //     from: 5400,
  //     to: 6300,
  //   },
  //   inputProps: {
  //     name: staticFile("InvertedPageCurl.glsl"),
  //     paramsTypes: {},
  //     defaultParams: {},
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "8",
  //   name: "pinwheel",
  //   display: {
  //     from: 6300,
  //     to: 7200,
  //   },
  //   inputProps: {
  //     name: staticFile("pinwheel.glsl"),
  //     paramsTypes: { speed: "float" },
  //     defaultParams: { speed: 2.0 },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "9",
  //   name: "BowTieHorizontal",
  //   display: {
  //     from: 7200,
  //     to: 8100,
  //   },
  //   inputProps: {
  //     name: staticFile("BowTieHorizontal.glsl"),
  //     paramsTypes: {},
  //     defaultParams: {},
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "10",
  //   name: "displacement",
  //   display: {
  //     from: 3600,
  //     to: 4500,
  //   },
  //   inputProps: {
  //     name: staticFile("displacement.glsl"),
  //     paramsTypes: {
  //       strength: "float",
  //     },
  //     defaultParams: {
  //       strength: 0.5,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "11",
  //   name: "WaterDrop",
  //   display: {
  //     from: 4500,
  //     to: 5400,
  //   },
  //   inputProps: {
  //     name: staticFile("WaterDrop.gsls"),
  //     paramsTypes: {
  //       amplitude: "float",
  //       speed: "float",
  //     },
  //     defaultParams: {
  //       amplitude: 30,
  //       speed: 30,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "12",
  //   name: "StereoViewer",
  //   display: {
  //     from: 5400,
  //     to: 6300,
  //   },
  //   inputProps: {
  //     name: staticFile("StereoViewer.glsl"),
  //     paramsTypes: {
  //       zoom: "float",
  //       corner_radius: "float",
  //     },
  //     defaultParams: {
  //       zoom: 0.88,
  //       corner_radius: 0.22,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "13",
  //   name: "luminance_melt",
  //   display: {
  //     from: 6300,
  //     to: 7200,
  //   },
  //   inputProps: {
  //     name: staticFile("luminance_melt.glsl"),
  //     paramsTypes: {
  //       direction: "bool",
  //       l_threshold: "float",
  //       above: "bool",
  //     },
  //     defaultParams: {
  //       direction: true,
  //       l_threshold: 0.8,
  //       above: false,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "14",
  //   name: "perlin",
  //   display: {
  //     from: 7200,
  //     to: 8100,
  //   },
  //   inputProps: {
  //     name: staticFile("perlin.glsl"),
  //     paramsTypes: {
  //       scale: "float",
  //       smoothness: "float",
  //       seed: "float",
  //     },
  //     defaultParams: {
  //       scale: 4.0,
  //       smoothness: 0.01,
  //       seed: 12.9898,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "15",
  //   name: "directionalwarp",
  //   display: {
  //     from: 8100,
  //     to: 9000,
  //   },
  //   inputProps: {
  //     name: staticFile("directionalwarp.glsl"),
  //     paramsTypes: {
  //       direction: "vec2",
  //     },
  //     defaultParams: {
  //       direction: [-1, 1],
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "16",
  //   name: "Bounce",
  //   display: {
  //     from: 9000,
  //     to: 10000,
  //   },
  //   inputProps: {
  //     name: staticFile("Bounce.glsl"),
  //     paramsTypes: {
  //       shadow_colour: "vec4",
  //       shadow_height: "float",
  //       bounces: "float",
  //     },
  //     defaultParams: {
  //       shadow_colour: [0, 0, 0, 0.6],
  //       shadow_height: 0.075,
  //       bounces: 3,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "17",
  //   name: "CircleCrop",
  //   display: {
  //     from: 10000,
  //     to: 11000,
  //   },
  //   inputProps: {
  //     name: staticFile("CircleCrop.glsl"),
  //     paramsTypes: {
  //       bgcolor: "vec4",
  //     },
  //     defaultParams: {
  //       bgcolor: [0, 0, 0, 1],
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "18",
  //   name: "Swirl",
  //   display: {
  //     from: 11000,
  //     to: 12000,
  //   },
  //   inputProps: {
  //     name: staticFile("Swirl.glsl"),
  //     paramsTypes: {
  //       progress: "float",
  //     },
  //     defaultParams: {
  //       progress: 0,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "19",
  //   name: "GridFlip",
  //   display: {
  //     from: 12000,
  //     to: 13000,
  //   },
  //   inputProps: {
  //     name: staticFile("GridFlip.glsl"),
  //     paramsTypes: {
  //       size: "ivec2",
  //       pause: "float",
  //       dividerWidth: "float",
  //       bgcolor: "vec4",
  //       randomness: "float",
  //     },
  //     defaultParams: {
  //       size: [4, 4],
  //       pause: 0.1,
  //       dividerWidth: 0.05,
  //       bgcolor: [0, 0, 0, 1],
  //       randomness: 0.1,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
  // {
  //   id: "20",
  //   name: "CrossZoom",
  //   display: {
  //     from: 13000,
  //     to: 14000,
  //   },
  //   inputProps: {
  //     name: staticFile("CrossZoom.glsl"),
  //     paramsTypes: {
  //       strength: "float",
  //     },
  //     defaultParams: {
  //       strength: 0.4,
  //     },
  //   },
  //   videoFiles: ["video4.mp4", "video5.mp4"],
  // },
];
