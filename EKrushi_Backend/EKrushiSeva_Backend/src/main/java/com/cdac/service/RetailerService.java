package com.cdac.service;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cdac.entity.Retailer;
import com.cdac.repository.RetailerRepository;

@Service
public class RetailerService {

	@Autowired
	public RetailerRepository retailerRepo;	
	@Autowired
    private JavaMailSender javaMailSender;
	
	public void add(Retailer retailer) {
		retailer.setAccOpeningDate(LocalDate.now());
		retailer.setStatus("Unapprove");
		retailerRepo.save(retailer);
	}
	
	public List<Retailer> getUnapproveRetailer(String status)
	{
		List<Retailer> list = retailerRepo.findByStatus(status);
		return list;
	}
	
	public boolean updateStatus(String status, int id)
	{
		retailerRepo.updateByStatus(status, id);
		return true;
	}
	
	public boolean deleteRetailer(int id)
	{
	    Retailer retailer = retailerRepo.findById(id);
		retailerRepo.delete(retailer);
		return true;
	}
	
	public String login(Retailer retailer) {
		
		Retailer s = retailerRepo.findByUsernameAndPassword(retailer.getUsername(),retailer.getPassword() );
			
			if(s!=null) {
				String s1 = s.getStatus();
				String s2 = "Approve";
				if(s1.equals(s2))
					return "Approve";
				return "Unapprove";
			}
			
		return "NotExist";
	}
	
	public Retailer getRetailerBy(String username, String password)
	{
		Retailer s = retailerRepo.findByUsernameAndPassword(username, password);
		return s;
	}
	
	public boolean updateLicenseExpiry(LocalDate licenseExpiryDate, int id)
	{
		retailerRepo.updateByLicenseExpiryDate(licenseExpiryDate, id);
		return true;
	}
	
	public boolean sendMail(int id) {
		Retailer retailer = retailerRepo.findById(id);
		  // Send email confirmation
      SimpleMailMessage message = new SimpleMailMessage();
      message.setTo(retailer.getEmailId());
      message.setSubject("Approval");
      message.setText("Hi " +retailer.getName() + " You have opened an account on EKrushiSeva \n"+
      " Which has been approved now \n"+
      " Now you can Login and start your business \n"+
       "Thank You For using E-Krushi Seva ! ");

      javaMailSender.send(message);
      return true;
		
	}
	
}
