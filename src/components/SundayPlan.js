import { weeklyData } from "../appData/appData";

const SundayPlan = ({ day }) => {
  const tasks = weeklyData[day].tasks;
  return (
    <div
      style={{
        background: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tasks.map((task) => (
        <p style={{ fontSize: "24px", marginBlock: 20, fontWeight: "bold" }}>
          {task}
        </p>
      ))}
    </div>
  );
};

export default SundayPlan;
