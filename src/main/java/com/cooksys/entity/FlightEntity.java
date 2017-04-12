package com.cooksys.entity.embeddable;

import javax.persistence.Embeddable;

import com.cooksys.pojo.Flight;

@Embeddable
public class FlightEntity {
	
	//Name of city where flight originates
	private String origin;
	
	//Name of city where flight lands
	private String destination;
	
	//How many hours flight is in the air
	private long flightTime;
	
	//How many hours after the start of the day until the flight takes off
	private long offset;
	
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public long getFlightTime() {
		return flightTime;
	}
	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}
	public long getOffset() {
		return offset;
	}
	public void setOffset(long offset) {
		this.offset = offset;
	}
	public FlightEntity(String origin, String destination, long flightTime, long offset) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.offset = offset;
	}
	
	public FlightEntity(Flight f)
	{
		super();
		this.origin = f.getOrigin();
		this.destination = f.getDestination();
		this.flightTime = f.getFlightTime();
		this.offset = f.getOffset();
	}
	
	

}
