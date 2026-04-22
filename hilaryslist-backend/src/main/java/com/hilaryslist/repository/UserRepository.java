package com.hilaryslist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hilaryslist.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
