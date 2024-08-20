package com.cdac.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Retailer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String name;
	private String emailId;
	private String mobileNo;
	private String seedLicenseNo;
	private String pesticideLicenseNo;
	private String fertilizerLicenseNo;
	private LocalDate licenseExpiryDate;
	private String gstNo;
	private String address;
	private LocalDate accOpeningDate;
	private String password;
	private String status;
	

	private int blank_1;
	private String blank_2;
	
	@OneToMany(mappedBy = "productsRetailer", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIdentityReference(alwaysAsId = true)
	private List<Products> retailerProducts;

	public int getId() {
		return id;
	}

	public List<Products> getRetailerProducts() {
		return retailerProducts;
	}

	public void setRetailerProducts(List<Products> retailerProducts) {
		this.retailerProducts = retailerProducts;
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

	public String getSeedLicenseNo() {
		return seedLicenseNo;
	}

	public void setSeedLicenseNo(String seedLicenseNo) {
		this.seedLicenseNo = seedLicenseNo;
	}

	public String getPesticideLicenseNo() {
		return pesticideLicenseNo;
	}

	public void setPesticideLicenseNo(String pesticideLicenseNo) {
		this.pesticideLicenseNo = pesticideLicenseNo;
	}

	public String getFertilizerLicenseNo() {
		return fertilizerLicenseNo;
	}

	public void setFertilizerLicenseNo(String fertilizerLicenseNo) {
		this.fertilizerLicenseNo = fertilizerLicenseNo;
	}

	public String getGstNo() {
		return gstNo;
	}

	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	

	public LocalDate getAccOpeningDate() {
		return accOpeningDate;
	}

	public void setAccOpeningDate(LocalDate accOpeningDate) {
		this.accOpeningDate = accOpeningDate;
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

	
	
	public LocalDate getLicenseExpiryDate() {
		return licenseExpiryDate;
	}

	public void setLicenseExpiryDate(LocalDate licenseExpiryDate) {
		this.licenseExpiryDate = licenseExpiryDate;
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
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
