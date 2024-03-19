import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from "./image/noimage.jpg";

const MenuPage = () => {
  const menuItems = [
    {
      name: 'California Roll',
      description: 'Crab, avocado, cucumber, and sesame seeds rolled in nori and sushi rice',
      price: '120.00',
      image: image1,
    },
    {
      name: 'Salmon Nigiri',
      description: 'Fresh salmon slices over pressed sushi rice',
      price: '60.00',
      image: image1,
    },
    {
      name: 'Tempura Udon',
      description: 'Thick wheat noodles in a hot broth with tempura shrimp and vegetables',
      price: '160.00',
      image: image1,
    },
    {
      name: 'Sashimi Platter',
      description: 'Assortment of fresh raw fish slices served with soy sauce and wasabi',
      price: '200.00',
      image: image1,
    },
    {
      name: 'Chicken Teriyaki',
      description: 'Grilled chicken glazed with sweet teriyaki sauce, served with steamed rice and vegetables',
      price: '210.00',
      image: image1,
    },
    {
      name: 'Miso Soup',
      description: 'Soybean paste soup with tofu, seaweed, and green onions',
      price: '140.00',
      image: image1,
    },
  ];

  return (
    <div className='p-4 m-4'>
      <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
        <h5 className="mt-5 section-title ff-secondary text-center text-danger fw-normal">Food Menu</h5>
        <h1 className="mb-5 fw-semi-bold">Our Menu</h1>
      </div>
      <div className="container">
        <div className="row">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body d-flex flex-row align-items-center">
                  <img src={item.image} className="card-img-left img-fluid rounded" style={{ width: '80px' }} alt={item.name} />
                  <div className="flex-grow-1">
                    {/* <p className="card-text">{item.description}</p> */}
                    <div className="d-flex justify-content-between border-bottom pb-2">
                    <span className="text-clamp fw-semi-bold">{item.name.toUpperCase()}</span>
                      <span className="text-danger fw-semi-bold">₱{item.price.toLocaleString()}</span>
                    </div>
                    <form method="POST" action="">
                      <button className="btn btn-danger mt-3 w-100" name="add-to-cart">Add to Cart</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
