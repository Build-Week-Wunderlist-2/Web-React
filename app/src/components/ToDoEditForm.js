import React from 'react';
import { connect } from 'react-redux';


function ToDoEditForm() {
  return (
    <div className="ToDoEdit">
      <span>lol</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps, 
  {  }
)(ToDoEditForm);