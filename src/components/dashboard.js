/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOut } from '../lib/firebase.js';
import { Posts } from '../lib/posts.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const PostsDiv = document.createElement('section');
  const MenuDiv = document.createElement('div');
  const buttonPost = document.createElement('button');
  const buttonLogout = document.createElement('button');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');

  buttonPost.className = 'wall-button';
  buttonLogout.className = 'wall-button';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';

  HomeDiv.appendChild(PostsDiv);
  HomeDiv.appendChild(MenuDiv);
  PostsDiv.appendChild(Posts());
  MenuDiv.appendChild(buttonPost);
  MenuDiv.appendChild(buttonLogout);
  buttonPost.appendChild(iconPost);
  buttonLogout.appendChild(iconLogout);

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
  });

  PostsDiv.innerHTML += `<title>${'Hola :c'}</title`;

  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/post');
  });

  return HomeDiv;
};
