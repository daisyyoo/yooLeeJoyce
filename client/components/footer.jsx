import React from 'react';

const styles = {
  bgcolor: {
    backgroundColor: '#6F8C69',
    opacity: '0.7'
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
      <div style={styles.bgcolor}>
        <div>
          <p style={styles.text} className="m-0 text-center">Website created @ByDaisy</p>
        </div>
      </div>
    );
  }
}
