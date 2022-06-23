package com.example.vetted.web;

import com.example.vetted.data.User;
import com.example.vetted.service.PointsService;
import com.example.vetted.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class PointsController {

    private final PointsService pointsService;
    private final UserService userService;


    public PointsController(PointsService pointsService, UserService userService) {
        this.pointsService = pointsService;
        this.userService = userService;
    }

    @GetMapping("{upVotee}/{upVoter}/upvote")
    public void viewUserPoints(@PathVariable long upVotee, @PathVariable long upVoter) {
        pointsService.getUserPoints(upVotee, upVoter);
    }

    @GetMapping("upvotes")
    public int getAUsersPoints(@RequestParam long upVotee) {
        return pointsService.viewMyPoints(upVotee);
    }
}
