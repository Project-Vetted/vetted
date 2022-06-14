package com.example.vetted.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// TODO: need UsersRepository
public interface UsersRepository extends JpaRepository<User,Long> {

    User findByUsername(String username); // select * from users u where u.username = ?
    Optional<User> findByEmail(String email);
}
