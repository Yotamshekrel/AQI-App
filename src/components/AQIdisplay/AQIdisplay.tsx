import { useState } from "react";
import "./AQIdisplay.css";

interface Props {
  index: number;
  isSecond?: boolean;
}

const AQIdisplay = ({ index, isSecond }: Props) => {
  let color = "grey";
  let colorInfo = "Collecting Data...";

  switch (true) {
    case 0 < index && index <= 50:
      color = "green";
      colorInfo =
        "Good: Air quality is considered satisfactory, and air pollution poses little or no risk None";
      break;
    case 50 < index && index <= 100:
      color = "#FFD700";
      colorInfo =
        "Moderate: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
      break;
    case 100 < index && index <= 150:
      color = "orange";
      colorInfo =
        "Unhealthy for Sensitive Groups: Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
      break;
    case 150 < index && index <= 200:
      color = "red";
      colorInfo =
        "Unhealthy: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects";
      break;
    case 200 < index && index <= 300:
      color = "purple";
      colorInfo =
        "Very Unhealthy: Health warnings of emergency conditions. The entire population is more likely to be affected.";
      break;
    case 300 < index && index <= 500:
      color = "brown";
      colorInfo =
        "Hazardous: Health alert: everyone may experience more serious health effects";
      break;
  }

  const squareStyle = {
    width: isSecond ? "40px" : "60px",
    height: isSecond ? "40px" : "60px",
    borderRadius: "10px",
    backgroundColor: color,
    //  backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: isSecond ? "20px" : "24px",
    color: "white",
  };
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to show the popup
  const showPopup = () => {
    setPopupVisible(true);
  };

  // Function to hide the popup
  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div
        className="squre"
        style={squareStyle}
        onMouseEnter={showPopup}
        onMouseLeave={hidePopup}
      >
        {index}
      </div>
      {isPopupVisible && <div className="popup">{colorInfo}</div>}
    </>
  );
};

export default AQIdisplay;
