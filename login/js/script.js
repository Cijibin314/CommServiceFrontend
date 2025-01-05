function setupGoogleAccess(){
    fetch('http://localhost:3000/api/getClientId')
    .then(response => response.text())
    .then(res => {
        const data = JSON.parse(res)

        const metaTag = document.createElement('meta');
        metaTag.name = 'google-signin-client_id';
        metaTag.content = data["clientId"];
        
        document.head.appendChild(metaTag);

        const scriptTag = document.createElement('script')
        scriptTag.src = "https://apis.google.com/js/platform.js"
        document.head.appendChild(scriptTag)
  })
  .catch(error => console.error('Error fetching client ID:', error));
}
setupGoogleAccess()
// function onSignIn(googleUser) {
//     const profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
// function signIn(){
//     document.getElementById("sign-in-btn").click()
// }
// document.addEventListener("DOMContentLoaded", signIn)