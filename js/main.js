// variables  
let games = [];
let searchGames = [] ;
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let emailInput = document.getElementById('emailInput');
let loginEmailInput = document.getElementById('loginEmailInput');
let ageInput = document.getElementById('ageInput');
let passwordInput = document.getElementById('passwordInput');
let loginPasswordInput = document.getElementById('loginPasswordInput');
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let emailError = document.getElementById('emailError');
let loginEmailError = document.getElementById('loginEmailError');
let ageError = document.getElementById('ageError');
let passwordError = document.getElementById('passwordError');
let loginPasswordError = document.getElementById('loginPasswordError');
let submitBtn = document.getElementById('submitBtn');
let loginBtn = document.getElementById('loginBtn');
let formTitle = document.getElementById('form-title');
let register = document.getElementById('register');
let login = document.getElementById('login');
let home = document.getElementById('home');
let homeUl = document.getElementById('home-ul');
let loginLink = document.getElementById('login-link');
let logoutLink = document.getElementById('logout-link');
let registerLink = document.getElementById('register-link');
let categories = document.querySelectorAll('.nav-link');
let gameDetails = document.getElementById('game-details');
let close = document.getElementById('close');
let signin = document.getElementById('signin')
let signup = document.getElementById('signup')
let searchInput = document.getElementById('search');
let searchForm = document.getElementById('searchForm');


if(localStorage.getItem('userToken'))
{
 home.classList.replace('d-none' , 'd-block');
homeUl.classList.replace('d-none' , 'd-flex');
searchForm.classList.replace('d-none' , 'd-block');
logoutLink.classList.replace('d-none' , 'd-block');
loginLink.classList.add('d-none');
registerLink.classList.add('d-none');
getGames('All');



}
else
{
  login.classList.replace('d-none' , 'd-block');
}



let user = {
first_name:'',
last_name:'',
email:'',
age:0,
password:''

}


//Events
firstNameInput.addEventListener('input' , getUser)
lastNameInput.addEventListener('input' , getUser)
emailInput.addEventListener('input' , getUser)
loginEmailInput.addEventListener('input' , getUser)
ageInput.addEventListener('input' , getUser)
passwordInput.addEventListener('input' , getUser)
loginPasswordInput.addEventListener('input' , getUser)


submitBtn.addEventListener('click' , submitForm)
loginBtn.addEventListener('click' , loginForm)


for(let i = 0 ; i<categories.length ; i++)
{
    categories[i].addEventListener('click' , function()
    {
        getGames(categories[i].innerHTML)
    })
} 



close.addEventListener('click' , function()
{
    gameDetails.classList.replace('d-block' , 'd-none');
    home.classList.replace("d-none" , 'd-block');
})
logoutLink.addEventListener('click' , function ()
{
    localStorage.removeItem('userToken');
    login.classList.replace('d-none' , 'd-block');
    home.classList.replace('d-block','d-none' );
    homeUl.classList.replace('d-flex' ,'d-none' );
    searchForm.classList.replace('d-block' ,'d-none' );
    logoutLink.classList.replace('d-block' , 'd-none');
    loginLink.classList.replace('d-none' , 'd-block');
    registerLink.classList.replace('d-none' , 'd-block');
   
   
} )

loginLink.addEventListener('click' , function()
{
  register.classList.replace('d-block' , 'd-none');
  login.classList.replace('d-none' ,'d-block' );
})

registerLink.addEventListener('click' , function()
{
  login.classList.replace('d-block' , 'd-none');
  register.classList.replace('d-none' ,'d-block' );
})
signup.addEventListener('click' , function()
{
  login.classList.replace('d-block' , 'd-none');
  register.classList.replace('d-none' , 'd-block');
})
signin.addEventListener('click' , function()
{
  register.classList.replace('d-block' , 'd-none');
  login.classList.replace('d-none' , 'd-block');
})

searchInput.addEventListener("input" , function(e)
{
  searchGame(e.target.value);
  
})



$('.nav-link').click(function(e)
{

$(e.target).addClass('active');
 $(e.target).parent().siblings().children().removeClass('active');
})











 













//Functions 

//1- function to get user data from inputs 
function getUser(e)
{
user[e.target.name] = e.target.value ;


}

//2- function to validate user data 
function validateInput(inputValue , Regex ,errorElement , inputElement , errorMessage )
{
    if(inputValue!="")
    {
        if(Regex.test(inputValue))
        {
          inputElement.classList.remove("is-invalid");
            inputElement.classList.add("is-valid");
          
            errorElement.innerHTML = ``;
            errorElement.classList.replace( 'd-block', 'd-none');
            return true;

        }
        else
        {
          inputElement.classList.remove("is-valid");
            inputElement.classList.add("is-invalid");
           
            errorElement.innerHTML = errorMessage;
            errorElement.classList.replace('d-none' , 'd-block');
            return false
        }
        

    }
    else
    {
      inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
        
        errorElement.innerHTML = `${inputElement.placeholder} is Required`;
        errorElement.classList.replace('d-none' , 'd-block');

return "empty"
    }

}

//3-function to register user  
async function submitForm(e)
{
  submitBtn.innerHTML = ` <i class="fas fa-spinner fa-spin"></i>`
e.preventDefault();
if(validateInput(firstNameInput.value, /^[A-Z][a-z]{3,8}/, firstNameError, firstNameInput, "Enter a string with a capital letter and 3-8 lowercase letters")&
validateInput(lastNameInput.value, /^[A-Z][a-z]{3,8}/, lastNameError, lastNameInput, "Enter a string with a capital letter and 3-8 lowercase letters")&
validateInput(emailInput.value, /^[\w]*@[a-zA-Z]*\.com$/, emailError, emailInput, "Enter a valid email in the format username@example.com")&

validateInput(ageInput.value, /(^[1-7][0-9]|80)$/, ageError, ageInput, "Age should be within the range of 10 to 80")&
validateInput(passwordInput.value, /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, passwordError, passwordInput, "Password should be 8+ characters and include only letters, numbers, and symbols"))
{

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
};

let response = await fetch('https://sticky-note-fe.vercel.app/signup', options);
let finalresponse = await response.json();
if(await finalresponse.message == "success")
{
  submitBtn.innerHTML = `Create Account `;
  register.classList.replace('d-block' , 'd-none');
  login.classList.replace('d-none' , 'd-block');
  clearForm('register');
  
  
 
}
else
{
  submitBtn.innerHTML = `Create Account `;
  emailInput.classList.add('is-invalid');
  emailError.innerHTML = finalresponse.message ;
  emailError.classList.replace('d-none' , 'd-block');

}



}
else
{
  submitBtn.innerHTML = `Create Account `;
}
}

//4-function to login user 
async function loginForm(e) {
  loginBtn.innerHTML = ` <i class="fas fa-spinner fa-spin"></i>`
  e.preventDefault();
  const emailInput = loginEmailInput.value;
  const passwordInput = loginPasswordInput.value;
  const isEmailValid = validateInput(emailInput, /^[\w]*@[a-zA-Z]*\.com$/, loginEmailError, loginEmailInput, "Enter a valid email in the format username@example.com");
  const isPasswordValid = validateInput(passwordInput, /^[\w!@#$%^&*()_+=[\]{}|\\,./?^-]{8,}$/, loginPasswordError, loginPasswordInput, "Password should be 8+ characters and include only letters, numbers, and symbols");

  if (isEmailValid == true && isPasswordValid == true) {
     
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      };
      const response = await fetch('https://sticky-note-fe.vercel.app/signin', options);
      const finalresponse = await response.json();
      
      if (finalresponse.message === "success")
       {
        loginBtn.innerHTML = ` log in `;
        localStorage.setItem('userToken' , finalresponse.token);
        
        updateUIOnLoginSuccess();
        getGames('All');
        clearForm('login');
      
      } 
      else 
      {
        clearForm('login');
        loginBtn.innerHTML = ` log in `;
        handleLoginError(finalresponse.message);
      }
        
      }
      else
      {
        loginBtn.innerHTML = ` log in `;
      }
    
    } 
   
  
    


//5- function to update ui when success login 
function updateUIOnLoginSuccess() {
  login.classList.replace('d-block' , 'd-none');
  home.classList.replace('d-none' , 'd-block');
  homeUl.classList.replace('d-none' , 'd-flex');
  searchForm.classList.replace('d-none' , 'd-block');
  logoutLink.classList.replace('d-none' , 'd-block');
  loginLink.classList.add('d-none');
  registerLink.classList.add('d-none');
}

//6- function to handle login error 
function handleLoginError(message) {
  if (message.includes('email')) {
    loginEmailInput.classList.add('is-invalid');
    loginEmailError.innerHTML = message;
    loginEmailError.classList.replace('d-none' , 'd-block');
  } else {
    loginPasswordInput.classList.add('is-invalid');
    loginPasswordError.innerHTML = message;
    loginPasswordError.classList.replace('d-none' , 'd-block');
  }
}

//7 function to get games by categories
async function getGames(category="")
{
  gameDetails.classList.replace('d-block' , 'd-none');
  home.classList.replace('d-none' ,'d-block' );
  layer.classList.replace('d-none' , 'd-flex');
   
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '21d6bd4097msh9e483e2e3ec7f23p111569jsncb5c1e9df675',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      } 
    if(category=="All")
    {

    let response =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games` , options)
     games = await response.json();

// <div  class="col-md-4 col-lg-3  ">
// <div  class="game h-100 position-relative  "  game-id =${games[i].id}>
//     <img src=${games[i].thumbnail} class="w-100 rounded-1" alt="">
//     <div class="d-flex   justify-content-between p-3">
// <span>${games[i].title}</span>
// <span class="bg-primary d-flex align-items-center h-50  px-3 rounded-2">free</span>

//     </div>
//     <p class="text-muted text-center pb-3">${games[i].short_description}</p>
//     <div class="d-flex justify-content-between p-3  position-absolute bottom-0 start-0 end-0">
//         <span class="game-span ">${games[i].genre}</span>
//         <span class="game-span ">${games[i].platform}</span>
        
//                         </div>
// </div>
// </div>

// `


//   }

// document.getElementById('rowData').innerHTML = cartona ;
displayGames(games);
layer.classList.replace('d-flex' , 'd-none');

    
    }
  
    else
    {
        let response =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options)
        games = await response.json();
   
    displayGames(games);
    layer.classList.replace('d-flex' , 'd-none');
        
    }
}

//8- function to get gameDetails
function getgame() {
  const gameDevs = document.querySelectorAll('.game');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '21d6bd4097msh9e483e2e3ec7f23p111569jsncb5c1e9df675',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  gameDevs.forEach((gameDev) => {
    gameDev.addEventListener('click', async function() {
      layer.classList.replace('d-none', 'd-flex');

      const gameId = gameDev.getAttribute('game-id');
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
      const game = await response.json();

      document.getElementById('rowDetails').innerHTML = `
        <div class=" col-md-6 col-lg-4 mb-sm-3 ">
          <img src=${game.thumbnail} class="w-100 rounded-1" alt="">
        </div>
        <div class=" col-md-6  col-lg-8 ">
          <h4>Title: ${game.title}</h4>
          <ul id="game-ul">
            <li class="mb-2">
              Category:
              <span class="rounded-2 px-3 bg-link-color">${game.genre}</span>
            </li>
            <li class="mb-2">
              Platform:
              <span class="rounded-2 px-3 bg-link-color">${game.platform}</span>
            </li>
            <li class="mb-2">
              Status:
              <span class="rounded-2 px-3 bg-link-color">${game.status}</span>
            </li>
          </ul>
          <p id="game-p">${game.description}</p>
          <a class="btn bg-link-color text-white" href=${game.game_url}>show game</a>
        </div>
      `;

      home.classList.replace('d-block', 'd-none');
      gameDetails.classList.replace('d-none', 'd-block');
     layer.classList.replace('d-flex', 'd-none');
    });
  });
}

//9- function to search on games 
function searchGame(searchTerm)
{
  searchGames = [];
  for(let i = 0 ; i<games.length ; i++)
  {
    if(games[i].title.toLowerCase().includes(searchTerm.toLowerCase()))
    {
      searchGames.push(games[i])
    }
  }
  displayGames(searchGames)


}

//10-function to display games 
function displayGames(games)
{
  let cartona = ``;
  for(let i = 0 ; i< games.length ; i++)
  {
cartona+=`
<div  class="col-lg-4 col-xl-3 col-md-6  ">
<div  class="game h-100 position-relative  "  game-id =${games[i].id}>
    <img src=${games[i].thumbnail} class="w-100 rounded-1" alt="">
    <div class="d-flex   justify-content-between p-3">
<span>${games[i].title}</span>
<span class="bg-primary d-flex align-items-center h-50  px-3 rounded-2">free</span>

    </div>
    <p class="text-muted text-center pb-3">${games[i].short_description}</p>
    <div class="d-flex justify-content-between p-3  position-absolute bottom-0 start-0 end-0">
        <span class="game-span ">${games[i].genre}</span>
        <span class="game-span ">${games[i].platform}</span>
        
                        </div>
</div>
</div>

`


  }
  document.getElementById('rowData').innerHTML = cartona ;
  getgame();
}
//function to clear form
function clearForm(formType) {
  if (formType == "register") {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    passwordInput.value = "";
    firstNameInput.classList.remove('is-valid');
    lastNameInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    ageInput.classList.remove('is-valid');
    passwordInput.classList.remove('is-valid');
  }
   else if (formType == "login") {
    loginEmailInput.value = "";
    loginPasswordInput.value = "";
    loginEmailInput.classList.remove('is-valid');
    loginPasswordInput.classList.remove('is-valid');
  }
}
 

