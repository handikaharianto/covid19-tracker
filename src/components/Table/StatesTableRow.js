import "./Tables.scss";
import formatNumber from "../../utils/formatNumber";

function StatesTableRow({
  state,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  population,
}) {
  return (
    <tr className="table__row">
      <td>{state}</td>
      <td>{formatNumber(population)}</td>
      <td>{formatNumber(cases)}</td>
      <td>{formatNumber(todayCases)}</td>
      <td>{formatNumber(deaths)}</td>
      <td>{formatNumber(todayDeaths)}</td>
      <td>{formatNumber(recovered)}</td>
    </tr>
  );
}

export default StatesTableRow;
