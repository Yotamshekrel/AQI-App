import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./MainPostInfo.css";

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
const featureInfo = {
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
const MainPostInfo = ({ infoVisual, stationInfo }) => {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const dataKeys = Object.keys(stationInfo);
    const handleRowHover = (key) => {
        setHoveredFeature(featureInfo[key] || null);
    };
    if (infoVisual) {
        const tableData = dataKeys
            .map((key) => {
            const value = stationInfo[key];
            if (value !== -999 && typeof value != "string") {
                return (_jsxs("tr", { onMouseEnter: () => handleRowHover(key), onMouseLeave: () => handleRowHover(""), children: [_jsx("td", { className: "col-md-3", dangerouslySetInnerHTML: {
                                __html: names[key],
                            } }), _jsxs("td", { className: "col-md-3", children: [value, "", featueScale[key]] })] }, key));
            }
            return null;
        })
            .filter((row) => row !== null);
        return (_jsxs("div", { className: "mainpostinfo", children: [_jsxs("div", { className: "futuristic-card-info", children: [_jsx("div", { className: "futuristic-title", children: "Additional Info" }), _jsx("table", { className: "table-split", children: _jsxs("tbody", { children: [_jsx("tr", {}), tableData] }) })] }), hoveredFeature && _jsx("div", { className: "infopopup", children: hoveredFeature })] }));
    }
    else {
        return null;
    }
};
export default MainPostInfo;
