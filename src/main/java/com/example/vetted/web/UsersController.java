package com.example.vetted.web;

import com.example.vetted.data.Category;
import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import com.example.vetted.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import static com.example.vetted.data.User.Role.VET;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    // Once the adding and getting of users is removed, we have to inject the UserService into the controller
    private final UserService userService;
    private final UsersRepository usersRepository;
    private PasswordEncoder passwordEncoder;

    public UsersController(UserService userService, PasswordEncoder passwordEncoder, UsersRepository usersRepository) {
        this.userService = userService; // injection point of UserService
        this.passwordEncoder = passwordEncoder;
        this.usersRepository = usersRepository;
    }

    @PreAuthorize("permitAll()")
    @GetMapping("all")
    public long getAll() {
        return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public User getById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @GetMapping("me")
    public User getCurrentUser(OAuth2Authentication auth) {
        return userService.getByEmail(auth.getName());
    }

    @PostMapping("create")
    public long create(@RequestBody User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userService.createUser(newUser);
        return newUser.getId();
//        userService.updateRole(newUser.getId(), VET);
    }

    @GetMapping("username")
    public User getByUsername(@RequestParam String username) {
        System.out.println("Getting user with username: " + username);
        return userService.getUserByUsername(username);
    }

    @GetMapping("registered_user_id")
    public String getUsersIdByUsername(@RequestParam String username) {
        return userService.getIdByUsername(username);
    }

    @GetMapping("email")
    public User getByEmail(@RequestParam String email) {
        System.out.println("Getting user with email: " + email);
        return userService.getByEmail(email);
    }


    @PreAuthorize("permitAll()")
    @PutMapping("{id}/updatePassword")
    public void updatePassword(@PathVariable Long id, @RequestParam(required = false) String oldPassword, @Valid @Size(min = 3) @RequestParam String newPassword) {
        User user = userService.getUserById(id);
        user.setPassword(newPassword);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userService.updatePassword(user);
    }

    @PreAuthorize("permitAll()")
    @PutMapping("{userId}/updateEmail")
    public void updateEmail(@PathVariable Long userId, @RequestParam String newEmail) {
        userService.updateEmail(userId, newEmail);
    }

    @PutMapping("{userId}/updateUsername")
    public void updateUsername(@PathVariable Long userId, @RequestParam String newUsername) {
        userService.updateUsername(userId, newUsername);
    }

//TODO: Refactor, Test and Implement User Role Methods Below

    //checking the role of a user
//    @GetMapping("role-check")
//    public void checkRole(@RequestParam Long id){
//        userService.checkRole(id);
//    }

//    update user role once verified
//    @PutMapping("{userName}/update-role")
//    public void updateRole(@PathVariable String userName,@RequestParam User.Role updateRole){
//        userService.updateRole(userName, updateRole);
//    }

    @PatchMapping("/update-role")
    public void updateVeteransRole(@RequestParam String userName) {
       userService.veteranRoleUpdateOnVerification(userName);
    }

    @GetMapping("/check-user-role")
    public void checkUserRoleForChatAccess(@RequestParam long id){
        userService.checkUserRoleForFeatureAccess(id);
    }








}
