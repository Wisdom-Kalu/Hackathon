
import React from "react";

// // reactstrap components
// import { Card, Container, Row } from "reactstrap";

// // core components
import Header from "components/Headers/Header.js";
import { Container, Row, Card, CardBody,Col, Button, ButtonGroup, CardTitle, CardText, CardImg, Table } from 'reactstrap';

import { CSVLink } from 'react-csv';
import { useNavigate } from "react-router-dom";
// const MapWrapper = () => {
//   const mapRef = React.useRef(null);
//   React.useEffect(() => {
//     let google = window.google;
//     let map = mapRef.current;
//     let lat = "40.748817";
//     let lng = "-73.985428";
//     const myLatlng = new google.maps.LatLng(lat, lng);
//     const mapOptions = {
//       zoom: 12,
//       center: myLatlng,
//       scrollwheel: false,
//       zoomControl: true,
//       styles: [
//         {
//           featureType: "administrative",
//           elementType: "labels.text.fill",
//           stylers: [{ color: "#444444" }],
//         },
//         {
//           featureType: "landscape",
//           elementType: "all",
//           stylers: [{ color: "#f2f2f2" }],
//         },
//         {
//           featureType: "poi",
//           elementType: "all",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "road",
//           elementType: "all",
//           stylers: [{ saturation: -100 }, { lightness: 45 }],
//         },
//         {
//           featureType: "road.highway",
//           elementType: "all",
//           stylers: [{ visibility: "simplified" }],
//         },
//         {
//           featureType: "road.arterial",
//           elementType: "labels.icon",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "transit",
//           elementType: "all",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "water",
//           elementType: "all",
//           stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
//         },
//       ],
//     };

//     map = new google.maps.Map(map, mapOptions);

//     const marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: "Light Bootstrap Dashboard PRO React!",
//     });

//     const contentString =
//       '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
//       "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

//     const infowindow = new google.maps.InfoWindow({
//       content: contentString,
//     });

//     google.maps.event.addListener(marker, "click", function () {
//       infowindow.open(map, marker);
//     });
//   }, []);
//   return (
//     <>
//       <div
//         style={{ height: `600px` }}
//         className="map-canvas"
//         id="map-canvas"
//         ref={mapRef}
//       ></div>
//     </>
//   );
// };

const Data = () => {
  const buttonGroupStyle = {
    marginBottom: '20px',
  };

  // Example data for the table
  const tableData = [
    { feature: 'Environmental', impact: '10' },
    { feature: 'Economic', impact: '3' },
    { feature: 'Social', impact: '4' },
    { feature: 'Individual', impact: '9' },
    { feature: 'Technical', impact: '7' },
    // Add more data as needed
  ];

  // Headers for the CSV file, must match the keys in the tableData objects
  const headers = [
    { label: "Feature", key: "feature" },
    { label: "Impact", key: "impact" }
  ];
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/admin/reports"); // Update this path based on your actual routing setup
  };



  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ paddingTop: '120px' }}>
      <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} style={buttonGroupStyle}>
            <ButtonGroup>
              <Button  color="info">Data Results</Button>
              <Button onClick={handleStartClick} color="info">Graph</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardBody>
                <h3>Feature Impact Table</h3>
                
                <Table responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Sustainability Dimension</th>
                      <th>Impact Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">*</th>
                        <td>{item.feature}</td>
                        <td>{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <CSVLink 
                  data={tableData}
                  headers={headers}
                  filename="features_impacts.csv"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Export to CSV
                </CSVLink>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Data;