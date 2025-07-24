import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../course_api";
import { Card, CardBody } from 'reactstrap';

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                const filteredCourses = response.data.filter(course => course.title !== null && course.description !== null);  // Filtering course to avoid a null value from the DB on the UI.
                setCourses(filteredCourses);
            },
            (error) => {
                console.log(error);
                alert("Failed to load courses from the server.");
            }
        );
    };

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourse = (updatedCourse) => {
        axios.put(`${base_url}/courses`, updatedCourse).then(
            (response) => {
                alert("Course updated successfully!");
                setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
            },
            (error) => {
                console.log(error);
                alert("Failed to update course.");
            }
        );
    };

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }

    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Card style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', marginTop: 24, marginBottom: 32 }}>
                <CardBody style={{ padding: '32px 32px 16px 32px' }}>
                    <h2 style={{ fontWeight: 700, color: '#1976d2', marginBottom: 8 }}>All Courses</h2>
                    <p style={{ color: '#444', marginBottom: 24 }}>Courses That Can Boost Up Your Career</p>
                    {courses.length > 0
                        ? courses.map((item) => (
                            <div key={item.id} style={{ marginBottom: 24 }}>
                                <Course course={item} updateCourse={updateCourse} update={updateCourses} />
                            </div>
                        ))
                        : <div style={{ color: '#888', fontStyle: 'italic' }}>No course available at this moment.</div>
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default AllCourses;