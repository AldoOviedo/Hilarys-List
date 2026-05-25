package com.hilaryslist.controller;

import com.hilaryslist.dto.UserDto;
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
	public UserDto getUserById(@PathVariable Long userId) {
		User user = userService.getUserById(userId)
				.orElseThrow(() -> new RuntimeException("User not found"));
		return new UserDto(user.getId(), user.getDisplayName(), user.getEmail(), user.getRole());
	}

	@GetMapping
	public List<UserDto> getAllUsers() {
		return userService.getAllUsers().stream()
				.map(u -> new UserDto(u.getId(), u.getDisplayName(), u.getEmail(), u.getRole()))
				.toList();
	}

}
