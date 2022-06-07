package com.example.vetted.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/login", "/home", "/register"})
    public String showView() {
        return "forward:/index.html";
    }
}