package com.coursewebapp.controller;


import com.coursewebapp.entities.Course;
import com.coursewebapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
public class CourseController {

   @Autowired

    private CourseService courseService;

    @GetMapping("/home")
    public String home()
    {
        return "Welcome to the Course Web App.";
    }

    @GetMapping("/")
    public String root() {
        return "Welcome to the Course Web App.";
    }

    // GET, fetch all the courses.
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/courses")
    public List<Course> getCourses()
    {
        return this.courseService.getCourses();
    }

    // GET, fetch only single course by accepting the course id.

    @GetMapping("/courses/{courseId}")
    public Course getCourse(@PathVariable String courseId)
    {
        return this.courseService.getCourse(Long.parseLong(courseId));
    }

    // POST, add course.
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course)
    {
        return this.courseService.addCourse(course);
    }

    // PUT, update the course.
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course) {
        return this.courseService.updateCourse(course);
    }


    // Delete the course.
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
    {
        try{
            this.courseService.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
