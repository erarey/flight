package com.cooksys.entity;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.cooksys.pojo.Flight;

@Entity
public class Itinerary {
	@Id
	@GeneratedValue
	private Long id;
	
	//@Column(name = "offered", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Timestamp offered;
	
	@ManyToOne
	Profile profile;
	
	@OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL)
	List<FlightEntity> flights;

	public Timestamp getOffered() {
		return offered;
	}

	public void setOffered(Timestamp offered) {
		this.offered = offered;
	}

	public List<FlightEntity> getFlights() {
		return flights;
	}

	public void setFlights(List<FlightEntity> flights) {
		this.flights = flights;
	}
	
	public void addToFlights(FlightEntity flightEntity)
	{
		this.flights.add(flightEntity);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Itinerary other = (Itinerary) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
	
	
	
	
	
}
