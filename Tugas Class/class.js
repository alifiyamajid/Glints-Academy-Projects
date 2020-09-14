class Murid {
  constructor(name, old, birth, gender, id, hobbie) {
    this.name = name;
    this.old = old;
    this.birth = birth;
    this.gender = gender;
    this.id = id;
    this.hobbie = [hobbie];
  }
  get info() {
    return `${this.name} ${this.old} ${this.birth} ${this.gender} ${this.id} ${this.hobbie}`;
  }
  set nama(name_New) {
    this.name = name_New;
  }
  set umur(name_Old) {
    this.old = name_Old;
  }
  set lahir(name_Birth) {
    this.birth = name_Birth;
  }
  set kelamin(name_Gender) {
    this.gender = name_Gender;
  }
  set asal(name_Id) {
    this.id = name_Id;
  }
  addhobbie(hobbiebaru) {
    this.hobbie.push(hobbiebaru);
  }
  removeHobbie(hapushobbie) {
    for (let i = 0; i < this.hobbie.length; i++) {
      if (this.hobbie[i] === hapushobbie) {
        this.hobbie.splice(i, 1);
      }
    }
  }
}
const murid = new Student("asep", 12, 1457, "cowok", 125267, ["makan"]);
const murid = new Student("asep", 12, 1457, "cowok", 125267, "makan");
console.log(murid);
murid.name = "ucup";
console.log(murid);
murid.addhobbie("tidur");
console.log(murid);
murid.addhobbie("aaaaa")
murid.removeHobbie("makan");
murid.removeHobbie("aaaaa")
console.log(murid);