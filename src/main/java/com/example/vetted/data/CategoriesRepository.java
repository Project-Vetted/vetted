package com.example.vetted.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriesRepository extends JpaRepository<Category, Long> {

    Category findCategoryByName(String category);

//    @Query("from Category a where a.name like %:term%")
//    List<Category> searchCategoriesBy(@Param("term") String term);

}
