package com.cdac.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.entity.ConformOrder;
import com.cdac.entity.OrderTable;
import com.cdac.entity.Products;
import com.cdac.entity.Retailer;
import com.cdac.repository.ConformOrderRepository;
import com.cdac.repository.OrderRepository;
import com.cdac.repository.ProductsRepository;
import com.cdac.repository.UserRepository;

@Service
@Transactional
public class OrderService {

	@Autowired
	public OrderRepository orderRepo;
	@Autowired
	public ProductsRepository prodRepo2;
	@Autowired
	public UserRepository userRepo3;
	@Autowired
    private JavaMailSender javaMailSender;
	@Autowired
	private ConformOrderRepository cRepo;
	
	static public int number=203010;
	
	public boolean addOrder(OrderTable order, String username, String password, String productName, int productId)
	{
		Products pro = prodRepo2.findByproductNameAndId(productName, productId);
		com.cdac.entity.User u = userRepo3.findByUsernameAndPassword(username, password);
		
		OrderTable o = orderRepo.findByOrderProductsAndOrderUser(pro, u);
		
        LocalDate currentDate = LocalDate.now();
        LocalDate fiveDaysLater = currentDate.plusDays(5);
		
		if(o != null)
		{
			o.setQuantity(order.getQuantity());
			o.setPrice(pro.getPrice());
			o.setTotalprice( (pro.getPrice()*o.getQuantity()) );
			o.setOrderDate(currentDate);
			o.setShippingDate(fiveDaysLater);
			o.setOrderStatus("Undeliver");
			o.setBlank_1(pro.getRetailerIdFor());
			orderRepo.save(o);
			sendMail(o.getEmailId(), pro.getProductName(), o.getQuantity(), o.getPrice());
			
			pro.setQuantity( (pro.getQuantity()-o.getQuantity()) );
			prodRepo2.save(pro);
			return true;
		}
		if(pro!=null & u!=null)
		{
			order.setPrice(pro.getPrice());
			order.setTotalprice( (pro.getPrice()*order.getQuantity()) );
			order.setOrderDate(currentDate);
			order.setShippingDate(fiveDaysLater);
			order.setOrderStatus("Undeliver");
			order.setOrderProducts(pro);
			order.setOrderUser(u);
			order.setBlank_1(pro.getRetailerIdFor());
			
			sendMail(order.getEmailId(), pro.getProductName(), order.getQuantity(), order.getPrice());
			orderRepo.save(order);
			
			pro.setQuantity( (pro.getQuantity()-order.getQuantity()) );
			prodRepo2.save(pro);
			return true;
		}
		return false;
	}
	
	public boolean cancleOrder(int id)
	{
		orderRepo.deleteById(id);
		return true;
	}
	
	
	public List<OrderTable> getOrderProductOfUser(String username, String password)
	{
			com.cdac.entity.User u = userRepo3.findByUsernameAndPassword(username, password);
			List<OrderTable> list = orderRepo.findByOrderUser(u);
			return list;
		
	}
	
	public List<OrderTable> getUndeliverOrder(int retailerId)
	{
		String s="Undeliver";
		List<OrderTable> list = orderRepo.findByBalnk_1(retailerId, s);
		return list;
	}
	
	public List<OrderTable> getShippedOrder()
	{
		String s="Shipped";
		List<OrderTable> list = orderRepo.findByOrderStatus(s);
		return list;
	}
	
	public void shipOrder(int orderid)
	{
		OrderTable o = orderRepo.findById(orderid);
		o.setOrderStatus("Shipped");
		orderRepo.save(o);
	}
	
	public void conformOrder(int orderid)
	{
		OrderTable o = orderRepo.findById(orderid);
		orderRepo.delete(o);
		
		ConformOrder c = new ConformOrder();
		c.setAddress(o.getAddress());
		c.setBlank_1(o.getBlank_1());
		c.setEmailId(o.getEmailId());
		c.setMobileNo(o.getMobileNo());
		c.setOrderDate(o.getOrderDate());
		c.setOrderProducts(o.getOrderProducts());
		c.setOrderStatus("Deliver");
		c.setOrderUser(o.getOrderUser());
		c.setPrice(o.getPrice());
		c.setQuantity(o.getQuantity());
		c.setShippingDate(LocalDate.now());
		c.setTotalprice(o.getTotalprice());
		
		cRepo.save(c);
	}
	
	public boolean sendMail(String emailId, String name, int qun, double price) {
		LocalDate currentDate = LocalDate.now();
        LocalDate fiveDaysLater = currentDate.plusDays(5);
		  // Send email confirmation
        System.out.println(emailId+" "+name+" "+ qun+" "+price);
      SimpleMailMessage message = new SimpleMailMessage();
      message.setTo(emailId);
      message.setSubject("Order Successfull");
      message.setText(" Thank you for shopping with E-Krushi Seva! We are delighted to confirm your recent order. Here are the details of your purchase: \n"+
      "\n"+
      " Order Number: "+number+" \n"+
      "Order Date: "+currentDate+"\n"+
      "Shipping Date: "+fiveDaysLater+"\n"+
      "\n"+
      	"Product Name: "+name+"\n"+
      	"Quantity: "+qun+"\n"+
      	"Price: "+price+"\n"+
      	"Total Price: "+(qun*price)+"\n"+
      "\n"+
    	"Thank you for choosing E-Krshi Seva. We look forward to serving you again soon!");
      

      javaMailSender.send(message);
      number+=1;
      System.out.println("yes");
      return true;
		
	}
	
}
