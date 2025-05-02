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
        bgcolor: "primary"
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

export { LatestTransationData, OrderStatusData, OverViewData, SocialSourceData, NotificationsData };