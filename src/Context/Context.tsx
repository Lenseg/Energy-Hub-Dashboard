import { createContext } from 'react';
import { CtxDataType } from '../Types';

const Context = createContext<CtxDataType>({
  selectedRegions: '',
  selectedCountries: '',
  selectedProjects: '',
  xAxisIndicator: '',
  showProjectLocations: false,
  selectedTaxonomy: 'All',
  selectedCategory: 'all',
  selectedSubCategory: 'all',
  updateSelectedRegions: (_d: string) => {},
  updateSelectedCountries: (_d: string) => {},
  updateSelectedProjects: (_d: string) => {},
  updateXAxisIndicator: (_d: string) => {},
  updateShowProjectLocations: (_d: boolean) => {},
  updateSelectedTaxonomy: (_d: string) => {},
  updateSelectedCategory: (_d: string) => {},
  updateSelectedSubCategory: (_d: string) => {},
});

export default Context;
