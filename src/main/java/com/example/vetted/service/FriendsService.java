package com.example.vetted.service;


import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

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

    public User getEachFriendFromUsersFriends(long id) {
        User user = userService.getUserById(id);
        List<User> friend = (List<User>) user.getFriends();
        for (User friends : friend
        ) {
            System.out.println(friends.getUsername());

        }
return usersRepository.findByUsername(friend.toString());
    }

    //    public User updateUserFriends(long id, String newFriend) {
//        User user = userService.getUserById(id);
//        Collection<User> userFriendList = user.getFriends();
//        userFriendList.add(usersRepository.findByUsername(newFriend));
//        user.setFriends(userFriendList);
//        usersRepository.save(user);
//        return usersRepository.findById(id);
//    }
    public void updateUserFriends(long id, String newFriend) {
        User user = userService.getUserById(id);
        User friend = usersRepository.findByUsername(newFriend);
        System.out.println(friend);
        user.getFriends().add(friend);
        usersRepository.save(user);
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
