import img1 from '../Assets/images/1.jpeg';
import img2 from '../Assets/images/2.jpeg';
import img3 from '../Assets/images/3.jpeg';
import img4 from '../Assets/images/4.jpeg';
import img5 from '../Assets/images/5.jpeg';
import img6 from '../Assets/images/6.jpeg';
import img7 from '../Assets/images/7.jpeg';
import img8 from '../Assets/images/8.jpeg';
import img9 from '../Assets/images/9.jpeg';
// import img10 from '../Assets/images/10.jpeg';
// import img11 from '../Assets/images/11.jpg';

const commonHighlights = [
  "North-East Facing",
  "Lease Up To Date"
];

const cardData = [
  {
    id: 1,
    image: img1,
    location: "Sector 48, Noida",
    title: "D Block, Sector 48, Noida",
    price: "11.25 Cr",
    deposit: "One Time Lease ₹12.25 Cr",
    roomType: "Residential Plot",
    highlights: [
      "Area - 450 SQ MTRS",
      ...commonHighlights,
      "Located on 12 MTR Wide Road",
      "New Allotment"
    ],
    description:
      "Prime residential plot with vastu-compliant northeast facing. Located on a 12-meter wide road in Sector 48, Noida. Excellent connectivity, new allotment, lease fully updated. Ideal for construction or investment."
  },
  {
    id: 2,
    image: img2,
    location: "Sector 151, Noida",
    title: "412 SQ MTRS Plot with 18 MTRS Road",
    price: "7.35 - 7.50 Cr",
    deposit: "One Time Lease",
    roomType: "Residential Plot",
    highlights: [
      "Area - 412 SQ MTRS",
      ...commonHighlights,
      "18 MTR Wide Road",
      "Allotment Date Not Available"
    ],
    description:
      "Spacious 412 SQ MTR residential plot in Sector 151 with northeast facing and wide road access. Excellent for investment or end-use."
  },
  {
    id: 3,
    image: img3,
    location: "Sector 70, Noida",
    title: "300 SQ MTRS Residential Plot",
    price: "6 - 6.50 Cr",
    deposit: "One Time Lease",
    roomType: "Residential Plot",
    highlights: [
      "Area - 300 SQ MTRS",
      ...commonHighlights,
      "18 MTR Wide Road",
      "Allotment Date: 2007-2008"
    ],
    description:
      "A well-located northeast facing 300 SQ MTRS residential plot in Sector 70. Great for building your own home."
  },
  {
    id: 4,
    image: img4,
    location: "Sector 44, Noida",
    title: "B Block, 450 SQ MTRS, Sector 44",
    price: "27 Cr",
    deposit: "Commercial Conversion Free",
    roomType: "Residential Plot",
    highlights: [
      "450 SQ MTRS",
      "30 MTR Wide Road",
      ...commonHighlights
    ],
    description:
      "Premium residential plot in Sector 44 with wide road access and northeast facing. Suitable for builders or private residences."
  },
  {
    id: 5,
    image: img5,
    location: "Sector 44, Noida",
    title: "B Block, 350 SQ MTRS",
    price: "17 Cr",
    deposit: "Northeast Facing",
    roomType: "Residential Plot",
    highlights: [
      "350 SQ MTRS",
      "18 MTR Wide Road",
      ...commonHighlights
    ],
    description:
      "Prime northeast facing plot with great connectivity. Perfect for a luxurious residential build."
  },
  {
    id: 6,
    image: img6,
    location: "Sector 44, Noida",
    title: "B Block, 450 SQ MTRS with Flexible Terms",
    price: "21 Cr",
    deposit: "12 Months Payment Time",
    roomType: "Residential Plot",
    highlights: [
      "450 SQ MTRS",
      ...commonHighlights,
      "Flexible Payment Terms"
    ],
    description:
      "Spacious plot in Sector 44 with northeast facing and flexible payment schedule. Great for investment or personal use."
  },
  {
    id: 7,
    image: img7,
    location: "Sector 44, Noida",
    title: "B Block, 450 SQ MTRS",
    price: "21 Cr",
    deposit: "12 Months Payment Time",
    roomType: "Residential Plot",
    highlights: [
      "450 SQ MTRS",
      ...commonHighlights,
      "Great Investment Opportunity"
    ],
    description:
      "A perfect plot in Sector 44, northeast facing with excellent investment potential and convenient payment plan."
  },
  {
    id: 8,
    image: img8,
    location: "Sector 151, Noida",
    title: "Plots from 35-300 SQ MTRS @1.80 L/SQM",
    price: "Varies",
    deposit: "Per SQM Rate: ₹1.80 Lacs",
    roomType: "Residential Plot",
    highlights: [
      "Sizes: 35-300 SQ MTRS",
      ...commonHighlights,
      "Rate: ₹1.80 L/SQM"
    ],
    description:
      "Affordable northeast facing plots in Sector 151 ranging from 35 to 300 SQ MTRS. Ideal for investors or small families."
  },
  {
    id: 9,
    image: img9,
    location: "Sector 151, Noida",
    title: "Plots @ ₹2 Lacs/SQM in Sector 151",
    price: "Varies",
    deposit: "Per SQM Rate: ₹2.00 Lacs",
    roomType: "Residential Plot",
    highlights: [
      "Size: 300 SQ MTR Each",
      ...commonHighlights
    ],
    description:
      "Premium plots in Sector 151 with northeast facing and updated lease. Ideal for long-term investment or family homes."
  }
];

export default cardData;
