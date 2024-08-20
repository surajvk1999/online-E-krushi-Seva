package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Cart;
import com.cdac.service.CartService;

@RestController
@CrossOrigin
public class CartController {

	@Autowired
	public CartService cartService;
	
	@GetMapping("/addToCart")
	public void addToCart(@RequestParam String username, @RequestParam String password, @RequestParam int prodoId, @RequestParam String prodname)
	{
		cartService.addToCart(username, password, prodoId, prodname);

	}
	
	@GetMapping("/getAllCartByUser")
	public List<Cart> getCartByUser(@RequestParam String username, @RequestParam String password)
	{
		List<Cart> list = cartService.getCartByUser(username, password);
		return list;
	}
	
	@DeleteMapping("/removeFromCart/{cartItemId}")
	public void removeFromCart(@PathVariable int cartItemId) {
	    cartService.removeFromCart(cartItemId);
	}
}
