import useFetch from "../../hooks/useFetch";
import "./Tables.scss";
import CountryTableRow from "./CountryTableRow";
import Loader from "../Loader/Loader";

const url = "https://disease.sh/v3/covid-19/countries";

function CountryTable() {
  const { data, loading } = useFetch(url);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="table">
      <div className="table__top">
        <h2 className="table__title">Countries Information</h2>
      </div>
      <div className="table__content">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>
                Today
                <br />
                Cases
              </th>
              <th>Deaths</th>
              <th>
                Today
                <br />
                Deaths
              </th>
              <th>Recovered</th>
              <th>
                Today
                <br />
                Recovered
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((countryData, index) => {
              return <CountryTableRow key={index} {...countryData} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryTable;
