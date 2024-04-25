import React, { useState } from 'react';
import { Container, Collapse, Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QuestionsForm = () => {
  // Provided questions and options
  const questions = [
    {
      question: 'How does the software feature minimize energy consumption?',
      subQuestions: [
        'A. Implements energy-saving modes during inactivity.',
        'B. Optimized algorithms for reduced CPU intensity.',
        'C. Uses cloud services with a commitment to renewable energy.',
        'D. Reduces the need for physical hardware through virtualization.',
        'E. Includes settings for users to control energy use.',
        'F. Efficient memory management to minimize resource usage.',
        'G. Does not require high-performance hardware to operate.',
        'H. Energy consumption metrics are provided to users.',
        'I. Adapts resource use according to the device’s power source.',
        'J. Regular updates include optimization for energy efficiency.'
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

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Container>
      <h2 className="mt-3">Feature Questionnaire</h2>
      <Form>
        {questions.map((question, index) => (
          <Card key={index} className="mb-3">
            <div className="d-flex justify-content-between">
              <CardBody>
                <FormGroup>
                  <Label>{question.question}</Label>
                  <Collapse isOpen={isOpen[index]}>
                    <ul>
                      {question.subQuestions.map((subQuestion, subIndex) => (
                        <li key={subIndex}>
                          <Label check className="d-flex align-items-center">
                            {subQuestion}
                            <Input type="text" className="ml-2 input-sm" />
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
    </Container>
  );
};

export default QuestionsForm;
