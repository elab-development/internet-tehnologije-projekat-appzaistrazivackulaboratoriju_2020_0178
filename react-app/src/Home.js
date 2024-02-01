import React, { useState, useRef, useEffect, Fragment } from 'react';
import Footer from './components/Footer';
import './components/style.css';
import SliderCard from './components/SliderCard';
import image3 from "./images/GAT_Endurance_0.svg";
import image from "./images/GAT_Endurance_0.svg";
import image1 from "./images/random_logo_by_criticl_d7eqdvw-pre.png";
import image2 from './images/download.png';
import image4 from './images/png-clipart-github-pages-random-icons-white-logo.png';
import image5 from './images/logo.png'
import NavBar from './components/NavBar';


const HomePage = () => {
    const [state, setState] = useState({
        mouseDown: false,
        startX: null,
        scrollLeft: null,
        isVisible: false,
        viewport: true,
        yellowBox: true,
        scrollTimer: null,
        scrolling: false,
        isScrolling: false,
        overflowDiv: false,
    });

    const slider = useRef(null);
    const cocaineLineRef = useRef(null);

    const cards = [
        {
            img: image,

            first:
                ` "Collaborating with the Genoma Vision Lab has been a genuine partnership. We highly recommend
        their services to any company in the endurance industry aiming to enhance their brand and attain
        remarkable PR results."`,

            second:
                `"Their expertise in the endurance sector, professionalism, and dedication to achieving exceptional outcomes make them a standout agency in the endurance PR
        landscape. We anticipate continuing our partnership and attaining 
        even greater success together."`,

            name: "Uri Stern",
            position: "Business Development",
            company: "Endurance",
        },
        {
            img: image1,
            first:
                "“Genoma Vision Lab is an outstanding marketing agency that has far exceeded our\n" +
                "                        expectations. What truly sets them apart is their unparalleled dedication and commitment to our\n" +
                "                        success. Right from the beginning, their team seamlessly integrated with ours, making us feel\n" +
                "                        like they’re an extension of our own team rather than an external agency. Their expertise in\n" +
                "                        performance marketing is unrivalled, consistently delivering results.",
            second:
                "Genoma Vision Lab has become an invaluable partner, and we wholeheartedly recommend their\n" +
                '                        services. We eagerly look forward to the continued success they bring to our partnership."',
            name: "Tajinder Virk",
            position: "Co-Founder & CEO",
            company: "Finvasia",
        },
        {
            img: image2,
            first:
                "”We absolutely recommend working with the Genoma Vision Lab! Our collaboration began\n" +
                "                        a year and a half ago, and I can only speak highly of them. Not only did they manage to find the\n" +
                "                        best agents to meet our needs, but they are also super organized and are following up on the\n" +
                "                        work, the quality and everything that we could possibly ask. We truly feel like we are working\n" +
                "                        together, and everyone at Genoma Vision Lab is just super supportive. Thank you for everything, and we look\n" +
                "                        forward to continuing our journey together.”",
            name: "Solveig Adrey",
            position: "Comunity specialist",
            company: "eToro",
        },
        {
            img: image4,
            first:
                "“I am delighted to share my experience working with the Genoma Vision Lab, the\n" +
                "                        driving force behind the remarkable transformation of our brokerage firm from a humble local\n" +
                "                        startup to a prominent global player in the financial industry.",
            second:
                "When we first engaged the agency, we were seeking expertise to expand our\n" +
                "                        reach, enhance our brand presence, and establish credibility on an international scale. From the\n" +
                "                        outset, the UF team demonstrated an unparalleled level of professionalism, strategic thinking\n" +
                "                        and commitment to our success.”",
            name: "Yakubu Ishaku",
            position: "CEO",
            company: "Kwakol Markets",
        },
        {
            img: image5,
            first:
                "“The Genoma Vision Lab has been an invaluable partner for us at PayRetailers. Their\n" +
                "                        expertise in the fintech industry and strategic guidance have significantly enhanced our brand\n" +
                "                        visibility and delivered exceptional results. We have consistently been impressed with their\n" +
                "                        meticulous attention to detail and their ability to create memorable and successful PR campaigns\n" +
                "                        for\n" +
                "                        our brand.”",
            name: "Bol Barcelo",
            position: "Head of marketing",
            company: "PayRetailers",
        },
        {
            img: "/images/ARDUPRIME.png",
            first:
                "“Working with UF did not feel like working with an agency, but rather like\n" +
                "                        with a trusted partner. The team’s professionalism and ability to listen are exceptional.",
            second:
                "Usually, for clients, it is hard to express what needs to be done, but rather\n" +
                "                        what we want to see as an end result. They were superb in offering us different ideas and\n" +
                "                        avenues on how to achieve our goals, but also executing them at the highest standards.”",
            name: "Aleksandra Buimistere",
            position: "Chief Communication officer”",
            company: "Ardu Prime",
        },
        {
            img: "/images/THINKMARKETS.png",
            first:
                "“Throughout our collaboration on reputation management, I have found the UF\n" +
                "                        team to be exceptionally professional, diligent, thorough and proactive in their work, getting\n" +
                "                        great results in terms of our 3rd party heightened profiles.",
            second:
                "With their deep industry knowledge and expertise, they have fully immersed\n" +
                "                        themselves in our brand, services and offerings, ensuring that profile refreshes were undertaken\n" +
                "                        in a timely manner and effectively conveyed the right messaging.”",
            name: "Nick Walter",
            position: "Senior Digital Marketing Manager",
            company: "ThinkMarkets",
        },
        {
            img: "/images/FLOWBANK_card.png",
            first:
                "“UF is a wonderful partner to ensure that you are reaching the right\n" +
                "                        audiences with the right message. After only 6 months of collaboration, we see increased traffic\n" +
                "                        and engagement on our site from the collaborations that UF sourced.”",
            name: "Michelle Fotopoulou",
            position: "Head of Digital Marketing",
            company: "FlowBank",
        },
        {
            img: "/images/FINALTO123.png",
            first:
                "“We’ve had a relationship with the UF Agency for years and cannot recommend\n" +
                "                        them highly enough. They are proactive, attentive and engage with us to help us achieve our\n" +
                "                        marketing goals.”",
            name: "Philippa Mcintosh",
            position: "B2B Marketing Manager",
            company: "Finalto",
        },
        {
            img: "/images/INTIVIONLOGO.png",
            first:
                "“I am thrilled to provide a glowing testimonial for UF’s exceptional\n" +
                "                        services. When we approached them to create the visual identity and the website for our company\n" +
                "                        we had high expectations, and they exceeded every single one of them.\n" +
                "                        From the initial consultation to the final delivery, the design team\n" +
                "                        showcased their remarkable talent by crafting a unique brand identity and a visually stunning\n" +
                "                        and user-friendly website. The layout, color scheme, and overall aesthetics perfectly captured\n" +
                "                        our company’s essence, enhancing our brand image and online presence.",
            second:
                "Throughout the entire process, the UF team was incredibly responsive and\n" +
                "                            accommodating. They took the time to listen to our vision and branding requirements,\n" +
                "                            promptly addressed our queries and offered valuable suggestions to optimize the website’s\n" +
                "                            performance and user engagement.",
            third:
                "Working with the UF Agency was an absolute pleasure, and we couldn’t be\n" +
                "                            happier with the result. If you’re looking for a top-notch branding and creative partner, I\n" +
                "                            wholeheartedly recommend UF. Their exceptional skills, professionalism and dedication will\n" +
                "                            undoubtedly elevate your online presence and help you achieve your digital goals. We are\n" +
                "                            grateful for their outstanding work and look forward to partnering with them again in the\n" +
                "                            future.”",
            name: "Aman Sheriff",
            position: "Founder & CEO",
            company: "Intivion",
        },
    ];




    //   const startDragging = (e) => {
    //     setState((prevState) => ({
    //       ...prevState,
    //       mouseDown: true,
    //       startX: e.pageX - slider.current.offsetLeft,
    //       scrollLeft: slider.current.scrollLeft,
    //     }));
    //   };

    //   const stopDragging = () => {
    //     setState((prevState) => ({ ...prevState, mouseDown: false }));
    //   };

    //   const move = (e) => {
    //     e.preventDefault();
    //     if (!state.mouseDown) {
    //       return;
    //     }
    //     const x = e.pageX - slider.current.offsetLeft;
    //     const scroll = x - state.startX;
    //     slider.current.scrollLeft = state.scrollLeft - scroll;
    //   };

    //   useEffect(() => {
    //     // const categoriesList = state.viewport ? categories : categoriesMobile;
    //     // setState((prevState) => ({ ...prevState, categories: categoriesList }));

    //     slider.current.addEventListener('mousemove', move);
    //     slider.current.addEventListener('mousedown', startDragging);
    //     slider.current.addEventListener('mouseup', stopDragging);
    //     slider.current.addEventListener('mouseleave', stopDragging);

    //     return () => {
    //       slider.current.removeEventListener('mousemove', move);
    //       slider.current.removeEventListener('mousedown', startDragging);
    //       slider.current.removeEventListener('mouseup', stopDragging);
    //       slider.current.removeEventListener('mouseleave', stopDragging);
    //     };
    //   }, [state.viewport]);

    //   const setChildRef = (ref) => {
    //     cocaineLineRef.current = ref;
    //   };

    return (
        <div>
            <NavBar/>
            <header>
                <h1 className='genoma-header'>Genoma Vision Lab</h1>
            </header>
            <hr/>
           <div className='btn-par'>
           <div className='par-home-div'>
           <p className='par-home'>
                Welcome to Genoma Vision Lab, a research center dedicated to groundbreaking discoveries in the field of
                genetics and genomics. Our mission is to explore and develop innovative technologies that deeply
                understand the genetic foundation of life.
                At Genoma Vision Lab, our team of experts consists of leading geneticists,
                molecular biologists, and bioinformaticians who are committed to unraveling the intricacies of the genome. Utilizing state-of-the-art sequencing techniques and data analysis, we concentrate on exploring the genomic landscape to uncover new insights into the fundamental aspects of life.
            </p>

           <a>
           <button className='home-btn'> 
           LET’S TALK
            </button>
           </a>
           </div>
           </div>

            <div className="review-section" style={{ position: 'relative' }}>
                <h1 className="review-section-h1">WHAT OUR CLIENTS SAY</h1>
                <div className="parent" ref={slider}>
                    {cards.map((card, key) => (
                        <Fragment key={key}>
                            <SliderCard
                                img={card.img}
                                first={card.first}
                                second={card.second}
                                third={card.third}
                                name={card.name}
                                position={card.position}
                                company={card.company}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
