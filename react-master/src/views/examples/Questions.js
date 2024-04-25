import React, { useState } from 'react';
import { Container, Collapse, Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QuestionsForm = () => {
  // Provided questions and options
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
      question: 'How does the software handle user authentication?',
      subQuestions: [
        'A. Uses OAuth for third-party authentication.',
        'B. Implements two-factor authentication for enhanced security.'
      ]
    }
  ];

  const [isOpen, setIsOpen] = useState(new Array(questions.length).fill(false));
  const [remainingPoints, setRemainingPoints] = useState(new Array(questions.length).fill(10));

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Container>
      <Card className="p-3">
        <h2 className="mt-3 mb-4">Feature Questionnaire</h2>
        <Form>
          <FormGroup>
            <Label for="feature">Feature</Label>
            <Input type="text" name="feature" id="feature" placeholder="Enter feature" />
          </FormGroup>
          {questions.map((question, index) => (
            <Card key={index} className="mb-3">
              <div className="d-flex justify-content-between">
                <CardBody>
                  <FormGroup>
                    <Label>{question.question}</Label>
                    {isOpen[index] && (
                      <FormGroup>
                        <Label for="remainingPoints">Remaining Points</Label>
                        <Input type="text" name="remainingPoints" id="remainingPoints" value={remainingPoints[index]} readOnly />
                      </FormGroup>
                    )}
                    <Collapse isOpen={isOpen[index]}>
                      <ul>
                        {question.subQuestions.map((subQuestion, subIndex) => (
                          <li key={subIndex}>
                            <Label check className="d-flex align-items-center justify-content-between">
                              {subQuestion}
                              <Input type="text" className="ml-2 input-sm" style={{ width: '150px' }} />
                            </Label>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  </FormGroup>
                </CardBody>
                {!isOpen[index] && (
                  <Button color="link" onClick={() => toggleCollapse(index)}>
                    <FaChevronDown />
                  </Button>
                )}
                {isOpen[index] && (
                  <Button color="link" onClick={() => toggleCollapse(index)}>
                    <FaChevronUp />
                  </Button>
                )}
              </div>
            </Card>
          ))}
          <Button color="primary" className="mt-3">Finish</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default QuestionsForm;
