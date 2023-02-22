"use strict";
exports.__esModule = true;
require("./App.scss");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var TableComponent_1 = require("../components/Table/TableComponent");
var Header_1 = require("../components/Header/Header");
var countryAction_1 = require("../redux/actions/countryAction");
var tableHeader = ['Flag', 'Name', 'Population', 'Language', 'Region'];
var countryImg = {
    width: '5rem'
};
function setCountryData(data) {
    var countryData = [];
    data.forEach(function (country) {
        countryData.push({
            flag: (react_1["default"].createElement("img", { src: country.flags.svg, alt: country.name.official, style: countryImg })),
            name: country.name.official,
            population: country.population,
            language: country.languages
                ? Object.values(country.languages).map(function (lan) { return (react_1["default"].createElement("li", { key: lan }, lan)); })
                : '',
            region: country.continents[0]
        });
    });
    return countryData;
}
function Home() {
    var _a = react_1.useState(''), search = _a[0], setSearch = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var data = react_redux_1.useSelector(function (state) { return state.country.countries; });
    react_1.useEffect(function () {
        dispatch(countryAction_1.fetchCountries());
    }, [dispatch]);
    var countryData = setCountryData(data);
    var setSearchHandler = react_1.useCallback(function (countryName) {
        setSearch(countryName);
    }, []);
    var filteredCountries = countryData.filter(function (country) {
        return country.name.toLowerCase().includes(search.toLowerCase());
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], { onSearch: setSearchHandler }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(TableComponent_1["default"], { tableHeader: tableHeader, tableData: filteredCountries }))));
}
exports["default"] = Home;
