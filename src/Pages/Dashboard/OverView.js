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

    // const selectedProvince = useSelector((state) => state.province.selectedProvince);

    // setSelectedRegion(selectedProvince ?? 'ALL');

    return (
        <React.Fragment>
            <Col xl={8} sm={8}>
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
                                    onChange={(e) => () => {
                                        setSelectedRegion(e.target.value)
                                        // dispatch(setSelectedProvince(e.target.value))
                                    }}
                                >
                                    <option value="all">ALL</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="KPK">KPK</option>
                                    <option value="ICT">Islamabad</option>
                                    <option value="GB">Gilgit Biltistan</option>
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