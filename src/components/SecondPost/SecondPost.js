import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoLocationOutline } from "react-icons/io5";
import AQIdisplay from "../AQIdisplay/AQIdisplay";
import "./SecondPost.css";
const SecondPost = ({ index, data: { t, w, dew, name } }) => {
    return (_jsxs("div", { className: "secondpost", children: [" ", _jsxs("div", { className: "card listcard", children: [_jsx("div", { className: "card-header-second", children: _jsxs("div", { className: "location", children: [_jsx(IoLocationOutline, {}), name.substring(0, name.indexOf(","))] }) }), _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-3", children: _jsx("div", { className: "centered-container horizontal-center", children: _jsx("h1", { className: "card-title futuristic-title", children: "AQI" }) }) }), _jsx("div", { className: "col-md-31", children: _jsx("div", { className: "centered-container horizontal-center aqi", children: _jsx(AQIdisplay, { index: index, isSecond: true }) }) }), _jsx("div", { className: "col-md-6", children: _jsx("div", { className: "centered-container", children: _jsxs("div", { className: "futuristic-info", children: [t > 0 ? (_jsxs("div", { children: ["Temp: ", t, " c", _jsx("br", {})] })) : null, w > 0 ? (_jsxs("div", { children: ["Wind: ", t, " km/h", _jsx("br", {})] })) : null, dew > 0 ? (_jsxs("div", { children: ["Dew: ", t, "%", _jsx("br", {})] })) : null] }) }) })] })] })] }));
};
export default SecondPost;
