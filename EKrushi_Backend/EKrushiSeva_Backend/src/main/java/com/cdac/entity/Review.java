package com.cdac.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String comment;
	private LocalDateTime commentDate;
	private int blank_1;
	private String blank_2;
	private int userReviewID;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="productId")
	@JsonIdentityReference(alwaysAsId = true)
	private Products reviewProducts;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="userId")
	private User reviewUser;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	

	public LocalDateTime getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(LocalDateTime commentDate) {
		this.commentDate = commentDate;
	}

	public int getBlank_1() {
		return blank_1;
	}

	public void setBlank_1(int blank_1) {
		this.blank_1 = blank_1;
	}

	public String getBlank_2() {
		return blank_2;
	}

	public void setBlank_2(String blank_2) {
		this.blank_2 = blank_2;
	}

	public Products getReviewProducts() {
		return reviewProducts;
	}

	public void setReviewProducts(Products reviewProducts) {
		this.reviewProducts = reviewProducts;
	}
	
	public User getReviewUser() {
		return reviewUser;
	}

	public void setReviewUser(User reviewUser) {
		this.reviewUser = reviewUser;
	}

	public int getUserReviewID() {
		return userReviewID;
	}

	public void setUserReviewID(int userReviewID) {
		this.userReviewID = userReviewID;
	}

	
	
}
