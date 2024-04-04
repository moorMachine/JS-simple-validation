function sendForm()   // validatie data when the submit button is pressed
{
		let errorDiv = document.getElementById("errors");
		let firstErrorSpan = document.getElementById("firstError");
	
		let checkName = document.getElementById("nameId");
		let checkSurname = document.getElementById("surnameId");
		let checkmail = document.getElementById("mailId");
		let checkDate= document.getElementById("dateId");
		let checkPassword = document.getElementById("passwordId");
		let checkRepPassword= document.getElementById("repPasswordId");
		
		
		
		validateName(checkName);
		validateSurname(checkSurname);
		validateMail(checkmail);
		validateDate(checkDate);
		
		validatePassword(checkPassword);
		validatePasswordRep(checkRepPassword);
		mySend();
		
		if(firstErrorSpan.nextElementSibling !== null)
		{
			
		}
		else
		{
			alert("Wysłano Pomyślnie");
			location.reload(true);

		}
	
}




function mySend() // show errors when they occur
{

		let errorDiv = document.getElementById("errors");
		let firstErrorSpan = document.getElementById("firstError");
		
	
		if(firstErrorSpan.nextElementSibling !== null)
		{

				errorDiv.style.display="block";	//show div with errors
		}
		else
		{

			errorDiv.style.display="none";	// hide div with errors
		}
		
		
}


function validateName(e)
{
		
		
		let name = e.value;
	
				// check if there were errors in the previous onblur event
				let errorLog = document.getElementById("errors");
				let isEmpty = document.getElementById("emptyName");
				let isWhitespace = document.getElementById("nameWhitespace");
				

				if(name === '') // check if the input is empty
				{

					let isStar = document.getElementById("nameStar");
				
					e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add a red star next to the input if an error occurred
							let star = document.createElement("span");
							star.id="nameStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}		
					
									
					if(isEmpty === null)
					{ 
						// adding error information when it occurs
						let emptyNameError = document.createElement("span");
							emptyNameError.id="emptyName";
							emptyNameError.className="errorInfo";
							emptyNameError.innerText=" Pole Imie nie może być puste ";
							errorLog.appendChild(emptyNameError);
					}					
				}
				else
				{
					
					// deleting error information when it is no longer needed
					let emptyNameError = document.getElementById("emptyName");
					if( emptyNameError !== null)
						{
							emptyNameError.remove();
							mySend();
						}											
				}
						

				if(name.indexOf(' ') >= 0 ) // check whitespace characters in the input text
				{

					
					let isStar = document.getElementById("nameStar");

					
					e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add star
							let star = document.createElement("span");
							star.id="nameStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}	
					
					
					if(isWhitespace === null)
					{	//add error information
					   let nameWhitespaceError = document.createElement("span");
							nameWhitespaceError.id="nameWhitespace";
							nameWhitespaceError.className="errorInfo";
							nameWhitespaceError.innerText=" Pole Imie nie może zawierać spacji";
							errorLog.appendChild(nameWhitespaceError);
					}
				}
				
				else
				{
					// delete  error information
					let nameWhitespaceError = document.getElementById("nameWhitespace");
					if( nameWhitespaceError !== null)
						{
							nameWhitespaceError.remove();
							mySend();
						}
							
					
				} // remove  star and red border when there are no errors 
				if( !((name == '') || (name.indexOf(' ') >= 0 )) )
				{
					

			
					let star = document.getElementById("nameStar");
					e.style.borderColor="";
					if( star !== null)
					{	
						
						star.remove();
			
					}
				}
				
				
				
		
}

function validateSurname(e)  // logic the same as validateName function
{
		
		let surname = e.value;

		
				let errorLog = document.getElementById("errors");
				let isEmpty = document.getElementById("emptySurname");
				let isWhitespace = document.getElementById("surnameWhitespace");		
	

				
				if(surname === '')
				{

					
					let isStar = document.getElementById("surnameStar");
					

					
					e.style.borderColor="red";
					
					if(isStar === null)
					{						
							
							let star = document.createElement("span");
							star.id="surnameStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}		
					
									
					if(isEmpty === null)
					{
						let emptySurnameError = document.createElement("span");
							emptySurnameError.id="emptySurname";
							emptySurnameError.className="errorInfo";
							emptySurnameError.innerText=" Pole Nazwisko nie może być puste ";
							errorLog.appendChild(emptySurnameError);
					}					
				}
				else
				{
					
	
					let emptySurnameError = document.getElementById("emptySurname");
					if( emptySurnameError !== null)
						{
							emptySurnameError.remove();
							mySend();
						}											
				}
						

				if(surname.indexOf(' ') >= 0 )
				{

					
					let isStar = document.getElementById("surnameStar");
					

					
					e.style.borderColor="red";
					
					if(isStar === null)
					{						
							
							let star = document.createElement("span");
							star.id="surnameStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}	
					
					
					if(isWhitespace === null)
					{
					   let surnameWhitespaceError = document.createElement("span");
							surnameWhitespaceError.id="surnameWhitespace";
							surnameWhitespaceError.className="errorInfo";
							surnameWhitespaceError.innerText=" Pole Nazwisko nie może zawierać spacji";
							errorLog.appendChild(surnameWhitespaceError);
					}
				}
				
				else
				{
					
					let surnameWhitespaceError = document.getElementById("surnameWhitespace");
					if( surnameWhitespaceError !== null)
						{
							surnameWhitespaceError.remove();
							mySend();
						}
							
					
				}
				if( !((surname == '') || (surname.indexOf(' ') >= 0 )) )
				{
					

			
					let star = document.getElementById("surnameStar");
					e.style.borderColor="";
					if( star !== null)
					{	
						
						star.remove();
			
					}
				}
				
		
		
		
}






function validateMail(e)
{
	let myMail = e.value;
	let validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // email regex
	
	let errorLog = document.getElementById("errors");
	let isMailError = document.getElementById("mailError");
	
	
		  if(myMail.match(validRegex)) // checking if the entered message matches a regular expression
		  {
				
			let star = document.getElementById("mailStar");
					e.style.borderColor="";
					if( star !== null)
					{	
						//remove error star and red border
						star.remove();
			
					}
					
					let mailError = document.getElementById("mailError");
					if( mailError !== null)
						{
							// remove mail error information
							mailError.remove();
							mySend();
						}	 
	
		  }
		  else
		  {
			let isStar = document.getElementById("mailStar");
				e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add error star
							let star = document.createElement("span");
							star.id="mailStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}

					if(isMailError === null)
					{
						// add mail error information
					   let mailError = document.createElement("span");
							mailError.id="mailError";
							mailError.className="errorInfo";
							mailError.innerText=" Proszę wprowadzić poprawny adres e-mail";
							errorLog.appendChild(mailError);
					}
			
		  }
	
	
}




function validateDate(e)
{

	let myData = e.value;
	let dateFormat = false;

	let dataRegex = /[0-9]{2}[\/][0-9]{2}[\/][0-9]+/;
	

	let errorLog = document.getElementById("errors");
	let isErrorData = document.getElementById("errorDate");
	
	if(myData.match(dataRegex) )//&& myData.length == myData.match(dataRegex)[0].length)
	{
		dateFormat = true;
	}

	if(dateFormat)
	{	let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		
		dataInParts = myData.split('/');

		let day = parseInt(dataInParts[0]);
		let month = parseInt(dataInParts[1]);
		let year = parseInt(dataInParts[2]);

		if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0) // check if there is a leap year
		{
			daysInMonth[1]=29;
			
		}
		if(month > 12 || month == 0) // check if the month is correct
		{
			dateFormat = false;
		}

		if(day > daysInMonth[month-1] || day == 0) // check if the day is correct
		{
			dateFormat = false;
		}


	}
	
	if(dateFormat)
	{
		// if date format is correct remove error star
		e.style.borderColor="";
		let star = document.getElementById("dateStar");
				
				if( star !== null)
				{	
					
					star.remove();
		
				}
				
				let errorDate = document.getElementById("errorDate");
				if( errorDate !== null)
					{
						errorDate.remove();
						mySend();
					}

	}
	else
	{
		let isStar = document.getElementById("dateStar");
			e.style.borderColor="red";
				
				if(isStar === null)
				{						
						// add error star
						let star = document.createElement("span");
						star.id="dateStar";
						star.innerText=" * ";
						e.parentNode.appendChild(star);
				}


				if(isErrorData === null)
				{
					// add error information
				   let errorDate = document.createElement("span");
				   		errorDate.id="errorDate";
						errorDate.className="errorInfo";
						errorDate.innerText=" Wprowadź poprawną date";
						errorLog.appendChild(errorDate);
				}


	}
	
	
}


function validatePassword(e)
{

	// check if there is at least one digit in the password
	let myPasswordDigit = /\d/;
	
	let myPassword = e.value;
	let errorLog = document.getElementById("errors");
	
	let isErrorLenPassword = document.getElementById("errorPasswordLen");
	let isPasswordDigit = document.getElementById("digitError");

		if(myPassword.length < 8) // check if the password is at least 8 characters long
		{
		
			let isStar = document.getElementById("passwordStar");
				e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add error star
							let star = document.createElement("span");
							star.id="passwordStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}


					if(isErrorLenPassword === null)
					{
						// add  password to short error 
					   let passwordLenError = document.createElement("span");
							passwordLenError.id="errorPasswordLen";
							passwordLenError.className="errorInfo";
							passwordLenError.innerText=" Hasło jest za krótkie (musi liczyć co najmniej 8 znaków)";
							errorLog.appendChild(passwordLenError);
					}
				
		}
		else
		{
	
					let errorPasswordLen = document.getElementById("errorPasswordLen");
					if( errorPasswordLen !== null)
						{
							// remove password to short error information
							errorPasswordLen.remove();
							mySend();
						}
			
			

			
		}
		
		
		if(myPassword.match(myPasswordDigit) )
		{
				// delete password without digit error  
			let passwordDigitError = document.getElementById("digitError");
					if( passwordDigitError !== null)
						{
							passwordDigitError.remove();
							mySend();
						}
		}
		else
		{
				let isStar = document.getElementById("passwordStar");
				e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add error star to input
							let star = document.createElement("span");
							star.id="passwordStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}
					
					if(isPasswordDigit === null)
					{
						// add password without digit error information 
						
					   let PasswordDigitError = document.createElement("span");
							PasswordDigitError.id="digitError";
							PasswordDigitError.className="errorInfo";
							PasswordDigitError.innerText=" Hasło musi zawierać minumum jedną cyfrę";
							errorLog.appendChild(PasswordDigitError);
					}

			
		}
		
		if(myPassword.match(myPasswordDigit) && myPassword.length >= 8)
		{
			// delete error star and red border
			let star = document.getElementById("passwordStar");
					e.style.borderColor="";
					if( star !== null)
					{	
						
						star.remove();
			
					}
			
		}
		
		
		
	
	
}

function validatePasswordRep(e)
{
	let truePassword = document.getElementById("passwordId");
	let repeatPassword = e.value;
	
	let errorLog = document.getElementById("errors");
	let isErrorPassRep = document.getElementById("errorRepPassword");
	
	
	
	if( repeatPassword == truePassword.value) // check if passwords are the same 
	{
		
		let star = document.getElementById("repPasswordStar");
					e.style.borderColor="";
					// remove red border color
					if( star !== null)
					{	
						// remove error star 
						star.remove();
			
					}
					
					let errorPassRep = document.getElementById("errorRepPassword");
					if( errorPassRep !== null)
						{
							errorPassRep.remove();
							mySend();
						}
		
		
		
	}
	else
	{
		let isStar = document.getElementById("repPasswordStar");
				e.style.borderColor="red";
					
					if(isStar === null)
					{						
							// add error star
							let star = document.createElement("span");
							star.id="repPasswordStar";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}


					if(isErrorPassRep === null)
					{
						// add error information
					   let ErrorPassRep  = document.createElement("span");
							ErrorPassRep .id="errorRepPassword";
							ErrorPassRep .className="errorInfo";
							ErrorPassRep .innerText=" Hasła nie są takie same";
							errorLog.appendChild(ErrorPassRep );
					}
		
		
	}
	
	
	
	
}

function validateDescription(e)
{
		let myDescription = e.value;
		let errorLog = document.getElementById("errors");
		let isErrorDescription  = document.getElementById("errorDescription ");
		
		if(myDescription.length <=20) // check if the description has less than 21 characters
		{
		let star = document.getElementById("descriptionStar");
					e.style.borderColor="";
					// remove red border color
					if( star !== null)
					{	
						// remove red star if exist
						star.remove();
			
					}
					
					let errorDescription = document.getElementById("errorDescription");
					if( errorDescription !== null)
						{
							// remove error information
							errorDescription.remove();
							mySend();
						}
		
			
		}
		else
		{
				let isStarDescription = document.getElementById("descriptionStar");
				e.style.borderColor="red";
					
					if(isStarDescription === null)
					{						
							// add error star
							let star = document.createElement("span");
							star.id="descriptionStar ";
							star.innerText=" * ";
							e.parentNode.appendChild(star);
					}


					if(isErrorDescription  === null)
					{
						//add error information
					   let errorDescription = document.createElement("span");
							errorDescription.id="errorDescription";
							errorDescription.className="errorInfo";
							errorDescription.innerText=" Przekroczono dopuszczalną długość opisu (20 znaków)";
							errorLog.appendChild(errorDescription);
					}
		}
	
	
	
}












