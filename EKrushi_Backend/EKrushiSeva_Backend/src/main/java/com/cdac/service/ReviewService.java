package com.cdac.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.Products;
import com.cdac.entity.Review;
import com.cdac.entity.User;
import com.cdac.repository.ProductsRepository;
import com.cdac.repository.ReviewRepository;
import com.cdac.repository.UserRepository;

@Service
@Transactional
public class ReviewService {

	@Autowired
	public ReviewRepository reviewRepository;
	@Autowired
	public UserRepository userRepo2;
	@Autowired
	public ProductsRepository prodRepo1;
	@Autowired
	public UserService uService;
	@Autowired
	public ProductsService pService;
	
	public void addReview(String comment, String username, String password, String productName, int productId)
	{
		Products pro = prodRepo1.findByproductNameAndId(productName, productId);
		com.cdac.entity.User u = userRepo2.findByUsernameAndPassword(username, password);
		
		Review review = reviewRepository.findByReviewProductsAndReviewUser(pro, u);
		
		if(review != null && pro != null )
		{
			review.setComment(comment);
			review.setCommentDate(LocalDateTime.now());
			review.setReviewProducts(pro);
			review.setReviewUser(u);
			reviewRepository.save(review);
		}
		else if(pro != null)
		{
			Review r = new Review();
			r.setComment(comment);
			r.setCommentDate(LocalDateTime.now());
			r.setReviewProducts(pro);
			r.setReviewUser(u);
			reviewRepository.save(r);
		}
		
	}
	
	public List<Review> getReviewByUser(int userid)
	{
		List<Review> l = reviewRepository.findByUserReviewID(userid);
		return l;
	}
	
	public List<Review> getReviewByProduct(String productName, int productId)
	{
		Products pr = prodRepo1.findByproductNameAndId(productName, productId);
		List<Review> list = reviewRepository.findByReviewProducts(pr);
		if(list != null)
			return list;
		return list;
	}
	
	public void updateLike(int id)
	{
		Review r = reviewRepository.findById(id);
		r.setBlank_1(r.getBlank_1()+1);
		reviewRepository.save(r);
	}
}
