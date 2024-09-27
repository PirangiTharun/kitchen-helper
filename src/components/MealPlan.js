import WeekDayPlan from "./WeekDayPlan";
import SundayPlan from "./SundayPlan";

const MealPlan = ({ day }) => {
  return (
    <div>
      {day === 0 ? <SundayPlan day={day} /> : <WeekDayPlan day={day} />}
    </div>
  );
};

export default MealPlan;
