import { useEffect, useState } from "react";

export const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response.json()))
      .then((users) =>
        setMonsters(
          () => {
            return users;
          },
          () => {
            console.log("monsters : ", monsters);
          }
        )
      );
  });

  return (
    <div className="App">
      <input />
      {monsters.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
