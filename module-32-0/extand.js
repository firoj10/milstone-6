  class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    frovideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
  }
  
  class Instructor extends TeamMember{
 
    designer = 'web course instructor'
    tram= 'web team'

    constructor(name, location){
       super(name, location)
    }
    startSaportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(madule){
        console.log(`please create quiz for module ${madule}`)
    }
   
}

class Devoloper extends TeamMember{
   
    designer = 'web course instructor'
    tram= 'web team'
    tech;
    constructor(name, location, tech){
      super(name, location)
        this.tech= tech;
    }
    startSaportSession(feature){
        console.log(`devoloper the ${feature}`)
    }
    createQuiz(vertion){
        console.log(`please create quiz for module ${vertion}`)
    }
}

class JobPlacement extends TeamMember{

    designer = 'job placement commondo'
    tram= 'web team'
    region;
   
    constructor(name, location, region) {
        super(name, location)
        this. region=region;
    }
    startSaportSession(feature){
        console.log(`devoloper the ${feature}`)
    }
    createQuiz(vertion){
        console.log(`please create quiz for module ${vertion}`)
    }
  
}

const alia= new Devoloper('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.frovideFeedback();
const pipasa = new JobPlacement('bipasa Bhatt', 'kolkata', 'india');

console.log(pipasa);
pipasa.frovideFeedback();