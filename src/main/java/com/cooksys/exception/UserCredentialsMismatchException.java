package com.cooksys.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Username and credentials do not match.")  // 404
public class UserCredentialsMismatchException extends RuntimeException {

	private static final long serialVersionUID = -1753177245337747467L;
    // ...
}
