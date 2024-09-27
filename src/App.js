import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MealPlan from "./components/MealPlan";

function App() {
  const today = new Date();
  const day = today.getDay();
  const [currentDay, setCurrentDay] = useState(day);

  return (
    <div style={{ margin: "12px" }}>
      <Header day={currentDay} setCurrentDay={setCurrentDay} />
      <MealPlan day={currentDay} />
    </div>
  );
}

export default App;
