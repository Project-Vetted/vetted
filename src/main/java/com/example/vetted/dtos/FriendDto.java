package com.example.vetted.dtos;



public class FriendDto {

    private String name;

    public FriendDto(String name) {
        this.name = name;
    }

    public FriendDto() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "FriendDto{" +
                "name='" + name + '\'' +
                '}';
    }
}
