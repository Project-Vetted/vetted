package com.example.vetted.web;

import com.example.vetted.data.UserCategories;
import com.example.vetted.service.UserCategoriesService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")

public class UserCategoriesController {

    private final UserCategoriesService userCategoriesService;


    public UserCategoriesController(UserCategoriesService userCategoriesService) {
        this.userCategoriesService = userCategoriesService;
    }

    @PreAuthorize("permitAll()")
    @GetMapping("allUserCategories")
    public List<UserCategories> getAll() {
        return userCategoriesService.getAllUserCategories();
    }


}
