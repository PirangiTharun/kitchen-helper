import { weeklyData } from "../appData/appData";

const WeekDayPlan = ({ day }) => {
  const { curry, rasam, curd } = weeklyData[day].lunch;
  return (
    <div>
      <div
        style={{
          background: "lightblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2>Breakfast</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          {weeklyData[day].breakfast}
        </p>
      </div>
      <div
        style={{
          background: "lightblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Lunch</h2>
        <p style={{ fontSize: "24px", marginBlock: 10, fontWeight: "bold" }}>
          {curry}
        </p>
        <p style={{ fontSize: "24px", marginBlock: 10, fontWeight: "bold" }}>
          {rasam}
        </p>
        <p style={{ fontSize: "24px", marginBlock: 10, fontWeight: "bold" }}>
          {curd}
        </p>
      </div>
    </div>
  );
};

export default WeekDayPlan;
