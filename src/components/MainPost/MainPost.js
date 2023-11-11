import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import AQIdisplay from "../AQIdisplay/AQIdisplay";
import "./MainPost.css";
const MainPost = ({ index, city, data: { t, w, dew }, onClickInfoFunc, onClickListFunc, moreStations, }) => {
    return (_jsx("div", { className: "mainpost", children: _jsxs("div", { className: "card futuristic-card", children: [_jsx("div", { className: "card-header", children: _jsxs("div", { className: "location", children: [_jsx(IoLocationOutline, {}), city] }) }), _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-3", children: _jsx("div", { className: "centered-container horizontal-center", children: _jsx("h1", { className: "card-title futuristic-title", children: "AQI" }) }) }), _jsx("div", { className: "col-md-31", children: _jsx("div", { className: "centered-container horizontal-center", children: _jsx(AQIdisplay, { index: index }) }) }), _jsxs("div", { className: "col-md-6", children: [_jsx("div", { className: "centered-container", children: _jsxs("div", { className: "futuristic-info", children: [t === -999 ? (_jsxs("div", { children: ["Temp: --", _jsx("br", {})] })) : (_jsxs("div", { children: ["Temp: ", t, " c", _jsx("br", {})] })), w === -999 ? (_jsxs("div", { children: ["Wind: --", _jsx("br", {})] })) : (_jsxs("div", { children: ["Wind: ", w, " km/h", _jsx("br", {})] })), dew === -999 ? (_jsxs("div", { children: ["Dew: --", _jsx("br", {})] })) : (_jsxs("div", { children: ["Dew: ", dew, "%", _jsx("br", {})] }))] }) }), _jsx("div", { className: "col-md-6", onClick: () => {
                                        onClickInfoFunc();
                                    }, children: _jsx(RiArrowRightSLine, { className: "arrow", size: "30px" }) })] })] }), _jsx("div", { className: "card-footer", children: moreStations ? (_jsx("div", { className: "futuristic-footer", onClick: () => {
                            onClickListFunc();
                        }, children: "more stations nearby" })) : null })] }) }));
};
export default MainPost;
