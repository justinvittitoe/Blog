// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const modebtn = document.querySelector('#toggle')
const submit = document.querySelector('#submit')

function intmode() {
  const mode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(mode)
}

function toggle() {
  const elements = document.querySelectorAll('.light, .dark');
  elements.forEach(element => {
    if (element.classList.contains('light')) {
      element.classList.remove('light');
      element.classList.add('dark');
    } else if (element.classList.contains('dark')) {
      element.classList.remove('dark');
      element.classList.add('light');
    }
  });
  const currentMode = document.body.classList.contains('dark');
  localStorage.setItem('mode',currentMode)
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}
modebtn.addEventListener('click',toggle)

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newBlogPost) {
  console.log(newBlogPost)
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(newBlogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}



// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

