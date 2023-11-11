import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { GEO_API_URL, geoApiOptions } from "../../API/SearchApi";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSearchChange }) => {
    const [searchValue, setSearchValue] = useState("");
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
            .then((response) => response.json())
            .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        });
    };
    const handleOnChange = (searchData) => {
        setSearchValue(searchData.label);
        onSearchChange(searchData.label);
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "search-form", children: _jsx(AsyncPaginate, { placeholder: "Search for city", debounceTimeout: 600, value: searchValue, onChange: handleOnChange, loadOptions: loadOptions }) }) }));
};
export default SearchBar;
