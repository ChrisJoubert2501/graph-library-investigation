const position = { x: 0, y: 0 };
const edgeType = "default";

export const initialNodes = [
  {
    id: "NetSpaceArea",
    type: "input",
    data: { label: "Net Space Area" },
    position,
    style: {
      "background-color": "#D4E5F7",
    },
  },
  {
    id: "2",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "3",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "Population",
    data: { label: "Population" },
    position,
  },
  {
    id: "Jobs",
    data: { label: "Jobs" },
    position,
  },
  {
    id: "6",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "7",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "8",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "9",
    data: { label: "" },
    position,
    type: "circle",
  },
  {
    id: "EnergyUse",
    type: "output",
    data: { label: "EnergyUse" },
    position,
  },
  { id: "DailyTrips", type: "output", data: { label: "DailyTrips" }, position },
];

export const initialEdges = [
  {
    id: "N2",
    source: "NetSpaceArea",
    target: "2",
    type: "smoothstep",
    animated: true,
    arrowHeadType: "arrowclosed",
    style: {
      strokeDasharray: "4 ",
    },
  },
  {
    id: "2P",
    source: "2",
    target: "Population",
    type: edgeType,
    animated: true,
  },
  {
    id: "N3",
    source: "NetSpaceArea",
    target: "3",
    type: "straight",
    animated: false,
  },
  { id: "3J", source: "3", target: "Jobs", type: edgeType, animated: false },
  {
    id: "P6",
    source: "Population",
    target: "6",
    type: edgeType,
    animated: true,
  },
  {
    id: "6E",
    source: "6",
    target: "EnergyUse",
    type: edgeType,
    animated: true,
  },
  {
    id: "P8",
    source: "Population",
    target: "8",
    type: edgeType,
    animated: true,
  },
  {
    id: "8D",
    source: "8",
    target: "DailyTrips",
    type: edgeType,
    animated: true,
  },
  { id: "J7", source: "Jobs", target: "7", type: edgeType, animated: false },
  {
    id: "7E",
    source: "7",
    target: "EnergyUse",
    type: edgeType,
    animated: false,
  },
  { id: "J9", source: "Jobs", target: "9", type: edgeType, animated: false },
  {
    id: "9D",
    source: "9",
    target: "DailyTrips",
    type: edgeType,
    animated: false,
  },
];
