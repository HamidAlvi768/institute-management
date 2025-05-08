import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardTitle, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
import { InstituteMetricsDummyData } from '../../CommonData/Data/dashboard';
// import MapPakistan from './MapPakistan'; // Uncomment if you have a map component

const chartViews = {
  'Registration': {
    series: [
      { name: 'Registered', data: [80, 60, 70, 50, 40] },
      { name: 'Non-Registered', data: [20, 40, 30, 50, 60] },
    ],
    options: {
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: { show: false },
        foreColor: '#ffffff'
      },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#1b5642', '#a9cd98'],
      plotOptions: {
        bar: { horizontal: false, columnWidth: '45%' }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#ffffff', '#000000'] // White for 'Registered', Black for 'Non-Registered'
        }
      },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Accreditation': {
    series: [
      { name: 'National', data: [50, 40, 30, 20, 10] },
      { name: 'International', data: [10, 20, 10, 10, 5] }
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#1b5642', '#a9cd98'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Ownership': {
    series: [
      { name: 'Govt', data: [30, 20, 25, 15, 10] },
      { name: 'Private', data: [10, 20, 35, 55, 75] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#1b5642', '#a9cd98'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
  'Type': {
    series: [
      { name: 'Vocational', data: [40, 30, 20, 10, 5] },
      { name: 'Technical', data: [30, 40, 30, 20, 10] },
      { name: 'Professional', data: [30, 30, 50, 70, 85] },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      xaxis: { categories: ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'] },
      colors: ['#1b5642', '#a9cd98','#f1b44c'],
      plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom' },
    },
    type: 'bar',
  },
};

// Helper to get short department name by removing province prefix and 'Department' suffix
const getShortDept = (fullName) => {
  if (!fullName || typeof fullName !== 'string') {
    return '';
  }

  let shortName = fullName.trim();

  // 1. Remove " Department" suffix (case-insensitive)
  shortName = shortName.replace(/ Department$/i, '').trim();

  // 2. Define known prefixes (provinces/regions - add more if needed)
  const prefixes = [
    'Punjab',
    'Sindh',
    'KPK', // Khyber Pakhtunkhwa
    'Balochistan',
    'Islamabad',
    'Federal',
    'Azad Jammu Kashmir', // Example for multi-word
    'Gilgit Baltistan'    // Example for multi-word
    // Add other potential prefixes here
  ];

  // 3. Remove the prefix if the name starts with one
  for (const prefix of prefixes) {
    // Use regex to match the prefix at the beginning, case-insensitive, followed by a space
    const regex = new RegExp(`^${prefix}\\s+`, 'i');
    if (regex.test(shortName)) {
      shortName = shortName.replace(regex, '').trim();
      break; // Stop after finding the first matching prefix
    }
  }

  return shortName;
};

// Helper to get short ministry name
const getShortMinistry = (fullName) => {
  if (!fullName || typeof fullName !== 'string') {
    return '';
  }

  let shortName = fullName.trim();

  // Remove "Ministry of" prefix if present
  shortName = shortName.replace(/^Ministry of\s+/i, '').trim();

  return shortName;
};

// Helper to get entity label for x-axis
const getEntityLabel = (selectedProvince, selectedMinistry) => {
  if (!selectedProvince) return 'Province';
  if (selectedProvince === 'Federal') {
    return selectedMinistry ? 'Department' : 'Ministry';
  }
  return 'Department';
};

const InstituteMetricsChart = ({ cardClassName = '' }) => {
  // Redux selectors for filters
  const selectedProvince = useSelector(state => state.province.selectedProvince);
  const { selectedYear, selectedMinistry, selectedDepartment } = useSelector(state => state.instituteMetrics);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Registration');

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleSelect = (view) => setSelectedView(view);

  // Build chart data based on filters
  let chartData = null; // Initialize chartData to null

  const buildChartOptions = (categories, entityLabel, view) => ({
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: { show: false },
      foreColor: '#ffffff' // Default foreColor, adjust if needed per view
    },
    xaxis: {
      categories: categories,
      title: { text: entityLabel }
    },
    colors: view === 'Type' ? ['#1b5642', '#a9cd98', '#f1b44c'] : ['#1b5642', '#a9cd98'],
    plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
    dataLabels: {
      enabled: view === 'Registration', // Only enable for Registration view
      style: {
        colors: view === 'Registration' ? ['#ffffff', '#000000'] : undefined
      }
    },
    legend: { show: true, position: 'bottom' },
  });

  const getSeriesForView = (view, data) => {
    switch (view) {
      case 'Registration':
        return [
          { name: 'Registered', data: data.map(d => d.metrics.Registration.Registered) },
          { name: 'Non-Registered', data: data.map(d => d.metrics.Registration.NonRegistered) },
        ];
      case 'Accreditation':
        return [
          { name: 'National', data: data.map(d => d.metrics.Accreditation.National) },
          { name: 'International', data: data.map(d => d.metrics.Accreditation.International) }
        ];
      case 'Ownership':
        return [
          { name: 'Govt', data: data.map(d => d.metrics.Ownership.Govt) },
          { name: 'Private', data: data.map(d => d.metrics.Ownership.Private) },
        ];
      case 'Type':
        return [
          { name: 'Vocational', data: data.map(d => d.metrics.Type.Vocational) },
          { name: 'Technical', data: data.map(d => d.metrics.Type.Technical) },
          { name: 'Professional', data: data.map(d => d.metrics.Type.Professional) },
        ];
      default:
        return [];
    }
  };

  let filteredData = InstituteMetricsDummyData.filter(d => d.year === selectedYear);

  if (selectedProvince && selectedProvince !== 'Federal') {
    // --- Provincial Flow ---
    filteredData = filteredData.filter(d => d.province === selectedProvince);
    if (selectedDepartment) {
      filteredData = filteredData.filter(d => d.department === selectedDepartment);
    }

    if (filteredData.length > 0) {
      const departments = filteredData.map(d => getShortDept(d.department));
      const entityLabel = getEntityLabel(selectedProvince, selectedMinistry);
      chartData = {
        series: getSeriesForView(selectedView, filteredData),
        options: buildChartOptions(departments, entityLabel, selectedView),
        type: 'bar',
      };
    }
  } else if (selectedProvince === 'Federal') {
    // --- Federal Flow ---
    if (selectedMinistry) {
      // If ministry is selected, show its departments
      filteredData = filteredData.filter(d => 
        d.province === 'Federal' && 
        d.ministry === selectedMinistry
      );
      
      if (selectedDepartment) {
        filteredData = filteredData.filter(d => d.department === selectedDepartment);
      }

      if (filteredData.length > 0) {
        const departments = filteredData.map(d => getShortDept(d.department));
        const entityLabel = getEntityLabel(selectedProvince, selectedMinistry);
        chartData = {
          series: getSeriesForView(selectedView, filteredData),
          options: buildChartOptions(departments, entityLabel, selectedView),
          type: 'bar',
        };
      }
    } else {
      // If no ministry selected, show all ministries
      const federalData = filteredData.filter(d => d.province === 'Federal');
      const ministries = [...new Set(federalData.map(d => d.ministry))];
      
      // Create aggregated data for each ministry
      const ministryData = ministries.map(ministry => {
        const ministryRecords = federalData.filter(d => d.ministry === ministry);
        return {
          ministry,
          metrics: {
            Registration: {
              Registered: ministryRecords.reduce((sum, d) => sum + d.metrics.Registration.Registered, 0),
              NonRegistered: ministryRecords.reduce((sum, d) => sum + d.metrics.Registration.NonRegistered, 0)
            },
            Accreditation: {
              National: ministryRecords.reduce((sum, d) => sum + d.metrics.Accreditation.National, 0),
              International: ministryRecords.reduce((sum, d) => sum + d.metrics.Accreditation.International, 0)
            },
            Ownership: {
              Govt: ministryRecords.reduce((sum, d) => sum + d.metrics.Ownership.Govt, 0),
              Private: ministryRecords.reduce((sum, d) => sum + d.metrics.Ownership.Private, 0)
            },
            Type: {
              Vocational: ministryRecords.reduce((sum, d) => sum + d.metrics.Type.Vocational, 0),
              Technical: ministryRecords.reduce((sum, d) => sum + d.metrics.Type.Technical, 0),
              Professional: ministryRecords.reduce((sum, d) => sum + d.metrics.Type.Professional, 0)
            }
          }
        };
      });

      if (ministryData.length > 0) {
        const ministryNames = ministryData.map(d => getShortMinistry(d.ministry));
        const entityLabel = getEntityLabel(selectedProvince, selectedMinistry);
        chartData = {
          series: getSeriesForView(selectedView, ministryData),
          options: buildChartOptions(ministryNames, entityLabel, selectedView),
          type: 'bar',
        };
      }
    }
  } else {
    // --- Default View (No Province/Federal Ministry Selected) ---
    chartData = chartViews[selectedView];
  }

  // Fallback to default view's structure if filtered data resulted in nothing
  if (!chartData) {
    chartData = chartViews[selectedView];
  }

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className={cardClassName}>
          <CardBody>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <CardTitle tag="h5">Institute Metrics</CardTitle>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="sm">
                <DropdownToggle caret color="light">
                  {selectedView}
                </DropdownToggle>
                <DropdownMenu>
                  {Object.keys(chartViews).map((view) => (
                    <DropdownItem key={view} onClick={() => handleSelect(view)}>
                      {view}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type={chartData.type}
                height={390}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default InstituteMetricsChart;