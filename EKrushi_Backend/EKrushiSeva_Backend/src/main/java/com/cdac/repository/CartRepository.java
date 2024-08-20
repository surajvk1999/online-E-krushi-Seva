package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Cart;
import com.cdac.entity.User;

public interface CartRepository extends JpaRepository<Cart, Integer>
{
	@Query("Select c From Cart c Where c.cartUser=?1")
	public List<Cart> findByCartUser(User u);
	
	void deleteById(int cartItemId);
}
