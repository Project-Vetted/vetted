package com.example.vetted.web;

import com.example.vetted.data.User;
import com.example.vetted.data.UsersRepository;
import com.example.vetted.service.UserService;
import com.mysql.cj.xdevapi.JsonString;
import org.springframework.boot.jackson.JsonObjectDeserializer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping(value = "https://sandbox-api.va.gov/services/veteran_confirmation/v0/status", headers = "Accept=application/json")
public class VerifyController {

    private final UserService userService;
    private final UsersRepository usersRepository;


    public VerifyController(UserService userService, UsersRepository usersRepository) {
        this.userService = userService;
        this.usersRepository = usersRepository;

    }




}
