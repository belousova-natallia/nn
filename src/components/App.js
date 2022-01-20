import '../App.scss';
import { Presets, SearchField } from './Header';
import { Categories } from './CategoriesContainer';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../servises/categoriesServise';
import { getPresets } from '../servises/presetsServise';
import { Footer } from './Footer';
import { nonePreset } from '../constants';

export const App = () => {
  const [selectedPreset, setSelectedPreset] = useState(nonePreset);
  const [searchValue, setSearchValue] = useState('');
  const [allCategories, setAllCategories] = useState([]);
  const [presets, setPresets] = useState(null);
  const [filterByType, setFilterByType] = useState(null);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setAllCategories(categories);
    });
    getPresets().then((presets) => setPresets(presets));
  }, []);

  useEffect(() => {
    setSearchValue('');
  }, [filterByType]);

  useEffect(() => {
    setFilterByType(null);
  }, [searchValue]);

  return (
    <div className={'container'}>
      <div className="header">
        <Presets changePreset={setSelectedPreset} selectedPreset={selectedPreset}></Presets>
        <SearchField changeSearchValue={setSearchValue} searchValue={searchValue}></SearchField>
      </div>
      <Categories
        selectedPreset={selectedPreset}
        searchValue={searchValue}
        allCategories={allCategories}
        presets={presets}
        filterByType={filterByType}
      ></Categories>
      <Footer
        selectedPreset={selectedPreset}
        allCategories={allCategories}
        presets={presets}
        handleClick={setSelectedPreset}
        setFilterByType={setFilterByType}
        filterByType={filterByType}
      ></Footer>
    </div>
  );
};
