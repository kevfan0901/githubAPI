const url = document.querySelector("#url");
const desc = document.querySelector("#desc");
const Username = document.querySelector("#name");



const fetchMe = async () => {
    const api_call = await fetch (`https://api.github.com/users/kevfan0901/repos`);
    const data = await api_call.json();
    // console.log(data);
    return { data }
};

const showData = () => {
    fetchMe().then((res) => {
    // console.log(res);
    for (let i=0; i<res.data.length; i++){
        Username.innerHTML += `<span>作品名稱:${res.data[i].name}</span>` + '<br>';
        desc.innerHTML += `<span>作品敘述: ${res.data[i].description}</span>`+ '<br>';
        url.innerHTML += `<a href=${res.data[i].html_url}>作品${i+1}</a><br>`;
    }
    })
    
}

var pikachu = document.getElementById('pikachu');
var realBanana = document.getElementById('realBanana');
//change the pikakaka
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 720) {
        pikachu.childNodes[1].src = 'pikachu_smile.png';
        realBanana.style.position = 'fixed';
        realBanana.style.bottom = '15%';
    } else {
        pikachu.childNodes[1].src = 'pikachu.png';
        realBanana.style.position = '';
        realBanana.style.bottom = '';
    }
}, false)


window.addEventListener('load', showData );