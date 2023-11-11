import { IoLocationOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import AQIdisplay from "../AQIdisplay/AQIdisplay";
import "./MainPost.css";

interface Props {
  index: number;
  city: string;
  data: {
    t: number;
    w: number;
    dew: number;
  };
  onClickInfoFunc: () => void;
  onClickListFunc: () => void;
  moreStations: boolean;
}

const MainPost = ({
  index,
  city,
  data: { t, w, dew },
  onClickInfoFunc,
  onClickListFunc,
  moreStations,
}: Props) => {
  return (
    <div className="mainpost">
      <div className="card futuristic-card">
        <div className="card-header">
          <div className="location">
            <IoLocationOutline />
            {city}
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-3">
            <div className="centered-container horizontal-center">
              <h1 className="card-title futuristic-title">AQI</h1>
            </div>
          </div>
          <div className="col-md-31">
            <div className="centered-container horizontal-center">
              <AQIdisplay index={index}></AQIdisplay>
            </div>
          </div>

          <div className="col-md-6">
            <div className="centered-container">
              <div className="futuristic-info">
                {t === -999 ? (
                  <div>
                    Temp: --
                    <br />
                  </div>
                ) : (
                  <div>
                    Temp: {t} c
                    <br />
                  </div>
                )}
                {w === -999 ? (
                  <div>
                    Wind: --
                    <br />
                  </div>
                ) : (
                  <div>
                    Wind: {w} km/h
                    <br />
                  </div>
                )}
                {dew === -999 ? (
                  <div>
                    Dew: --
                    <br />
                  </div>
                ) : (
                  <div>
                    Dew: {dew}%
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div
              className="col-md-6"
              onClick={() => {
                onClickInfoFunc();
              }}
            >
              <RiArrowRightSLine className="arrow" size="30px" />
            </div>
          </div>
        </div>
        <div className="card-footer">
          {moreStations ? (
            <div
              className="futuristic-footer"
              onClick={() => {
                onClickListFunc();
              }}
            >
              more stations nearby
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MainPost;
