


export default function CountryDetails(data:any) {
    return (
      <div>
      {data.countryInfo ? (
        <div>

       <h1>Country Name: {data.countryInfo.name}</h1>
       <h1>Country Population: {data.countryInfo.population}</h1>
       <h1>Country Capital: {data.countryInfo.capital}</h1>

        </div>
      ) : (
        <div>
            <h1>Not Found</h1>
        </div>
      )}


      </div>
    );
  }
  