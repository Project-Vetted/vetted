package com.example.vetted.service;

import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import org.springframework.stereotype.Service;

@Service
public class PointsService {

    private final UsersRepository usersRepository;
    private final UserService userService;




    public PointsService(UsersRepository usersRepository, UserService userService) {
        this.usersRepository = usersRepository;
        this.userService = userService;
    }

    public void getUserPoints(long upvoterUserId, long upVoteeUserId) {
        User upvotee = userService.getUserById(upVoteeUserId);
        User upvoter = userService.getUserById(upvoterUserId);
        upvoter.getPoints(upvoter);
        upvotee.setPoints(upvotee);
        usersRepository.save(upvotee);
    }

    public int viewMyPoints(long id){
        User user = userService.getUserById(id);
        return user.getPoints();
    }
}
