const mySocialLinks = {
   github: 'NicoFHNS',
   youtube: '',
   facebook: 'felyphenicacio',
   instagram: 'howmuchisnothing',
   twitter: 'nicothesecond'
}

// function changeName() {
//    document.getElementById('userName').textContent = 'Nico';
//    //ou
//    // userName.textContent =  'Nico'
// }
// changeName();

function changeSocialMediaLinks() {

   for (let li  of socialLinks.children) {
      const social = li.getAttribute('class')
      li.children[0].href = `https://www.${social}.com/${mySocialLinks[social]}`;

      // alert(li.children[0].href);
   }
}
changeSocialMediaLinks();


function getGithubProfileInfos() {
   const url = `https://api.github.com/users/${mySocialLinks.github}`;
   fetch(url).then(Response => Response.json())
   .then(data => {
      userName.textContent = data.name //consome o nick no github
      gitLogin.textContent = data.login //consome o nome de login do github
      // userBio.textContent = data.bio //consome a bio do github
      userURL.href = data.html_url //link para github
      profilePic.src = data.avatar_url
   })
}


getGithubProfileInfos();