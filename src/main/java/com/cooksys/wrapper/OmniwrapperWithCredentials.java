package com.cooksys.wrapper;

import com.cooksys.entity.FlightEntity;
import com.cooksys.entity.Itinerary;
import com.cooksys.entity.embeddable.Credentials;

// a wrapper for every possible combination of objects not represented by Profile 
// that might enter the server WITH credentials

public class OmniwrapperWithCredentials {
	private Credentials credentials;
	
	private Itinerary itinerary;

	public Credentials getCredentials() {
		return credentials;
	}

	public void setCredentials(Credentials credentials) {
		this.credentials = credentials;
	}

	public Itinerary getItinerary() {
		return itinerary;
	}

	public void setItinerary(Itinerary itinerary) {
		this.itinerary = itinerary;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((credentials == null) ? 0 : credentials.hashCode());
		result = prime * result + ((itinerary == null) ? 0 : itinerary.hashCode());
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
		OmniwrapperWithCredentials other = (OmniwrapperWithCredentials) obj;
		if (credentials == null) {
			if (other.credentials != null)
				return false;
		} else if (!credentials.equals(other.credentials))
			return false;
		if (itinerary == null) {
			if (other.itinerary != null)
				return false;
		} else if (!itinerary.equals(other.itinerary))
			return false;
		return true;
	}

	
	
}
