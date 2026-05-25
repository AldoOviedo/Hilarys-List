package com.hilaryslist.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jdk.jfr.DataAmount;
import lombok.Getter;

@Entity
@Table(name = "users")
@Getter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 50)
	@NotBlank(message = "Username is required")
	@Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
	private String displayName;

	@Column(nullable = false, unique = true)
	@NotBlank(message = "Email is required")
	private String email;

	@Column(nullable = false)
	@NotBlank(message = "Password is required")
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role = Role.USER;

	public User() {}

	public User(String displayName, String email, String password, Role role) {
		this.displayName = displayName;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	// getters and setters for all five fields
}