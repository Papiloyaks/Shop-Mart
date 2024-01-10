import React from 'react'
import coco from '../assets/images/coco.jpg'
import blue from '../assets/images/blue.jpeg'
import blee from '../assets/images/blee.jpeg'
import chanel from  '../assets/images/chanel.jpg'
import { GrFormNext, GrFormPrevious, GrAdd } from 'react-icons/gr'

const CommerceTwo = () => {
  return (
    <>
     <div id='con' className="container mt-5 py-4">
            <div className="row">
    <div className="col-lg-5 my-5">
        <img id='image' className='rounded' src={chanel} alt="productImage" />
        <GrFormNext id='next' onClick={handleNext} />
        <GrFormPrevious id='previous' onClick={handlePrevious} />
        <div id='pro' className='row'>
            <div id='img' className='col-lg-2 mt-4'><img src={coco} alt="" width={60} /></div>
            <div id='img' className='col-lg-2 mt-4'><img src={blue} alt="" width={40} /></div>
            <div id='img' className='col-lg-2 mt-4'><img src={blee} alt="" width={60} /></div>
            {/* <div id='img' className='col-lg-2 mt-4'><img src={image4} alt="" width={60} /></div> */}
        </div>
    </div>
    <div id='comp' className="col-lg-7">
        <h3 className='mt-5 fw-bold'>SNEAKER COMPANY</h3>
        <h2 id='fall text-dark'>Fall Limited Edition Sneakers</h2>
        <p className='mt-5'>The low profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubbber outer sole, they'll <br /> withstand everything the weather can offer.</p>
        <span id='per'>50,000</span> <span id='cent'>20%</span>
        <h5 className='text-decoration-line-through'>#60,000</h5>


    </div>

</div>

</div>
<div id='con' className="container">
<div className='row'>
    <div className="col-lg-5"></div>

    <div className="col-lg-6">
        <div className="row">
            <div className="col-lg">
              
            </div>


            <div className="col-lg-10">
                <div id='button' className='rounded w-100 bg-danger text-white'>
                    <div className='mx-auto text-center'>
                        <AiOutlineShoppingCart /><button onClick={productCart} className='btn fw-bold text-white'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default CommerceTwo