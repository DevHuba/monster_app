import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setMonsters(res);
        setFilteredMonsters(res);
      });

    console.log("monsters : ", monsters);
  }, []);

  const filterMonsters = (filterKey) => {
    setFilteredMonsters(monsters.filter((item) => item.name.toLowerCase().includes(filterKey)));
  };

  return (
    <div className="App">
      <TextField
        sx={{ m: 3 }}
        id="outlined-basic"
        variant="outlined"
        label="Search monster"
        onChange={(e) => {
          const loweredItem = e.target.value.toLowerCase();
          filterMonsters(loweredItem);
        }}
      />
      {filteredMonsters.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
