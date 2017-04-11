package com.cooksys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.DTO.ProfileDto;
import com.cooksys.entity.Profile;
import com.cooksys.entity.embeddable.Credentials;
import com.cooksys.exception.CredentialsInvalidException;
import com.cooksys.mapper.ProfileMapper;
import com.cooksys.repository.ProfileRepository;

@Service
public class ProfileService {

	@Autowired
	ProfileMapper mapProfile;
	ProfileRepository repo;

	private Boolean credentialsOk(Credentials credentials)
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
		if (credentialsOk(credentials))
		{
			return mapProfile.toDto(repo.findByCredentialsUsername(credentials.getUsername()));
		}
		else
		{
			
		}
		
	}
	
}
