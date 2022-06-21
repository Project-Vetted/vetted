package com.example.vetted.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/about", "/login", "/home", "/register", "/veteran", "/dashboard", "/chat"})
    public String showView() {
        return "forward:/index.html";
    }
}
