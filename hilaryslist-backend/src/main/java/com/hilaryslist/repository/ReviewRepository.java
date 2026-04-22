package com.hilaryslist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hilaryslist.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	public List<Review> findByCafeId(Long cafeId);

}
