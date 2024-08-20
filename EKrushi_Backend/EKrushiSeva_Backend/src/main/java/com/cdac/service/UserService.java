package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

import com.cdac.entity.User;
import com.cdac.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	public UserRepository userRepo;
	
	public void addUser(User user) {
		userRepo.save(user);
	}
	
	
	
	public User findUser(User user) {
		
		User fetchedUser = userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		
        
		if(fetchedUser != null) {
			return fetchedUser;
		}
		return null;
	}
	
	public User getUser(int id)
	{
		User u = userRepo.getOne(id);
		return u;
	}
	
	
	public User getUserByUsernameAndId(@RequestParam String username, @RequestParam String password)
	{
		User u = userRepo.findByUsernameAndPassword(username, password);
		System.out.println(u.toString());
		return u;
	}
	
	public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
