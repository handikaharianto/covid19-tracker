import "./Stats.scss";
import useFetch from "../../hooks/useFetch";
import StatsCard from "./StatsCard";
import { MdGroups, MdAdd } from "react-icons/md";
import { FaSkullCrossbones } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import formatNumber from "../../utils/formatNumber";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const url = "https://disease.sh/v3/covid-19/all";

function Stats() {
  const { data, loading, error } = useFetch(url);

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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <>
          <StatsCard
            total={formatNumber(population)}
            updates={"Last Updated: " + new Date(updated).toDateString()}
            statsName="Population"
            icons={<MdGroups />}
          />
          <StatsCard
            total={formatNumber(cases)}
            updates={`+${formatNumber(todayCases)} New Cases`}
            statsName="Total Cases"
            icons={<MdAdd />}
          />
          <StatsCard
            total={formatNumber(deaths)}
            updates={`+${formatNumber(todayDeaths)} New Deaths`}
            statsName="Total Deaths"
            icons={<FaSkullCrossbones />}
          />
          <StatsCard
            total={formatNumber(recovered)}
            updates={`+${formatNumber(todayRecovered)} New Recovery`}
            statsName="Total Recovered"
            icons={<GiHealthNormal />}
          />
        </>
      )}
    </section>
  );
}

export default Stats;
