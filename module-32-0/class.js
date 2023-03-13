class Instructor{
    name;
    designer = 'web course instructor'
    tram= 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location= location;
    }
    startSaportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(madule){
        console.log(`please create quiz for module ${madule}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSaportSession('9.00');
aamir.createQuiz(60);
