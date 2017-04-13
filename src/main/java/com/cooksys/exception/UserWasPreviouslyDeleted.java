package com.cooksys.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="That user has previously deleted their account.")
public class UserWasPreviouslyDeleted extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
}
