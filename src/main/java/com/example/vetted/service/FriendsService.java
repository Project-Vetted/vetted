package com.example.vetted.service;


import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FriendsService {

    private final UsersRepository usersRepository;
    private final UserService userService;




    public FriendsService(UsersRepository usersRepository, UserService userService) {
        this.usersRepository = usersRepository;
        this.userService = userService;
    }

    public Collection<User> getUsersFriends(long id) {
        User user = userService.getUserById(id);
        return user.getFriends();
    }

    public User updateUserFriends(long id, String newFriend) {
        User user = userService.getUserById(id);
        Collection<User> userFriendList = user.getFriends();
        userFriendList.add(usersRepository.findByUsername(newFriend));
        user.setFriends(userFriendList);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }

    public User deleteUserFriend(long id, String friend_username) {
        User user = userService.getUserById(id);
        Collection<User> userFriendList = user.getFriends();
        userFriendList.remove(usersRepository.findByUsername(friend_username));
        user.setFriends(userFriendList);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }
}
