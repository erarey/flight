package com.cooksys.DTO;

import java.util.List;

import com.cooksys.entity.Itinerary;

public class ProfileDto {
	
	String username;
	
	String firstName;
	
	String lastName;
	
	String address;
	
	String phone;
	
	List<Itinerary> itineraryHistory;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<Itinerary> getItineraryHistory() {
		return itineraryHistory;
	}

	public void setItineraryHistory(List<Itinerary> itineraryHistory) {
		this.itineraryHistory = itineraryHistory;
	}
	
	public void addToItineraryHistory(Itinerary itinerary)
	{
		this.itineraryHistory.add(itinerary);
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProfileDto other = (ProfileDto) obj;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	
	
}
