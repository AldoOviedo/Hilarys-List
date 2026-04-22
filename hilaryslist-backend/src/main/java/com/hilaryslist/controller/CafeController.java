package com.hilaryslist.controller;

import com.hilaryslist.service.CafeService;

import com.hilaryslist.service.UserService;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hilaryslist.model.Cafe;
import com.hilaryslist.model.User;

@RestController
@RequestMapping("/api/cafe")
public class CafeController {

	private final CafeService cafeService;

	public CafeController(CafeService cafeService) {
		this.cafeService = cafeService;
	
	
	}
	
	@PostMapping("/user/{userId}")
	public Cafe createCafe(@PathVariable Long userId, @RequestBody Cafe cafe) {
	
		return cafeService.createCafe(cafe, userId);
	}
	
	@GetMapping("/{cafeId}")
	public Optional<Cafe> getCafeById(@PathVariable Long cafeId) {
		return cafeService.getCafeById(cafeId);
	}
	
	@GetMapping
	public List<Cafe> getAllCafes(){
		return cafeService.getAllCafes();
	}
	
	@GetMapping("/user/{userId}")
	public List<Cafe> getUserCafes(@PathVariable Long userId){
		return cafeService.getCafesByUserId(userId);
	}
	
	@GetMapping("/hilaryslist")
	public List<Cafe> getHilarysCafes(){
		return cafeService.getHilarysList();
	}
	
	@DeleteMapping("/{cafeId}")
	public void deleteById(@PathVariable Long cafeId) {
		cafeService.deleteCafe(cafeId);
	}
	
	
}
