import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export class EntryDetail extends Component {
  render() {
    return (
      <div>
        <h1>Entry: {this.props.entry.title}</h1>

        <div>{this.props.entry.body}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  const entries = state.app.entries;
  const entryId = ownProps.match.params.id;
  return {
    entry: entries.find(entry => entry.id === entryId),
  };
};

export default withRouter(connect(mapStateToProps)(EntryDetail));
