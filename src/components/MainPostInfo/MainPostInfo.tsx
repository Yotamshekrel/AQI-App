import React, { useState } from "react";
import "./MainPostInfo.css";

interface Props {
  infoVisual: boolean;
  stationInfo: {
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
    so2: number;
    co: number;
    r: number;
    h: number;
    p: number;
    t: number;
    dew: number;
    w: number;
  };
}

const names = {
  pm25: "PM<sub>2.5</sub>",
  pm10: "PM<sub>10</sub>",
  o3: "Ozone",
  no2: "Nitrogen Dioxide",
  so2: "Sulphur Dioxide",
  co: "Carbon Monoxide",
  t: "Temperature",
  w: "Wind",
  r: "Rain (precipitation)",
  h: "Relative Humidity",
  dew: "Dew",
  p: "Atmospheric Pressure",
};

const featueScale = {
  pm25: "AQI",
  pm10: "AQI",
  o3: "%",
  no2: "%",
  so2: "%",
  co: "%",
  t: "c",
  w: "km/h",
  r: "cm",
  h: "%",
  dew: "%",
  p: "hPa",
};

const featureInfo: Record<string, string> = {
  pm25: "Particulate matter with a diameter of 2.5 micrometers or smaller in the air",
  pm10: "Particulate matter with a diameter of 10 micrometers or smaller in the air",
  o3: "A reactive gas formed from pollutants in sunlight, a key component of smog and harmful at ground level.",
  no2: "A reddish-brown gas from combustion processes, linked to respiratory problems and smog formation.",
  so2: "A pungent gas primarily emitted from burning fossil fuels, leading to respiratory issues and acid rain.",
  co: "A colorless, odorless gas produced by incomplete combustion, posing health risks at high levels.",
  t: "The measure of heat in the air, influencing chemical reactions and pollutant behavior.",
  w: "Movement of air that disperses pollutants and can impact their concentrations in different areas.",
  r: "Removes pollutants from the air, cleansing the atmosphere by depositing them on the ground.",
  h: "The amount of water vapor in the air relative to its capacity, affecting chemical reactions and particle behavior.",
  dew: "Water droplets forming on surfaces due to cooling, potentially aiding in capturing airborne pollutants.",
  p: "The weight of the air above, affecting vertical mixing and dispersion of pollutants",
};

const MainPostInfo: React.FC<Props> = ({ infoVisual, stationInfo }) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const dataKeys = Object.keys(stationInfo);

  const handleRowHover = (key: string) => {
    setHoveredFeature(featureInfo[key] || null);
  };

  if (infoVisual) {
    const tableData = dataKeys
      .map((key) => {
        const value = stationInfo[key as keyof typeof stationInfo];
        if (value !== -999 && typeof value != "string") {
          return (
            <tr
              key={key}
              onMouseEnter={() => handleRowHover(key)}
              onMouseLeave={() => handleRowHover("")}
            >
              <td
                className="col-md-3"
                dangerouslySetInnerHTML={{
                  __html: names[key as keyof typeof names],
                }}
              />
              <td className="col-md-3">
                {value}
                {""}
                {featueScale[key as keyof typeof featueScale]}
              </td>
            </tr>
          );
        }
        return null;
      })
      .filter((row) => row !== null);

    return (
      <div className="mainpostinfo">
        <div className="futuristic-card-info">
          <div className="futuristic-title">Additional Info</div>
          <table className="table-split">
            <tbody>
              <tr></tr>
              {tableData}
            </tbody>
          </table>
        </div>
        {hoveredFeature && <div className="popup">{hoveredFeature}</div>}
      </div>
    );
  } else {
    return null;
  }
};

export default MainPostInfo;
