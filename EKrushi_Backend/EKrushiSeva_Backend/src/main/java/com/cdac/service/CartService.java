package com.cdac.service;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Cart;
import com.cdac.entity.Products;
import com.cdac.repository.CartRepository;
import com.cdac.repository.ProductsRepository;
import com.cdac.repository.UserRepository;

@Service
public class CartService {

	@Autowired
	public CartRepository cartRepo;
	@Autowired
	public UserRepository userRepo1;
	@Autowired
	public ProductsRepository prodRepo;
	
	 
	public void addToCart( String username, String password, int prodoId , String productName)
	{
		Cart cartItem = new Cart();
		Products pro = prodRepo.findByproductNameAndId(productName, prodoId);
		com.cdac.entity.User u = userRepo1.findByUsernameAndPassword(username, password);
		if(pro != null && u != null) {
			cartItem.setPrice(pro.getPrice());
			cartItem.setTotalAmount( (pro.getPrice()*cartItem.getQuantity()) );
			cartItem.setCartProducts(pro);
			cartItem.setCartUser(u);
			cartRepo.save(cartItem);
		}
	}
	
	public List<Cart> getCartByUser(String username, String password)
	{
		com.cdac.entity.User u = userRepo1.findByUsernameAndPassword(username, password);
		List<Cart> list = cartRepo.findByCartUser(u);
		return list;
	}
	
	public void removeFromCart(int cartItemId) {
        cartRepo.deleteById(cartItemId);
    }
}
