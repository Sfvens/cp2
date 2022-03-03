
// const cheese = 'c7e7c123d117016317a353dc556638a0fa3349f8'
const url1 = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const url2 = 'https://pixabay.com/api/?key=25946226-e95fe3b8016bcfc88dd0b5064&q=';
const url2part2 = '&image_type=photo';
document.getElementById('sub').addEventListener('click', function(event) {
    event.preventDefault();
    let word=document.getElementById("usernameField").value;
    let dictUrl=url1 + word;
    let picUrl=url2 + word + url2part2;
    // fetch(url, {headers: {Authorization: 'c7e7c123d117016317a353dc556638a0fa3349f8'}})
    fetch(dictUrl)
    .then(response => {return response.json();})
    .then(json => {
        console.log(json);
        const def = document.getElementById('def');
        def.textContent = "";
        let newdef = json[0].meanings[0].definitions[0].definition;
        def.innerHTML = newdef;
    });
    fetch(picUrl)
    .then(response => {
        return response.json();})
    .then(json => {
        console.log(json)
        const image = document.getElementById('image');
        let newimage = '<img src=' + json.hits[0].largeImageURL + '/>';
        // let check = json.hits[0].id;
        image.innerHTML = newimage;
    })
});

// '563492ad6f917000010000017846a521dfe347c3a991d59f7c58ff54'