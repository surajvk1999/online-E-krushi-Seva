package com.cdac.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String productName;
	private String chemicalName;
	private String category;
	private String companyName;
	private String weight;	
	private double price;
	private int quantity;
	private LocalDate expiryDate;
	private int rating;
	private String shortDescription;
	private String description;
	private String benefits;
	private String targetedInsects;
	private int blank_1;
	private String blank_2;
	private int RetailerIdFor;
	
	@Lob
    @Column(name = "imagedata")
    private byte[] imageData;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="retailerId")
	@JsonIdentityReference(alwaysAsId = true)
	private Retailer productsRetailer;
	
	@OneToMany(mappedBy = "reviewProducts", cascade = CascadeType.REMOVE, orphanRemoval = true)
	@JsonIdentityReference(alwaysAsId = true)
	private List<Review> productsReview;
	
	@OneToMany(mappedBy = "orderProducts", cascade = CascadeType.REMOVE, orphanRemoval = true)
	@JsonIdentityReference(alwaysAsId = true)
	private List<OrderTable> productsOrder;
	
	@OneToMany(mappedBy = "cartProducts", cascade = CascadeType.REMOVE)
	@JsonIdentityReference(alwaysAsId = true)
	private List<Cart> productCart;

	public List<Cart> getProductCart() {
		return productCart;
	}

	public void setProductCart(List<Cart> productCart) {
		this.productCart = productCart;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getChemicalName() {
		return chemicalName;
	}

	public void setChemicalName(String chemicalName) {
		this.chemicalName = chemicalName;
	}

	

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Retailer getProductsRetailer() {
		return productsRetailer;
	}

	public void setProductsRetailer(Retailer productsRetailer) {
		this.productsRetailer = productsRetailer;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getBenefits() {
		return benefits;
	}

	public void setBenefits(String benefits) {
		this.benefits = benefits;
	}

	public String getTargetedInsects() {
		return targetedInsects;
	}

	public void setTargetedInsects(String targetedInsects) {
		this.targetedInsects = targetedInsects;
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

	

	public int getRetailerIdFor() {
		return RetailerIdFor;
	}

	public void setRetailerIdFor(int retailerIdFor) {
		RetailerIdFor = retailerIdFor;
	}

	public List<Review> getProductsReview() {
		return productsReview;
	}

	public void setProductsReview(List<Review> productsReview) {
		this.productsReview = productsReview;
	}

	public List<OrderTable> getProductsOrder() {
		return productsOrder;
	}

	public void setProductsOrder(List<OrderTable> productsOrder) {
		this.productsOrder = productsOrder;
	}


	public byte[] getImageData() {
		return imageData;
	}
	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}
}
