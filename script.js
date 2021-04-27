const postParent = fetch(" https://www.reddit.com/r/aww/.json")
.then(response => response.json())

postParent.then(data => {
    const sectionElement = document.getElementById("main");
    const mainTitle = document.createElement("h1");
    mainTitle.innerText =  "AWW Subreddit";
    sectionElement.appendChild(mainTitle);
    for(let postData of data.data.children){
        //console.log(postData);
        //console.log(postData.data);

        //making the title of posts
        const titleElement = document.createElement("h3");
        titleElement.classList.add("post")
        titleElement.innerText = postData.data.title;
        sectionElement.appendChild(titleElement);
        //making the images
        const imageElement = document.createElement("img");
        imageSource = postData.data.thumbnail;
        imageElement.src= imageSource;
        sectionElement.appendChild(imageElement);
        //making the links
        const linkElement = document.createElement("a");
        linkSource = postData.data.url;
        linkElement.setAttribute("href", linkSource);
        linkElement.innerText = "click here!";
        sectionElement.appendChild(linkElement);

        
        //Blank.setAttribute(“src”, imageSource)

    }

    
    

})
   
   
        //create a section that has an id so we can grab an individual section by id
        //then we can append things with the id so it will go to that spot
        //make a for loop that will do it for each one
        //the for loop will write the inner text/grab the data/append etc.



 