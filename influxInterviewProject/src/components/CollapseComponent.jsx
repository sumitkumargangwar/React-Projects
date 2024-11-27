import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

// CollapseComponent: A reusable component for collapsible sections
const CollapseComponent = ({ title, children, defaultOpen = false }) => {
  // State to manage the open/closed state of the collapse
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="my-3" style={{ borderTop: '1px solid #4c4848', padding: '10px 0', fontSize: '18px' }}>
      {/* Button to toggle collapse state */}
      <Button
        variant="light"
        onClick={() => setOpen(!open)} // Toggle open state on button click
        aria-controls="example-collapse-text" // Associates the button with the collapsible content
        aria-expanded={open} // Indicates whether the content is expanded or collapsed
        className="d-flex justify-content-start align-items-center"
        style={{ width: '100%', background: '#000', border: '0', color: '#fff', padding: '10px' }}
      >
        {/* Icon changes based on the open state */}
        {open ? <FaChevronDown /> : <FaChevronRight />}
        <span style={{ marginLeft: '10px', fontSize: '18px' }}>{title}</span>
      </Button>
      {/* Collapsible content */}
      <Collapse in={open}>
        <div id="example-collapse-text" className="mt-2 text-white">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default CollapseComponent;
