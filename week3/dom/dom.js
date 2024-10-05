let ctr = 0;

function callBack(){
    const el = document.querySelectorAll("h4")[1];
    el.innerHTML = ctr;
    ctr++;
};

setInterval(callBack,1000);