// function clearForm()
// {
// firstNameInput.value = "";
// lastNameInput.value = "";
// emailInput.value = "";
// ageInput.value = "";
// passwordInput.value = "";
// firstNameInput.classList.remove('is-valid');
// lastNameInput.classList.remove('is-valid');
// emailInput.classList.remove('is-valid');
// ageInput.classList.remove('is-valid');
// passwordInput.classList.remove('is-valid');

// }

// function removerRegisterForm()
// {
//     firstNameInput.classList.add('d-none');
//     lastNameInput.classList.add('d-none');
//     ageInput.classList.add('d-none');
//     submitBtn.classList.add('d-none');
//     loginBtn.classList.replace('d-none' , 'd-block');
//     formTitle.innerHTML = "log in to your account  "
// }


// function validateFirstName()
// {
// if(firstNameInput.value!="")
// {
//   let Regex = /^[A-Z][a-z]{3,8}/ ;
//   if(Regex.test(user['first_name']) == true)
//   {
//     firstNameInput.classList.remove('is-invalid');
//     firstNameInput.classList.add('is-valid');
//     firstNameError.innerHTML = "" ;
//     firstNameError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//     firstNameInput.classList.remove('is-valid');
//     firstNameInput.classList.add('is-invalid');
//     firstNameError.innerHTML = "invalid Name " ;
//     firstNameError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   firstNameInput.classList.add('is-invalid');
//   firstNameError.innerHTML = "First Name is Required" ;
//   firstNameError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validateLastName()
// {
// if(lastNameInput.value!="")
// {
//   let Regex = /^[A-Z][a-z]{3,8}/ ;
//   if(Regex.test(user['last_name']) == true)
//   {
//     lastNameInput.classList.remove('is-invalid');
//     lastNameInput.classList.add('is-valid');
//     lastNameError.innerHTML = "" ;
//     lastNameError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//     lastNameInput.classList.remove('is-valid');
//     lastNameInput.classList.add('is-invalid');
//     lastNameError.innerHTML = "invalid Name " ;
//     lastNameError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   lastNameInput.classList.add('is-invalid');
//   lastNameError.innerHTML = "Last Name is Required" ;
//   lastNameError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validateEmail()
// {
// if(emailInput.value!="")
// {
//   let Regex = /^[\w]*@[a-zA-Z]*\.com$/ ;
//   if(Regex.test(user['email']) == true)
//   {
//    emailInput.classList.remove('is-invalid');
//    emailInput.classList.add('is-valid');
//     emailError.innerHTML = "" ;
//     emailError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//    emailInput.classList.remove('is-valid');
//    emailInput.classList.add('is-invalid');
//     emailError.innerHTML = "invalid Email " ;
//     emailError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   emailInput.classList.add('is-invalid');
//   emailError.innerHTML = "Email is Required" ;
//   emailError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validateloginEmail()
// {
// if(loginEmailInput.value!="")
// {
//   let Regex = /^[\w]*@[a-zA-Z]*\.com$/ ;
//   if(Regex.test(user['email']) == true)
//   {
//     loginEmailInput.classList.remove('is-invalid');
//     loginEmailInput.classList.add('is-valid');
//     loginEmailError.innerHTML = "" ;
//     loginEmailError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//    loginEmailInput.classList.remove('is-valid');
//    loginEmailInput.classList.add('is-invalid');
//     loginEmailError.innerHTML = "invalid Email " ;
//     loginEmailError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   loginEmailInput.classList.add('is-invalid');
//   loginEmailError.innerHTML = "Email is Required" ;
//   loginEmailError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validateAge()
// {
// if(ageInput.value!="")
// {
//   let Regex = /([1-7][0-9]|80)$/ ;
//   if(Regex.test(user['age']) == true)
//   {
//     ageInput.classList.remove('is-invalid');
//     ageInput.classList.add('is-valid');
//     ageError.innerHTML = "" ;
//     ageError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//     ageInput.classList.remove('is-valid');
//     ageInput.classList.add('is-invalid');
//     ageError.innerHTML = "invalid Age " ;
//     ageError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   ageInput.classList.add('is-invalid');
//   ageError.innerHTML = "Age is Required" ;
//   ageError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validatePassword()
// {
// if(passwordInput.value!="")
// {
//   let Regex = /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/;
//   if(Regex.test(user['password']) == true)
//   {
//    passwordInput.classList.remove('is-invalid');
//    passwordInput.classList.add('is-valid');
//     passwordError.innerHTML = "" ;
//     passwordError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//    passwordInput.classList.remove('is-valid');
//    passwordInput.classList.add('is-invalid');
//     passwordError.innerHTML = "invalid Password" ;
//     passwordError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   passwordInput.classList.add('is-invalid');
//   passwordError.innerHTML = "Password is Required" ;
//   passwordError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }
// function validateloginPassword()
// {
// if(loginPasswordInput.value!="")
// {
//   let Regex = /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/;
//   if(Regex.test(user['password']) == true)
//   {
//    loginPasswordInput.classList.remove('is-invalid');
//    loginPasswordInput.classList.add('is-valid');
//     loginPasswordError.innerHTML = "" ;
//     loginPasswordError.classList.replace('d-block' , 'd-none' );
//     return true ;
 
//   }
//   else
//   {
//    loginPasswordInput.classList.remove('is-valid');
//    loginPasswordInput.classList.add('is-invalid');
//    loginPasswordError.innerHTML = "invalid Password" ;
//    loginPasswordError.classList.replace('d-none' , 'd-block');
//     return false;
//   }

// }
// else
// {
//   loginPasswordInput.classList.add('is-invalid');
//   loginPasswordError.innerHTML = "Password is Required" ;
//   loginPasswordError.classList.replace('d-none' , 'd-block');
//   return "empty" ;

// }
// }

// async function submitForm(e) {
//   e.preventDefault();
  
//   const validations = [
//     { input: firstNameInput, regex: /^[A-Z][a-z]{3,8}/, error: firstNameError, message: "Invalid Name" },
//     { input: lastNameInput, regex: /^[A-Z][a-z]{3,8}/, error: lastNameError, message: "Invalid Name" },
//     { input: emailInput, regex: /^[\w]*@[a-zA-Z]*\.com$/, error: emailError, message: "Invalid Email" },
//     { input: ageInput, regex: /([1-7][0-9]|80)$/, error: ageError, message: "Invalid Age" },
//     { input: passwordInput, regex: /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, error: passwordError, message: "Invalid Password" }
//   ];
  
//   if (validations.every(({ input, regex, error, message }) => validateInput(input.value, regex, error, input, message))) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     };
  
//     const response = await fetch('https://sticky-note-fe.vercel.app/signup', options);
//     const finalresponse = await response.json();
    
//     if (finalresponse.message === "success") {
//       register.classList.replace('d-block', 'd-none');
//       login.classList.replace('d-none', 'd-block');
//     } else {
//       emailInput.classList.add('is-invalid');
//       emailError.innerHTML = finalresponse.message;
//       emailError.classList.replace('d-none', 'd-block');
//     }
//   }
// }

// async function loginForm(e)
// {
// e.preventDefault();
// if(validateInput(loginEmailInput.value, /^[\w]*@[a-zA-Z]*\.com$/, loginEmailError, loginEmailInput, "Invalid Email")&validateInput(loginPasswordInput.value, /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, loginPasswordError, loginPasswordInput, "Invalid Password"))
// {
// //  let response = await fetch(`https://sticky-note-fe.vercel.app/signup
// //  `,user);
// //  console.log(response);

// let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(user)
// };

// let response = await fetch('https://sticky-note-fe.vercel.app/signin', options);
// let finalresponse = await response.json();
// if(await finalresponse.message == "success")
// {
//     localStorage.setItem('userToken' , finalresponse.token)
 
//   login.classList.replace('d-block' , 'd-none');
//   home.classList.replace('d-none' , 'd-block');
//   homeUl.classList.replace('d-none' , 'd-flex');
//   logoutLink.classList.replace('d-none' , 'd-block');
//   loginLink.classList.add('d-none');
//   registerLink.classList.add('d-none');
//   getGames('All');

  
 
// }
// else
// {
//     if(finalresponse.message.includes('email'))
//     {
//         loginEmailInput.classList.add('is-invalid');
//         loginEmailError.innerHTML = finalresponse.message ;
//         loginEmailError.classList.replace('d-none' , 'd-block');
//     }
//     else
//     {
//         loginPasswordInput.classList.add('is-invalid');
//         loginPasswordError.innerHTML = finalresponse.message ;
//         loginPasswordError.classList.replace('d-none' , 'd-block');
//     }
 

// }



// }
// }

///////////////////////////

// async function submitForm(e) {
//   e.preventDefault();
  
//   const validations = [
//     { input: firstNameInput, regex: /^[A-Z][a-z]{3,8}/, error: firstNameError, message: "Invalid Name" },
//     { input: lastNameInput, regex: /^[A-Z][a-z]{3,8}/, error: lastNameError, message: "Invalid Name" },
//     { input: emailInput, regex: /^[\w]*@[a-zA-Z]*\.com$/, error: emailError, message: "Invalid Email" },
//     { input: ageInput, regex: /([1-7][0-9]|80)$/, error: ageError, message: "Invalid Age" },
//     { input: passwordInput, regex: /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, error: passwordError, message: "Invalid Password" }
//   ];
  
//   if (validations.every(({ input, regex, error, message }) => validateInput(input.value, regex, error, input, message))) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     };
  
//     const response = await fetch('https://sticky-note-fe.vercel.app/signup', options);
//     const finalresponse = await response.json();
    
//     if (finalresponse.message === "success") {
//       register.classList.replace('d-block', 'd-none');
//       login.classList.replace('d-none', 'd-block');
//     } else {
//       emailInput.classList.add('is-invalid');
//       emailError.innerHTML = finalresponse.message;
//       emailError.classList.replace('d-none', 'd-block');
//     }
//   }
// }

// async function loginForm(e)
// {
// e.preventDefault();
// if(validateInput(loginEmailInput.value, /^[\w]*@[a-zA-Z]*\.com$/, loginEmailError, loginEmailInput, "Invalid Email")&validateInput(loginPasswordInput.value, /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, loginPasswordError, loginPasswordInput, "Invalid Password"))
// {
// //  let response = await fetch(`https://sticky-note-fe.vercel.app/signup
// //  `,user);
// //  console.log(response);

// let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(user)
// };

// let response = await fetch('https://sticky-note-fe.vercel.app/signin', options);
// let finalresponse = await response.json();
// if(await finalresponse.message == "success")
// {
//     localStorage.setItem('userToken' , finalresponse.token)
 
//   login.classList.replace('d-block' , 'd-none');
//   home.classList.replace('d-none' , 'd-block');
//   homeUl.classList.replace('d-none' , 'd-flex');
//   logoutLink.classList.replace('d-none' , 'd-block');
//   loginLink.classList.add('d-none');
//   registerLink.classList.add('d-none');
//   getGames('All');

  
 
// }
// else
// {
//     if(finalresponse.message.includes('email'))
//     {
//         loginEmailInput.classList.add('is-invalid');
//         loginEmailError.innerHTML = finalresponse.message ;
//         loginEmailError.classList.replace('d-none' , 'd-block');
//     }
//     else
//     {
//         loginPasswordInput.classList.add('is-invalid');
//         loginPasswordError.innerHTML = finalresponse.message ;
//         loginPasswordError.classList.replace('d-none' , 'd-block');
//     }
 

// }



// }
// }

//////////////////////////////////////////////////////

// async function submitForm(e) {
//   e.preventDefault();
  
//   const validations = [
//     { input: firstNameInput, regex: /^[A-Z][a-z]{3,8}/, error: firstNameError, message: "Invalid Name" },
//     { input: lastNameInput, regex: /^[A-Z][a-z]{3,8}/, error: lastNameError, message: "Invalid Name" },
//     { input: emailInput, regex: /^[\w]*@[a-zA-Z]*\.com$/, error: emailError, message: "Invalid Email" },
//     { input: ageInput, regex: /([1-7][0-9]|80)$/, error: ageError, message: "Invalid Age" },
//     { input: passwordInput, regex: /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, error: passwordError, message: "Invalid Password" }
//   ];
  
//   if (validations.every(({ input, regex, error, message }) => validateInput(input.value, regex, error, input, message))) {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     };
  
//     const response = await fetch('https://sticky-note-fe.vercel.app/signup', options);
//     const finalresponse = await response.json();
    
//     if (finalresponse.message === "success") {
//       register.classList.replace('d-block', 'd-none');
//       login.classList.replace('d-none', 'd-block');
//     } else {
//       emailInput.classList.add('is-invalid');
//       emailError.innerHTML = finalresponse.message;
//       emailError.classList.replace('d-none', 'd-block');
//     }
//   }
// }

// async function loginForm(e)
// {
// e.preventDefault();
// if(validateInput(loginEmailInput.value, /^[\w]*@[a-zA-Z]*\.com$/, loginEmailError, loginEmailInput, "Invalid Email")&validateInput(loginPasswordInput.value, /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, loginPasswordError, loginPasswordInput, "Invalid Password"))
// {
// //  let response = await fetch(`https://sticky-note-fe.vercel.app/signup
// //  `,user);
// //  console.log(response);

// let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(user)
// };

// let response = await fetch('https://sticky-note-fe.vercel.app/signin', options);
// let finalresponse = await response.json();
// if(await finalresponse.message == "success")
// {
//     localStorage.setItem('userToken' , finalresponse.token)
 
//   login.classList.replace('d-block' , 'd-none');
//   home.classList.replace('d-none' , 'd-block');
//   homeUl.classList.replace('d-none' , 'd-flex');
//   logoutLink.classList.replace('d-none' , 'd-block');
//   loginLink.classList.add('d-none');
//   registerLink.classList.add('d-none');
//   getGames('All');

  
 
// }
// else
// {
//     if(finalresponse.message.includes('email'))
//     {
//         loginEmailInput.classList.add('is-invalid');
//         loginEmailError.innerHTML = finalresponse.message ;
//         loginEmailError.classList.replace('d-none' , 'd-block');
//     }
//     else
//     {
//         loginPasswordInput.classList.add('is-invalid');
//         loginPasswordError.innerHTML = finalresponse.message ;
//         loginPasswordError.classList.replace('d-none' , 'd-block');
//     }
 

// }



// }
// }