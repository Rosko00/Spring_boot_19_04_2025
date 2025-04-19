import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

function People() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      const data = await apiGet("people");
      setPeople(data.results);
    }

    fetchPeople();
  }, []);

  if (!people) {
    return <p>Načítavam postavy...</p>; 
  }

  return (
    <div>
      <h1>Postavy</h1>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>Výška: {person.height}</p>
          <p>Váha: {person.mass}</p>
        </div>
      ))}
    </div>
  );
}

export default People;