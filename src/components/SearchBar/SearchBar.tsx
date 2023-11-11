import { GEO_API_URL, geoApiOptions } from "../../API/SearchApi";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import "./SearchBar.css";

interface Props {
  onSearchChange: (keyWord: string) => void;
}
const SearchBar = ({ onSearchChange }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const loadOptions = (inputValue: any) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map(
            (city: {
              latitude: any;
              longitude: any;
              name: any;
              countryCode: any;
            }) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }
          ),
        };
      });
  };

  const handleOnChange = (searchData: any) => {
    setSearchValue(searchData.label);
    onSearchChange(searchData.label);
  };

  return (
    <>
      <div className="search-form">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={searchValue}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
    </>
  );
};
export default SearchBar;
