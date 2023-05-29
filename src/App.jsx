import { Col, Row } from "antd";
import { Container, Sidebar } from "./components/";
import { Main } from "./pages/Main";
import { AppContextProvider } from "./state/context.jsx";
import "./index.css";
import { useState } from "react";


function App() {
  const [color, setColor] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = (selectedColor) => {
    setModalOpen((prev) => !prev);
    setColor(selectedColor)
  };

  return (
    <AppContextProvider isModalOpen={isModalOpen} toggleModal={toggleModal}>
      <Container>
        <Row className="h-[100%]">
          <Col
            className="flex align-top items-center flex-col border-r-2"
            xs={{
              span: 6
            }}
            md={{
              span: 4
            }}
          >
            <Sidebar />
          </Col>
          <Col
            className="md:px-20 px-8 text-lg font-semibold"
            xs={{
              span: 16
            }}
            md={{
              span: 18
            }}
          >
            <Main color={color}/>
          </Col>
        </Row>
      </Container>
    </AppContextProvider>
  );
}

export default App;
