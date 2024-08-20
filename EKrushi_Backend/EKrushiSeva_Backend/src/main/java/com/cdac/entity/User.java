package com.cdac.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String name;
	private String emailId;
	private String mobileNo;
	private LocalDate dob;
	private String address;
	private String password;
	private int blank_1;
	private String blank_2;
	
	@OneToMany(mappedBy = "reviewUser")
	@JsonIdentityReference(alwaysAsId = true)
	private List<Review> userReview;
	
	@OneToMany(mappedBy = "cartUser", cascade = CascadeType.REMOVE)
	@JsonIdentityReference(alwaysAsId = true)
	private List<Cart> userCart;
	
	@OneToMany(mappedBy = "orderUser", cascade = CascadeType.REMOVE, orphanRemoval = true)
	@JsonIdentityReference(alwaysAsId = true)
	private List<OrderTable> userOrder;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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


	public List<Cart> getUserCart() {
		return userCart;
	}

	public void setUserCart(List<Cart> userCart) {
		this.userCart = userCart;
	}

	public List<OrderTable> getUserOrder() {
		return userOrder;
	}

	public void setUserOrder(List<OrderTable> userOrder) {
		this.userOrder = userOrder;
	}
	
	
}
