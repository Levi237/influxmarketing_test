const services = [{
    "title": `Dermal Fillers`,
    "description": `Facial volume loss begins in most people once they hit their mid-30s. Don't let the loss of youthful volume dictate your appearance! Take action with our collection of Dermal Fillers, such as Restylane ® and Juvederm®. Our dermal fillers are FDA-approved to lift and add volume to wrinkles, fine lines, or enhance your lips. Experience smoother, younger-looking skin today!`,
    "link": `#`,
},{
    "title": `CoolSculpting Elite`,
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla. `,
    "link": `#`,
},{
    "title": `QWO`,
    "description": `Netus et malesuada fames ac turpis egestas. Ut sem nulla pharetra diam sit amet nisl. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Tincidunt arcu non sodales neque sodales ut etiam. Tristique magna sit amet purus gravida. Mauris ultrices eros in cursus turpis. `,
    "link": `#`,
},{
    "title": `Advanced Lasers`,
    "description": `Facilisis magna etiam tempor orci eu lobortis. Nulla facilisi etiam dignissim diam quis enim lobortis. Diam volutpat commodo sed egestas egestas fringilla phasellus. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Cras adipiscing enim eu turpis. Nullam non nisi est sit amet facilisis magna etiam tempor.`,
    "link": `#`,
},{
    "title": `Microneedling`,
    "description": `Risus feugiat in ante metus dictum. Id leo in vitae turpis. A cras semper auctor neque vitae tempus. Nisi quis eleifend quam adipiscing vitae proin. Tincidunt eget nullam non nisi est sit amet. Rhoncus est pellentesque elit ullamcorper dignissim. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Aliquet nec ullamcorper sit amet risus nullam. `,
    "link": `#`,
},{
    "title": `Botox`,
    "description": `Nulla posuere sollicitudin aliquam ultrices. Urna duis convallis convallis tellus id interdum. Nunc pulvinar sapien et ligula ullamcorper. Ut etiam sit amet nisl purus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.`,
    "link": `#`,
}];

const servicesMenu =  services.forEach((service, k) => {
    const servicesUL = document.querySelector("#home-services");
    const createLI = document.createElement("li");
        createLI.classList.add('tab');
        if(k == 0) createLI.classList.add('active');

        const createSpan = document.createElement("span");
        const createTitle = document.createTextNode(`${service.title}`);
            createSpan.appendChild(createTitle);
        createLI.appendChild(createSpan);

        const xmlns = "http://www.w3.org/2000/svg";
        const boxWidth = 18;
        const boxHeight = 10;
        const createSVG = document.createElementNS(xmlns, "svg");
            createSVG.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
            createSVG.setAttributeNS(null, "width", "100%");
            createSVG.style.display = "inline-block";
            const pathSVG = document.createElementNS(xmlns, "path");
                pathSVG.setAttributeNS(null, "d", `M12.9 1L17.4 5M17.4 5L12.9 9M17.4 5H1.40002`);
                pathSVG.setAttribute("stroke", "#000");
                pathSVG.setAttribute("stroke-width", "1.2");
                pathSVG.setAttribute("stroke-linecap","round");
                pathSVG.setAttribute("stroke-linejoin", "round");
            createSVG.appendChild(pathSVG);
        createLI.appendChild(createSVG);

    servicesUL.appendChild(createLI);
});

const serviceBox =  services.forEach((service, k) => {
    const boxParent = document.getElementById("services-info");
    const createBox = document.createElement("div");
        createBox.classList.add("box");
        if(k === 0) createBox.classList.add('active');
        const createTitle = document.createElement("h2");
            createTitle.appendChild(document.createTextNode(`${service.title}`));
        createBox.appendChild(createTitle);
        const createDescription = document.createElement("p");
            createDescription.appendChild(document.createTextNode(`${service.description}`));
        createBox.appendChild(createDescription);  

        const createLink = document.createElement("a");
            createLink.setAttribute("href", `${service.link}`);
            createLink.setAttribute("target", '_blank');
            const createSpan = document.createElement("span");
            createSpan.appendChild(document.createTextNode(`${service.title}`));
            createLink.appendChild(createSpan); 

            const xmlns = "http://www.w3.org/2000/svg";
            const boxWidth = 18;
            const boxHeight = 10;
            const createSVG = document.createElementNS(xmlns, "svg");
                createSVG.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
                createSVG.setAttributeNS(null, "width", "100%");
                createSVG.style.display = "inlin-block";
                const pathSVG = document.createElementNS(xmlns, "path");
                    pathSVG.setAttributeNS(null, "d", `M12.9 1L17.4 5M17.4 5L12.9 9M17.4 5H1.40002`);
                    pathSVG.setAttribute("stroke", "#000");
                    pathSVG.setAttribute("stroke-width", "1.2");
                    pathSVG.setAttribute("stroke-linecap","round");
                    pathSVG.setAttribute("stroke-linejoin", "round");
                createSVG.appendChild(pathSVG);

            createLink.appendChild(createSVG); 
        createBox.appendChild(createLink);  
        boxParent.appendChild(createBox);
});

const tabs = document.querySelectorAll(".tab");
const boxes = document.querySelectorAll(".box");
tabs.forEach((tab, key) => {
    tab.addEventListener('click', () => {
        tabs.forEach(thisTab => thisTab.classList.remove("active"));
        boxes.forEach((thisBox, k) => {
            thisBox.classList.remove("active");
            if (key === k) thisBox.classList.add("active");
        });
        tab.classList.add("active");
    });
});