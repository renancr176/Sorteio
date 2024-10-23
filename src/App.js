import React, { useState, useEffect } from "react";
import "./App.css";
import FileInput from "./FileInput";
import CountDownModal from "./CountDownModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function App() {
  const [data, setData] = useState([]);
  const [rifa, setRifa] = useState([]);
  const [showCountDownModal, setShowCountDownModal] = useState(false);
  const [itemSorteado, setItemSorteado] = useState(undefined);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 1)
      setRifa(data.filter((x) => x.Comprador && x.Comprador.trim().length > 0));
    else setRifa([]);
  }, [data]);

  const iniciarSorteio = () => {
    debugger;
    const min = 0;
    const max = rifa.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    const item = rifa[index];
    setShowCountDownModal(true);
    setTimeout(() => {
      setItemSorteado(item);
      setShowCountDownModal(false);
    }, 13000);    
  };

  return (
    <>
      <Container fluid className="h-100">
        {rifa.length == 0 ? (
          <Row className="h-100">
            <Col className="h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="align-self-center">
                  <h1>Importar planilha</h1>
                  <FileInput data={data} setData={setData} />
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={4} className="table-container">
              <Table striped bordered hover>
                <thead className="sticky-top">
                  <tr>
                    <th>Numero</th>
                    <th>Comprador</th>
                  </tr>
                </thead>
                <tbody>
                  {rifa.map((item) => (
                    <tr>
                      <td>{item.Numeros}</td>
                      <td>{item.Comprador}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <div className="d-flex justify-content-center h-100">
                <div className="align-self-center">
                  {!itemSorteado ? (
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => iniciarSorteio()}
                    >
                      Sortear
                    </Button>
                  ) : (
                    <>
                      <h1 className="text-animation-color">
                        Número sorteado: {itemSorteado.Numeros}
                      </h1>
                      <h1 className="text-animation-color">
                        Parabéns: {itemSorteado.Comprador}
                      </h1>
                    </>
                  )}
                </div>
              </div>
              {/* <div className="roleta">
              <p>
                {rifa.map((item, index) => (
                  <span style={{'transform': `rotate(${((360 / rifa.length) * index)}deg)`}}>
                    <b>{item.Numeros.toString().padStart(3, '0')}</b>
                  </span>
                ))}
              </p>
            </div> */}
            </Col>
          </Row>
        )}
      </Container>
      <CountDownModal show={showCountDownModal}/>
    </>
  );
}

export default App;
