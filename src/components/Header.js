import arrowLeft from "../assets/left-arrow.png";
import arrowRight from "../assets/right-arrow.png";
import { days } from "../appData/appData";

const Header = ({ day, setCurrentDay }) => {
  const handlePreviousDay = () => {
    if (day === 0) return;
    setCurrentDay(day - 1);
  };
  const handleNextDay = () => {
    if (day === 6) return;
    setCurrentDay(day + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        padding: "24px",
        background: "green",
        marginBottom: "32px",
      }}
    >
      <img width={48} src={arrowLeft} alt="" onClick={handlePreviousDay} />
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          background: "red",
          flex: 1,
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        {days[day]}
      </span>
      <img width={48} src={arrowRight} onClick={handleNextDay} alt="" />
    </div>
  );
};

export default Header;
