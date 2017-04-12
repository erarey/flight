package com.cooksys.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.cooksys.entity.embeddable.Credentials;

	@Entity
	@Table(name = "Profile")
	public class Profile {

		@Id
		@GeneratedValue
		private Long id;
		
		@Embedded
		Credentials credentials;

		String firstName;
		
		String lastName;
		
		String address;
		
		String phone;
		
		String email;
		
		Boolean deleted = false;
		
		@OneToMany(mappedBy = "profile", cascade = CascadeType.ALL)
		List<Itinerary> itineraryHistory;
		
		public void setEmail(String email) {
			this.email = email;
		}
		
		public String getEmail() {
			return email;
		}
		public Boolean getDeleted() {
			return deleted;
		}

		public void setDeleted(Boolean deleted) {
			this.deleted = deleted;
		}

		public List<Itinerary> getItineraryHistory() {
			return itineraryHistory;
		}

		public void setItineraryHistory(List<Itinerary> itineraryHistory) {
			this.itineraryHistory = itineraryHistory;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Credentials getCredentials() {
			return credentials;
		}

		public void setCredentials(Credentials credentials) {
			this.credentials = credentials;
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

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + (int) (id ^ (id >>> 32));
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
			Profile other = (Profile) obj;
			if (id != other.id)
				return false;
			return true;
		}
	}
