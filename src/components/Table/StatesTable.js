import useFetch from "../../hooks/useFetch";
import "./Tables.scss";
import StatesTableRow from "./StatesTableRow";

const url = "https://disease.sh/v3/covid-19/states";

function StatesTable() {
  const { data, loading } = useFetch(url);

  if (loading) {
    return null;
  }

  return (
    <div className="table">
      <div className="table__top">
        <h2 className="table__title">US States Information</h2>
      </div>
      <div className="table__content">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Population</th>
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
            </tr>
          </thead>
          <tbody>
            {data.map((countryData, index) => {
              return <StatesTableRow key={index} {...countryData} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatesTable;
