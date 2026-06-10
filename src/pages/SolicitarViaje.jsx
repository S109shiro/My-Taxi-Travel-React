import "./solicitarViaje.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function MoverMapa({ coordenadas }) {
  const map = useMap();
  useEffect(() => {
    if (coordenadas) {
      map.flyTo(coordenadas, 13, { duration: 1.5 });
    }
  }, [coordenadas]);
  return null;
}

function SolicitarViaje() {
  useEffect(() => {
    document.title = "My Taxi Travel - Solicitar viaje";
  }, []);

  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [marcadorOrigen, setMarcadorOrigen] = useState(null);
  const [marcadorDestino, setMarcadorDestino] = useState(null);
  const [centroMapa, setCentroMapa] = useState(null);
  const [rutaCoordenadas, setRutaCoordenadas] = useState([]);
  const [infoRuta, setInfoRuta] = useState(null);

  const calcularRuta = async (coordsOrigen, coordsDestino) => {
    try {
      const res = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${coordsOrigen[1]},${coordsOrigen[0]};${coordsDestino[1]},${coordsDestino[0]}?overview=full&geometries=geojson`
      );
      const data = await res.json();

      if (data.routes && data.routes.length > 0) {
        const ruta = data.routes[0];
        const puntos = ruta.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
        setRutaCoordenadas(puntos);
        setInfoRuta({
          distancia: (ruta.distance / 1000).toFixed(1),
          tiempo: Math.round(ruta.duration / 60),
        });
      }
    } catch (e) {
      console.error("Error calculando ruta:", e);
    }
  };

  const buscarLugar = async (texto, tipo) => {
    if (!texto || texto.length < 3) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(texto)}&format=json&limit=1&countrycodes=co`,
      );
      const data = await res.json();

      if (data.length > 0) {
        const coords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        let nuevoOrigen = marcadorOrigen?.coords;
        let nuevoDestino = marcadorDestino?.coords;

        if (tipo === "origen") {
          setMarcadorOrigen({ coords, label: data[0].display_name });
          nuevoOrigen = coords;
        } else {
          setMarcadorDestino({ coords, label: data[0].display_name });
          nuevoDestino = coords;
        }

        setCentroMapa(coords);

        // Si ya hay origen y destino calcula la ruta
        if (nuevoOrigen && nuevoDestino) {
          calcularRuta(nuevoOrigen, nuevoDestino);
        }
      }
    } catch (e) {
      console.error("Error buscando lugar:", e);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-300">
          <MapContainer
            center={[5.7306, -72.8972]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Mover mapa cuando hay coordenadas */}
            {centroMapa && <MoverMapa coordenadas={centroMapa} />}

            {/* Marcador origen */}
            {marcadorOrigen && (
              <Marker position={marcadorOrigen.coords}>
                <Popup>Origen: {marcadorOrigen.label}</Popup>
              </Marker>
            )}

            {/* Marcador destino */}
            {marcadorDestino && (
              <Marker position={marcadorDestino.coords}>
                <Popup>Destino: {marcadorDestino.label}</Popup>
              </Marker>
            )}

            {/* Ruta entre origen y destino */}
            {rutaCoordenadas.length > 0 && (
              <Polyline positions={rutaCoordenadas} color="blue" weight={4} />
            )}
          </MapContainer>
        </div>

        <form className="container px-5 py-24 mx-auto flex">
          <div className="tarjeta lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Solicitud del Viaje
            </h2>

            <button className="demanda bg-green-500 rounded-md">
              Baja demanda
            </button>

            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
              <strong>$ {infoRuta ? (
                <>
                  {(infoRuta.distancia * 1700).toLocaleString('es-ES')}
                </>
              ): 0}</strong>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="informacion relative mb-4">
                <label htmlFor="origen" className="leading-7 text-sm text-gray-600">
                  Origen
                </label>
                <input
                  type="search"
                  name="origen"
                  id="origen"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={origen}
                  onChange={(e) => setOrigen(e.target.value)}
                  onBlur={() => buscarLugar(origen, "origen")}
                  placeholder="------"
                  required
                />
              </div>

              <div className="informacion relative mb-4">
                <label htmlFor="destino" className="leading-7 text-sm text-gray-600">
                  Destino
                </label>
                <input
                  type="search"
                  name="destino"
                  id="destino"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  onBlur={() => buscarLugar(destino, "destino")}
                  placeholder="------"
                  required
                />
              </div>
            </div>

            <div className="informacion relative mb-4">
              <label htmlFor="informacion-viaje" className="leading-7 text-sm text-gray-600">
                Detalles del viaje
              </label>
              <hr />
              <p className="leading-relaxed mb-5 text-gray-600">
                {infoRuta ? (
                  <>
                    <span className="block">Distancia: <strong>{infoRuta.distancia} km</strong></span>
                    <span className="block">Tiempo estimado: <strong>{infoRuta.tiempo} min</strong></span>
                  </>
                ) : (
                  "Aquí se mostrarán los detalles de tu viaje, como el punto de partida, el destino, el tiempo estimado y la información de tu conductor y vehículo."
                )}
              </p>
            </div>

            <button className="realizar_viaje text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-not-allowed">
              Realizar Viaje
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default SolicitarViaje;