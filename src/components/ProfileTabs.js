import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ProfileTabs extends React.Component {

    render() {
        return (
            <div>
                <Tabs className="exhibitTabs">
                    <TabList>
                        <Tab>About</Tab>
                        <Tab>More</Tab>
                        <Tab>Media</Tab>
                        <Tab>Contribute</Tab>
                    </TabList>

                    <TabPanel>
                        <h1>{this.props.sendSelection}</h1>
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ProfileTabs;