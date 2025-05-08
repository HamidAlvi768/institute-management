import React from 'react';
import LineColumnArea from './LineColumnArea';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

import SunburstPakistan from './SunburstPakistan';


const OverView = () => {
    // const dispatch=useDispatch();
    const [selectedRegion, setSelectedRegion] = React.useState('ALL');

    return (
        <React.Fragment>
            <Card>
                <CardBody style={{ display: 'flex', flexDirection: 'column', minHeight: '600px', overflow: 'auto' }}>
                    <div className="d-flex justify-between align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="card-title">Map</h5>
                        </div>
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <SunburstPakistan />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default OverView;