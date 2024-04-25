import React from "react";

// // reactstrap components
// import { Card, Container, Row } from "reactstrap";

// // core components
import Header from "components/Headers/Header.js";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Table,
} from "reactstrap";
import { CSVLink } from "react-csv";

//import { CSVLink } from 'react-csv';

const Manual = () => {
  const text1 = (
    <div>
      <br></br>
      <br></br>
      <p>
        <u>
          <strong>Welcome to Green Genius!</strong>
        </u>{" "}
        An application to help you better understand the sustainability impacts
        of your products and services!
      </p>
      <p>
        A brief introduction on how this software is as <u>follows</u>
      </p>
      <p>First, you will select your role in the product/service</p>
    </div>
  );
  const text2 = (
    <div>
      <br></br>
      <br></br>
      <p>
        Following this, enter the name of your product, as well as the number of
        features you’re{" "}
      </p>
      <p>interested in learning more about the impacts of </p>
    </div>
  );
  const text3 = (
    <div>
      <br></br>
      <br></br>
      <p>
        After inputting this information, enter the name (and description,
        optional) for the{" "}
      </p>
      <p>aforementioned features </p>
    </div>
  );
  const text4 = (
    <div>
      <br></br>
      <br></br>
      <p>
        After you have verified this information is correct, you can proceed
        using the next button.
      </p>
    </div>
  );
  const text5 = (
    <div>
      <br></br>
      <br></br>
      <p>
        The next part is where you enter information regarding the various
        defined features. A{" "}
      </p>
      <p>
        feature questionnaire will appear, with various impact statements. You
        have a total of ten{" "}
      </p>
      <p>
        points per feature, and you can allocate these points as you see fit,
        based on your{" "}
      </p>
      <p>
        perceived impact of that statement from your product. You can allocate
        these anyway you{" "}
      </p>
      <p>wish, as long as the total points add up to exactly ten. </p>
      <br></br>
      <br></br>
      <p>
        For example, you could add ten points to one impact and zero for the
        rest, one point{" "}
      </p>
      <p>for ten different impacts, or anything in between! </p>
    </div>
  );
  const text6 = (
    <div>
      <p>This process will be repeated for every feature.</p>
      <br></br>
      <p>
        After this has been completed, you can ‘finish’, and information on the
        features and their{" "}
      </p>
      <p>impacts will be provided to you.</p>
    </div>
  );
  const text7=(
    <div>
      <h3 style={{ fontSize: "1rem" }}> Environmental Sustainability in IT</h3>
      <p>Environmental sustainability in IT refers to practices and strategies that reduce the ecological impact of technology operations. This dimension involves minimizing energy consumption, reducing waste, and optimizing resource usage to preserve the natural environment. For instance, data centers, known for their significant energy demands, have adopted green computing practices. A specific example is Google's data center that utilizes seawater for cooling, drastically cutting down on the electricity required for traditional air conditioning. This sustainable approach demonstrates how technology can evolve to coexist harmoniously with the environment, setting a precedent for eco-friendly innovations in the IT sector.</p>
    </div>
  );
  const text8=(
    <div>
      <h3 style={{ fontSize: "1rem" }}> Economic Sustainability in IT</h3>
      <p>Economic sustainability in IT focuses on the ability of technology to contribute to economic efficiency and viability over time. It encompasses the creation of cost-effective solutions that also foster economic growth and stability. Cloud computing offers a compelling illustration of this principle. By allowing businesses to access scalable resources on demand, it reduces the need for expensive infrastructure investments and maintenance. Amazon Web Services (AWS), for instance, provides pay-as-you-go services that enable startups to large enterprises to optimize their spending and resource utilization. This model illustrates how IT can drive economic sustainability by offering flexible and financially accessible resources to businesses of all sizes.</p>
    </div>
  );
  const text9=(
    <div>
      <h3 style={{ fontSize: "1rem" }}> Social Sustainability in IT</h3>
    <p>Social sustainability in IT looks at how technological advancements contribute to the well-being of society and how they are accessible to a broad user base. It ensures that technology supports social inclusion, equity, and community development. An exemplary case is the development of assistive technologies that enable people with disabilities to access information and communication tools. Screen readers like JAWS (Job Access With Speech) transform text on a computer screen into audible speech, allowing visually impaired individuals to interact with digital content independently. This type of technology embodies the social dimension of sustainability by fostering an inclusive digital environment that empowers all individuals.</p>
    </div>
  );
  const text10=(
    <div>
      <h3 style={{ fontSize: "1rem" }}> Individual Sustainability in IT</h3>
      <p>
      Individual sustainability in IT is concerned with technology's role in supporting personal development, well-being, and fulfillment. It encourages the creation of technology that helps individuals to thrive and maintain a balanced lifestyle. A prime example of this is educational platforms like Khan Academy, which offers free online courses to learners worldwide. By providing accessible learning resources, such platforms empower individuals to improve their skills and knowledge, which is vital for personal growth and career advancement. This form of sustainability underlines the potential for IT to be a powerful tool for individual empowerment and lifelong learning.
      </p>
    </div>
  );
  const text11=(
    <div>
      <h3 style={{ fontSize: "1rem" }}> Technical Sustainability in IT</h3>
      <p>Technical sustainability refers to the development of technology that remains functional, relevant, and up-to-date over extended periods. It involves creating adaptable, maintainable, and future-proof solutions. An example of technical sustainability in action is the concept of open-source software, like the Linux operating system. Its open-source nature allows a global community of developers to contribute to its evolution, ensuring that it continually adapts to new hardware, security threats, and user needs. Linux's enduring presence and adaptability make it a sustainable IT solution that stands the test of time, demonstrating how collaborative development can lead to technically sustainable technology.</p>
        </div>
  )

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
      <Container className="mt--7" fluid style={{ paddingTop: "120px" }}>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardBody>
                <h3 style={{ fontSize: "2rem" }}>Use Information Manual</h3>
                <CardText>{text1}</CardText>
                <CardText>{text2}</CardText>
                
                <CardText>{text3}</CardText>
               
                <CardText>{text4}</CardText>
               
                <CardText>{text5}</CardText>
                
                <CardText>{text6}</CardText>
                {/* Additional components like MapWrapper can be included here if needed */}
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardBody>
                <h3 style={{ fontSize: "2rem" }}>Sustainability in IT</h3>
                <CardText>{text7}</CardText>
                <CardText>{text8}</CardText>
                <CardText>{text9}</CardText>
                <CardText>{text10}</CardText>
                <CardText>{text11}</CardText>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Manual;
