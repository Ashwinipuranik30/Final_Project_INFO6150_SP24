import React from 'react';
import MissionVisionSection from "../Components/vissionmission";





const About = () => {
    return (
      <div>

        <section className="bg-white">
              <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="bg-teal-500 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
                  <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">Who we are</h1>
                  <p className="text-lg font-normal text-white mb-6 ">At Tripinn, our journey began with a singular goal: to enrich lives by making once-in-a-lifetime trips a reality for our customers. With a firm belief that international travel should be accessible to all, we set out to curate unforgettable experiences that transcend boundaries and create lasting memories. From the moment you step into our world, expect nothing less than personalized service, unwavering dedication, and a commitment to helping you explore the wonders of our diverse planet.</p>
                </div>

              

              <div className= "grid md:grid-cols-2 gap-8">
                 <div className="bg-gray-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 my-8 " >
                  <MissionVisionSection
                    title="Mission"
                    description="Our mission at Tripinn is to inspire and empower individuals to explore the world by providing exceptional travel experiences tailored to their unique interests and preferences. We strive to create unforgettable memories, foster cultural understanding, and promote sustainable travel practices. With our expertise, personalized service, and commitment to excellence, we aim to be the trusted partner for all our clients' travel needs, ensuring every journey is filled with adventure, discovery, and joy."
                  />
                  </div>
                  <div className="bg-gray-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  my-8 p-8 md:p-12">
                  <MissionVisionSection
                    title="Vision"
                    description="Our vision is to inspire and enable people to explore the world by providing exceptional travel experiences that exceed expectations. We aim to be the preferred choice for travelers seeking personalized, immersive, and unforgettable journeys. Through innovation, integrity, and a commitment to excellence, we strive to create lifelong memories and foster a deeper appreciation for the diverse cultures and natural wonders of our planet."
                  />
                  </div>
                </div>

                </div>
                  
                
                
              
            </section>










      </div>
    );
  };
  
  export default About;