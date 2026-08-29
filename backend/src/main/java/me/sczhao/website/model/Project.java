package me.sczhao.website.model;

public class Project {

    private Long id;
    private String title;
    private String description;
    private String url;
    private String[] tags;

    public Project() {
    }

    public Project(Long id, String title, String description, String url, String[] tags) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.tags = tags;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }
}
