package com.hilaryslist.controller;

import com.hilaryslist.service.ReviewService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hilaryslist.model.Review;

@RestController
@RequestMapping("/api/review")
public class ReviewController {

	private final ReviewService reviewService;

	public ReviewController(ReviewService reviewService) {
		this.reviewService = reviewService;
	}
	
	@GetMapping
	public List<Review> getReviews() {
		return reviewService.getAllReviews();
	}
	
	@PostMapping("/cafe/{cafeId}")
	public Review createReview(@PathVariable Long cafeId, @RequestBody Review review) {
		return reviewService.createReview(review, cafeId);
	}
	
	@GetMapping("/{reviewId}")
	public Review getReviewById(@PathVariable Long reviewId) {
		return reviewService.getReviewById(reviewId) 
				.orElseThrow(() 
						-> new RuntimeException("Review not found with id: " + reviewId));
	}
	
	@GetMapping("/cafe/{cafeId}") 
	public List<Review> getReviewsByCafeId(@PathVariable Long cafeId){
		return reviewService.getReviewByCafeId(cafeId);
	}
	
	@DeleteMapping("/{reviewId}")
	public void deleteReview(@PathVariable Long reviewId) {
		reviewService.deleteReview(reviewId);
	}

}
