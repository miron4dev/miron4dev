import React from "react";
import moment from "moment";
import Navbar from "../components/Navbar";
import Typist from "../components/Typist";
import MainLayout from "../MainLayout";

import avatarImg from "../assets/img/avatar.jpg";

const AboutPage = () => {

    const yearsOfExperience = moment().diff("2013-01-05", "years");

    return (
        <MainLayout title="Evgeny Mironenko | About me"
                    description="About Senior Software Engineer Evgeny Mironenko -
                Java, Kotlin, Spring, React, TypeScript developer with more than 10 years of experience."
                    keywords="about Evgeny Mironenko, description, profile, skills">
            <div className="d-flex flex-column main-layout">
                <Navbar/>
                <div className="container-fluid container">
                    <main>
                        <section className="py-3 py-md-4">
                            <div className="d-flex align-items-end typist">
                                <h1><Typist messages={["About me"]}/></h1>
                            </div>
                            <img src={avatarImg} width={128} height={128} alt="Me" className="avatar"/>
                        </section>

                        <section className="mb-3">
                            <p>
                                I'm a Software Engineer with over {yearsOfExperience} years of experience in designing and developing complex
                                and scalable software applications. Proficient in both back-end and front-end
                                development, utilizing a range of technologies including Java, Kotlin, TypeScript,
                                NodeJS and React. Experienced in leading teams and collaborating with stakeholders to
                                deliver projects on time and within budget. A problem-solver with a passion for learning
                                and staying up-to-date with the latest industry trends and technologies.
                            </p>
                        </section>

                        <div className="separator mb-3"/>

                        <h2>Skills</h2>
                        <div>
                            <p>
                                Java, Kotlin, JavaScript, TypeScript, SQL, XML, HTML, CSS
                            </p>
                            <p>
                                Spring Boot, NodeJS, React
                            </p>
                            <p>
                                AWS, REST, Grafana, Prometheus, Sentry
                            </p>
                            <p>
                                Leadership, Communication, Problem-solving, Adaptability, Collaboration, Attention to detail
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </MainLayout>
    );
};

export default AboutPage;
