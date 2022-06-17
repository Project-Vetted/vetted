package com.example.vetted.service;

import com.example.vetted.data.*;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserService {

    private final UsersRepository usersRepository;
    private final CategoriesRepository categoriesRepository;

    public UserService(UsersRepository usersRepository, CategoriesRepository categoriesRepository) {
        this.usersRepository = usersRepository;
        this.categoriesRepository = categoriesRepository;

    }

    //TODO: CREATE AND IMPLEMENT METHODS FOR THE USER
    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public User getUserById(Long id) {
        return usersRepository.findById(id).orElseThrow(); //throws an exception if the user cannot be found by id
    }

    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    public User getByEmail(String email) {
        return usersRepository.findByEmail(email).orElseThrow();
    }

    public void updateEmail(Long userId, String newEmail) {
        User user = getUserById(userId);
        user.setEmail(newEmail);
        usersRepository.save(user);
    }

    public void createUser(User user) {
        usersRepository.save(user);
    }

    public void updatePassword(Long id, String newPassword) {
        User user = getUserById(id);
        user.setPassword(newPassword);
        usersRepository.save(user);
    }

    public void updateuserName(Long id, String newUserName) {
        User user = getUserById(id);
        user.setUsername(newUserName);
        usersRepository.save(user);
    }

//  TODO: Test & Implement User Role Methods Below

//    public void checkRole(Long id){
//        User userCheck = getUserById(id);
//        if(userCheck.getRole() == VERIFIED){
//            System.out.println("IS VERIFIED");
//        }else if (userCheck.getRole() == USER){
//            System.out.println("IS USER");
//        }else if (userCheck.getRole() == VISITOR){
//            System.out.println("IS VISITOR");
//        }
//    }

//        public void updateRole(Long id){
//        User userUpdateRole = getUserById(id);
//        userUpdateRole.setRole();
//        }

//    public void updateRole(Long id, User.Role newRole) {
//        User user = getUserById(id);
//        user.setRole(newRole);
//        usersRepository.save(user);
//    }

// TODO: Refactor & Implement Category Methods Below

//    // We need to associate posts and users here
//    public void addPost(CreatePostDto dto, Post newPost, String username) {
//
//        // get the User object who made the post
//        User user = userService.getUserByUsername(username);
//
//        newPost.setTitle(dto.getTitle());
//        newPost.setContent(dto.getContent());
//
//        // associate the post with the user object
//        user.getPosts().add(newPost);
//        // associate the *user* with the post object
//        newPost.setUser(user);
//
//        List<Category> categoriesToAdd = new ArrayList<>();
//
//        for (String categoryName : dto.getCategories()) {
//            categoriesToAdd.add(categoriesRepository.findCategoryByName(categoryName));
//        }
//
//        newPost.setCategories(categoriesToAdd);
//
//        postsRepository.save(newPost);
//    }

    public Collection<Category> getUserCategories(long id) {
        User user = getUserById(id);
        return user.getCategories();
    }

    public List<Category> getCategoryByKeyword(String keyword) {
        return categoriesRepository.searchCategoriesBy(keyword);
    }

    public void updateCategories(Long id, String[] newCategories) {
        User user = getUserById(id);
        if (user.getCategories().containsAll(categoriesRepository.findAllByNameIn(newCategories))) {
            user.getCategories().removeAll(categoriesRepository.findAllByNameIn(newCategories));
        } else
            user.getCategories().addAll(categoriesRepository.findAllByNameIn(newCategories));
        usersRepository.save(user);
    }

    public User deleteUserCategories(long id, String category_name) {
        User user = getUserById(id);
        Collection<Category> category = user.getCategories();
        category.remove(categoriesRepository.findCategoryByName(category_name));
        user.setCategories(category);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }


//TODO: CREATE AND IMPLEMENT METHODS FOR THE USER POINT SYSTEM "KARMA"


    public void getUserPoints(long upvoterUserId, long upVoteeUserId) {
        User upvotee = getUserById(upVoteeUserId);
        User upvoter = getUserById(upvoterUserId);
        upvotee.setPoints(upvoter);
        usersRepository.save(upvotee);

    }

    //TODO: CREATE AND IMPLEMENT METHODS FOR THE FRIENDS LIST

    public Collection<User> getUsersFriends(long id) {
        User user = getUserById(id);
        return user.getFriends();
    }

    public User updateUserFriends(long id, String newFriend) {
        User user = getUserById(id);
        Collection<User> userFriendList = user.getFriends();
        userFriendList.add(usersRepository.findByUsername(newFriend));
        user.setFriends(userFriendList);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }

    public User deleteUserFriend(long id, String friend_username) {
        User user = getUserById(id);
        Collection<User> userFriendList = user.getFriends();
        userFriendList.remove(usersRepository.findByUsername(friend_username));
        user.setFriends(userFriendList);
        usersRepository.save(user);
        return usersRepository.findById(id);
    }

}
