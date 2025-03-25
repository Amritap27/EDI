import React from 'react';

const Rating = () => {
  const plans = [
    {
      stars: '★★★',
      title: 'Three Star',
      steel: 'Jagdamba or similar range of Steel',
      cement: 'Shivam OPC/PPC or similar range of Cement',
      bathroom: 'Medium Range',
      kitchen: 'Normal Granite Countertop slab and Chimney hood',
      electrical: 'Medium Range',
    },
    {
      stars: '★★★★★',
      title: 'Five Star',
      steel: 'Hama or similar range of Steel',
      cement: 'Shivam/Maruti or similar range of Cement',
      bathroom: 'Medium to High Range (Cera, Somany range)',
      kitchen: 'Medium range Granite Countertop slab and Chimney hood',
      electrical: 'Medium to High Range (Janata cables, Vishal etc.)',
    },
    {
      stars: '★★★★★★★',
      title: 'Seven Star',
      steel: 'Panchakanya/Hama/Himal or similar range of Steel',
      cement: 'Hetauda/Maruti or similar range of Cement',
      bathroom: 'High Range (Kohler, Jaquar range)',
      kitchen: 'High range Granite Countertop slab and Chimney hood',
      electrical:
        'High Range (Janata cables, Havells, Siemens, Polycab, Rathi etc.)',
    },
  ];

  return (
    <div className="rating-container">
      <div className="rating-grid">
        {plans.map((plan, index) => (
          <div key={index} className="rating-card">
            <div className="rating-header">{plan.stars}</div>
            <div className="rating-content">
              <div>
                <h3>{plan.title}</h3>
                <p>
                  <strong>Steel:</strong> {plan.steel}
                </p>
                <p>
                  <strong>Cement:</strong> {plan.cement}
                </p>
                <p>
                  <strong>Bathroom Fittings:</strong> {plan.bathroom}
                </p>
                <p>
                  <strong>Kitchen:</strong> {plan.kitchen}
                </p>
                <p>
                  <strong>Electrical Fittings:</strong> {plan.electrical}
                </p>
              </div>
              <div>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="customize-btn">Customize Your Own</button>
    </div>
  );
};

export default Rating;
