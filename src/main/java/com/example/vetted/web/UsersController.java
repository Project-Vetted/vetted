package com.example.vetted.web;

public class UsersController {

    private final UserService userService;
//    private PasswordEncoder passwordEncoder;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

public ListUser> getAll() {
        return userService.getUsersList();
    }

    public User getById( Long id) {
        return userService.getUserById(id);
    }
}
