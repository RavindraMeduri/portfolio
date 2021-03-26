var ele = document.querySelector('#typed');
var infoLink = document.querySelector('#info_link');
var qualificationLink = document.querySelector('#qualification_link');
var downloadcvLink = document.querySelector('#download_link');

var info_Container = document.querySelector('.info_container');
var qualification_Container = document.querySelector('.qualification_container');
var downloadcv_Container = document.querySelector('.downloadcv_container');

infoLink.addEventListener('click', function() {
    qualification_Container.style.display = 'none';
    downloadcv_Container.style.display = 'none';
    info_Container.style.display = 'block';
    //this.style.color = 'blue';
});

qualificationLink.addEventListener('click', function() {
    info_Container.style.display = 'none';
    downloadcv_Container.style.display = 'none';
    qualification_Container.style.display = 'block';
});

downloadcvLink.addEventListener('click', function() {
    info_Container.style.display = 'none';
    qualification_Container.style.display = 'none';
    downloadcv_Container.style.display = 'block';
});

// console.dir(ele.textContent);
var name = ele.textContent;
var start = "";
var end = name;

var idx = 1;
var pointer = 0;

setInterval(function() {

    if(pointer == 15 || pointer == -1) {
        idx = idx * -1;
    }
    start = end.substring(0, pointer);
    ele.textContent = start;
    pointer = pointer + idx;
}, 100);

