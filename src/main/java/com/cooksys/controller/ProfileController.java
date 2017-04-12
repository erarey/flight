package com.cooksys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.DTO.ProfileDto;
import com.cooksys.entity.Profile;
import com.cooksys.entity.embeddable.Credentials;
import com.cooksys.exception.UserCredentialsMismatchException;
import com.cooksys.service.ProfileService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class ProfileController {
	
	/*ProfileController(ProfileService profileService)
	{
		this.profileService = profileService;
	}*/
	
	@Autowired
	private ProfileService profileService;

	@RequestMapping(value = "/get", method = RequestMethod.POST)
	public ProfileDto getUser(@RequestBody Credentials credentials)
	{
		return profileService.getProfile(credentials);
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ProfileDto getUser(String username, @RequestBody Credentials credentials)
	{	
		profileService.login(credentials);
	}
	
	@RequestMapping(value = "/newUser", method = RequestMethod.POST)
	public ProfileDto newUser(String username, @RequestBody Profile profile)
	{	
		profileService.newUser(profile);
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public ProfileDto getUser(String username, @RequestBody Profile profile)
	{	
		profileService.update(profile);
	}
	
	
	@RequestMapping(value = "/test/{username}", method = RequestMethod.POST)
	public String getUserTest(@PathVariable("username") String username, @RequestBody Credentials credentials)
		//throws UserCredentialsMismatchException;
	{
		System.out.println("username: " + username + " creds: " + credentials.getUsername() + " " + credentials.getPassword());
		
		if (!username.equals(credentials.getUsername())) throw new UserCredentialsMismatchException();
		
		return "success";
	}

}