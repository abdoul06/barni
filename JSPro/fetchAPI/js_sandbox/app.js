document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJason);
document.getElementById('button3').addEventListener('click', getExternal);


  function getText() {
    fetch('test.txt')
    .then ( res => res.text()) 
    // .then(function(res) {
    //     return res.text();
    // })
    // .then (data =>  console.log(data))
    .then (data =>  {
        document.getElementById('output').innerHTML = data;
    })
        // .then(function(data) {        
    //     document.getElementById('output').innerHTML = data; 
    // })

    .catch( err => err)
    // .catch(function(err) {
    //     console.log(err)
    // });
}


function getJason() {
    fetch('posts.json')
    .then( res => res.json())
    .then(data => { 
        let  output = '';
        data.forEach(function(post) {
            output += `<li>${post.title} </li>`
        });
        document.getElementById('output').innerHTML = output; 
        })
        .catch( err => err)

    // .then(function(res) {
    //     return res.json();
    // })
    // .then(function(data) {
    //     // console.log(data)
    //     let output = '';
    //     data.forEach(function(post) {
    //         output += `<li>${post.title} </li>`
    //     });
    //     document.getElementById('output').innerHTML = output; 
    // })
    // .catch(function(err) {
    //     console.log(err)

    // });
}
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((data) => {
        // console.log(data)
        let output = '';
        console.log(data)
        data.forEach(function(user) {
            output += `<li>${user.login} </li>`
        });
        document.getElementById('output').innerHTML = output; 
    })
    .catch( err => err)



    // .then(function(res) {
    //     return res.json();
    // })
    // .then(function(data) {
    //     // console.log(data)
    //     let output = '';
    //     console.log(data)
    //     data.forEach(function(user) {
    //         output += `<li>${user.login} </li>`
    //     });
    //     document.getElementById('output').innerHTML = output; 
    // })
    // .catch(function(err) {
    //     console.log(err)

    // });
}