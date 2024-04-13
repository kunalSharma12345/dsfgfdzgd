import React from "react";

const arr = [
  { name: "Kunal", country: "India" },
  { name: "Rocky", country: "America" },
  { name: "lucky", country: "USA" },
];

function App() {
  return (
    <div>
      <h1>Thi is a demo project for the production </h1>
      <br />

      <button>Click for the user Details</button>
      <br />
      <br />
      <br />
      <ul>
        {arr?.length !== 0 ? (
          arr?.map((item) => {
            return (
              <li>
                <h2>{item?.name}</h2>
                country name :- {item?.country}
              </li>
            );
          })
        ) : (
          <p>Data NO found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
