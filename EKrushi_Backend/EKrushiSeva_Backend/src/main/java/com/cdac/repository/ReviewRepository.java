package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdac.entity.Products;
import com.cdac.entity.Review;
import com.cdac.entity.User;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	public List<Review> findByUserReviewID(int userid);
	
	public Review findById(int id);
	
	/*
	 * @Query("SELECT cd FROM ComplaintDetails cd WHERE cd.policeStation = :police")
	List<ComplaintDetails> findComplaintsByPoliceStation(@Param("police") PoliceDetails police);    */
	
	@Query("Select re From Review re Where re.reviewProducts=:prod")
	public List<Review> findByReviewProducts(@Param("prod") Products prod);
	
	@Query("Select re From Review re Where re.reviewProducts=:prod And re.reviewUser=:user")
	public Review findByReviewProductsAndReviewUser(@Param("prod") Products prod, @Param("user") User user);
}
