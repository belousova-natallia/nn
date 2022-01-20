import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faMinusSquare, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { strongPreset } from '../constants';

export const Categories = ({
  selectedPreset,
  searchValue,
  presets,
  allCategories,
  filterByType
}) => {
  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    let filteredCategories = allCategories.filter(function (el) {
      return el.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (filterByType === 'Allowed') {
      if (selectedPreset === strongPreset) {
        filteredCategories = [];
      } else {
        filteredCategories = filteredCategories.filter(function (el) {
          return !presets[selectedPreset].includes(el.name);
        });
      }
    }

    if (filterByType === 'Blocked' && selectedPreset !== strongPreset) {
      filteredCategories = filteredCategories.filter(function (el) {
        return presets[selectedPreset].includes(el.name);
      });
    }

    setVisibleCategories(filteredCategories);
  }, [searchValue, allCategories, filterByType, selectedPreset]);

  return (
    <div className={'categoriesContainer'}>
      {!visibleCategories.length || !presets ? (
        <></>
      ) : (
        visibleCategories.map((el, index) => {
          return (
            <div key={index} className={'categoryElementContainer'}>
              <div className={'icon'}>
                {presets[selectedPreset].includes(el.name) || selectedPreset === strongPreset ? (
                  <div>
                    <FontAwesomeIcon icon={faMinusSquare} className={'awesomeIcon'} inverse />
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon className={'awesomeIcon'} icon={faCheckSquare} inverse />
                  </div>
                )}
              </div>
              <div className={'categoryElement'}>{el.name}</div>
              <div data-tooltip={el.description}>
                <FontAwesomeIcon icon={faQuestionCircle} className={'tooltipIcon'} inverse />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

Categories.propTypes = {
  selectedPreset: PropTypes.string,
  searchValue: PropTypes.string,
  presets: PropTypes.object,
  allCategories: PropTypes.array,
  filterByType: PropTypes.string
};
