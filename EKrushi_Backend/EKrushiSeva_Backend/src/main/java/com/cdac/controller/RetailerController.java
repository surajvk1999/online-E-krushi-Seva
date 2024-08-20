package com.cdac.controller;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Retailer;
import com.cdac.service.RetailerService;



@RestController
@CrossOrigin
public class RetailerController {

	@Autowired
	public RetailerService retailerService;
	
	@PostMapping("/add-shopkeeper")
	public String add(@RequestBody Retailer retailer) {
		retailerService.add(retailer);
		return "shopkeeper added";
	}
	
	
	@GetMapping("/home")
	public String hello() {
		return "Hello";
	}
	
	@GetMapping("/getUnapproveRetailer")
	public List<Retailer> getUnapproveRetailer(@RequestParam String status)
	{
		List<Retailer> list = retailerService.getUnapproveRetailer(status);
		return list;
	}
	
	@GetMapping("/updateStatus")
	public String updateStatus(@RequestParam String status, @RequestParam int id)
	{
		boolean res = retailerService.updateStatus(status, id);
		boolean res2=retailerService.sendMail(id);
		if(res==true && res2==true)
			return "Update Succesfully";
		return "Something went wrong";
	}
	
	@GetMapping("/deleteRetailer")
	public String deleteRetailer(@RequestParam int id)
	{
		
		boolean res = retailerService.deleteRetailer(id);
		if(res)
			return "Delete Succesfully";
		return "Something went wrong";
	}
	
	@PostMapping("/loginRetailer")
	public String login(@RequestBody Retailer retailer) {
		 String retailer1 = retailerService.login(retailer);
		 if(retailer1.equals("Approve")) {
			 return "Approve";
		 }
		 else if(retailer1.equals("Unapprove"))
			 return "Unapprove";
		 return "NotExist";		
	}
	
	@GetMapping("/getRetailerByUserPass")
	public Retailer getRetailerByUserPass(@RequestParam String username, @RequestParam String password)
	{
		Retailer r = retailerService.getRetailerBy(username, password);
		if(r != null)
			return r;
		return null;
	}
	
	@GetMapping("/updateExpiry")
	public String updateLicenseExpiry(@RequestParam String licenseExpiryDate, @RequestParam int id)
	{
		try {
            LocalDate localDate1 = LocalDate.parse(licenseExpiryDate);
            boolean res = retailerService.updateLicenseExpiry(localDate1, id);
            if(res==true)
    			return "Update Succesfully";
		} catch (DateTimeParseException e) {
            e.printStackTrace();
        }
		
		return "Something went wrong";
	}
}
