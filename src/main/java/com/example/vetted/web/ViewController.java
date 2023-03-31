package com.example.vetted.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//git test

@Controller
public class ViewController {

    @RequestMapping({"/", "/settings", "/login", "/home", "/register", "/veteran", "/dashboard", "/user", "/chat"})
    public String showView() {
        return "forward:/index.html";
    }
}
