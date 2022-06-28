package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCategoriesService {

    private final UserCategoriesRepository userCategoriesRepository;

    public UserCategoriesService(UserCategoriesRepository userCategoriesRepository) {
        this.userCategoriesRepository = userCategoriesRepository;

    }

    public List<UserCategories> getAllUserCategories() {
        return userCategoriesRepository.findAll();
    }


}