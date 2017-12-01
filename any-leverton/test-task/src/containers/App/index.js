import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTeam, removeMember, fetchData} from '../../actions/teams';


class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  getTeams() {
    const members = team => team.members.map(member => (
      <div key={member.id} className="table__row">
        <div className="table__cell">{member.name}</div>
        <div className="table__cell fixed">{member.position.name}</div>
        <div className="table__cell fixed">
          <button onClick={this.props.removeMember.bind(this, team, member)}>X</button>
        </div>
      </div>
    ));
    const tables = this.props.teams.filter(team => team.selected).map(team => (
      <div className="team-table" key={team.id}>
        <h2>{team.name} ({team.members.length})</h2>
        <div className="table">
          {members(team)}
        </div>
      </div>
    ));
    return tables;
  }


  render() {
    const teams = this.getTeams();

    return (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
        </div>
        <div className="wrapper">
          <div className="teams-container">
            {teams}
          </div>
          <div className="tools">
            <div className="teams">
              <h3>Teams</h3>
              <ul className="list">
                {this.props.teams.map(team => <li onClick={this.props.selectTeam.bind(this, team)} className={`team-item ${team.selected ? 'selected': ''}`} key={team.id}>{team.name} ({team.members.length})</li>)}
              </ul>
            </div>
            <div className="devs">
              <h3>Employees</h3>
              <ul className="list">
                {this.props.employees.map(emp => <li className="emp-item" key={emp.id}>{emp.name} - <span className="position">{emp.position.name}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    teams: state.data.teams,
    positions: state.data.positions,
    employees: state.data.employees
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch),
    removeMember: bindActionCreators(removeMember, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
