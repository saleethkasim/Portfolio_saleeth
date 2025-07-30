import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Muhammad Saleeth</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* === EDITED IMAGE TAG === */}
              <img
                // I've used a placeholder image here because the original path was broken.
                // To use your own image again, fix the import path at the top of the file and change src back to {homeLogo}
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  borderRadius: "50%",
                  width: "450px",
                  height: "450px",
                  objectFit: "cover",
                  // This box-shadow creates the "dissolve" effect by adding a soft, glowing border
                  boxShadow: "0 0 35px 20px rgba(147, 51, 234, 0.4)",
                }}
              />
              {/* ======================= */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
