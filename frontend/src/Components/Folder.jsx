import React, { useState, useEffect } from 'react';
import '../index.css';

const Folder = () => {
  const [checklistItems, setChecklistItems] = useState([]);

  // Load checklist items from local storage on initial render
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('checklistItems'));
    if (storedItems && storedItems.length === 20) {
      setChecklistItems(storedItems);
    } else {
      // Initialize checklist items if local storage is empty or incomplete
      const names = [
        'Resume/CV',
        'Cover Letter',
        'Academic Transcripts',
        'Degree/Certificate',
        'Letter of Recommendation',
        'ID Proof',
        'Passport-sized Photographs',
        'Proof of Address',
        'Internship Application Form',
        'Statement of Purpose',
        'Work Samples/Portfolio',
        'Skill Certifications',
        'Extracurricular Certificates',
        'Language Proficiency Certificates',
        'Social Media Profiles',
        'Bank Account Details',
        'No Objection Certificate (NOC)',
        'Proof of Medical Insurance',
        'Police Clearance Certificate',
        'Any Other Relevant Documents'
        ];
      
      const initialItems = names.map((name, index) => ({
        id: index + 1,
        name: name,
        checked: false,
      }));
      


      setChecklistItems(initialItems);
      localStorage.setItem('checklistItems', JSON.stringify(initialItems));
    }
  }, []);

  // Handle checklist item checkbox change
  const handleCheckboxChange = (itemId) => {
    const updatedChecklistItems = checklistItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setChecklistItems(updatedChecklistItems);
    localStorage.setItem('checklistItems', JSON.stringify(updatedChecklistItems));
  };

  return (
    <div className="checklist-container">
      <h2>Checklist</h2>
      <div className="checklist">
        {checklistItems.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
              id={`item-${item.id}`}
            />
            <label htmlFor={`item-${item.id}`}>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
