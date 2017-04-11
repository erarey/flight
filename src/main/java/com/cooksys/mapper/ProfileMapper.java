package com.cooksys.mapper;

import org.springframework.stereotype.Component;

import com.cooksys.DTO.ProfileDto;
import com.cooksys.entity.Profile;

@Component
public class ProfileMapper {
	
	public ProfileDto toDto(Profile p)
	{
		if (p == null || p.getCredentials() == null) return null;
		
		ProfileDto dto = new ProfileDto();
		
		if (p.getCredentials() != null && p.getCredentials().getUsername() != null) dto.setUsername(p.getCredentials().getUsername());
		if (p.getFirstName() != null) dto.setFirstName(p.getFirstName());
		if (p.getLastName() != null) dto.setLastName(dto.getLastName());
		if (p.getPhone() != null) dto.setPhone(p.getPhone());
		if (p.getAddress() != null) dto.setAddress(p.getAddress());
		if (p.getItineraryHistory() != null) dto.setItineraryHistory(p.getItineraryHistory());

		return dto;
	}
}
