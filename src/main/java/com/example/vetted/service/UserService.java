package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.vetted.data.User.Role.USER;
import static com.example.vetted.data.User.Role.VET;

@Service
public class UserService {

    private final UsersRepository usersRepository;
    private final CategoriesRepository categoriesRepository;

    public UserService(UsersRepository usersRepository, CategoriesRepository categoriesRepository) {
        this.usersRepository = usersRepository;
        this.categoriesRepository = categoriesRepository;

    }

    //TODO: CREATE AND IMPLEMENT METHODS FOR THE USER
    public long getAllUsers() {
        return usersRepository.findAll().size();
    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow(); //throws an exception if the user cannot be found by id
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public User getByEmail(String email) {
        User user = usersRepository.findByEmail(email).orElseThrow();
        return user;
    }

    public String getIdByUsername(String username) {
        User user = getUserByUsername(username);
        return user.getId().toString();
    }

    public void updateEmail(Long userId, String newEmail) {
        User user = getUserById(userId);
        user.setEmail(newEmail);
        usersRepository.save(user);
    }

    public void createUser(User user) {
        usersRepository.save(user);
    }

    public void updatePassword(User user) {
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

//    public void updateRole(String userName, User.Role newRole) {
//        User user = getUserByUsername(userName);
//        user.setRole(newRole);
//        usersRepository.save(user);
//    }

    public void veteranRoleUpdateOnVerification(String userName) {
        User user = getUserByUsername(userName);
        if (user.getRole() == USER) {
            user.setRole(VET);
        }
        usersRepository.save(user);
    }

    public void checkUserRoleForFeatureAccess(long id){
        User user = getUserById(id);
        if (user.getRole() != VET){
            System.out.println("NO WAY JOSE");
        }else {
            System.out.println("SI");
        }
    }

}
