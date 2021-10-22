const linksSocialMedia = {
    github: "kovuzera",
    youtube: "channel/UC_7a6omWFYW-0IrVzEgIAkQ",
    facebook: "giovannea.marrone.marrone",
    instagram: "marrone_gio",
    twitter: "kovugod",
  };

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute("class");

      li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
    }
  }

  changeSocialMediaLinks();

  function getGitHubProfileInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then(response => response.json()).then(data => {
      userName.textContent = data.name,
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  }

  getGitHubProfileInfo()