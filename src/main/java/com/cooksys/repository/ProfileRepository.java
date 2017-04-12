package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {

	Profile findById(Long id);
	
	Profile findByCredentialsUsername(String username);
	
}
