import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Props {
  countries: [];
}

interface Country {
  code: string;
  name: string;
  capital: string;
  phone: string;
}

const Home = ({ countries }: Props) => {
  console.log(countries);

  return (
    <div>
      <h1>countries</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {countries.map((country: Country, i: number) => {
          return (
            <div style={{ border: "1px solid black" }} key={i}>
              <p>{country.code}</p>
              <p>{country.name}</p>
              <p>{country.capital}</p>
              <p>{country.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getCountries {
        countries {
          code
          name
          capital
          phone
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default Home;
