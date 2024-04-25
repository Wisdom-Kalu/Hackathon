import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Home = () => {
  const [copiedText, setCopiedText] = useState();
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/admin/manual'); // Update this path based on your actual routing setup
  };
  return (
    <>
      <Container className="my-5">
        <Row className="mt-9">
          <Col className="order-xl-2" lg="8" xl="8">
            <Card style={{ backgroundColor: "#2cb051" }}>
              {/* <img alt="Sample" src="/image.png" /> */}
              {/* <CardText style={{ color: "white" }}>Green Genius</CardText> */}
              <CardTitle tag="h1" className="d-flex justify-content-center align-items-center mt-3" style={{ color: "white" }}>
                Green Genius
              </CardTitle>
              {/* <CardImg
                alt=""
                src="/image.png"
                style={{
                  height: 270,
                }}
                width="100%"
              /> */}
            </Card>
          </Col>
          <Col lg="2" xl="2"></Col>
        </Row>
        <Row>
          <Col className="order-xl-5" lg="8" xl="8">
            <CardBody
              className="d-flex justify-content-center align-items-center"
              style={{ height: "200px" }}
            >
              <CardTitle tag="h1" className="d-flex justify-content-center align-items-center">
                Let's Think Sustainable
              </CardTitle>
            </CardBody>
            <CardBody className="d-flex justify-content-center align-items-center">
              <Button onClick={handleStartClick}>Start</Button>
            </CardBody>
          </Col>
          <Col lg="2" xl="2"></Col>
        </Row>
      </Container>

      {/* <Header />
      {/* Page content */}
      {/* <Container className="mt--7" fluid> */}
      {/* Table */}
      {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Icons</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">                  
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container> */}
    </>
  );
};

export default Home;
