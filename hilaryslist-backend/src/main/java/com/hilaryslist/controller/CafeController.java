package com.hilaryslist.controller;

import com.hilaryslist.service.CafeService;

import com.hilaryslist.service.UserService;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

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

	@GetMapping("/user/{userId}/visited")
	public List<Cafe> getVisitedCafes(@PathVariable Long userId) {
		return cafeService.GetVistedCafesByUserId(userId);
	}

	@GetMapping("/user/{userId}/wishlist")
	public List<Cafe> getWantToVisitCafes(@PathVariable Long userId){
		return  cafeService.GetWantToVisitCafesByUSerId(userId);
	}

	@PatchMapping("/{cafeId}/visited")
	public Cafe markAsVisited(@PathVariable Long cafeId) {
		return cafeService.markAsVisited(cafeId);
	}


	
	
}
