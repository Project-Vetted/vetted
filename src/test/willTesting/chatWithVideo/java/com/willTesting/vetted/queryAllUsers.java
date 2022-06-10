package com.willTesting.vetted;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class queryAllUsers {

    public static void main(String[] args) {

        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/vetted_db", "root", "codeup");

            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("select id, username, role from users");

            while (resultSet.next()) {
                System.out.println(resultSet.getString("id"));
                System.out.println(resultSet.getString("username"));
                System.out.println(resultSet.getString("role"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
