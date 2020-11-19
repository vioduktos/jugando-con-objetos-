function usuarios(x){
    var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
    console.log(users[1].age)///30,
    console.log(users[0].name)///micchael,
        for(var i=0; i<users.length;i++){///1/2(se usa el loop)

            console.log(users[i].name,users[i].age)//michael , 37 años /john ,30/ david/27//

            if(users[i].age>18){//( aca se impreme solo los mayores de edad )

                console.log(users[i].name)//

            }
        }
    }
    usuarios();