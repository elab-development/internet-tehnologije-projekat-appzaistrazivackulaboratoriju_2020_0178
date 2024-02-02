import React, { useState, useRef, useEffect, Fragment } from 'react';
import Adapt from './components/Adapt';
import Nav from './components/NavBar'
import './components/style.css';
import Footer from './components/Footer';


const About = () => {

    const categories = [
        {
            letter: "A",
            ability: "Agility",
            text:
                "leveraging advanced genomics knowledge to provide insights and solutions\n" +
                "                        tailored to your specific genetic requirements",
            className: "adapt-example A-1",
        },
        {
            letter: "D",
            ability: "Dynamism",
            text:
                "ensuring a swift and accurate analysis process to keep pace with the rapidly\n" +
                "                        evolving field of genomics",
            className: "adapt-example D",
        },
        {
            letter: "A",
            ability: "Analytical approach",
            text:
                "providing a nuanced and detailed interpretation of genomic data to uncover\n" +
                "                        valuable insights",
            className: "adapt-example A-2",
        },
        {
            letter: "P",
            ability: "Performance focus",
            text: "translating genomic analysis into optimized strategies for enhanced outcomes",
            className: "adapt-example P",
        },
        {
            letter: "T",
            ability: "Tailoring",
            text: "delivering personalized genomic services that align with your unique genetic profile",

            className: "adapt-example T",
        },
    ];


    return (
        <div style={{ overflow: "auto" }}>
            <Nav />
            <div className='header-text-about'>

          <h1 className='header-h'>
          <span className="header-h-lighter-about">THIS IS</span> ABOUT YOU.
            <br />
              <span className="header-h-lighter-about">NOT ABOUT US.</span>
          </h1>
            </div>
            <hr/>
            <div className='about-div'>
                Welcome to Genoma Vision Lab Tech, where cutting-edge technology
                meets the forefront of genomics exploration. Our state-of-the-art laboratory
                is dedicated to unraveling the mysteries of the human genome and
                pushing the boundaries of scientific discovery.

                At Genoma Vision Lab Tech, we are driven by a passion for understanding the
                intricate code that shapes life. Our team of expert scientists, researchers, and technologists
                collaboratively work towards advancing genomics research, paving the way for
                groundbreaking insights into human health and genetic diversity.

                Our lab is equipped with the latest technological advancements, enabling
                us to conduct precise and comprehensive analyses of genetic material.
                From DNA sequencing to advanced bioinformatics, we employ a multidisciplinar
                y approach to decode the complexities of the genome.
            </div>


            <div className="adapt-examples">
                {categories.map((category, key) => (
                    <Fragment key={key}>
                        <Adapt
                            text={category.text}
                            letter={category.letter}
                            ability={category.ability}
                            className={category.className}
                        />
                    </Fragment>
                ))}
            </div>


            <div className='about-div-second'>
                What sets Genoma Vision Lab Tech apart is our commitment to innovation
                and excellence. We continually strive to stay at the forefront of genomics
                research by investing in cutting-edge technologies and fostering a culture of
                curiosity and collaboration. Our mission is to contribute significantly to
                the understanding of genetic factors influencing health, disease, and the overall human experience.

                As advocates for ethical genomics research, we prioritize data privacy and adher
                e to the highest standards of scientific integrity. Our lab is dedicated to
                providing reliable, accurate, and meaningful insights that contribute to
                the global scientific community's understanding of the genomic landscape.

                Explore the possibilities with Genoma Vision Lab Tech and join us on a journey
                to unlock the secrets hidden within the strands of DNA. Together, let's shape
                the future of genomics and pave the way for a healthier and more informed world.
            </div>
            
            <Footer />

        </div>
    );
};

export default About;
