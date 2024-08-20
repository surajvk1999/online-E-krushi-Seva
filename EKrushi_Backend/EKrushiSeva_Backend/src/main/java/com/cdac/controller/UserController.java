package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.repository.UserRepository;
import com.cdac.service.UserService;
import com.cdac.entity.User;
import com.cdac.entity.User;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
	UserRepository jpaRepo;
	@Autowired
	public UserService userService;
	@Autowired
	public UserRepository userRepo;
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@GetMapping("/getUser")
	public User getUser(@RequestParam Integer id) {
		User user = userService.getUser(id);
		return user;
	}
	@PutMapping("/updateUser")
	public void updateUser(@RequestBody User user) {
		jpaRepo.save(user);
	}
	
	@DeleteMapping("/deleteUser")
	public void deleteUser(@RequestParam Integer id) {
		jpaRepo.deleteById(id);
	}

	
	@PostMapping("/login")
	public String login(@RequestBody User user) {
		User user1 = userService.findUser(user);
		 
		 
		if(user1 != null) {
			return "Exist";
		}
		return "NotExist";
	}
	
	@GetMapping("/getUserByName")
	public User getUserByUsernameAndId(@RequestParam String username, @RequestParam String password)
	{
		User u = userService.getUserByUsernameAndId(username, password);
		return u;
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
	    List<User> users = userService.getAllUsers();
	    return users;
	}
}
