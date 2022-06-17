package com.example.vetted.dto;

import com.example.vetted.data.User;

import java.util.Collection;

public class UserPointsDto {

    private Collection<User> points;

    public UserPointsDto(Collection<User> points) {
        this.points = points;
    }

    public UserPointsDto() {
    }

    public Collection<User> getPoints() {
        return points;
    }
}
