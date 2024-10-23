import React, { useState, useEffect } from "react";
import "./App.css";
import FileInput from "./FileInput";
import CountDownModal from "./CountDownModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import exemplo from './assets/images/exemplo.png'

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
      <Container fluid>
        {rifa.length == 0 ? (
          <Row>
            <Col>
              <div className="d-flex justify-content-center h-100">
                <div className="align-self-center">
                  <Row>
                    <Col>
                      <h1>Importar planilha</h1>
                      <FileInput data={data} setData={setData} />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <p>
                        A estrutura da planilha deve seguir as regras a baixo:
                      </p>
                      <ul>
                        <li>1ª linha deve conter:</li>
                        <li>
                          <ul>
                            <li>
                              1ª coluna descrição <b>Numero</b> (sem acentuação
                              e primeira letra maiuscula)
                            </li>
                            <li>
                              2ª coluna descrição <b>Compador</b> (sem
                              acentuação e primeira letra maiuscula)
                            </li>
                          </ul>
                        </li>
                        <li>
                          2ª linha em diante os numeros da rifa e seus
                          compradores
                        </li>
                        <li>
                          Obs: linhas/números sem comprador serão descartados do
                          sorteio
                        </li>
                      </ul>
                      <p>Exemplo:</p>
                      <img src={exemplo} class="rounded mx-auto d-block border border-secondary" alt="Imagem Exemplo"></img>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
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
                        Número sorteado: {itemSorteado.Numero.toString()}
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
                    <b>{item.Numero.toString().padStart(3, '0')}</b>
                  </span>
                ))}
              </p>
            </div> */}
            </Col>
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
                      <td>{item.Numero.toString()}</td>
                      <td>{item.Comprador}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
      </Container>
      <CountDownModal show={showCountDownModal} />
    </>
  );
}

export default App;
