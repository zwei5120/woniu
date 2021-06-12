// let tmp1 = 123;
// console.log(typeof(tmp1));
// console.log(tmp1);
let person = {
    name: '范大娘',
    age: 54,
    sex: 'female',
    hobby: '讨论剧本',
    behave: function () {
        return this.name + '这个' + this.age + '的' + this.sex + '又' + this.hobby + '了';
    }
}
console.log(person.behave());
console.log(person.sex);

// let num1 = 0,
//     num2 = 10,
//     age = 23,
//     isAdult = 'no',
//     isChengDuPeople = 'yes',
//     thehobby = 'eatsomething',
//     theEnd = 2021;
//     console.log(thehobby);

//     console.log(typeof null);