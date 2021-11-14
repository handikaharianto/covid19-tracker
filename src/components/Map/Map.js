import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "./Map.scss";

function Map({ data }) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
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
            radius={15}
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
                <li>Total Cases: {cases}</li>
                <li>Total Recovered: {recovered}</li>
                <li>Total Deaths: {deaths}</li>
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
