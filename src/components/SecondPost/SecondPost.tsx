import { IoLocationOutline } from "react-icons/io5";
import AQIdisplay from "../AQIdisplay/AQIdisplay";
import "./SecondPost.css";

interface Props {
  index: number;
  city?: string;
  data: {
    t: number;
    w: number;
    dew: number;
    name: string;
  };
}

const SecondPost = ({ index, data: { t, w, dew, name } }: Props) => {
  return (
    <div className="secondpost">
      {" "}
      <div className="card listcard">
        <div className="card-header-second">
          <div className="location">
            <IoLocationOutline />
            {name.substring(0, name.indexOf(","))}
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-3">
            <div className="centered-container horizontal-center">
              <h1 className="card-title futuristic-title">AQI</h1>
            </div>
          </div>
          <div className="col-md-31">
            <div className="centered-container horizontal-center aqi">
              <AQIdisplay index={index} isSecond={true}></AQIdisplay>
            </div>
          </div>

          <div className="col-md-6">
            <div className="centered-container">
              <div className="futuristic-info">
                {t > 0 ? (
                  <div>
                    Temp: {t} c
                    <br />
                  </div>
                ) : null}
                {w > 0 ? (
                  <div>
                    Wind: {t} km/h
                    <br />
                  </div>
                ) : null}
                {dew > 0 ? (
                  <div>
                    Dew: {t}%
                    <br />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPost;
