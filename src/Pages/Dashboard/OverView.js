import React from 'react';
import LineColumnArea from './LineColumnArea';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

import { OverViewData } from '../../CommonData/Data/index';
import MapPakistan from './MapPakistan';


const OverView = () => {
    const [selectedRegion, setSelectedRegion] = React.useState('ALL');

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardBody>
                        <div className="d-flex justify-between align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="card-title">Map</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <select
                                    className="form-select form-select-sm"
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                >
                                    <option value="ALL">ALL</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="KPK">KPK</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Gilgit Biltistan">Gilgit Biltistan</option>
                                </select></div>
                        </div>
                        <div>
                            <MapPakistan />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default OverView;