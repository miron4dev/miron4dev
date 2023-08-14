import React from "react";
import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Typist from "../components/Typist";
import MainLayout from "../MainLayout";

class WorkPage extends React.Component {
    render() {
        return (
            <MainLayout title="Evgeny Mironenko | Working Experience"
                        description="Working Experience of Senior Software Engineer Evgeny Mironenko"
                        keywords="working experience, timeline, cv, jobs description">
                <div className="d-flex flex-column main-layout">
                    <Navbar/>
                    <div className="container-fluid container">
                        <main>
                            <section className="py-3 py-md-4">
                                <div className="d-flex align-items-end typist">
                                    <h1><Typist messages={["My experience"]}/></h1>
                                </div>
                            </section>

                            <div className="container py-2">
                                <Job companyName="Miro" position="Senior Software Engineer" from="10.2021"
                                     achievements={[
                                         "Collaborated with top-tier Miro partners such as Google, Zoom, Microsoft, and Slack to architect, develop, and launch new projects and improve existing ones.",
                                         "Pioneered proof-of-concept projects to enhance user experience, resulting in a 70% increase in user retention.",
                                         "Introduced frontend observability across the company’s integrations for peak performance monitoring and visibility.",
                                         "Led the migration to GitHub for the team’s projects, optimizing CI/CD processes and implementing continuous deployment to expedite release cycles.",
                                         "Established an SLA for both the team and the company's stream, successfully incorporating on-call rotations and enhancing alerting mechanisms for high operational efficiency.",
                                         "Led the BE live coding interviewers guild within the company by improving and overseeing the interview process, creating a comprehensive candidate competency rubric, and maintaining the high quality of interview questions.",
                                         "Promoted to Senior Software Engineer in May 2023."
                                     ]}/>

                                <Job companyName="CyberCube" position="Senior Software Engineer" from="11.2019"
                                     to="10.2021"
                                     achievements={[
                                         "Spearheaded the design, development, and delivery of high-performance serverless solutions using AWS, GraalVM, and Kotlin, reducing costs and improving efficiency for cyber-security risk calculations.",
                                         "Led the migration of a crucial frontend component from AngularJS to React, resulting in a significant improvement in performance and maintainability.",
                                         "Introduced the concept of micro-frontend architecture across the company's projects, resulting in better team collaboration, faster development cycles, and improved scalability for the company’s frontend ecosystem."
                                     ]}
                                />

                                <Job companyName="GrabCAD" position="Senior Software Engineer" from="03.2019"
                                     to="10.2019"
                                     achievements={[
                                         "Led the development and successful delivery of a 3D-model viewer for GrabCAD, one of the largest online communities of CAD experts."
                                     ]}
                                />

                                <Job companyName="Omniva" position="FullStack Engineer" from="05.2018" to="02.2019"
                                     achievements={[
                                         "Played a key role in the successful launch of several new projects, notably including the largest sorting line in\n" +
                                         "the Baltic countries.",
                                         "Troubleshot issues with logistics and sorting modules, rapidly identifying and resolving problems to minimize\n" +
                                         "downtime and ensure smooth operations."
                                     ]}
                                />

                                <Job companyName="T-Systems RUS" position="Senior Software Engineer" from="06.2013"
                                     to="04.2018"
                                     achievements={[
                                         "Led technical project for Deutsche Telekom, managing all aspects of the development cycle, from ideation to\n" +
                                         "delivery, including architecture design, testing, and deployment.",
                                         "Collaborated with stakeholders to prototype, develop, and integrate solutions, ensuring project objectives were\n" +
                                         "met on time and within budget.",
                                         "Mentored junior team members to enhance their technical skills and ensure their professional growth within the organization.",
                                         "Utilized strong communication skills to effectively coordinate with cross-functional teams and senior management to drive project success.",
                                         "Promoted to Senior Software Engineer in Feb 2017."
                                     ]}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export default WorkPage;
