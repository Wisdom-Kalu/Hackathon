import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const QuestionsForm = () => {
    const questions = [
        {
            question: 'How does the software feature minimize energy consumption?',
            subQuestions: [
                'Implements energy-saving modes during inactivity.',
                'Optimized algorithms for reduced CPU intensity.',
                'Uses cloud services with a commitment to renewable energy.',
                'Reduces the need for physical hardware through virtualization.',
                'Includes settings for users to control energy use.',
                'Efficient memory management to minimize resource usage.',
                'Does not require high-performance hardware to operate.',
                'Energy consumption metrics are provided to users.',
                'Adapts resource use according to the device’s power source.',
                'Regular updates include optimization for energy efficiency.'
            ]
        },
        {
            question: 'In what ways does the software feature support environmental sustainability?',
            subQuestions: [
                "Encourages paperless operations and transactions.",
                "Integrates with other eco-friendly software systems.",
                "Reduces the need for travel through remote capabilities.",
                "Tracks environmental metrics like carbon footprint.",
                "Supports user settings for eco-friendly operations.",
                "Educates users about sustainability through in-app content.",
                "Uses artificial intelligence to optimize resource allocation.",
                "Monitors and suggests optimization for resource use.",
                "Aligns with international standards for environmental sustainability.",
                "Features are developed with a focus on minimal environmental impact."
            ]
        },
        {
            question: 'How does the software feature contribute to economic growth within its operating environment?',
            subQuestions: [
                "Creates new job opportunities through innovation.",
                "Encourages development of ancillary industries.",
                "Enables access to global markets for businesses.",
                "Supports local economies by utilizing local resources.",
                "Facilitates efficient resource management for businesses.",
                "Spawns new business models and services.",
                "Enhances workforce skills through technological advancements.",
                "Increases competitiveness of businesses using the software.",
                "Contributes to the digital economy through data-driven insights.",
                "Provides a platform for financial transactions and e-commerce."
            ]
        },
        {
            question: 'How does the software feature ensure cost-effectiveness for users?',
            subQuestions: [
                "Lowers operational costs through automation.",
                "Requires minimal training due to intuitive design.",
                "Reduces the need for additional software purchases.",
                "Offers scalable pricing based on usage.",
                "Provides significant long-term savings over short-term gains.",
                "Minimizes maintenance costs through robust architecture.",
                "Enhances productivity with efficient workflows.",
                "Offers free version with essential functionalities.",
                "Reduces the need for expensive hardware upgrades.",
                "Has a strong ROI proven through case studies."
            ]
        },
        {
            question: 'How is the software feature designed to be maintainable and supportable long-term?',
            subQuestions: [
                "Uses a modular codebase for easy updates and fixes.",
                "Follows coding standards for readability and documentation.",
                "Includes comprehensive support and troubleshooting resources.",
                "Offers a subscription model that includes support and maintenance.",
                "Maintains a dedicated support team with expert knowledge.",
                "Establishes a roadmap for long-term product support.",
                "Prioritizes ease of use to reduce support requests.",
                "Offers training for developers to ensure a skilled workforce.",
                "Leverages community forums for peer-to-peer assistance.",
                "Uses automated testing to ensure consistent functionality."
            ]
        },
        {
            question: 'How is the software feature prepared to handle data evolution, such as changes in data volume, variety, and velocity?',
            subQuestions: [
                "Implements scalable database technologies.",
                "Offers data archiving and purging capabilities.",
                "Uses data lakes or warehouses for managing large datasets.",
                "Features dynamic data pipelines for varying data flows.",
                "Adopts Big Data technologies for analytics and processing.",
                "Ensures data integrity through robust validation rules.",
                "Accommodates new data sources with flexible integration points.",
                "Provides tools for real-time data processing and streaming.",
                "Utilizes advanced caching mechanisms for performance.",
                "Embraces a data governance framework for quality and compliance."
            ]
        },
        {
            question: 'How does the software feature ensure ethical use of data and protect user privacy?',
            subQuestions: [
                "Adheres to GDPR and other privacy regulations.",
                "Offers clear user consent options and data management tools.",
                "Implements strict data security and encryption measures.",
                "Practices data minimization to collect only necessary information.",
                "Provides transparent data policies and user controls.",
                "Conducts ethical reviews and impact assessments for data usage.",
                "Allows users to access, export, and delete their data.",
                "Regularly audits data practices for compliance and ethics.",
                "Includes features for parental controls and child safety.",
                "Avoids sharing user data with third parties without explicit permission."
            ]
        },
        {
            question: 'How does the software feature address the needs of global and multicultural users?',
            subQuestions: [
                "Offers multi-currency and multilingual support.",
                "Designs interfaces that are culturally neutral and adaptable.",
                "Understands and incorporates global user feedback.",
                "Features cultural calendars and international event recognition.",
                "Adapts content to be locally relevant and respectful.",
                "Supports right-to-left text for languages that require it.",
                "Engages cultural consultants in the development process.",
                "Provides a platform for global collaboration and exchange.",
                "Ensures compliance with international laws and cultural practices.",
                "Celebrates cultural diversity through special features or events."
            ]
        },
        {
            question: 'In what ways does the software feature enable users to manage their mental and physical health?',
            subQuestions: [
                "Features reminders for health-related activities, like breaks and exercises.",
                "Integrates with fitness and health tracking devices.",
                "Provides resources for mindfulness and stress management.",
                "Offers functionality for health data management and analysis.",
                "Encourages a balanced approach to notifications and digital communication.",
                "Includes settings to customize for reduced eye strain and better ergonomics.",
                "Provides information and tips on maintaining a healthy lifestyle.",
                "Offers tools for mood tracking and emotional well-being.",
                "Supports setting boundaries for work and personal time.",
                "Features integration with health and wellness platforms."
            ]
        },
        {
            question: 'In what ways does the software feature enhance individual creativity and self-expression?',
            subQuestions: [
                "Offers creative tools for art, music, writing, and design.",
                "Includes blogging and content creation platforms.",
                "Features customization and theming for personal expression.",
                "Supports integration with creative hardware and software.",
                "Provides feedback and critique features for creative work.",
                "Hosts user galleries and showcases for sharing creations.",
                "Offers tutorials and resources to learn new creative skills.",
                "Encourages user-driven customization and DIY projects.",
                "Supports file formats for a wide range of creative outputs.",
                "Features tools for brainstorming and idea generation."
            ]
        }
    ];

  const [features, setFeatures] = useState([]);
  const [isOpen, setIsOpen] = useState(new Array(questions.length).fill(false));
  const [remainingPoints, setRemainingPoints] = useState(10);
  const [disabledInputs, setDisabledInputs] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage when the component mounts
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFeatures(parsedData.features);
    }
  }, []);

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const disableInput = () => {};

  const handleSubQuestionChange = (index, subIndex, event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    const newRemainingPoints = remainingPoints - newValue;
    if (newRemainingPoints >= 0 && newRemainingPoints <= 10) {
      const updatedFeatures = [...features];
      updatedFeatures[index] = newValue;
      setFeatures(updatedFeatures);
      setRemainingPoints(newRemainingPoints);
      // Disable the input after it has been modified
      const updatedDisabledInputs = [...disabledInputs];
      updatedDisabledInputs.push({ index, subIndex });
      setDisabledInputs(updatedDisabledInputs);
    }
  };
  return (
    <Container>
      <Card className="p-3">
        <h2 className="mt-3 mb-4">Feature Questionnaire</h2>
        <Form>
          {features.map((feature, featureIndex) => (
            <div key={featureIndex}>
              <FormGroup>
                <Label for={`feature-${featureIndex}`}>{feature}</Label>
              </FormGroup>
              {questions.map((question, index) => (
                <Card key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <CardBody>
                      <FormGroup>
                        <Label>{question.question}</Label>
                        {isOpen[index] && (
                          <FormGroup>
                            <Label for="remainingPoints">
                              Remaining Points: {remainingPoints}
                            </Label>
                            <Input
                              type="text"
                              name="remainingPoints"
                              id="remainingPoints"
                              value={remainingPoints}
                              readOnly
                            />
                          </FormGroup>
                        )}
                        <Collapse isOpen={isOpen[index]}>
                          <ul>
                            {question.subQuestions.map(
                              (subQuestion, subIndex) => (
                                <li key={subIndex}>
                                  <Label
                                    check
                                    className="d-flex align-items-center justify-content-between"
                                  >
                                    {subQuestion}
                                    <Input
                                      type="number"
                                      className="ml-2 input-sm"
                                      style={{ width: "150px" }}
                                      min={0}
                                      max={remainingPoints && 9}
                                      maxLength={1}
                                      disabled={remainingPoints === 0}
                                      onChange={(event) =>
                                        handleSubQuestionChange(
                                          index,
                                          subIndex,
                                          event
                                        )
                                      }
                                    />
                                  </Label>
                                </li>
                              )
                            )}
                          </ul>
                        </Collapse>
                      </FormGroup>
                    </CardBody>
                    {!isOpen[index] && (
                      <Button
                        color="link"
                        onClick={() => toggleCollapse(index)}
                      >
                        <FaChevronDown />
                      </Button>
                    )}
                    {isOpen[index] && (
                      <Button
                        color="link"
                        onClick={() => toggleCollapse(index)}
                      >
                        <FaChevronUp />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ))}
          <div></div>
          <Button color="primary" className="mt-3">
            Finish
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default QuestionsForm;
