import React from 'react';

const Cards = ({
  image = '',
  location = '',
  title = '',
  price = '',
  deposit = '',
  roomType = '',
  highlights = [],
  description = '',
}) => {

  const handleCall = () => {
    const whatsappNumber = '9319412015'; 
    const message = `Hi, I'm interested in the property: ${title}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleContact = () => {
    window.location.href = 'mailto:noidap38@gmail.com';
  };

  return (
    <div className="container my-5 rounded-4 card-wrapper shadow-sm">
      <div className="row">
        <div className="col-md-12 p-0 m-0">
          <div className="container p-0 m-0">
            <div className="row g-0">

              {/* Image Section */}
              <div className="col-md-4 p-0 m-0">
                <div className="container-fluid p-0 m-0">
                  <img
                    src={image}
                    className="d-block w-100 rounded-4 card-img"
                    alt="property"
                  />
                </div>
              </div>

              {/* Property Info */}
              <div className="col-md-6 d-flex flex-column justify-content-center px-5 py-2">
                <h5 className="f_15 fw-semibold mb-1">{location}</h5>
                <p className="f_13 fw-semibold text-secondary mb-2">{title}</p>

                <p className="mb-1 f_14">
                  <strong className="me-2 fw-semibold">₹{price}</strong>
                  <span className="text-secondary fw-semibold"> Asking Price</span>
                </p>
                {/* <p className="f_13 fw-semibold text-muted">{deposit}</p> */}

                <p className="f_13 mb-1">
                  <strong>Property Type:</strong>
                  <span className='fw-semibold'> {roomType} </span>
                </p>

                {highlights.length > 0 && (
                  <>
                    <p className="f_13 mb-1"><strong>Highlights:</strong></p>
                    <ul className="f_12 ps-3 mb-2 fw-semibold text-muted">
                      {highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                <p className="f_12 text-muted fw-semibold">
                  {description}
                </p>
              </div>

              {/* Call & Contact */}
              <div className="col-md-2 d-flex flex-column justify-content-center align-items-center gap-2 py-4">
                <button onClick={handleCall} className="btn text_b border_b f_14 fw-semibold rounded-4 px-4 w-75">Call Now</button>
                <button onClick={handleContact} className="btn bg_b text-white f_14 fw-semibold rounded-4 px-4 w-75">Contact</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
