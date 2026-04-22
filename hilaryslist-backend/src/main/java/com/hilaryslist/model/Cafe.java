package com.hilaryslist.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "cafes")
public class Cafe {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 100)
	@NotBlank(message = "Cafe is required")
	@Size(min = 3, max = 100, message = "Cafe must be between 3 and 100 characters")
	private String name;
	
	@Column(nullable = false, length = 100)
	@NotBlank(message = "City is required")
	@Size(min = 3, max = 100, message = "City must be between 3 and 100 characters")
	private String city;
	
	@Column(nullable = false, length = 100)
	@NotBlank(message = "State is required")
	@Size(min = 2, max = 100, message = "State must be between 2 and 100 characters")
	private String state;
	
	private Boolean isPublic = false;
	
	private LocalDate addedAt;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	
	


	public Cafe(
			@NotBlank(message = "Cafe is required") @Size(min = 3, max = 100, message = "Cafe must be between 3 and 100 characters") String name,
			@NotBlank(message = "City is required") @Size(min = 3, max = 100, message = "City must be between 3 and 100 characters") String city,
			@NotBlank(message = "State is required") @Size(min = 2, max = 100, message = "State must be between 2 and 100 characters") String state,
			Boolean isPublic, LocalDate addedAt, User user) {
		super();
		this.name = name;
		this.city = city;
		this.state = state;
		this.isPublic = isPublic;
		this.addedAt = addedAt;
		this.user = user;
	}

	public Cafe() {
		super();
	}
	
	@PrePersist
	protected void onCreate() {
	    this.addedAt = LocalDate.now();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Boolean getIsPublic() {
		return isPublic;
	}

	public void setIsPublic(Boolean isPublic) {
		this.isPublic = isPublic;
	}

	public LocalDate getAddedAt() {
		return addedAt;
	}

	public void setAddedAt(LocalDate addedAt) {
		this.addedAt = addedAt;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
