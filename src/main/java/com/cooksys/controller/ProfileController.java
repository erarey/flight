package com.cooksys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMapping;

import com.cooksys.entity.Profile;
import com.cooksys.entity.embeddable.Credentials;
import com.cooksys.exception.UserCredentialsMismatchException;
import com.cooksys.service.ProfileService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserProfileController {
	
	@Autowired
	private ProfileService profileService;

	@CrossOrigin
	@RequestMapping(value = "/{username}", method = RequestMethod.POST)
	public Profile getUser(@PathVariable("username") String username, @RequestBody Credentials credentials)
		throws UserCredentialsMismatchException
	{
		System.out.println("username: " + username + " creds: " + credentials.getUsername() + " " + credentials.getPassword());
		
		if (!username.equals(credentials.getUsername())) throw new UserCredentialsMismatchException();
		
		
		return profileService.getProfile(credentials);
	}

}