import React from 'react'
import {Carousel} from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="slideHome mb-5">
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2022/11/20/20/43/fall-7605210_960_720.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container rounded" id='lingkungan'>
        <div className="cardAction" id='card-lingkungan'>
        <img className='mt-3 mb-2' id='image-ilus' src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669134055/MyNature/Sunny_day_t0t4ca.svg" alt="" />
        <h1 className='text-left'>Jaga Lingkungan Lebih Asik Dilakukan Bersama</h1>
        </div>
      </div>


      <Carousel className='text-none'>
      <Carousel.Item className='mb-5'>
        <div className="container-harapan">
      <h2>Apa Harapan Mereka ?</h2>
      <div className="container-card">
        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/sheha_w541d2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Donita</h5>
              <p className="harapan">“ Semoga banyak generasi muda yang makin sadar pentingnya menjaga lingkungan dan ikut
                aktif dalam melakukan perubahannya ”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/reza_jnvba2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Reza</h5>
              <p className="harapan">“ Indonesia harus kembali hijau lagi seperti dulu dan terus menjadi paru paru dunia demi
                keberlangsungan hidup kita semua ”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/tegar_olhhfz.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Tegar</h5>
              <p className="harapan">“ Masyarakat harus banyak mengetahui informasi tentang isu lingkungan yang sedang terjadi
                saat ini agar mereka bisa ikut kontribusi menanggulangi masalah tersebut ”</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </Carousel.Item>

    <Carousel.Item className='mb-5'>
    <div className="container-harapan">
      <h2>Apa Harapan Mereka ?</h2>
      <div className="container-card">
        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/sheha_w541d2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Sheha</h5>
              <p className="harapan">“ Jagalah kelestarian alam untuk generasi-generasi mendatang dengan tidak 
              menimbulkan banyak masalah. Kalau bukan kita, siapa lagi yang akan menjaganya ”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/reza_jnvba2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Dustin</h5>
              <p className="harapan">“ Yuk, mari bersama sama merawat dan melestarikan negri kita karena menjaga lingkungan 
              bukan hanya angan-angan, tapi tindakan.”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/tegar_olhhfz.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Fanuel</h5>
              <p className="harapan">“Bagaimana bisa kita hancurkan habitat dari banyaknya makhluk hidup demi kepuasan 
              sementara sedangkan dampak masa depan di abaikan. Ayo jangan biarkan itu terjadi. ”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Carousel.Item>
    </Carousel>

    </>
  )
}

export default Home