package com.cooksys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.DTO.ProfileDto;
import com.cooksys.entity.Profile;
import com.cooksys.entity.embeddable.Credentials;
import com.cooksys.exception.CredentialsInvalidException;
import com.cooksys.exception.UserWasPreviouslyDeleted;
//import com.cooksys.exception.CredentialsInvalidException;
import com.cooksys.mapper.ProfileMapper;
import com.cooksys.repository.ProfileRepository;

@Service
public class ProfileService {

	/*ProfileService(ProfileMapper mapProfile, ProfileRepository repo)
	{
		this.mapProfile = mapProfile;
		this.repo = repo;
	}*/
	
	@Autowired
	ProfileMapper mapProfile;
	@Autowired
	ProfileRepository repo;

	private Boolean credentialsAreValid(Credentials credentials)
	{
		Profile profile = repo.findByCredentialsUsername(credentials.getUsername());
		
		if (profile == null) {
			return false;
		}
		else
		{
			return true;
		}
		
		
	}
	
	public ProfileDto getProfile(Credentials credentials) {
		if (credentialsAreValid(credentials))
		{
			return mapProfile.toDto(repo.findByCredentialsUsername(credentials.getUsername()));
		}
		else
		{
			throw new CredentialsInvalidException();
		}
		
	}

	public ProfileDto login(Credentials credentials) {
		try {
			if (credentialsAreValid(credentials))
			{
				return mapProfile.toDto(repo.findByCredentialsUsername(credentials.getUsername()));
			}
		}
		catch (UserWasPreviouslyDeleted e)
		{
			throw new UserWasPreviouslyDeleted();
		}
		
	}
	
}
