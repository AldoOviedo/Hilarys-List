package com.hilaryslist.controller;

import com.hilaryslist.model.User;
import com.hilaryslist.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController {
	
	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
		
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
		
		
	}
	
	
	@GetMapping("/{userId}")
	public Optional<User> getUserById(@PathVariable Long userId) {
		return userService.getUserById(userId);
	}
	
	@GetMapping
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}

}
