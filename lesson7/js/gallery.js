let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootbargin: '0px 0px 50px 0px'
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        }, imgOptions);
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    } else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

let today = new Date();
localStorage.setItem('lastVisit', new Date());
let lastVisit = localStorage.getItem('lastVisit')
let result;

function visitedLast() {
    let oneDay = 1000 * 60 * 60 * 24;
    let dateTime = today.getTime() - lastVisit.getTime();
    result = Math.round(dateTime / oneDay);
    document.getElementById("visitDate").innerHTML = `It has been ${result} days since your last visit.`;

    localStorage.removeItem('lastVisit');
    localStorage.clear('lastVisit');
    lastVisit = localStorage.setItem('lastVisit', new Date());
}

if(lastVisit == today) {
    result = "This is your first time visiting!";
    document.getElementById('visitDate').innerHTML = result;
} else {
    visitedLast()
}
