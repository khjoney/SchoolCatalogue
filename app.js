class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    } // End Of Get calls
  
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
  
    static pickSubstituteTeacher(...arr) {
      let size = arr.length;
      let randomNumber = Math.random() * size - 1;
      return arr[randomNumber]; //Return the Substitute teacher
    } // Step 7
  
    set numberOfStudents(num) {
      if (typeof num === "number") {
        this._numberOfStudents = num;
      } else {
        return "Invalid input: numberOfStudents must be set to a Number.";
      }
    }
  } //End of class School
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents); //Check back
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy; //Step 13
    }
  } //End of Primary School class
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "High", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  } //Step 13
  
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  ); //Step 14
  
  lorraineHansbury.quickFacts(); //step 15
  
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ]); //step 16
  
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  console.log(alSmith.sportsTeams);