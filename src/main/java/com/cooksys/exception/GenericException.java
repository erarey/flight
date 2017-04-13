package com.cooksys.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="Unfortunately something went wrong!")
public class GenericException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2543893296843043955L;

}
