import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { createDOMPurify } from 'dompurify';
// import { JSDOM } from 'jsdom';

class ProfileTabs extends React.Component {

    cleanerContent() {
        // If DOMPurify worked
        //return DOMPurify.sanitize(this.props.sendContent);
        return this.props.sendContent;
    }

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
                        <h1>{this.props.sendSelection.title }</h1>
                        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: this.cleanerContent() }} />
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