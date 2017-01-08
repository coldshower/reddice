import React from 'react';

export default class FormGroup extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {labelName, value, onChange} = this.props;
    return (
      <div className="form-group">
        <label className="control-label">{labelName}</label>
        <input 
          type="text"
          name={labelName}
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

const { PropTypes } = React;

FormGroup.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};