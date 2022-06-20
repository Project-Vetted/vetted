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

    public void areTheyFriendsCheck(long user_id, long friend_id){
        User user = userService.getUserById(user_id);
        User friend = userService.getUserById(friend_id);

        if (user.getFriends().contains(friend) && friend.getFriends().contains(user)){
            updateUserFriends(user_id, userService.getUsernameById(friend.getId()));
        }else if (user.getFriends().contains(friend) && !friend.getFriends().contains(user)){
            System.out.println("Waiting for other user to add as friend");
        }else if (!user.getFriends().contains(friend) && friend.getFriends().contains(user)){
            System.out.println("Waiting for other user to add as friend");
        } else if (!user.getFriends().contains(friend) && !friend.getFriends().contains(user)){
            System.out.println("Neither of these people want to be friends");
        }
        else System.out.println("idk what happened here");
    }

    public void alreadyAddedAsFriendCheck(Long user_id, Long friend_id) {
        User user = userService.getUserById(user_id);
        User friend = userService.getUserById(friend_id);
        if (user.getFriends().contains(friend)) {
            assert true;
        } else user.getFriends().add(friend);
    }
    public void updateUserFriends(long id, String newFriend) {
        User user = userService.getUserById(id);
        User friend = usersRepository.findByUsername(newFriend).orElseThrow();
        System.out.println(friend);
        alreadyAddedAsFriendCheck(user.getId(), friend.getId());
//        user.getFriends().add(friend);
        usersRepository.save(user);
    }


//    public User deleteUserFriend(long id, String friend_username) {
//        User user = userService.getUserById(id);
//        Collection<User> userFriendList = user.getFriends();
//        userFriendList.remove(usersRepository.findByUsername(friend_username));
//        user.setFriends(userFriendList);
//        usersRepository.save(user);
//        return usersRepository.findById(id);
//    }

}