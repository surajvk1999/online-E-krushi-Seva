package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.entity.OrderTable;
import com.cdac.entity.Products;
import com.cdac.entity.User;

@Repository
public interface OrderRepository extends JpaRepository<OrderTable, Integer>
{
	@Query("Select o From OrderTable o Where o.orderProducts=?1 And o.orderUser=?2")
	public OrderTable findByOrderProductsAndOrderUser(Products pro, User user);
	
	
	@Query("Select o From OrderTable o Where o.orderUser=?1")
	public List<OrderTable> findByOrderUser(User user);
	

	@Query("Select o From OrderTable o Where o.blank_1=?1 And o.orderStatus=?2")
	public List<OrderTable> findByBalnk_1(int retailerId, String s);
	
	@Query("Select o From OrderTable o Where o.orderStatus=?1")
	public List<OrderTable> findByOrderStatus(String s);
	
	public OrderTable findById(int orderid);
}
