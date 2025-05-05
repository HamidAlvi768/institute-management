import React from 'react';
import LineColumnArea from './LineColumnArea';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

import MapPakistan from './MapPakistan';


const OverView = () => {
    // const dispatch=useDispatch();
    const [selectedRegion, setSelectedRegion] = React.useState('ALL');

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="d-flex justify-between align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="card-title">Map</h5>
                        </div>
                        <div className="flex-shrink-0">
                        </div>
                    </div>
                    <div>
                        <MapPakistan />
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default OverView;