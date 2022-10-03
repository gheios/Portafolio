import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={16}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
          <div size="12" className="text-center">
              <h3 className="text-aling-center">If opportunity doesn’t knock, build a door </h3>
              </div>
          </Row>
        </div>
      </Col>
  )
}
