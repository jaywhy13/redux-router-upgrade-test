import React, { Component } from 'react';

import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  const entries = state.app.entries;
  const entryId = state.router.params.id;
  return {
    entry: entries.find(entry => entry.id === entryId),
  };
};

export default connect(mapStateToProps)(EntryDetail);
