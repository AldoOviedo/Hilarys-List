package com.hilaryslist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hilaryslist.model.User;
import com.hilaryslist.repository.UserRepository;

@Service
public class UserService {
	
	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public User createUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public Optional<User> getUserById(Long userId) {
		return userRepository.findById(userId);
	}

}
