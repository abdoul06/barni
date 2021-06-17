const data = [
    {
        name: 'John Doe',
        age: 32, 
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA', 
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    
    {
        name: 'Jen Smith',
        age: 25, 
        gender: 'female',
        lookingfor: 'male',
        location: 'Halifax Na', 
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Abdi Osman',
        age: 24, 
        gender: 'male',
        lookingfor: 'female',
        location: 'Hargeis So', 
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    }

];

const profiles = profileIterator(data);

//call first profile 

nextProfile();

// Next event

document.getElementById('next').addEventListener('click', nextProfile)

function nextProfile() {
    const currentProfile = profiles.next().value; 
    console.log(currentProfile);
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">name: ${currentProfile.name}
            </li>
            <li class="list-group-item">Age: ${currentProfile.age}
            </li>
            <li class="list-group-item">Location: ${currentProfile.location}
            </li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}
            </li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}"></img>
    `;
    } else {
        // No more profiles
        window.location.reload();
    }
    
}

// Profile Iterarator 

function profileIterator(profile) {
    let nextIndex = 0; 
    return { 
        next: function() {
            return nextIndex < profile.length ?
            {value: profile[nextIndex++], done: false} :
            {done: true}
        }
    };
}


