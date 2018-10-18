import React, { Component } from 'react';

import { push } from 'connected-react-router';

import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.goToEntry = this.goToEntry.bind(this);
  }

  render() {
    const { entries } = this.props;
    return (
      <div className="App">
        <h1>My Journal</h1>
        <div>
          <ul>
            <li>
              <a href="#" onClick={this.props.onAddEntry}>
                New Entry
              </a>
            </li>
          </ul>
        </div>
        <div>
          {entries.map(entry => (
            <li key={entry.id}>
              <a href="#" onClick={() => this.goToEntry(entry.id)}>
                {entry.title}
              </a>
            </li>
          ))}
        </div>
        <div className="children">{this.props.children}</div>
      </div>
    );
  }

  goToEntry(id) {
    this.props.onGoToEntry(id);
  }
}
const mapStateToProps = state => {
  console.log('state', state);
  return {
    entries: state.app.entries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEntry: () => {
      dispatch(push('/new-entry'));
    },
    onGoToEntry: id => {
      dispatch(push('/entry/' + id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
