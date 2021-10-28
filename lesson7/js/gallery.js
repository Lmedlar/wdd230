let imgload = document.querySelectorAll("img[data-src]");

let imgOptions = {
    threshold: 0,
    rootbargin: '0px 0px 50px 0px'
};

const loadImg = (image) => {
    image.setAttribute('src', image.getAttribute('data-src-'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((items, obs) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImg(item.target);
                obs.unobserve(item.target);
            }
        }, imgOptions);
    });
    imgload.forEach((img) => {
        obs.observe(img);
    });
}else {
    imgload.forEach((img) => {
        loadImg(img);
    });
}
