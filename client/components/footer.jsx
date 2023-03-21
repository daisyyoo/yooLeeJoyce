import React from 'react';
import { utils, writeFileXLSX } from 'xlsx';

const styles = {
  bgcolor: {
    backgroundColor: '#6F8C69',
    opacity: '0.7'
  },
  text: {
    color: '#ffffff',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  },
  button: {
    backgroundColor: '#6F8C69',
    border: 'none'
  },
  image: {
    height: '100px',
    objectFit: 'cover'
  }
};
export default function Footer() {

  const sendExcel = async () => {
    try {
      const response = await fetch('/api/getSaveTheDateList');
      const SaveTheDateList = await response.json();
      console.log(SaveTheDateList);

      const workSheetColumnNames = ['First Name', 'Last Name', 'Email'];
      const workSheetName = 'SaveTheDateList';

      const exportUsersToExcel = (SaveTheDateList, workSheetColumnNames, workSheetName) => {
        const data = SaveTheDateList.map(user => {
          return [user.firstName, user.lastName, user.email];
        });
        const workBook = utils.book_new();
        const workSheetData = [
          workSheetColumnNames,
          ...data
        ];
        const workSheet = utils.aoa_to_sheet(workSheetData);
        utils.book_append_sheet(workBook, workSheet, workSheetName);
        writeFileXLSX(workBook, 'saveTheDateList.xlsx');
      };
      exportUsersToExcel(SaveTheDateList, workSheetColumnNames, workSheetName);
    } catch (err) { console.error(err); }
  };

  return (
    <div className="w-100">

      <div style={styles.bgcolor} className="w-100 d-flex">
        <div className="d-flex w-50 justify-content-center">
          <button style={styles.button} onClick={sendExcel} >
            <img style={styles.image} src='/images/logo-sm.png'/>
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center w-50">
          <p style={styles.text} className="m-0 text-center">Website created @ByDaisy</p>
        </div>
      </div>
    </div>
  );

}
