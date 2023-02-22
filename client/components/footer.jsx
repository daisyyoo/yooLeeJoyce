import React from 'react';

const styles = {
  bgcolor: {
    backgroundColor: '#6F8C69'
  },
  text: {
    color: '#ffffff',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  }
};
export default class Footer extends React.Component {
  render() {
    return (
      <div style={styles.bgcolor} className="p-3 px-md-5">
        <div className="d-flex flex-column ">
          <p style={styles.text} className="m-0 text-center">Website created ByDaisy</p>
        </div>
      </div>
    );
  }
}
