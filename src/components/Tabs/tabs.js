import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

const MenuTabs = () => {
  return (
    <>
      <Tabs
        align="center"
        fontFamily="Monospace"
        fontSize={{ base: '1em', md: '.9em' }}
        variant="unstyled"
      >
        <TabList>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          ></Tab>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          >
            Shop all
          </Tab>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          >
            Blush
          </Tab>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          >
            Bronzer
          </Tab>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          >
            Eyebrows
          </Tab>
          <Tab
            fontSize={{ base: '1em', md: '1em' }}
            _selected={{ color: '#F694C1' }}
          >
            Eyeliner
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MenuTabs;
