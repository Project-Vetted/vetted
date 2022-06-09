package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

//    public List<User> getUsersList() { // TODO: rename this 'getAllUsers'
//        return usersRepository.findAll();
//    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow(); //throws an exception if the user cannot be found by id
    }

//    public User getUserByUsername(String username) {
//        return usersRepository.findByUsername(username);
//    }

    public User getByEmail(String email) {
        return usersRepository.findByEmail(email).orElseThrow();
    }

//    public void updateEmail(Long userId, String newEmail){
//        User user = getUserById(userId);
//        user.setEmail(newEmail);
//        usersRepository.save(user);
//    }

    public void createUser(User user) {
        usersRepository.save(user);
    }

//    public void updatePassword(Long userId, String newPassword){
//
//    }

//  TODO: Test & Implement User Role Methods Below

//    public void checkRole(Long id){
//        User userCheck = getUserById(id);
//        if(userCheck.getRole() == VERIFIED){
//            System.out.println("IS VERIFIED");
//        }else if (userCheck.getRole() == USER){
//            System.out.println("IS USER");
//        }else if (userCheck.getRole() == VISITOR){
//            System.out.println("IS VISITOR");
//        }
//    }

//        public void updateRole(Long id){
//        User userUpdateRole = getUserById(id);
//        userUpdateRole.setRole();
//        }

//    public void updateRole(Long id, User.Role newRole) {
//        User user = getUserById(id);
//        user.setRole(newRole);
//        usersRepository.save(user);
//    }

// TODO: Refactor & Implement Category Methods Below

//    // We need to associate posts and users here
//    public void addPost(CreatePostDto dto, Post newPost, String username) {
//
//        // get the User object who made the post
//        User user = userService.getUserByUsername(username);
//
//        newPost.setTitle(dto.getTitle());
//        newPost.setContent(dto.getContent());
//
//        // associate the post with the user object
//        user.getPosts().add(newPost);
//        // associate the *user* with the post object
//        newPost.setUser(user);
//
//        List<Category> categoriesToAdd = new ArrayList<>();
//
//        for (String categoryName : dto.getCategories()) {
//            categoriesToAdd.add(categoriesRepository.findCategoryByName(categoryName));
//        }
//
//        newPost.setCategories(categoriesToAdd);
//
//        postsRepository.save(newPost);
//    }

}
