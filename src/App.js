import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "./react/jsx-runtime";
import MainPostInfo from "./components/MainPostInfo/MainPostInfo";
import ListStation from "./components/ListStations/ListStation";
import SearchBar from "./components/SearchBar/SearchBar";
import MainPost from "./components/MainPost/MainPost";
import { useLocation } from "./API/LocationApi";
import { useEffect, useState } from "react";
import { search } from "./Back";
import "./App.css";
function App() {
    //MainPost
    const userLocation = useLocation();
    const [location, setLocation] = useState(userLocation?.city !== undefined ? userLocation?.city : "Loading...");
    const [aqi, setAqi] = useState(0);
    const [stationInfo, setStationInfo] = useState({
        pm25: -999,
        pm10: -999,
        o3: -999,
        no2: -999,
        so2: -999,
        co: -999,
        t: -999,
        w: -999,
        r: -999,
        h: -999,
        dew: -999,
        p: -999,
        name: "",
    });
    const [stationsList, setStationsList] = useState([
        {
            station: {
                station: {
                    name: "",
                },
                aqi: -999,
                uid: -999,
            },
            stationInfo: {
                pm25: { v: -999 },
                pm10: { v: -999 },
                o3: { v: -999 },
                no2: { v: -999 },
                so2: { v: -999 },
                co: { v: -999 },
                t: { v: -999 },
                w: { v: -999 },
                r: { v: -999 },
                h: { v: -999 },
                dew: { v: -999 },
                p: { v: -999 },
            },
        },
    ]);
    useEffect(() => {
        async function doit() {
            const stations = await search(location);
            setStationsList(stations);
            if (stations.length > 1) {
                setMoerStations(true);
            }
            else {
                setMoerStations(false);
            }
            if (stations.length > 0 && stations[0] != null) {
                if (stations[0]?.station?.aqi != null) {
                    setAqi(stations[0]?.station?.aqi);
                }
                setStationInfo({
                    pm25: stations[0]?.stationInfo.pm25?.v || -999,
                    pm10: stations[0]?.stationInfo.pm10?.v || -999,
                    o3: stations[0]?.stationInfo.o3?.v || -999,
                    no2: stations[0]?.stationInfo.no2?.v || -999,
                    so2: stations[0]?.stationInfo.so2?.v || -999,
                    co: stations[0]?.stationInfo.co?.v || -999,
                    t: stations[0]?.stationInfo.t?.v || -999,
                    w: stations[0]?.stationInfo.w?.v || -999,
                    r: stations[0]?.stationInfo.r?.v || -999,
                    h: stations[0]?.stationInfo.h?.v || -999,
                    dew: stations[0]?.stationInfo.dew?.v || -999,
                    p: stations[0]?.stationInfo.p?.v || -999,
                    name: stations[0]?.station.station.name || "blop",
                });
            }
        }
        doit();
    }, [location]);
    //loading
    const loading = () => {
        setAqi(0);
        setStationInfo({
            pm25: -999,
            pm10: -999,
            o3: -999,
            no2: -999,
            so2: -999,
            co: -999,
            t: -999,
            w: -999,
            r: -999,
            h: -999,
            dew: -999,
            p: -999,
            name: "",
        });
    };
    //SearchBar
    const handleSearch = (keyWord) => {
        loading();
        setLocation(keyWord);
    };
    useEffect(() => {
        // Set the location to userLocation?.city when the component mounts
        if (userLocation?.city) {
            setLocation(userLocation.city);
        }
    }, [userLocation]);
    const [infoVisual, setInfoVisual] = useState(false);
    const onClickInfoFunc = () => {
        setInfoVisual(!infoVisual);
    };
    const [listVisual, setListVisual] = useState(false);
    const onClickListFunc = () => {
        setListVisual(!listVisual);
    };
    const [moreStations, setMoerStations] = useState(false);
    const listSwap = (listIndex) => {
        const oldMain = stationsList[0];
        stationsList[0] = stationsList[listIndex + 1];
        stationsList[listIndex + 1] = oldMain;
        setStationsList(stationsList);
        setAqi(stationsList[0].station.aqi);
        setLocation(stationsList[0].station.station.name.substring(0, stationsList[0]?.station.station.name.indexOf(",")));
        setStationInfo({
            pm25: stationsList[0]?.stationInfo.pm25?.v || -999,
            pm10: stationsList[0]?.stationInfo.pm10?.v || -999,
            o3: stationsList[0]?.stationInfo.o3?.v || -999,
            no2: stationsList[0]?.stationInfo.no2?.v || -999,
            so2: stationsList[0]?.stationInfo.so2?.v || -999,
            co: stationsList[0]?.stationInfo.co?.v || -999,
            t: stationsList[0]?.stationInfo.t?.v || -999,
            w: stationsList[0]?.stationInfo.w?.v || -999,
            r: stationsList[0]?.stationInfo.r?.v || -999,
            h: stationsList[0]?.stationInfo.h?.v || -999,
            dew: stationsList[0]?.stationInfo.dew?.v || -999,
            p: stationsList[0]?.stationInfo.p?.v || -999,
            name: stationsList[0]?.station.station.name || "ERROR",
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(SearchBar, { onSearchChange: handleSearch }), _jsx(MainPost, { index: aqi, city: location || "Unknown City", data: stationInfo, onClickInfoFunc: () => onClickInfoFunc(), onClickListFunc: () => onClickListFunc(), moreStations: moreStations }), _jsx(ListStation, { listVisual: listVisual, stationsList: stationsList, onMouseFunc: listSwap }), _jsx(MainPostInfo, { infoVisual: infoVisual, stationInfo: stationInfo }), _jsx("div", { className: "linkedin-wrapper", children: _jsxs("a", { className: "linkedin-link", href: "https://www.linkedin.com/in/yotam-shekrel/", target: "_blank", children: [_jsx("img", { className: "linkedin-logo", src: "/icons/linkedin-logo.png" }), "Let's connect on LinkedIn"] }) })] }));
}
export default App;
