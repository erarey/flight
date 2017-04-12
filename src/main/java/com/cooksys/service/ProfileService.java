package com.cooksys.service;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.DTO.ProfileDto;
import com.cooksys.entity.Itinerary;
import com.cooksys.entity.Profile;
import com.cooksys.entity.embeddable.Credentials;
import com.cooksys.exception.CredentialsInvalidException;
import com.cooksys.exception.GenericException;
import com.cooksys.exception.UserWasPreviouslyDeleted;
import com.cooksys.mapper.ProfileMapper;
import com.cooksys.repository.ProfileRepository;
import com.cooksys.wrapper.OmniwrapperWithCredentials;

@Service
public class ProfileService {

	/*ProfileService(ProfileMapper mapProfile, ProfileRepository repo)
	{
		this.mapProfile = mapProfile;
		this.repo = repo;
	}*/
	@Autowired
	EntityManager entityManager;
	@Autowired
	ProfileMapper mapProfile;
	@Autowired
	ProfileRepository repo;

	private void validate(Credentials credentials)
	{
		Profile profile = repo.findByCredentialsUsername(credentials.getUsername());
		
		if (profile == null) {
			throw new CredentialsInvalidException();
		}
		else if (profile.getDeleted())
		{
			throw new UserWasPreviouslyDeleted();
		}
		else
		{
			// don't throw an exception, we're good.
		}
		
		
	}
	
	public ProfileDto getProfile(Credentials credentials) {
		validate(credentials); // throws on fail
		
		return mapProfile.toDto(repo.findByCredentialsUsername(credentials.getUsername()));
		
	}

	public ProfileDto login(Credentials credentials) {
		validate(credentials); // throws on fail
		
		return mapProfile.toDto(repo.findByCredentialsUsername(credentials.getUsername()));
		
	}

	public ProfileDto newUser(Profile profile) {
		Profile u = repo.findByCredentialsUsername(profile.getCredentials().getUsername());
		
		System.out.println(u == null);
		
		if (u == null) {
			u = new Profile();
			u.setCredentials(profile.getCredentials());
			u.setAddress(profile.getAddress());
			u.setFirstName(profile.getFirstName());
			u.setLastName(u.getLastName());
			u.setPhone(profile.getPhone());
			u.setEmail(profile.getEmail());
			repo.save(u);
			entityManager.detach(u);
			u = repo.findByCredentialsUsername(profile.getCredentials().getUsername());
			
			System.out.println("in service, sending to mapper " + u.getCredentials().getUsername());
			return mapProfile.toDto(u);
		
		}
		else if (u.getDeleted()) {
			System.out.println("A user is trying to come back from the dead");
			throw new UserWasPreviouslyDeleted();	
		}
		else
		{
			System.out.println("Bad credentials");
			throw new CredentialsInvalidException();
		}
	}

	public ProfileDto updateUser(Profile profile) {
		if (profile == null) {
			throw new GenericException();
		}
		else {
			validate(profile.getCredentials()); // throws on fail
		}
		
		Profile u = repo.findByCredentialsUsername(profile.getCredentials().getUsername());
		
		if (!profile.getDeleted()) {
			if (profile.getAddress() != null) profile.setAddress(profile.getAddress());
			if (profile.getFirstName() != null) profile.setFirstName(profile.getFirstName());
			if (profile.getLastName() != null) profile.setLastName(u.getLastName());
			if (profile.getPhone() != null) profile.setPhone(profile.getPhone());
			if (profile.getEmail() != null) profile.setEmail(profile.getEmail());
			//repo.save(u);
			entityManager.detach(u);
			u = repo.findByCredentialsUsername(profile.getCredentials().getUsername());
			
			return mapProfile.toDto(u);
		
		}
		else if (u.getDeleted()) {
			throw new UserWasPreviouslyDeleted();	
		}
		else
		{
			throw new GenericException();
		}
	}

	public ProfileDto postNewFlight(OmniwrapperWithCredentials wrapper) {
		if (wrapper == null || wrapper.getItinerary() == null) {
			throw new GenericException();
		}
		else {
			validate(wrapper.getCredentials()); // throws on fail
		}
		
		Profile u = repo.findByCredentialsUsername(wrapper.getCredentials().getUsername());
		
		List<Itinerary> history = u.getItineraryHistory();
		
		history.add(wrapper.getItinerary());
		
		u.setItineraryHistory(history);
		
		repo.save(u);
		
		entityManager.detach(u);
		
		u = repo.findByCredentialsUsername(wrapper.getCredentials().getUsername());
		
		return mapProfile.toDto(u);
		
	}
	
}
