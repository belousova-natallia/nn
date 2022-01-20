import PropTypes from 'prop-types';
import { useState } from 'react';
import { nonePreset, strongPreset } from '../constants';

export const Footer = ({
  selectedPreset,
  allCategories,
  presets,
  handleClick,
  setFilterByType,
  filterByType
}) => {
  const [allowedSelected, setAllowedSelected] = useState(false);
  const [blockedSelected, setBlockedSelected] = useState(false);

  const getAllowed = () => {
    if (selectedPreset === strongPreset) {
      return 0;
    } else return allCategories.length - presets[selectedPreset].length;
  };

  if (!allCategories.length || !presets) {
    return <div></div>;
  }

  return (
    <div className="footer">
      <div className={'filterCategories'}>
        <div className={'filterCategories_label'}>Filter categories</div>
        <div
          className={`filterCategories_button ${filterByType && allowedSelected ? 'selected' : ''}`}
          onClick={() => {
            if (!allowedSelected) {
              setAllowedSelected(true);
              setBlockedSelected(false);
              setFilterByType('Allowed');
            } else {
              setAllowedSelected(false);
              setFilterByType(null);
            }
          }}
        >
          Allowed {getAllowed()}
        </div>
        <div
          className={`filterCategories_button ${filterByType && blockedSelected ? 'selected' : ''}`}
          onClick={() => {
            if (!blockedSelected) {
              setBlockedSelected(true);
              setAllowedSelected(false);
              setFilterByType('Blocked');
            } else {
              setBlockedSelected(false);
              setFilterByType(null);
            }
          }}
        >
          Blocked {allCategories.length - getAllowed()}{' '}
        </div>
      </div>
      <div className={'switchPreset_button'}>
        <div onClick={() => handleClick(strongPreset)}>Block All</div>
        <div onClick={() => handleClick(nonePreset)}>Allow All</div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  selectedPreset: PropTypes.string,
  allCategories: PropTypes.array,
  presets: PropTypes.any,
  handleClick: PropTypes.func,
  setFilterByType: PropTypes.func,
  filterByType: PropTypes.string
};
