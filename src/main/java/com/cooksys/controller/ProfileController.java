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
import com.cooksys.wrapper.OmniwrapperWithCredentials;

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
	public ProfileDto login(@RequestBody Credentials credentials)
	{	
		return profileService.login(credentials);
	}
	
	@RequestMapping(value = "/newUser", method = RequestMethod.POST)
	public ProfileDto newUser(@RequestBody Profile profile)
	{	
		System.out.println("trying to make new user with " + profile.getFirstName());
		return profileService.newUser(profile);
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public ProfileDto updateUser(@RequestBody Profile profile)
	{	
		return profileService.updateUser(profile);
	}
	
	@RequestMapping(value = "/postNewFlight", method = RequestMethod.POST)
	public ProfileDto postNewFlight(String username, @RequestBody OmniwrapperWithCredentials wrapper)
	{	
		return profileService.postNewFlight(wrapper);
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