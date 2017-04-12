package com.cooksys.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="UserWasPreviouslyDeleted")
public class UserWasPreviouslyDeleted extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
