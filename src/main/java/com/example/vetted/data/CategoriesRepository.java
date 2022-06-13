package com.example.vetted.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoriesRepository extends JpaRepository<Category, Long> {

    Category findCategoryByName(String category);

    @Query("from Category a where a.name like %:term%")
    List<Category> searchCategoriesBy(@Param("term") String term);

}
