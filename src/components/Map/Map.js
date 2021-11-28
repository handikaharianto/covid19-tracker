import useFetch from "../../hooks/useFetch";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "./Map.scss";
import formatNumber from "../../utils/formatNumber";

const url = "https://disease.sh/v3/covid-19/countries";

function Map() {
  const { data, loading } = useFetch(url);

  if (loading) {
    return null;
  }

  return (
    <MapContainer
      center={[17.058795, 25.645469]}
      zoom={2}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((singleCountry, index) => {
        const {
          country,
          countryInfo: { lat, long, flag },
          cases,
          todayCases,
          deaths,
          recovered,
          todayRecovered,
        } = singleCountry;
        return (
          <CircleMarker
            key={index}
            center={[lat, long]}
            color="#e63946"
            stroke={false}
            fillOpacity={0.8}
            radius={17}
          >
            <Popup>
              <div className="country-details">
                <img
                  className="country-details__flag"
                  src={flag}
                  alt={country}
                ></img>
                <h5 className="country-details__name">{country}</h5>
              </div>
              <ul className="country-info">
                <li>Total Cases: {formatNumber(cases)}</li>
                <li>Total Recovered: {formatNumber(recovered)}</li>
                <li>Total Deaths: {formatNumber(deaths)}</li>
                <li>Total New Cases Today: {todayCases}</li>
                <li>Total Recovered Today: {todayRecovered}</li>
              </ul>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
