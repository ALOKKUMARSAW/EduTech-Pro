package com.coursewebapp.dao;

import com.coursewebapp.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event;

public interface CourseDAO extends JpaRepository<Course, Long> {
}
