package com.coursewebapp.service;

import com.coursewebapp.entities.Course;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourseService {

    // GET all courses.
    public List<Course> getCourses();

    // GET single course by ID.
    public Course getCourse(long courseId);

    // POST add course in courses.

    public Course addCourse(Course course);

    // Put Update Course.
    public Course updateCourse(Course course);

    // DELETE Course

    public void deleteCourse(long parseLong);
}