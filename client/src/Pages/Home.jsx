import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import cardData from '../Data/CardData';
import ScrollToTopButton from '../Components/ScrollToTopButton';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredData = cardData.filter((item) =>
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} data-aos="fade-up">
            <Cards
              image={item.image}
              location={item.location}
              title={item.title}
              price={item.price}
              deposit={item.deposit}
              roomType={item.roomType}
              highlights={item.highlights}
              description={item.description}
            />
          </div>
        ))
      ) : (
        <p className="text-center mt-5">No results found.</p>
      )}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
