package com.example.vetted.web;

import com.example.vetted.data.Category;
import com.example.vetted.data.User;
import com.example.vetted.service.CategoriesService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class CategoriesController {

    private final CategoriesService categoriesService;

    public CategoriesController(CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @GetMapping("user-cat")
    public Collection<Category> viewUserCategories(@RequestParam long id) {
        return categoriesService.getUserCategories(id);
    }


    @GetMapping("search-categories")
    public List<Category> searchCategories(@RequestParam String keyword) {
        return categoriesService.getCategoryByKeyword(keyword);
    }


    @PatchMapping("{id}/updateCategories")
    public void updateCategories(@PathVariable Long id, @RequestBody String[] newCategories) {
        System.out.println("Things are happening!");
        categoriesService.updateCategories(id, newCategories);
    }


    @DeleteMapping("delete-category")
    public User deleteCategory(@RequestParam long id, @RequestParam String category_name) {
        return categoriesService.deleteUserCategories(id, category_name);
    }

    @PreAuthorize("permitAll()")
    @GetMapping("allCategories")
    public List<Category> getAll() {
        return categoriesService.getAllCategories();
    }

//    @PreAuthorize("permitAll()")
//    @GetMapping("all")
//    public List<User> getAll() {
//        return userService.getAllUsers();
//    }

}
