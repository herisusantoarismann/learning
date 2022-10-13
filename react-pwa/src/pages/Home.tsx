import React from "react";

interface Users {
  name?: string;
  username?: string;
  email?: string;
}

const Home: React.FC = () => {
  const [data, setData] = React.useState<Array<Users>>([{}]);
  const [mode, setMode] = React.useState<string>("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setMode("online");
        setData(res);
        localStorage.setItem("react-pwa", JSON.stringify(res));
      })
      .catch(() => {
        setMode("offline");
        const data = JSON.parse(localStorage.getItem("react-pwa") || "{}");
        setData(data);
      });
  }, []);
  return (
    <>
      <h1>This data from API</h1>
      <p>You're {mode}</p>
      <div>
        {data.map((item) => {
          return (
            <>
              <p>{item.name}</p>
              <p>{item.username}</p>
              <p>{item.email}</p>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
