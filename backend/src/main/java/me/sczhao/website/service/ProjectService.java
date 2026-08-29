package me.sczhao.website.service;

import me.sczhao.website.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * In-memory store for now. Swap this out for a JPA repository backed by
 * H2/Postgres later without changing the controller.
 */
@Service
public class ProjectService {

    private final Map<Long, Project> projects = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong();

    public ProjectService() {
        seed();
    }

    public List<Project> findAll() {
        return projects.values().stream().toList();
    }

    public Optional<Project> findById(Long id) {
        return Optional.ofNullable(projects.get(id));
    }

    public Project create(Project project) {
        long id = idGenerator.incrementAndGet();
        project.setId(id);
        projects.put(id, project);
        return project;
    }

    public Optional<Project> update(Long id, Project updated) {
        if (!projects.containsKey(id)) {
            return Optional.empty();
        }
        updated.setId(id);
        projects.put(id, updated);
        return Optional.of(updated);
    }

    public boolean delete(Long id) {
        return projects.remove(id) != null;
    }

    private void seed() {
        create(new Project(null, "Personal Website",
                "This site — a Spring Boot + React portfolio, built to learn the stack.",
                "https://sczhao.me",
                new String[]{"spring-boot", "react", "java"}));
        create(new Project(null, "Another Project",
                "Replace me with a real project.",
                "https://github.com/",
                new String[]{"example"}));
    }
}
