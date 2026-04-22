package com.hilaryslist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hilaryslist.model.Cafe;

public interface CafeRepository extends JpaRepository<Cafe, Long> {
	
	public List<Cafe> findByUserId(Long userId);
	
	public List<Cafe> findByIsPublicTrue();
	
	

}
