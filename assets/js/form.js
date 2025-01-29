// TODO: Create a variable that selects the form element
document.addEventListener('DOMContentLoaded', function() {
    const submit = document.querySelector('#submit');
    
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const grabForm = function(event) {
    event.preventDefault()
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content =  document.getElementById('content').value;
    const newBlogPost = {username: username,title: title,content: content};
    localStorage.setItem('blogPosts',JSON.stringify(newBlogPost))
    storeLocalStorage(newBlogPost)
    if (username && title && content) {
        redirectPage('Blog.html')
    } else {
        document.getElementById('error').textContent = 'Please make sure all fields are filled out';
    }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
    submit.addEventListener('click',grabForm)
});


