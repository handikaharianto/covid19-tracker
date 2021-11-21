import "./Stats.scss";
import useFetch from "../../hooks/useFetch";
import Stats from "./StatsCard";
import { MdGroups, MdAdd } from "react-icons/md";
import { FaSkullCrossbones } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import formatNumber from "../../utils/formatNumber";

const url = "https://disease.sh/v3/covid-19/all";

function Dashboard() {
  const { data } = useFetch(url);

  const {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
  } = data;

  return (
    <section className="stats">
      <Stats
        total={formatNumber(population)}
        updates={"Last Updated: " + new Date(updated).toDateString()}
        statsName="Population"
        icons={<MdGroups />}
      />
      <Stats
        total={formatNumber(cases)}
        updates={`+${formatNumber(todayCases)} New Cases`}
        statsName="Total Cases"
        icons={<MdAdd />}
      />
      <Stats
        total={formatNumber(deaths)}
        updates={`+${formatNumber(todayDeaths)} New Deaths`}
        statsName="Total Deaths"
        icons={<FaSkullCrossbones />}
      />
      <Stats
        total={formatNumber(recovered)}
        updates={`+${formatNumber(todayRecovered)} New Recovery`}
        statsName="Total Recovered"
        icons={<GiHealthNormal />}
      />
    </section>
  );
}

export default Dashboard;
