var elements = [
  { data: { id: "netSpaceArea", label: "Net Space Area", type: "main" } },
  { data: { id: "2", label: "", type: "rel" } },
  { data: { id: "3", label: "", type: "rel" } },
  { data: { id: "Population", label: "Population", type: "metric" } },
  { data: { id: "Jobs", label: "Jobs", type: "metric" } },
  { data: { id: "6", label: "", type: "rel" } },
  { data: { id: "7", label: "", type: "rel" } },
  { data: { id: "8", label: "", type: "rel" } },
  { data: { id: "9", label: "", type: "rel" } },
  { data: { id: "EnergyUse", label: "Energy Use", type: "metric" } },
  { data: { id: "DailyTrips", label: "Daily Trips", type: "metric" } },
  {
    data: {
      source: "netSpaceArea",
      target: "2",
    },
  },
  {
    data: {
      source: "2",
      target: "Population",
    },
  },
  {
    data: {
      source: "netSpaceArea",
      target: "3",
    },
  },
  {
    data: {
      source: "3",
      target: "Jobs",
    },
  },
  {
    data: {
      source: "Population",
      target: "6",
    },
  },
  {
    data: {
      source: "6",
      target: "EnergyUse",
    },
  },
  {
    data: {
      source: "Population",
      target: "8",
    },
  },
  {
    data: {
      source: "8",
      target: "DailyTrips",
    },
  },
  {
    data: {
      source: "Jobs",
      target: "7",
    },
  },
  {
    data: {
      source: "7",
      target: "EnergyUse",
    },
  },
  {
    data: {
      source: "Jobs",
      target: "9",
    },
  },
  {
    data: {
      source: "9",
      target: "DailyTrips",
    },
  },
];

export default elements;
