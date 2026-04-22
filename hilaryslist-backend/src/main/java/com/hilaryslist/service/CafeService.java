package com.hilaryslist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hilaryslist.model.Cafe;
import com.hilaryslist.model.User;
import com.hilaryslist.repository.CafeRepository;

@Service
public class CafeService {
	
	private CafeRepository cafeRepository;
	
	private UserService userService;
	
	public CafeService (CafeRepository cafeRepository, UserService userService ){
		this.cafeRepository = cafeRepository;
		this.userService = userService;
	}
	
	public Cafe createCafe(Cafe cafe, Long userId) {
	    User user = userService.getUserById(userId)
	        .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
	    cafe.setUser(user);
	    return cafeRepository.save(cafe);

	}
	
	public List<Cafe> getAllCafes(){
		return cafeRepository.findAll();
	}
	
	public Optional<Cafe> getCafeById(Long cafeId) {
		return cafeRepository.findById(cafeId);
	}
	
	public List<Cafe> getCafesByUserId(Long userId){
		return cafeRepository.findByUserId(userId);
	}
	
	public List<Cafe> getHilarysList(){
		return cafeRepository.findByIsPublicTrue();
		
	}
	
	public void deleteCafe(Long cafeId) {
		cafeRepository.deleteById(cafeId);
	}

}
