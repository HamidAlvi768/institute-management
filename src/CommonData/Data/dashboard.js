// Import Images
import img2 from "../../assets/images/users/avatar-2.jpg";
import img3 from "../../assets/images/users/avatar-3.jpg";
import img6 from "../../assets/images/users/avatar-6.jpg";
import img4 from "../../assets/images/users/avatar-4.jpg";

// Latest Registrations
const LatestTransationData = [
    {
        id: "ins_001",
        clientId: "#INS-2023-001",
        clientName: "National Technical Institute",
        src: img2, // Replaced govtIcon with img2
        date: "15 Oct, 2023",
        price: "25",
        quantity: "12",
        color: "success",
        status: "Active"
    },
    {
        id: "ins_002",
        clientId: "#INS-2023-002",
        clientName: "Karachi Private College",
        src: img3, // Replaced privateIcon with img3
        date: "18 Oct, 2023",
        price: "18",
        quantity: "8",
        color: "warning",
        status: "Pending Renewal"
    },
    {
        id: "ins_003",
        clientId: "#INS-2023-003",
        clientName: "Lahore Vocational Center",
        src: img4, // Assigned img4
        date: "20 Oct, 2023",
        price: "32",
        quantity: "15",
        color: "danger",
        status: "Expired"
    },
];

// Registration Status
const OrderStatusData = [
    {
        id: 1,
        title: "Active",
        icon: "ri-checkbox-circle-line",
        color: "success",
        width: "65",
    },
    {
        id: 2,
        title: "Pending Renewal",
        icon: "ri-calendar-2-line",
        color: "warning",
        width: "25",
    },
    {
        id: 3,
        title: "Expired",
        icon: "ri-close-circle-line",
        color: "danger",
        width: "10",
    },
];

// Key Metrics
const OverViewData = [
    {
        id: 1,
        title: "Total Institutes",
        count: "1,234",
        percentage: "4.5",
        color: "primary"
    },
    {
        id: 2,
        title: "Accredited",
        count: "892",
        percentage: "2.3",
        color: "info"
    },
    {
        id: 3,
        title: "Expiring Soon",
        count: "89",
        percentage: "-1.1",
        color: "danger"
    },
];

// Institute Types
const SocialSourceData = [
    {
        id: 1,
        title: "Government",
        count: "768",
        icon: "ri-government-line",
        bgcolor: "#000000"
    },
    {
        id: 2,
        title: "Private",
        count: "466",
        icon: "ri-building-line",
        bgcolor: "warning"
    },
];

// Registration Alerts
const NotificationsData = [
    {
        id: 1,
        name: "Expiry Alert",
        desc: "Peshawar Institute (ID: #INS-2021-045) registration expires in 7 days",
        time: "2 hours ago",
        icon: "mdi mdi-alert-outline"
    },
    {
        id: 2,
        name: "New Accreditation",
        desc: "Quetta Technical College accredited with Grade A",
        time: "1 day ago",
        src: img6, // Replaced alertIcon with img6
    },
    {
        id: 3,
        name: "Infrastructure Update",
        desc: "Islamabad Institute added 5 new labs",
        time: "3 days ago",
        icon: "mdi mdi-domain"
    },
];

// Affiliation Bodies by Province/State
const AffiliationBodyData = [
    {
        id: 1,
        name: "NAVTTC",
        provinces: [
            { name: "Punjab", count: 45 },
            { name: "Sindh", count: 32 },
            { name: "KPK", count: 28 },
            { name: "Balochistan", count: 21 }
        ],
        color: "#3b82f6"
    },
    {
        id: 2,
        name: "PBTE",
        provinces: [
            { name: "Punjab", count: 36 },
            { name: "Sindh", count: 0 },
            { name: "KPK", count: 0 },
            { name: "Balochistan", count: 0 }
        ],
        color: "#f59e0b"
    },
    {
        id: 3,
        name: "SBTE",
        provinces: [
            { name: "Punjab", count: 0 },
            { name: "Sindh", count: 29 },
            { name: "KPK", count: 0 },
            { name: "Balochistan", count: 0 }
        ],
        color: "#10b981"
    },
    {
        id: 4,
        name: "KBTE",
        provinces: [
            { name: "Punjab", count: 0 },
            { name: "Sindh", count: 0 },
            { name: "KPK", count: 25 },
            { name: "Balochistan", count: 0 }
        ],
        color: "#ef4444"
    },
    {
        id: 5,
        name: "PVTC",
        provinces: [
            { name: "Punjab", count: 32 },
            { name: "Sindh", count: 18 },
            { name: "KPK", count: 15 },
            { name: "Balochistan", count: 10 }
        ],
        color: "#8b5cf6"
    },
    {
        id: 6,
        name: "PCDA",
        provinces: [
            { name: "Punjab", count: 15 },
            { name: "Sindh", count: 12 },
            { name: "KPK", count: 9 },
            { name: "Balochistan", count: 7 }
        ],
        color: "#ec4899"
    }
];

// Dummy data for Institute Metrics Chart
export const InstituteMetricsDummyData = [
  // Punjab Departments
  {
    year: '2025',
    province: 'Punjab',
    ministry: 'Ministry of Education',
    department: 'Punjab Education Department',
    metrics: {
      Registration: { Registered: 80, NonRegistered: 20 },
      Accreditation: { National: 50, International: 10 },
      Ownership: { Govt: 30, Private: 10 },
      Type: { Vocational: 40, Technical: 30, Professional: 30 }
    }
  },
  {
    year: '2025',
    province: 'Punjab',
    ministry: 'Ministry of Health',
    department: 'Punjab Health Department',
    metrics: {
      Registration: { Registered: 60, NonRegistered: 40 },
      Accreditation: { National: 30, International: 5 },
      Ownership: { Govt: 25, Private: 15 },
      Type: { Vocational: 20, Technical: 30, Professional: 50 }
    }
  },
  {
    year: '2025',
    province: 'Punjab',
    ministry: 'Ministry of Technical',
    department: 'Punjab Technical Department',
    metrics: {
      Registration: { Registered: 70, NonRegistered: 30 },
      Accreditation: { National: 40, International: 8 },
      Ownership: { Govt: 28, Private: 12 },
      Type: { Vocational: 25, Technical: 35, Professional: 40 }
    }
  },
  // Sindh Departments
  {
    year: '2025',
    province: 'Sindh',
    ministry: 'Ministry of Education',
    department: 'Sindh Education Department',
    metrics: {
      Registration: { Registered: 60, NonRegistered: 40 },
      Accreditation: { National: 40, International: 20 },
      Ownership: { Govt: 20, Private: 20 },
      Type: { Vocational: 30, Technical: 40, Professional: 30 }
    }
  },
  {
    year: '2025',
    province: 'Sindh',
    ministry: 'Ministry of Health',
    department: 'Sindh Health Department',
    metrics: {
      Registration: { Registered: 55, NonRegistered: 45 },
      Accreditation: { National: 35, International: 10 },
      Ownership: { Govt: 18, Private: 22 },
      Type: { Vocational: 28, Technical: 32, Professional: 40 }
    }
  },
  {
    year: '2025',
    province: 'Sindh',
    ministry: 'Ministry of Technical',
    department: 'Sindh Technical Department',
    metrics: {
      Registration: { Registered: 65, NonRegistered: 35 },
      Accreditation: { National: 45, International: 15 },
      Ownership: { Govt: 25, Private: 15 },
      Type: { Vocational: 35, Technical: 45, Professional: 20 }
    }
  },
  // Balochistan Departments
  {
    year: '2025',
    province: 'Balochistan',
    ministry: 'Ministry of Education',
    department: 'Balochistan Education Department',
    metrics: {
      Registration: { Registered: 55, NonRegistered: 45 },
      Accreditation: { National: 35, International: 15 },
      Ownership: { Govt: 22, Private: 18 },
      Type: { Vocational: 35, Technical: 35, Professional: 30 }
    }
  },
  {
    year: '2025',
    province: 'Balochistan',
    ministry: 'Ministry of Health',
    department: 'Balochistan Health Department',
    metrics: {
      Registration: { Registered: 50, NonRegistered: 50 },
      Accreditation: { National: 30, International: 10 },
      Ownership: { Govt: 20, Private: 20 },
      Type: { Vocational: 25, Technical: 30, Professional: 45 }
    }
  },
  {
    year: '2025',
    province: 'Balochistan',
    ministry: 'Ministry of Technical',
    department: 'Balochistan Technical Department',
    metrics: {
      Registration: { Registered: 60, NonRegistered: 40 },
      Accreditation: { National: 40, International: 12 },
      Ownership: { Govt: 24, Private: 16 },
      Type: { Vocational: 30, Technical: 40, Professional: 30 }
    }
  },
  // KPK Departments
  {
    year: '2025',
    province: 'KPK',
    ministry: 'Ministry of Education',
    department: 'KPK Education Department',
    metrics: {
      Registration: { Registered: 70, NonRegistered: 30 },
      Accreditation: { National: 45, International: 18 },
      Ownership: { Govt: 28, Private: 12 },
      Type: { Vocational: 32, Technical: 38, Professional: 30 }
    }
  },
  {
    year: '2025',
    province: 'KPK',
    ministry: 'Ministry of Health',
    department: 'KPK Health Department',
    metrics: {
      Registration: { Registered: 65, NonRegistered: 35 },
      Accreditation: { National: 40, International: 15 },
      Ownership: { Govt: 26, Private: 14 },
      Type: { Vocational: 30, Technical: 35, Professional: 35 }
    }
  },
  {
    year: '2025',
    province: 'KPK',
    ministry: 'Ministry of Technical',
    department: 'KPK Technical Department',
    metrics: {
      Registration: { Registered: 75, NonRegistered: 25 },
      Accreditation: { National: 50, International: 20 },
      Ownership: { Govt: 30, Private: 10 },
      Type: { Vocational: 35, Technical: 45, Professional: 20 }
    }
  },
  // Federal Example
  {
    year: '2025',
    province: 'Federal',
    ministry: 'Ministry of Education',
    department: 'Federal Education Department',
    metrics: {
      Registration: { Registered: 90, NonRegistered: 10 },
      Accreditation: { National: 60, International: 15 },
      Ownership: { Govt: 40, Private: 5 },
      Type: { Vocational: 35, Technical: 30, Professional: 35 }
    }
  },
  {
    year: '2025',
    province: 'Federal',
    ministry: 'Ministry of Education',
    department: 'Federal Higher Education Department',
    metrics: {
      Registration: { Registered: 85, NonRegistered: 15 },
      Accreditation: { National: 55, International: 20 },
      Ownership: { Govt: 38, Private: 7 },
      Type: { Vocational: 30, Technical: 40, Professional: 30 }
    }
  },
  // ...add more dummy records as needed
];

export { LatestTransationData, OrderStatusData, OverViewData, SocialSourceData, NotificationsData, AffiliationBodyData };