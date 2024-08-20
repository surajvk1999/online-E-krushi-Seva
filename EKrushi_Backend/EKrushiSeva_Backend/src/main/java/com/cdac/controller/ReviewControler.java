package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Products;
import com.cdac.entity.Review;
import com.cdac.service.ReviewService;

@RestController
@CrossOrigin
public class ReviewControler {

	@Autowired
	public ReviewService reviewService;
	
	@GetMapping("/addComment")
	public void addComment(@RequestParam String comment, @RequestParam String username, @RequestParam String password, @RequestParam String productName, @RequestParam int productId)
	{
		
		
		reviewService.addReview(comment, username, password, productName, productId);
	}
	
	@GetMapping("/getReviewByUser")
	public List<Review> getReview(@RequestParam int userid)
	{
		List<Review> l = reviewService.getReviewByUser(userid);
		return l;
	}
	
	@GetMapping("/getReview")
	public List<Review> getReviewByProduct(@RequestParam String productName, @RequestParam int productId)
	{
		List<Review> list = reviewService.getReviewByProduct(productName, productId);
		if(list != null)
			return list;
		return list;
	}
	
	@GetMapping("/updateLike")
	public void updateLike(int id)
	{
		reviewService.updateLike(id);
	}
}
