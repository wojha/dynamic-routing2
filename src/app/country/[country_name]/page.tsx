
import Country from "@/app/components/Country";
export default function CountryName({ params }: any) {


    const countries: {
        name: string;
        population: number;
        capital: string;
    }[] = [{
        name: "Pakistan",
        population: 241492197,
        capital: "Islamabad",
    },
    {
        name: "Kuwait",
        population: 4960111,
        capital: "Kuwait City",
    },
    {
        name: "Japan",
        population: 123753041,
        capital: "Tokyo",
    },
    {
        name: "India",
        population: 1450935791,
        capital: "New Delhi",
    },
    {
        name: "Bahrain",
        population: 1577059,
        capital: "Manama",
    },
        ];

function findCountry(country_url:string){
    return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
}

let result = findCountry(params.country_name);

    return (
        <div>

        <Country countryInfo = {result} />

          {/* {
            result ? (
                <>
            <h1>Country Name: {result.name}</h1>
            <h1>Country Capital:  {result.capital}</h1>
            <h1>Country Population:  {result.population}</h1>
                </>
            ) : (
                <h1>{params.country_name} Not Found</h1>
            )
          } */}
           
        </div>
    );
}

