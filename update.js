function render_header(image, name, profession, content){
    //containers
    var form = document.createElement("form");
    var imageDiv = document.createElement("div");
    var headerDiv = document.createElement("div");

    //content
    var imageContent = document.createElement("img");
    var nameContent = document.createElement("h1");
    var professionContent = document.createElement("h2");
    var aboutContent = document.createElement("p");

    //form content
    var nameLabel = document.createElement("label");
    var jobLabel = document.createElement("label");
    var aboutLabel = document.createElement("label");
    var imageLabel = document.createElement("label");
    var nameInput = document.createElement("input");
    var jobInput = document.createElement("input");
    var aboutInput = document.createElement("textarea");
    var imageInput = document.createElement("input");
    var submitButton = document.createElement("div");

    nameLabel.setAttribute("for","nameInput");
    nameLabel.innerHTML = "Name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "nameInput");
    nameInput.setAttribute("name", "name");
    nameInput.value = name;
    jobLabel.setAttribute("for", "jobInput");
    jobLabel.innerHTML = "Profession"
    jobInput.setAttribute("type", "text");
    jobInput.setAttribute("id", "jobInput");
    jobInput.setAttribute("name", "profession");
    jobInput.value = profession;
    aboutLabel.setAttribute("for", "aboutInput");
    aboutLabel.innerHTML = "About Me";
    aboutInput.setAttribute("id", "aboutInput");
    aboutInput.setAttribute("name", "aboutMe");
    aboutInput.setAttribute("rows", "14");
    aboutInput.setAttribute("cols", "100");
    aboutInput.value = content;
    imageLabel.setAttribute("for","imageFaceInput");
    imageLabel.innerHTML = "Image URL";
    imageInput.setAttribute("type", "text");
    imageInput.setAttribute("id", "imageFaceInput");
    imageInput.setAttribute("name", "link");
    submitButton.innerHTML = "Save"
    submitButton.setAttribute("id", "headerSubmitButton");
    submitButton.setAttribute("onclick", "updateHeader()");

    nameInput.className = "header input name";
    jobInput.className = "header input job";
    aboutInput.className = "header input about";

    imageDiv.className = "imgSource";
    headerDiv.className = "headers";
    
    nameContent.className = "name";
    professionContent.className = "profession";
    aboutContent.className = "content";

    imageContent.setAttribute("src", image);
    imageContent.setAttribute("alt", "BioPic");

    nameContent.innerHTML = name;
    professionContent.innerHTML = profession;
    aboutContent.innerHTML = content;

    imageDiv.appendChild(imageContent);

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(jobLabel);
    form.appendChild(jobInput);
    form.appendChild(aboutLabel);
    form.appendChild(aboutInput);
    form.appendChild(imageLabel);
    form.appendChild(imageInput);
    form.appendChild(submitButton);

    headerDiv.appendChild(form)

    document.getElementById("headerContainer").appendChild(imageDiv);
    document.getElementById("headerContainer").appendChild(headerDiv);
}

function render_education(id, image, name, course, yearStart, yearEnd){
    //containers
    var educationContainerDiv = document.createElement("div");
    var educationImageDiv = document.createElement("div");
    var removeButtonDiv = document.createElement("div");

    //content
    var educationImageContent = document.createElement("img");
    var educationContent = document.createElement("h2");
    var educationContentString = name + " || " + course + " || " + yearStart + "-" + yearEnd;
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";

    educationContainerDiv.className = "education container";
    educationImageDiv.className = "education image";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeEducationButton");
    removeButtonDiv.onclick = function(){
        deleteEducation(id);
    }
    educationContent.className = "education title";

    educationImageContent.setAttribute("src", image);
    educationContent.innerHTML = educationContentString;

    removeButtonDiv.appendChild(removeButtonSymbol);
    educationImageDiv.appendChild(educationImageContent);
    educationContainerDiv.appendChild(educationImageDiv);
    educationContainerDiv.appendChild(educationContent);
    educationContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Education").appendChild(educationContainerDiv);
}

function render_organizations(id, image, title, yearStart){
    //containers
    var orgContainerDiv = document.createElement("div");
    var orgImageDiv = document.createElement("div");

    //content
    var orgImageContent = document.createElement("img");
    var orgContent = document.createElement("h2");
    var orgContentString = title + " || Since " + yearStart;

    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeOrgButton");
    removeButtonDiv.onclick = function(){
        deleteOrg(id);
    }
    
    orgContainerDiv.className = "organizations container";
    orgImageDiv.className = "organizations image";
    orgContent.className = "organizations title";
    
    orgImageContent.setAttribute("src", image);
    orgContent.innerHTML = orgContentString;
    
    removeButtonDiv.appendChild(removeButtonSymbol);
    orgImageDiv.appendChild(orgImageContent);
    orgContainerDiv.appendChild(orgImageDiv);
    orgContainerDiv.appendChild(orgContent);
    orgContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Organizations").appendChild(orgContainerDiv);
}

function render_works(id, image){
        var worksImageDiv = document.createElement("div");
        var divOverlay = document.createElement("div");
        divOverlay.className ="works overlay";
        worksImageDiv.className = "works container image";
        var worksImageContent = document.createElement("img");
        worksImageContent.setAttribute("src", image);
        worksImageDiv.appendChild(worksImageContent);
        worksImageDiv.onclick= function(){
            deleteWork(id);
        }
        document.getElementById("Works").appendChild(worksImageDiv);
}

function render_skills(id,image,title,level,yearStart){
    //containers
    var skillsContainerDiv = document.createElement("div");
    var skillsImageDiv = document.createElement("div");

    //content
    var skillsImageContent = document.createElement("img");
    var skillsContent = document.createElement("h2");
    var skillsContentString = title + " || " + level + " || Since " + yearStart;

    skillsContainerDiv.className = "skills container";
    skillsImageDiv.className = "skills image";
    skillsContent.className = "skills title";
    
    skillsImageContent.setAttribute("src", image);
    skillsContent.innerHTML = skillsContentString;
    
    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeSkillButton");
    removeButtonDiv.onclick = function(){
        deleteSkill(id);
    }
    removeButtonDiv.appendChild(removeButtonSymbol);

    skillsImageDiv.appendChild(skillsImageContent);
    skillsContainerDiv.appendChild(skillsImageDiv);
    skillsContainerDiv.appendChild(skillsContent);
    skillsContainerDiv.appendChild(removeButtonDiv);

    document.getElementById("Skills").appendChild(skillsContainerDiv);
}

function render_experience(id, image, job, title, yearStart, yearEnd){
    //containers
    var experienceContainerDiv = document.createElement("div");
    var experienceImageDiv = document.createElement("div");
    var titleJobDiv = document.createElement("div");


    //content
    var experienceImageContent = document.createElement("img");
    var experienceJobContent = document.createElement("h2");
    var experienceTitleContent = document.createElement("h3");
    var experienceTitleContentString = title + " / " + yearStart + " - " + yearEnd;


    experienceContainerDiv.className = "experience container";
    experienceImageContent.className = "experience image";
    experienceJobContent.className = "experience job";
    experienceTitleContent.className = "experience title";

    titleJobDiv.className = "experience TitleJobDiv";

    experienceImageContent.setAttribute("src", image);
    experienceJobContent.innerHTML = job;
    experienceTitleContent.innerHTML = experienceTitleContentString;

    var removeButtonDiv = document.createElement("div");
    var removeButtonSymbol = document.createElement("span");
    removeButtonSymbol.innerHTML = "-";
    removeButtonDiv.className = "removeButton";
    removeButtonDiv.setAttribute("id", "removeExpButton");
    removeButtonDiv.onclick = function(){
        deleteExp(id);
    }
    removeButtonDiv.appendChild(removeButtonSymbol);

    experienceImageDiv.appendChild(experienceImageContent);
 
    
    experienceContainerDiv.appendChild(experienceImageDiv);
    titleJobDiv.appendChild(experienceJobContent);
    titleJobDiv.appendChild(experienceTitleContent);
    titleJobDiv.appendChild(removeButtonDiv)
    experienceContainerDiv.appendChild(titleJobDiv)


    document.getElementById("experiences").appendChild(experienceContainerDiv);
}


function render_links(db){
    /* var db = firebase.firestore(); */

    var linkRef = db.collection("Logos").doc("links");

    var githublink = document.getElementById("githubinput");
    var twitterlink = document.getElementById("twitterinput");
    var iglink = document.getElementById("instagraminput");
    var linkedinlink = document.getElementById("linkedininput");
    var youtubelink = document.getElementById("youtubeinput");

    var githubbtn = document.getElementById("githubadd");
    var twitterbtn = document.getElementById("twitteradd");
    var igbtn = document.getElementById("instagramadd");
    var linkedinbtn = document.getElementById("linkedinadd");
    var ytbtn = document.getElementById("youtubeadd");

    githubbtn.addEventListener("click", (Event) => {
        linkRef.update({
            github: githublink.value,
        })
        .then(function() {
            location.reload();
            console.log("updated");
        });
    });

    twitterbtn.addEventListener("click", (Event) => {
        linkRef.update({
            twitter: twitterlink.value,
        })
        .then(function() {
            location.reload();
        });
    });

    igbtn.addEventListener("click", (Event) => {
        linkRef.update({
            ig: iglink.value,
        })
        .then(function() {
            location.reload();
        });
    });

    linkedinbtn.addEventListener("click", (Event) => {
        linkRef.update({
            linkedin: linkedinlink.value,
        })
        .then(function() {
            location.reload();
        });
    });

    ytbtn.addEventListener("click", (Event) => {
        linkRef.update({
            yt: youtubelink.value,
        })
        .then(function() {
            location.reload();
            console.log("updated");
        });
    });

}


/* render_links(); */
