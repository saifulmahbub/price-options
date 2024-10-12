import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineChat = () => {
  const subjectMarksData = [
    { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
    { id: 2, name: "Bob", math: 78, physics: 75, chemistry: 80 },
    { id: 3, name: "Charlie", math: 92, physics: 85, chemistry: 88 },
    { id: 4, name: "David", math: 74, physics: 80, chemistry: 76 },
    { id: 5, name: "Eve", math: 88, physics: 89, chemistry: 84 },
    { id: 6, name: "Frank", math: 80, physics: 77, chemistry: 79 },
    { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
    { id: 8, name: "Hank", math: 67, physics: 70, chemistry: 72 },
    { id: 9, name: "Ivy", math: 90, physics: 88, chemistry: 91 },
    { id: 10, name: "John", math: 76, physics: 74, chemistry: 78 },
  ];
  return (
    <div>
      <LineChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="math" stroke="red" />
        <Line type="monotone" dataKey="physics" stroke="black" />
      </LineChart>
    </div>
  );
};

export default LineChat;
