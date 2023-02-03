import React from 'react';

const Spinner = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center bg-dark text-warning gap-2">
      <div className="spinner-border text-success custom-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      Loading ...
    </div>
  );
};

export default Spinner;
