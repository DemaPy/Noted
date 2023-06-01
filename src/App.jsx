import { Col, Row } from "antd";
import { Container, Sidebar } from "./components/";
import { Main } from "./pages/Main";
import { AppContextProvider } from "./state/context.jsx";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    window.addEventListener("offline", handleOffline);

    function handleOffline(ev) {
      setIsOnline(false)
    }

    return () => removeEventListener("offline", handleOffline)
  }, [])

  useEffect(() => {
    window.addEventListener("online", handleOffline);
    function handleOffline(ev) {
      setIsOnline(true)
    }

    return () => removeEventListener("online", handleOffline)
  }, [])

  return (
    <>
      {
        isOnline
          ?
          <AppContextProvider>
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
                  <Main />
                </Col>
              </Row>
            </Container>
          </AppContextProvider>
          :
          "Please check your connection. Looks like you are offline."
      }
    </>
  );
}

export default App;
