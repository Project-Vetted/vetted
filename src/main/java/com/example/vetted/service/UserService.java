package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserService {

    private final UsersRepository usersRepository;
    private final CategoriesRepository categoriesRepository;

    public UserService(UsersRepository usersRepository, CategoriesRepository categoriesRepository) {
        this.usersRepository = usersRepository;
        this.categoriesRepository = categoriesRepository;

    }

    //TODO: CREATE AND IMPLEMENT METHODS FOR THE USER
    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow(); //throws an exception if the user cannot be found by id
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public User getByEmail(String email) {
//        User user = usersRepository.findByEmail(email).orElseThrow();
        return usersRepository.findByEmail(email).orElseThrow();
    }

    public String getFriendsByUserId(long id){
        User user = getUserById(id);

    }

    public void updateEmail(Long userId, String newEmail) {
        User user = getUserById(userId);
        user.setEmail(newEmail);
        usersRepository.save(user);
    }

    public void createUser(User user) {
        usersRepository.save(user);
    }

    public void updatePassword(Long id, String newPassword) {
        User user = getUserById(id);
        user.setPassword(newPassword);
        usersRepository.save(user);
    }

    public void updateuserName(Long id, String newUserName) {
        User user = getUserById(id);
        user.setUsername(newUserName);
        usersRepository.save(user);
    }

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

}
