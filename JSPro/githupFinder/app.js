// init gethub 
const gitHub = new Github; 
const ui = new UI; 

// Search Input

const searchUser = document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup' ,  (e) => {
    //Get Input text

    const userText = e.target.value; 
    if (userText !== '') {
        // Make htpp call 
        gitHub.getUser(userText)
        .then( data => {
            if(data.profile.message === 'Not Found') {
                // show alert 
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show the profile 
                ui.showProfile(data.profile); 
                ui.showRepos(data.repos); 
            }
        })

    } else {
        // clear profile 
        ui.clearProfile();
    }
});