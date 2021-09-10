import { onNavigate } from '../main.js';

// On the route home we insert the html elements which be shown in the DOM
export const Register = () => {
  const HomeDiv = document.createElement('div');
  const homeBox = document.createElement('div');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirmPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonRegisterGoogle = document.createElement('button');
  const buttonRegisterGithub = document.createElement('button');
  const linkLogin = document.createElement('a');
  // Assign classNames to the elements so we can manipulate it with css
  HomeDiv.className = 'home';
  homeBox.className = 'home_box';
  buttonRegister.className = 'login_style';
  // Naming the elements
  inputName.placeholder = 'Nombre';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Constraseña';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  buttonRegister.textContent = 'Registrar';
  buttonRegisterGoogle.textContent = 'Regístrate con Google';
  buttonRegisterGithub.textContent = 'Regístrate con GitHub';
  linkLogin.textContent = '¿Ya tienes cuenta? Ingresa';
  linkLogin.href = '#';
  // Inserting the elements into the HomeDiv
  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputEmail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(inputConfirmPassword);
  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonRegisterGoogle);
  HomeDiv.appendChild(buttonRegisterGithub);
  HomeDiv.appendChild(linkLogin);
  // Adding the events to the buttons and links
  buttonRegister.addEventListener('click', () => onNavigate('/'));
  buttonRegisterGoogle.addEventListener('click', () => onNavigate('/'));
  buttonRegisterGithub.addEventListener('click', () => onNavigate('/'));
  linkLogin.addEventListener('click', () => onNavigate('/'));

  return HomeDiv;
};
