import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Select, Switch } from 'antd';
import { CtxDataType, IndicatorMetaDataType } from '../Types';
import Context from '../Context/Context';
import { DEFAULT_VALUES } from '../Constants';

interface Props {
  indicators: IndicatorMetaDataType[];
  regions: string[];
}

const El = styled.div`
  padding: 0 1rem 2rem 1rem;
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media (max-width: 960px) {
    border-right: 0px solid var(--black-400);
    padding-bottom: 0;
  }  
`;

const DropdownEl = styled.div`
  flex-grow: 1;
  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
    flex-grow: 0;
  }
`;

const DropdownTitle = styled.div`
  font-size: 1.4rem;
  color: var(--black-700);
  margin-bottom: 1rem;
  line-height: 1.8rem;
`;

export const Settings = (props: Props) => {
  const {
    indicators,
    regions,
  } = props;
  const {
    xAxisIndicator,
    selectedRegions,
    updateXAxisIndicator,
    updateSelectedRegions,
    updateShowProjectLocations,
  } = useContext(Context) as CtxDataType;

  const options = indicators.filter((d) => d.Map).map((d) => d.Indicator);
  useEffect(() => {
    if (options.findIndex((d) => d === xAxisIndicator) === -1) {
      updateXAxisIndicator(options[0]);
    }
  }, [options]);
  return (
    <El>
      <DropdownEl>
        <DropdownTitle>
          Select Indicator
        </DropdownTitle>
        <Select
          showSearch
          style={
            {
              width: '100%',
              borderRadius: '1rem',
            }
          }
          placeholder='Please select'
          value={xAxisIndicator}
          onChange={(d) => { updateXAxisIndicator(d); }}
          defaultValue={DEFAULT_VALUES.firstMetric}
        >
          {
            options.map((d) => (
              <Select.Option key={d}>{d}</Select.Option>
            ))
          }
        </Select>
      </DropdownEl>
      <DropdownEl>
        <DropdownTitle>
          Select a Region
        </DropdownTitle>
        <Select
          allowClear
          style={{ width: '100%' }}
          placeholder='Select a region'
          value={selectedRegions}
          onChange={(d: string) => { updateSelectedRegions(d === undefined ? '' : d); }}
        >
          {
          regions.map((d) => (
            <Select.Option key={d}>{d}</Select.Option>
          ))
        }
        </Select>
      </DropdownEl>
      <DropdownEl>
        <DropdownTitle>
          Show project locations
        </DropdownTitle>
        <Switch style={{ margin: '0.5rem 0' }} onChange={(e) => { updateShowProjectLocations(e); }} />
      </DropdownEl>
    </El>
  );
};
