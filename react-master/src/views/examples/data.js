
import React from "react";

// // reactstrap components
// import { Card, Container, Row } from "reactstrap";

// // core components
import Header from "components/Headers/Header.js";
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Table } from 'reactstrap';
import { CSVLink } from 'react-csv';

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

const Maps = () => {

  // Example data for the table
  const tableData = [
    { feature: 'Feature 1', impact: 'High' },
    { feature: 'Feature 2', impact: 'Medium' },
    { feature: 'Feature 3', impact: 'Low' },
    // Add more data as needed
  ];

  // Headers for the CSV file, must match the keys in the tableData objects
  const headers = [
    { label: "Feature", key: "feature" },
    { label: "Impact", key: "impact" }
  ];




  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ paddingTop: '120px' }}>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardBody>
                <h3>Feature Impact Table</h3>
                <CSVLink 
                  data={tableData}
                  headers={headers}
                  filename="features_impacts.csv"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Export to CSV
                </CSVLink>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Feature</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.feature}</td>
                        <td>{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Maps;
