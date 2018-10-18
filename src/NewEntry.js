import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { newEntry } from './actions';

export class NewEntry extends Component {
  constructor() {
    super();
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Title" ref={input => (this.titleRef = input)} />
        </div>

        <div>
          Entry:
          <textarea name="" id="" cols="30" rows="10" ref={input => (this.bodyRef = input)} />
        </div>

        <div>
          <button onClick={this.handleOnSave}>Save</button>
        </div>
      </div>
    );
  }

  handleOnSave() {
    const entry = {
      title: this.titleRef.value,
      body: this.bodyRef.value,
    };
    return this.props.onSave(entry);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: entry => {
      console.log('Saving entry', entry);
      dispatch(newEntry(entry));
      dispatch(push('/'));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(NewEntry);
