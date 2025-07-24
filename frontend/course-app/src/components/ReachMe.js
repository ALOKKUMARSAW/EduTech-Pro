import React from "react";
import { Card, CardBody } from "reactstrap";

const ReachMe = () => {
  const linkedInUrl = "https://www.linkedin.com/in/alok-kumar-saw/"; 
  const emailAddress = "aloksaw512@gmail.com"; 

  return (
    <Card className="my-2" style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', background: '#fff', textAlign: 'center', marginTop: 16 }}>
      <CardBody style={{ padding: '48px 32px' }}>
        <h2 style={{ fontWeight: 700, color: '#1976d2', marginBottom: 12 }}>Connect With Me</h2>
        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 24 }}>
          Feel free to reach out through the following channels:
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: 12 }}>
          <strong style={{ color: '#1976d2' }}>LinkedIn:</strong> <a href={linkedInUrl} target="_blank" rel="noreferrer" style={{ color: '#0077B5', textDecoration: 'none' }}>{linkedInUrl}</a>
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          <strong style={{ color: '#1976d2' }}>Email:</strong> <a href={`mailto:${emailAddress}`} style={{ color: '#D44638', textDecoration: 'none' }}>{emailAddress}</a>
        </p>
      </CardBody>
    </Card>
  );
};

export default ReachMe;
