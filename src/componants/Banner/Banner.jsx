import React from 'react'
// import bannerImg from '../../assets/image/book.webp'
import bookStack from '../../assets/image/bookstack.mp4'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content px-10 flex-col lg:flex-row-reverse">
          {/* <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div className="flex flex-1 px-6">
            <video autoPlay loop muted className="w-full">
              <source src={bookStack} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-1 px-6">
            <div className="">
              <h1 className="text-5xl font-bold font-libra py-6 ">
                Book to freshen up your bookshelf
              </h1>

              <button className="btn btn-primary my-10">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
