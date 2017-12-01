let uniq_id = 0;

export class Position {
  constructor(name, id = uniq_id++) {
    this.name = name;
    this.id = id;
  }
}

export class Team {
  constructor(name, id = uniq_id++) {
    this.name = name;
    this.id = id;
    this.members = [];
    this.selected = true;
  }
}

export class Employee {
  static baseNames = ['Bruce Wayne', 'Anthony Stark', 'Thor Odinson', 'Bruce Banner', 'Fish Mooney', 'Butch Gilzean', 'Jerome Valeska', 'Cassandra Cain', 'Alan Scott', 'Selina Kyle'];

  constructor({position, name, id = uniq_id++}) {
    this.id = id;
    this.name = name || Employee.baseNames[id % Employee.baseNames.length];
    this.position = position;
    this.maxTeams = 1;
  }

}

export class Manager extends Employee {
  constructor(props) {
    super(props);
    this.maxTeams = 5;
  }
}

export class DB {
  constructor() {
    this.positions = [
      'CTO',
      'Team Leader',
      'Senior Developer',
      'Developer',
      'Writer',
      'Customer Support'
    ].map(name => new Position(name));

    this.teams = [
      'Operations',
      'Sales',
      'Core',
      'Frontend',
      'Services'].map(name => new Team(name));

    // Regular developers (2 for team)
    (new Array(this.teams.length * 2)).fill(null).map((item,index) => new Employee({
      position: this.positions[3]
    })).forEach((emp, index) => this.teams[index % this.teams.length].members.push(emp));

    // Seniors (1 for team)
    (new Array(this.teams.length)).fill(null).map((item, index) => new Employee({
      position: this.positions[2],
    })).forEach((emp, index) => this.teams[index % this.teams.length].members.push(emp));


      // Leads
      const lead1 = new Manager({
        position: this.positions[1],
        name: "Harvy Bullock"
      });
      this.teams[3].members.push(lead1);
      this.teams[4].members.push(lead1);

      const lead2 = new Manager({
        position: this.positions[1],
        name: "Edward Nygma"
      });
      this.teams[2].members.push(lead2);
      this.teams[1].members.push(lead2);

      // CTO
      const cto =new Manager({
        position: this.positions[0],
        name: "Oswald Cobblepot"
      });
      this.teams.forEach(team => team.members.push(cto));


      const emps = new Set();
      this.teams.forEach(team => {
        team.members.forEach(member => emps.add(member));
      });
      this.employees = [...emps].sort((a,b) => a.position.id > b.position.id ? 1 : -1);

  }
}

const db = new DB();

export default new Promise(resolve => setTimeout(resolve.bind(this, db), 1000));