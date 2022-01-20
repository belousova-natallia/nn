import PropTypes from 'prop-types';

import '../App.scss';
import { customPreset, lowPreset, nonePreset, strongPreset } from '../constants';

export const Presets = ({ changePreset, selectedPreset }) => {
  return (
    <div className="presets">
      <div
        className={`presetItem ${selectedPreset === nonePreset ? 'selected' : ''}`}
        onClick={() => changePreset(nonePreset)}
      >
        None
      </div>
      <div
        className={`presetItem ${selectedPreset === lowPreset ? 'selected' : ''}`}
        onClick={() => changePreset(lowPreset)}
      >
        Low
      </div>
      <div
        className={`presetItem ${selectedPreset === strongPreset ? 'selected' : ''}`}
        onClick={() => changePreset(strongPreset)}
      >
        Strong
      </div>
      <div
        className={`presetItem ${selectedPreset === customPreset ? 'selected' : ''}`}
        onClick={() => changePreset(customPreset)}
      >
        Custom
      </div>
    </div>
  );
};

Presets.propTypes = {
  changePreset: PropTypes.func,
  selectedPreset: PropTypes.string
};

export const SearchField = ({ changeSearchValue, searchValue }) => {
  return (
    <div>
      <input
        className={'searchField'}
        value={searchValue}
        onChange={(e) => changeSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

SearchField.propTypes = {
  changeSearchValue: PropTypes.func,
  searchValue: PropTypes.string
};
