package com.hilaryslist.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "reviews")
public class Review {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(nullable = true)
	@Min(value = 1, message = "Rating must be at least 1")
	@Max(value = 5, message = "Rating must be at most 5")
	private Integer rating;
	
	@Column(nullable = true, length = 500)
	private String notes;
	
	@Enumerated(EnumType.STRING)
	private Specialty specialty;
	
	
	private Boolean servesAlcohol = false;
	
	private LocalDate addedAt;
	

	@ManyToOne
	@JoinColumn(name = "cafe_id", nullable = false)
	private Cafe cafe;
	
	
	
	public Review() {
		super();
	}
	
	public Review(
			@Min(value = 1, message = "Rating must be at least 1") @Max(value = 5, message = "Rating must be at most 5") Integer rating,
			String notes, Specialty specialty, Boolean servesAlcohol, Cafe cafe) {
		super();
		this.rating = rating;
		this.notes = notes;
		this.specialty = specialty;
		this.servesAlcohol = servesAlcohol;
		this.cafe = cafe;
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

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Specialty getSpecialty() {
		return specialty;
	}

	public void setSpecialty(Specialty specialty) {
		this.specialty = specialty;
	}

	public Boolean getServesAlcohol() {
		return servesAlcohol;
	}

	public void setServesAlcohol(Boolean servesAlcohol) {
		this.servesAlcohol = servesAlcohol;
	}

	public LocalDate getAddedAt() {
		return addedAt;
	}

	public void setAddedAt(LocalDate addedAt) {
		this.addedAt = addedAt;
	}

	public Cafe getCafe() {
		return cafe;
	}

	public void setCafe(Cafe cafe) {
		this.cafe = cafe;
	}
	
}
