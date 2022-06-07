package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.List;

//TODO:  (UserService) Review Template and Refactor as necessary

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getUsersList() {
        return usersRepository.findAll();
    }

    public User getUserById(Long id) {

        return usersRepository.findById(id).orElseThrow();
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public void updateEmail(Long userId, String newEmail) {
        User user = getUserById(userId);
        user.setEmail(newEmail);
        usersRepository.save(user);
    }

    public void createUser (User user) {
        usersRepository.save(user);
    }
}
