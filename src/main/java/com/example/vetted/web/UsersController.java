package com.example.vetted.web;

import com.example.vetted.data.Category;
import com.example.vetted.data.User;
import com.example.vetted.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    // Once the adding and getting of users is removed, we have to inject the UserService into the controller
    private final UserService userService;
    private PasswordEncoder passwordEncoder;

    public UsersController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService; // injection point of UserService
        this.passwordEncoder = passwordEncoder;
    }
@PreAuthorize("permitAll()")
    @GetMapping("all")
    public List<User> getAll() {
        return  userService.getAllUsers();
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
    public void create(@RequestBody User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userService.createUser(newUser);
    }

    @GetMapping("username")
    public User getByUsername(@RequestParam String username) {
        System.out.println("Getting user with username: " + username);
        return userService.getUserByUsername(username);
    }

    @GetMapping("email")
    public User getByEmail(@RequestParam String email) {
        System.out.println("Getting user with email: " + email);
        return userService.getByEmail(email);
    }


    @PreAuthorize("permitAll()")
    @PutMapping("{id}/updatePassword")
    public void updatePassword(@PathVariable Long id, @RequestParam(required = false) String oldPassword, @Valid @Size(min = 3) @RequestParam String newPassword) {
        userService.updatePassword(id, newPassword);
    }

    @PutMapping("{userId}/updateEmail")
    public void updateEmail(@PathVariable Long userId, @RequestParam String newEmail){
        userService.updateEmail(userId, newEmail);
    }

    @PutMapping("{userId}/updateUsername")
    public void updateUsername(@PathVariable Long userId, @RequestParam String newUserName){
        userService.updateuserName(userId, newUserName);
    }

//TODO: Refactor, Test and Implement User Role Methods Below

    //checking the role of a user
//    @GetMapping("role-check")
//    public void checkRole(@RequestParam Long id){
//        userService.checkRole(id);
//    }

    //update user role once verified
//    @PutMapping("update-role")
//    public void updateRole(Long id, User.Role updateRole){
//        userService.updateRole(id, updateRole);
//    }


// TODO: Refactor, Test & Implement Category Methods Below

//    @PostMapping("{username}")
//    public void createByUsername(@PathVariable String username, @RequestBody CreatePostDto dto){
//        // Nice and clean, huh?
//        Post newPost = new Post();
//        postService.addPost(dto, newPost,username);
////        emailService.prepareAndSend(newPost, "New Post Created", "You've created a new post.");
//    }


    @GetMapping("user-cat")
    public Collection<Category> viewUserCategories(@RequestParam long id) {
        return userService.getUserCategories(id);
    }


    @GetMapping("search-categories")
    public List<Category> searchCategories(@RequestParam String keyword) {
        return userService.getCategoryByKeyword(keyword);
    }

    @PatchMapping("edit-categories")
    public User editCategories(@RequestParam long id, String newCategory){
        return userService.updateUserCategories(id, newCategory);
    }

    @DeleteMapping("delete-category")
    public User deleteCategory(@RequestParam long id,@RequestParam String category_name){
        return userService.deleteUserCategories(id, category_name);
    }


    //TODO: CREATE AND IMPLEMENT METHODS FOR THE USER POINT SYSTEM "KARMA"

    @GetMapping("user-points")
    public int viewUserPoints(@RequestParam long id){
        return userService.getUserPoints(id);
    }

    //TODO: CREATE AND IMPLEMENT METHODS FOR THE USER FRIENDS LIST

    @GetMapping("user-friends")
    public Collection<User> getFriendsList(@RequestParam long id){
        return userService.getUsersFriends(id);
    }

    @PatchMapping("add-friends")
    public User setUserFriends(@RequestParam long id, String newFriendsUsername){
        return userService.updateUserFriends(id, newFriendsUsername);
    }

    @DeleteMapping("delete-friends")
    public User deleteUserFriends(@RequestParam long id, String friends_username){
        return userService.deleteUserFriend(id, friends_username);
    }

}
