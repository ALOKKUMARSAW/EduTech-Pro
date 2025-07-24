import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Card, CardBody, Button } from 'reactstrap';

const Home = () => {
  useEffect(() => {
    document.title = "EduTrack Pro - Course Management System";
  }, []);

  const navigate = useNavigate(); 

  const handleStartUsingApp = () => {
    navigate('/add-course'); 
  };

  return (
    <Card style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', background: '#fff', textAlign: 'center', marginTop: 16 }}>
      <CardBody style={{ padding: '48px 32px' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
        <h1 style={{ fontWeight: 700, color: '#1976d2', marginBottom: 12 }}>Welcome to EduTrack Pro</h1>
        <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: 32 }}>
          A comprehensive course management platform built with React.js and Spring Boot
        </p>
        <Button color='primary' size='lg' onClick={handleStartUsingApp} style={{ fontWeight: 600, borderRadius: 8 }}>
          Start using EduTrack Pro
        </Button>
      </CardBody>
    </Card>
  );
};

export default Home;
