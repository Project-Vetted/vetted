package com.example.vetted.web;

import com.example.vetted.data.User;
import com.example.vetted.service.FriendsService;
import com.example.vetted.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class FriendsController {

    private final FriendsService friendsService;


    public FriendsController(FriendsService friendsService) {
        this.friendsService = friendsService;
    }


    @GetMapping("user-friends")
    public Collection<User> getFriendsList(@RequestParam long id) {
        return friendsService.getUsersFriends(id);
    }

    @PatchMapping("{userId}/updateFriends")
    public User setUserFriends(@PathVariable long userId,@RequestBody String newFriendsUsername) {
        return friendsService.updateUserFriends(userId, newFriendsUsername);
    }

    @DeleteMapping("delete-friends")
    public User deleteUserFriends(@RequestParam long id, String friends_username) {
        return friendsService.deleteUserFriend(id, friends_username);
    }
}
