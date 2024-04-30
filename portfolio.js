function expandAbout() {
    var text = document.getElementById("about");
    var headers = document.getElementsByClassName("header");
    var sibling = text.nextElementSibling;
    var paragraph = document.getElementById('info');
    
    var isExpanded = text.getAttribute('data-expanded') === 'true';
    
    if (!isExpanded) {
        sibling.style.opacity = "0";
        headers[0].style.opacity = "0";
        headers[1].style.opacity = "0";
        text.style.top = "-107px";
        paragraph.innerHTML = `Located in Helsinki, I am an art graduate turning web developer. 
        With over a decade of artistic experience, I now seek to craft immersive digital 
        experiences that captivate and inspire.`;
        paragraph.style.opacity = "1";    
        paragraph.style.top = "-200px";
        paragraph.style.transition = "all 1s ease-out 0s";
        document.getElementById('instagram').style.opacity = "0";
        
        text.setAttribute('data-expanded', 'true');
    } else {
        sibling.style.opacity = "1";
        headers[0].style.opacity = "1";
        headers[1].style.opacity = "1";
        text.style.top = "0px";
        paragraph.style.opacity = "0";    
        paragraph.style.top = "0px";
        document.getElementById('instagram').style.opacity = "1";
        
        text.setAttribute('data-expanded', 'false');
    }
}

function expandContact() {
    var text = document.getElementById("contact");
    var headers = document.getElementsByClassName("header");
    var sibling = text.previousElementSibling;
    var paragraph = document.getElementById('info');
    
    var isExpanded = text.getAttribute('data-expanded') === 'true';
    
    if (!isExpanded) {
        sibling.style.opacity = "0";
        headers[0].style.opacity = "0";
        headers[1].style.opacity = "0";
        text.style.top = "-153px";
        paragraph.innerHTML = `email me at:\n athina.kantis@gmail.com`;
        paragraph.style.transition = "all 1s ease-out 0s";
        paragraph.style.opacity = "1";    
        paragraph.style.top = "-200px";
        document.getElementById('instagram').style.opacity = "0";
        
        text.setAttribute('data-expanded', 'true');
    } else {
        sibling.style.opacity = "1";
        headers[0].style.opacity = "1";
        headers[1].style.opacity = "1";
        text.style.top = "0px";
        paragraph.style.opacity = "0";    
        paragraph.style.top = "0px";
        document.getElementById('instagram').style.opacity = "1";
        
        text.setAttribute('data-expanded', 'false');
    }
}


function display(image, thumbnail, caption){
    if (window.matchMedia('(min-width: 751px)').matches) {
        var paragraphcontainer = document.getElementById('caption');
        var container = document.getElementsByClassName('spotlight');
        var frame = document.getElementById("spotlight");
        var thumbnail = document.getElementById(thumbnail);
        frame.src = image;
        thumbnail.style.opacity = "0";
        container[0].style.zIndex = "5";
        frame.style.opacity = "1";
        container[0].style.transition = "all 0s";
        paragraphcontainer.innerHTML = caption;
        paragraphcontainer.style.opacity = "0.75";

        frame.addEventListener('click', function() {
            thumbnail.style.opacity = "1";
            container[0].style.zIndex = "0";
            frame.style.opacity = "0";
            container[0].style.transition = "all 1.2s";
            paragraphcontainer.style.opacity = "0";
        });
    }
}
