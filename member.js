function skillsMember(){
    var member = {
        name: 'John',
        skills: ['js', 'react', 'node'],
        age: 20
    };
    for(var key in member){
        console.log(key + ': ' + member[key]);
    }
}