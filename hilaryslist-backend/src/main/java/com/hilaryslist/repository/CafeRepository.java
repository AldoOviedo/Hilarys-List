package com.hilaryslist.repository;

import java.util.List;

import com.hilaryslist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hilaryslist.model.Cafe;

public interface CafeRepository extends JpaRepository<Cafe, Long> {
	
	public List<Cafe> findByUserId(Long userId);
	
	public List<Cafe> findByIsPublicTrue();

	List<Cafe> findByUserIdAndHasVisitedTrue(Long userId);

	List<Cafe> findByUserIdAndHasVisitedFalse(Long userId);

}
