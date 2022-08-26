let tabs = document.querySelectorAll('.tabs li a');

function tabHash(){
    let hash = window.location.hash;
    //Lorsque l'on recharge la page recupérer le tag dans l'url
    //enlever la class active au li et à la div actuel
    document.querySelector('.tabs li.active').classList.remove('active');
    document.querySelector('.tab-content.active').classList.remove('active');

    //ajouter au bon li la class active
    document.querySelector(`.tabs li a[href='${hash}']`).parentNode.classList.add('active')
    
    //ajouter à la bonne div la class active
    document.querySelector(`${hash}`).classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', function(e){
        let div = e.target.parentNode.parentNode.parentNode;
        let ul = e.target.parentNode.parentNode;
        let li = e.target.parentNode;
        let href = e.target.getAttribute('href');
        //enlever la class active au li actuel
        ul.querySelector('li.active').classList.remove('active');
        //enlever la class active à la div actuel
        div.querySelector('.tab-content.active').classList.remove('active');
        //ajouter au li cliqué la class active
        li.classList.add('active');
        //ajouter à la div souhaité la class active
        div.querySelector(`${href}`).classList.add('active');

    })
})

if(window.location.hash != ''){
    tabHash();
}

window.addEventListener('hashchange', tabHash)