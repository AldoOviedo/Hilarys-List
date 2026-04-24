package com.hilaryslist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hilaryslist.model.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	public List<Review> findByCafeId(Long cafeId);

	@Query("SELECT r FROM Review r WHERE r.cafe.user.id = :userId")
	List<Review> findReviewsByUserId(@Param("userId")Long userId);

}
