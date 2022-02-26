const Arrow = ({ open }) => {
  if (!open) {
    return (
      <svg width="20px" height="20px" viewBox="0 0 122 123">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon
            fill="#575ADC"
            points="91.7722537 0 91.7722537 65.0515626 122 65.0515626 59.8476562 122.460938 -1.29249909e-14 65.0515626 29.632507 65.0515626 29.632507 0"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg width="20px" height="20px" viewBox="0 0 122 123">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon
          id="Path"
          fill="#575ADC"
          transform="translate(61.000000, 61.230469) scale(1, -1) translate(-61.000000, -61.230469) "
          points="91.7722537 0 91.7722537 65.0515626 122 65.0515626 59.8476562 122.460938 -1.29249909e-14 65.0515626 29.632507 65.0515626 29.632507 0"
        />
      </g>
    </svg>
  );
};

export default Arrow;
