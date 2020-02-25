// @flow

import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Link } from 'react-router-dom';

import items from './navigation-items';

const NavigationMenu = () => {
  const [currentTabIndex, setCurrentTab] = useState(0);

  const { t } = useTranslation();
  const handleChangeTab = useCallback((_, tabIndex) => {
    setCurrentTab(tabIndex);
  }, []);
  return (
    <Tabs
      onChange={handleChangeTab}
      indicatorColor="primary"
      value={currentTabIndex}
      textColor="primary"
      scrollable={false}
      scrollButtons="on"
      centered
    >
      {items.map((item) => {
        const { Icon, titleKey, route } = item;

        return (
          <Tab
            component={Link}
            icon={<Icon />}
            label={t(titleKey)}
            key={route}
            to={route}
          />
        );
      })}
    </Tabs>
  );
};


export default NavigationMenu;
