import { jsx as _jsx } from "react/jsx-runtime";
import SecondPost from "../SecondPost/SecondPost";
import "./ListStation.css";
const ListStation = ({ listVisual, stationsList, onMouseFunc }) => {
    if (listVisual) {
        const filteredStationsList = stationsList.filter((item, index) => item.station.aqi >= 0 && // Check if aqi is a number
            index !== 0 && // Check if aqi is not 0
            index <= 3 // makes the list shorter (only 3 statitons in the list)
        );
        return (_jsx("ul", { className: "list-group", children: filteredStationsList.map((item, index) => (_jsx("li", { className: "list-group-item", onClick: () => onMouseFunc(index), children: _jsx(SecondPost, { index: item.station.aqi, data: {
                        t: item.stationInfo.t?.v,
                        w: item.stationInfo.w?.v,
                        dew: item.stationInfo.dew?.v,
                        name: item.station.station?.name,
                    } }) }, index))) }));
    }
    return;
};
export default ListStation;
