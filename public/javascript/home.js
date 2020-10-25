const people = [
    {
        firstName:'Barry',
        lastName: 'Allen',
        age: 21,
        profilePic: '/photos/Barry_Allen.jpg',
        description: 'Works at Star City Police Labs',
    },
    {
        firstName:'The',
        lastName: 'Flash',
        age: 21,
        profilePic: '/photos/flash.jpg',
        description: 'The fastest man alive!!',
    }
]

function search() {  
    var searchItem = document.getElementById('search').value;
    console.log('people ', people[1].firstName)
    console.log(searchItem);
    for (var i= 0; i < people.length; i++){
        if (people[i].firstName == searchItem) {
            results(i);
            console.log('found in first name ', i)
            break;
        } else if (people[i].lastName == searchItem) {
            results(i);
            console.log('found in last name ', i)
            break;
        } else {
            results(-1)
        }
    } 

function results (result) {
    var found = document.getElementById("if-found");
    document.getElementById('results').innerHTML = '';
    var x = document.createElement("li");
        if (result !== -1){
            x.innerHTML =`
            <div class='card'>
                <h2>${people[result].firstName} ${people[result].lastName}, Age: ${people[result].age}</h2>
                <div class="image">
                    <img src="${people[result].profilePic}" alt="${people[result].profilePic}"></div>
                </div>
                <div class='info'>
                    <div class='desc'>${people[result].description}</div>
                </div>
            </div>
            `;
            document.getElementById("results").appendChild(x);
            found.style.display = 'none';

        } else {
            found.style.display = 'block';
        }
    }
}