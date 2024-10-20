import React, { useState, useEffect } from "react";
import "./App.css";
import FileInput from "./FileInput";

function App() {
  const [data, setData] = useState(null);

  return (
    <>
    {(data == null || !Array.isArray(data) || data.length == 0)
      ? (
        <div className="App">
          <h1>Import Excel Data in React.js</h1>
          <FileInput data={data} setData={setData}/>
        </div>
      )
      : (
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Comprador</th>
            </tr>
          </thead>
          <tbody>
            {data.filter(x => x.Comprador && x.Comprador.trim().length > 0).map(item => (
            <tr>
              <td>{item.Numeros}</td>
              <td>{item.Comprador}</td>
            </tr>
            ))}
          </tbody>
        </table>
      )
    }
    </>
  );
}

export default App;
