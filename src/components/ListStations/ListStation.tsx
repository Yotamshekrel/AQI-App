import SecondPost from "../SecondPost/SecondPost";
import "./ListStation.css";

interface Props {
  onMouseFunc: (listIndex: number) => void;
  listVisual: boolean;
  stationsList: {
    station: {
      station: {
        name: string;
      };
      aqi: number;
      uid: number;
    };
    stationInfo: {
      pm25: { v: number };
      pm10: { v: number };
      o3: { v: number };
      no2: { v: number };
      so2: { v: number };
      co: { v: number };
      t: { v: number };
      w: { v: number };
      r: { v: number };
      h: { v: number };
      dew: { v: number };
      p: { v: number };
    };
  }[];
}

const ListStation = ({ listVisual, stationsList, onMouseFunc }: Props) => {
  if (listVisual) {
    const filteredStationsList = stationsList.filter(
      (item, index) =>
        item.station.aqi >= 0 && // Check if aqi is a number
        index !== 0 && // Check if aqi is not 0
        index <= 3 // makes the list shorter (only 3 statitons in the list)
    );
    return (
      <ul className="list-group">
        {filteredStationsList.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => onMouseFunc(index)}
          >
            <SecondPost
              index={item.station.aqi}
              data={{
                t: item.stationInfo.t?.v,
                w: item.stationInfo.w?.v,
                dew: item.stationInfo.dew?.v,
                name: item.station.station?.name,
              }}
            ></SecondPost>
          </li>
        ))}
      </ul>
    );
  }
  return;
};
export default ListStation;
