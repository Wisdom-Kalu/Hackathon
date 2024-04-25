
import React from "react";

// // reactstrap components
// import { Card, Container, Row } from "reactstrap";

// // core components
import Header from "components/Headers/Header.js";
import { Container, Row, Card, CardBody, CardTitle, CardText, CardImg, Table } from 'reactstrap';
//import { CSVLink } from 'react-csv';

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


  const text1 = (
      <div>
        <p><u><strong>Welcome to Green Genius!</strong></u> An application to help you better understand the sustainability impacts of your products and services!</p>
        <p>A brief introduction on how this software is as <u>follows</u></p>
        <p>First, you will select your role in the product/service, as such</p>
      </div>
    );
    const text2 = (
      <div>
        <p>Following this, enter the name of your product, as well as the number of features you’re </p>
        <p>interested in learning more about the impacts of </p>
      </div>
    );
    const text3 = (
      <div>
        <p>After inputting this information, enter the name (and description, optional) for the  </p>
        <p>aforementioned features </p>
      </div>
    );
    const text4 = (
      <div>
        <p>After you have verified this information is correct, you can proceed using the next button.</p>
      </div>
    );
    const text5 = (
      <div>
        <p>The next part is where you enter information regarding the various defined features. A </p>
        <p>feature questionnaire will appear, with various impact statements. You have a total of ten </p>
        <p>points per feature, and you can allocate these points as you see fit, based on your </p>
        <p>perceived impact of that statement from your product. You can allocate these anyway you </p>
        <p>wish, as long as the total points add up to exactly ten. </p>
        <p style={{ textIndent: '2em' }}>For example, you could add ten points to one impact and zero for the rest, one point </p>   
        <p>for ten different impacts, or anything in between! </p>
       </div>
    );
    const text6 = (
      <div>
        <p>This process will be repeated for every feature.</p>
        <br></br>
        <p>After this has been completed, you can ‘finish’, and information on the features and their </p>
        <p>impacts will be provided to you.</p>
  
      </div>
    );
  
    /*
    where the ref images will be added
  
    import image1 from './assets/sample-image.jpg';
    import image2 from './assets/sample-image.jpg';
    import image3 from './assets/sample-image.jpg';
    import image4 from './assets/sample-image.jpg';
    import image5 from './assets/sample-image.jpg';
  */
  
  
  
    return (
      <>
        <Header />
        <Container className="mt--7" fluid style={{ paddingTop: '120px' }}>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <CardBody>
                <h3 style={{ fontSize: '2rem' }}>Use Information Manual</h3>                
                <CardText>{text1}</CardText>
                <CardText>{"image1"}</CardText>
                <CardText>{text2}</CardText>
                <CardText>{"image2"}</CardText>
                <CardText>{text3}</CardText>
                <CardText>{"image3"}</CardText>
                <CardText>{text4}</CardText>
                <CardText>{"image4"}</CardText>
                <CardText>{text5}</CardText>
                <CardText>{"image5"}</CardText>
                <CardText>{text6}</CardText>
                  {/* Additional components like MapWrapper can be included here if needed */}
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
  
  
    );
  };
  
export default Maps;
