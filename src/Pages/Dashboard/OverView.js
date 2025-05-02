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
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="card-title">Overview</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <div>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1">
                                        ALL
                                    </button>
                                    <button type="button" className="btn btn-soft-primary btn-sm me-1">
                                        Punjab
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1">
                                        Sindh
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1 active">
                                        Balochistan
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1 active">
                                        KPK
                                    </button>

                                    <button type="button" className="btn btn-soft-secondary btn-sm me-1 active">
                                        Islamabad
                                    </button>
                                </div>
                            </div>
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