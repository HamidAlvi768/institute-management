import React, { useState } from "react";
import { Card, CardBody, Col, Row, Collapse } from "reactstrap";
import { FaBuilding, FaUniversity, FaAngleDown, FaAngleRight } from 'react-icons/fa';

const HierarchyNavigation = () => {
  const [openItems, setOpenItems] = useState({});

  const hierarchyData = {
    Federal: {
      ministries: {
        "Ministry of Education": {
          departments: {
            "Department of Technical Education": {
              institutes: ["Institute A", "Institute B", "Institute C"]
            },
            "Department of Vocational Training": {
              institutes: ["Institute D", "Institute E"]
            }
          }
        },
        "Ministry of Science": {
          departments: {
            "Department of Research": {
              institutes: ["Institute X", "Institute Y"]
            }
          }
        }
      }
    },
    Punjab: {
      departments: {
        "Technical Education Department": {
          institutes: ["Punjab Institute 1", "Punjab Institute 2"]
        }
      }
    },
    Sindh: {
      departments: {
        "Technical Education Department": {
          institutes: ["Sindh Institute 1", "Sindh Institute 2"]
        }
      }
    },
    KPK: {
      departments: {
        "Technical Education Department": {
          institutes: ["KPK Institute 1", "KPK Institute 2"]
        }
      }
    },
    Balochistan: {
      departments: {
        "Technical Education Department": {
          institutes: ["Balochistan Institute 1", "Balochistan Institute 2"]
        }
      }
    }
  };

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderHierarchy = (data, level = 0, path = '') => {
    return Object.entries(data).map(([key, value]) => {
      const currentPath = path ? `${path}-${key}` : key;
      const isOpen = openItems[currentPath];

      if (typeof value === 'object') {
        return (
          <div key={currentPath} style={{ marginLeft: `${level * 20}px` }}>
            <div
              className="d-flex align-items-center py-2 cursor-pointer"
              onClick={() => toggleItem(currentPath)}
              style={{ cursor: 'pointer' }}
            >
              {isOpen ? <FaAngleDown /> : <FaAngleRight />}
              <span className="ms-2">{key}</span>
            </div>
            <Collapse isOpen={isOpen}>
              {renderHierarchy(value, level + 1, currentPath)}
            </Collapse>
          </div>
        );
      } else {
        return (
          <div
            key={currentPath}
            className="py-1"
            style={{ marginLeft: `${(level + 1) * 20}px` }}
          >
            {value}
          </div>
        );
      }
    });
  };

  return (
    <Card>
      <CardBody>
        <h5 className="mb-4">Hirarchy</h5>
        <div className="hierarchy-container">
          {renderHierarchy(hierarchyData)}
        </div>
      </CardBody>
    </Card>
  );
};

export default HierarchyNavigation;
