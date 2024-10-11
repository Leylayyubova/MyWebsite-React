import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const text = "I'm developer from Azerbaijan";
    const radius = 80;

    return (
        <main>
            <article>
                <section className="hero" id="home">
                    <div className="container">
                        <div className="hero-banner">
                            <img
                                src=""
                                width="800"
                                height="864"
                                loading="lazy"
                                alt="Leyla's Photo"
                                className="img-cover"
                            />
                            <div className="elem elem-1">
                                <p className="elem-title">2</p>
                                <p className="elem-text">Years of Success</p>
                            </div>
                            <div className="elem elem-2">
                                <p className="elem-title">400+</p>
                                <p className="elem-text">Projects Completed</p>
                            </div>
                            {/* <div className="elem elem-3">
                                <img src="https://media.istockphoto.com/id/1302006753/vector/award-cup-vector-icon-trophy-award-cup-gold-prize-champion-win-victory.jpg?s=612x612&w=0&k=20&c=MYN0qL0SJXSuTs2V4HraKlewwHkCVdzkv8-4j0SVBIk=" alt="" />
                            </div> */}
                            <div className='rotate-img'>
                                <div className="rotate-circle">
                                    {text.split('').map((char, index) => {
                                        const angle = (360 / text.length) * index;
                                        const x = radius * Math.cos((angle * Math.PI) / 180);
                                        const y = radius * Math.sin((angle * Math.PI) / 180);

                                        return (
                                            <span
                                                key={index}
                                                className="rotate-letter"
                                                style={{
                                                    left: `calc(50% + ${x}px)`,
                                                    top: `calc(50% + ${y}px)`,
                                                    transform: `translate(-50%, -50%)`
                                                }}
                                            >
                                                {char}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="hero-content">
                            <h2 className="hero-title">
                                <span>Hello I'm</span>
                                <strong>Leyla Ayyubova</strong> Front-end Developer from Azerbaijan
                            </h2>
                            <p className="hero-text">
                                As a front-end developer, I write aesthetic, well-structured code using modern technologies such as Javascript, React.js, Next.js, HTML5, CSS, SCSS, Tailwind, and Bootstrap. I create interactive and user-friendly websites to meet my clients' needs.
                            </p>
                            <div className="btn-group">
                                <a href="#contact" className="btn btn-primary blue">Get a Quote</a>
                                <a href="https://linktr.ee/leylayyubova" className="btn">About Me</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section about" id="about">
                    <div className="container">
                        <figure className="about-banner">
                            <img
                                src=""
                                width="800"
                                height="652"
                                loading="lazy"
                                alt="Leyla's Photo"
                                className="img-cover"
                            />
                            <img
                                src=""
                                width="800"
                                height="717"
                                loading="lazy"
                                alt="Leyla's Photo"
                                className="abs-img"
                            />
                            <div className="abs-icon abs-icon-1">
                                <img src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg" alt="" />
                            </div>
                            <div className="abs-icon abs-icon-2">
                                <img src="https://banner2.cleanpng.com/20180810/biz/3efdae17d419cdcf3886d344b989ea45.webp" alt="" />
                            </div>
                            <div className="abs-icon abs-icon-3">
                                <img src="https://adictosaltrabajo.com/wp-content/uploads/2020/10/ReactBackground.png" alt="" />
                            </div>
                        </figure>

                        <div className="about-content">
                            <p className="section-subtitle">I'm a Front-end Developer</p>
                            <h2 className="h2 section-title">  I develop user-friendly applications that enhance daily experiences.</h2>
                            <p className="section-text">
                                I focus on creating visually appealing and functional web solutions using modern technologies. My goal is to deliver high-quality work that meets the needs of my clients.
                            </p>
                            <p className="section-text">
                                Check out my portfolio to see my projects and skills.
                            </p>
                            <a href="#portfolio" className="btn btn-primary blue">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </section>
                <section className="section portfolio" id="portfolio">
                    <div className="container">
                        <p className="subtitle">Portfolio</p>
                        <h2 className="title">My Amazing Works</h2>
                        <p className="text">
                            In this section, you can explore several projects I have worked on. Each piece showcases my creativity and attention to user satisfaction, ranging from responsive designs to interactive web applications.
                        </p>
                        <ul className="portfolio-list">
                            <li>
                                <a
                                    href="#"
                                    className="portfolio-card"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                                >
                                    <div className="card-content">
                                        <p className="card-subtitle">Nest</p>
                                        <h3 className="h3 card-title">Online Vegetable Sales Web Application</h3>
                                        <span className="btn-link">
                                            <span>View Project</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="portfolio-card"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                                >
                                    <div className="card-content">
                                        <p className="card-subtitle">Digma</p>
                                        <h3 className="h3 card-title">Digital Services</h3>
                                        <span className="btn-link">
                                            <span>View Project</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="portfolio-card"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                                >
                                    <div className="card-content">
                                        <p className="card-subtitle">Porto</p>
                                        <h3 className="h3 card-title">Shop Our Bestsellers</h3>
                                        <span className="btn-link">
                                            <span>View Project</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="portfolio-card"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442135132-141348e809d9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                                >
                                    <div className="card-content">
                                        <p className="card-subtitle">Details</p>
                                        <h3 className="h3 card-title">Electron.js Digital Clock Application</h3>
                                        <span className="btn-link">
                                            <span>View Project</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="section skills" id="skills">
                    <div className="container">
                        <p className="section-subtitle">My Skills</p>
                        <h2 className="h2 section-title">I Develop Skills Regularly</h2>
                        <p className="section-text">
                            I consistently enhance my skills by working with modern technologies and frameworks to build user-friendly and efficient web applications.
                        </p>
                        <ul className="skills-list">
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '95%' }}>
                                    <h3 className="skills-title">Html5</h3>
                                    <data className="skills-data" value="95">95%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '95%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '90%' }}>
                                    <h3 className="skills-title">Css</h3>
                                    <data className="skills-data" value="90">90%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '90%' }}>
                                    <h3 className="skills-title">Scss(Sass)</h3>
                                    <data className="skills-data" value="90">90%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '90%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '80%' }}>
                                    <h3 className="skills-title">Bootstrap</h3>
                                    <data className="skills-data" value="80">80%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '80%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '75%' }}>
                                    <h3 className="skills-title">JavaScript</h3>
                                    <data className="skills-data" value="75">75%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="wrapper" style={{ width: '75%' }}>
                                    <h3 className="skills-title">React</h3>
                                    <data className="skills-data" value="75">75%</data>
                                </div>
                                <div className="skills-progress-box">
                                    <div className="skills-progress" style={{ width: '75%' }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section contact" id="contact">
                    <div className="container">
                        <div className="contact-card">
                            <p className="card-subtitle">Don't be shy</p>
                            <h2 className="h2 section-title">Drop Me a Line</h2>
                            <div className="wrapper">
                                <form action="" className="contact-form">
                                    <input type="text" name="name" placeholder="Name" required className="contact-input" />
                                    <input type="email" name="email" placeholder="Email" required className="contact-input" />
                                    <textarea name="message" placeholder="Message" required className="contact-input"></textarea>
                                    <button type="submit" className="btn-submit">Submit Message</button>
                                </form>
                                <ul className="contact-list">
                                    <li className="contact-item">
                                        <div className="contact-icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div>
                                            <h3 className="contact-item-title">Address</h3>
                                            <address className="contact-item-link">Azerbaijan,Baku</address>
                                        </div>
                                    </li>
                                    <li className="contact-item">
                                        <div className="contact-icon">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div>
                                            <h3 className="contact-item-title">Email</h3>
                                            <a href="mailto:ayyubovaleyla2002@gmail.com" className="contact-item-link">ayyubovaleyla2002@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="contact-item">
                                        <div className="contact-icon">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>
                                            <h3 className="contact-item-title">Phone</h3>
                                            <a href="tel:+994705612505" className="contact-item-link">+994 70 561 25 05</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section blog" id="blog">
                    <div className="container">
                        <p className="section-subtitle">Latest News</p>
                        <h2 className="h2 section-title">Checkout My Recent Blogs</h2>
                        <p className="section-text">
                            Front-end development is a crucial field for creating modern websites. Below, I will share some of my key knowledge in this area.
                        </p>
                        <ul className="blog-list">
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1181" height="843" loading="lazy" alt="Jim Morisson Says when the musics over turn off the light" className="img-cover" />
                                        </a>
                                    </figure>
                                    <a href="#" className="card-tag">Web Development</a>
                                    <h3 className="card-title">
                                        <a href="#">Jim Morisson Says when the musics over turn off the light</a>
                                    </h3>
                                </div>
                            </li>
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src="https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1181" height="843" loading="lazy" alt="Jim Morisson Says when the musics over turn off the light" className="img-cover" />
                                        </a>
                                    </figure>
                                    <a href="#" className="card-tag">Modern Web Applications</a>
                                    <h3 className="card-title">
                                        <a href="#">Ways to create modern web applications for user interface and experience.</a>
                                    </h3>
                                </div>
                            </li>
                            <li>
                                <div className="blog-card">
                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1181" height="843" loading="lazy" alt="Jim Morisson Says when the musics over turn off the light" className="img-cover" />
                                        </a>
                                    </figure>
                                    <a href="#" className="card-tag">SEO Optimizations</a>
                                    <h3 className="card-title">
                                        <a href="#">Jim Morisson Says when the musics over turn off the light</a>
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </article>
        </main>

    );
};

export default Home;
