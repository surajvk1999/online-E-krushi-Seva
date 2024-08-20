package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.OrderTable;
import com.cdac.service.OrderService;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	public OrderService orderService;
	
	@PostMapping("/addOrder")
	public boolean addOrder(@RequestBody OrderTable order,@RequestParam String username,@RequestParam String password,@RequestParam String productName,@RequestParam int productId)
	{
		boolean b = orderService.addOrder(order, username, password, productName, productId);
		return b;	
	}
	
	@GetMapping("/cancleOrder")
	public boolean cancleOrder(@RequestParam int id)
	{
		//int i = Integer.parseInt(id);
		//System.out.println(id);
		orderService.cancleOrder(id);
		return true;
	}
	
	@GetMapping("/getUserOrder")
	public List<OrderTable> getOrderProductOfUser(String username, String password)
	{
			List<OrderTable> list = orderService.getOrderProductOfUser(username, password);
			return list;
	}
	
	@GetMapping("/getUndeliverOrder")
	public List<OrderTable> getUndeliverOrder(int retailerId)
	{
		List<OrderTable> list = orderService.getUndeliverOrder(retailerId);
		return list;
	}
	
	@GetMapping("/getShippedOrder")
	public List<OrderTable> getShippedOrder()
	{
		List<OrderTable> list = orderService.getShippedOrder();
		return list;
	}
	
	@GetMapping("/shippedOrder")
	public void shipOrder(int orderid)
	{
		orderService.shipOrder(orderid);
	}
	
	@GetMapping("/ConformOrder")
	public void conformOrder(int orderid)
	{
		orderService.conformOrder(orderid);
	}
}
