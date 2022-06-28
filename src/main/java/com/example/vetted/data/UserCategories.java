package com.example.vetted.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "user_category")
public class UserCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long user_id;

    @Column(nullable = false)
    private Long category_id;

    public UserCategories(Long id, Long user_id, Long category_id) {
        this.id = id;
        this.user_id = user_id;
        this.category_id = category_id;
    }

    public UserCategories() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    @Override
    public String toString() {
        return "UserCategory{" +
                "id=" + id +
                ", user_id='" + user_id + '\'' +
                ", user_category=" + category_id +
                '}';
    }

}
