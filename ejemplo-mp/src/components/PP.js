import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/paises.css";

const API_URL = "https://countriesnow.space/api/v0.1/countries/flag/images";

const Paises = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: countryName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("No existe el país buscado");
        }
      })
      .then((data) => {
        setCountry(data.data.flag);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [countryName]);

  if (isLoading) {
    return (
      <div className="contenedor-bandera">
        <h1>Loading...</h1>
        <div className="loading-bar">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="contenedor-bandera">
        <h1>Error: Country flag not found</h1>
      </div>
    );
  }

  return (
    <div className="contenedor-bandera">
      <h1>Bandera:</h1>
      <img src={country} alt="bandera" />
    </div>
  );
};

export { Paises };
