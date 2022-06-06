package com.example.vetted.web;

import com.example.vetted.data.User;
import com.example.vetted.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.List;

@RestController
@RequestMapping(value = "api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserService userService;
//    private PasswordEncoder passwordEncoder;

    public UsersController(UserService userService/*, PasswordEncoder passwordEncoder*/) {
        this.userService = userService;
//        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public List<User> getAll() {
        return userService.getUsersList();
    }

    @GetMapping("{id}")
    public User getById(@PathVariable Long id) {

        return userService.getUserById(id);
    }

    @GetMapping("username")
    public User getByUsername(@RequestParam String username) {

        System.out.println("Getting user with username: " + username);
        return userService.getUserByUsername(username);
    }

    @GetMapping("email")
    public User getByEmail(@RequestParam String email) {
        System.out.println("Getting user with email: " + email);
        return null;
    }

    //TODO: Get user passwords working on end to end testing
    @PostMapping("create")
    public void create(@RequestBody User newUser) {
        newUser.setPassword(newUser.getPassword());
        userService.createUser(newUser);
    }


    //TODO: Test update password
    @PutMapping("{id}/updatePassword")
    public void updatePassword(@PathVariable Long id, @RequestParam(required = false) String oldPassword, @Valid @Size(min = 3) @RequestParam String newPassword) {

        User userToUpdate = getById(id);
        userToUpdate.setPassword(newPassword);
        System.out.println(userToUpdate.getPassword());
    }

    @PatchMapping("{userId}")
    public void updateEmail(@PathVariable Long userId, @RequestParam String newEmail) {
        userService.updateEmail(userId, newEmail);
    }
}
