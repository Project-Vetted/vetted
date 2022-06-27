package com.example.vetted.service;

import com.example.vetted.data.CategoriesRepository;
import com.example.vetted.data.Category;
import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CategoriesService {
    private final UsersRepository usersRepository;
    private final CategoriesRepository categoriesRepository;
    private final UserService userService;

    public CategoriesService(UsersRepository usersRepository, CategoriesRepository categoriesRepository, UserService userService) {
        this.usersRepository = usersRepository;
        this.categoriesRepository = categoriesRepository;
        this.userService = userService;

    }


    public Collection<Category> getUserCategories(long id) {
        User user = userService.getUserById(id);
        return user.getCategories();
    }

    public List<Category> getCategoryByKeyword(String keyword) {
        return categoriesRepository.searchCategoriesBy(keyword);
    }

    public void updateCategories(Long id, String[] newCategories) {
        User user = userService.getUserById(id);
        if (user.getCategories().containsAll(categoriesRepository.findAllByNameIn(newCategories))) {
            user.getCategories().removeAll(categoriesRepository.findAllByNameIn(newCategories));
        } else
            user.getCategories().addAll(categoriesRepository.findAllByNameIn(newCategories));
        usersRepository.save(user);
    }

    public User deleteUserCategories(long id, String category_name) {
        User user = userService.getUserById(id);
        Collection<Category> category = user.getCategories();
        category.remove(categoriesRepository.findCategoryByName(category_name));
        user.setCategories(category);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }

    public List<Category> getAllCategories() {
        return categoriesRepository.findAll();
    }

}
