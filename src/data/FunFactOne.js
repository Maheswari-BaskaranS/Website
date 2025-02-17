import image from '@/assets/images/resources/counter-1-1.jpg';
import shape from '@/assets/images/shapes/counter-border-1.png';
import shapeRtl from '@/assets/images/shapes/counter-border-1-rtl.png';

const funFactOneData = {
  image,
  shape,
  shapeRtl,
  items: [
    {
      id: 1,
      text: 'Professionals Trained Successfully',
      count: "63",
      identity: ""
    },
    {
      id: 2,
      text: 'Completed Projects',
      count: "26",
      identity: "funfact-one__item--two"
    },
    {
      id: 3,
      text: 'Dedicated Customer Support',
      count: "26",
      identity: "funfact-one__item--three"
    }
  ],
  accordionData: [
    {
      id: 1,
      header: 'Why choose our software solutions?',
      content: "We deliver innovative and scalable solutions tailored to your business needs, ensuring increased efficiency and growth opportunities."
    },
    {
      id: 2,
      header: 'What industries do we serve?',
      content: "Our solutions cater to a wide range of industries, including retail, healthcare, education, and enterprise-level businesses."
    },
    {
      id: 3,
      header: 'How do we ensure project success?',
      content: "By employing a result-driven approach, clear communication, and agile methodologies, we deliver projects on time and within scope."
    },
    {
      id: 4,
      header: 'What makes our customer support unique?',
      content: "Our customer support team provides personalized assistance, ensuring your operations run smoothly and any issues are promptly resolved."
    },
    {
      id: 5,
      header: 'What technologies do we specialize in?',
      content: "We specialize in cutting-edge technologies, including cloud computing, AI, machine learning, and web development frameworks."
    }
  ]
};

export default funFactOneData;
