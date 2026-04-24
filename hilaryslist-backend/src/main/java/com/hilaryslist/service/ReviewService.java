package com.hilaryslist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hilaryslist.model.Cafe;
import com.hilaryslist.model.Review;

import com.hilaryslist.repository.ReviewRepository;

@Service
public class ReviewService {
	
	

	private final CafeService cafeService;
	private ReviewRepository reviewRepository;
	
	public ReviewService(ReviewRepository reviewRepository, CafeService cafeService) {
		this.reviewRepository = reviewRepository;

		this.cafeService = cafeService;
	}
	
	public Review createReview(Review review,Long cafeId) {
	
		Cafe cafe = cafeService.getCafeById(cafeId).orElseThrow(() -> new RuntimeException("Cafe not found with id: " + cafeId));
		review.setCafe(cafe);

		return reviewRepository.save(review);
	}
	
	public List<Review> getReviewByCafeId(Long cafeId){
		return reviewRepository.findByCafeId(cafeId);
	}
	
	public Optional<Review> getReviewById(Long id ) {
		return reviewRepository.findById(id);
	}
	
	public void deleteReview(long reviewId) {
		reviewRepository.deleteById(reviewId);
	}
	
	public List<Review> getAllReviews(){
		return reviewRepository.findAll();
	}

	public List<Review> getReviewsByUserId(Long userId){
		return reviewRepository.findReviewsByUserId(userId);
	}
	
	

}
