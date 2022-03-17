var metricNodeStyle = { shape: "box", font: { size: 40 }, margin: 20 };

var graphData = {
  nodes: [
    {
      id: 1,
      label: "Net Space Area",
      level: 0,
      ...metricNodeStyle,
    },
    { id: 2, label: "", level: 1 },
    { id: 3, label: "", level: 1 },
    { id: 4, label: "Population", level: 2, ...metricNodeStyle },
    { id: 5, label: "Jobs", level: 2, ...metricNodeStyle },
    { id: 6, label: "", level: 3 },
    { id: 7, label: "", level: 3 },
    { id: 8, label: "", level: 3 },
    { id: 9, label: "", level: 3 },
    { id: 10, label: "Energy Use", level: 4, ...metricNodeStyle },
    {
      id: 11,
      label: "Daily Trips",
      level: 4,
      ...metricNodeStyle,
    },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 1, to: 3 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 6, to: 10 },
    { from: 4, to: 8 },
    { from: 8, to: 11 },
    { from: 5, to: 7 },
    { from: 7, to: 10 },
    { from: 5, to: 9 },
    { from: 9, to: 11 },
  ],
};

export default graphData;
