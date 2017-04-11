package com.cooksys.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Credentials not found in database")  // 404
public class CredentialsInvalidException extends RuntimeException {
	
	private static final long serialVersionUID = -6804848305522684674L;

	
    // ...
}