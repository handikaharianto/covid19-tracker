import formatNumber from "../../utils/formatNumber";
import "./Tables.scss";

function CountryTableRow({
  country,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  todayRecovered,
  countryInfo: { flag },
}) {
  return (
    <tr className="table__row">
      <td className="table__country">
        <img className="table__flag" src={flag} alt={country} />
        {country}
      </td>
      <td>{formatNumber(cases)}</td>
      <td>{formatNumber(todayCases)}</td>
      <td>{formatNumber(deaths)}</td>
      <td>{formatNumber(todayDeaths)}</td>
      <td>{formatNumber(recovered)}</td>
      <td>{formatNumber(todayRecovered)}</td>
    </tr>
  );
}

export default CountryTableRow;
