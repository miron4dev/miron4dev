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
                <Job companyName="Self-Employed" position="" from="10.2021"/>

                <Job companyName="CyberCube" position="Senior Software Engineer" from="11.2019" to="10.2021"
                     achievements="designing and building high performance, robust, scalable microservices, data processing applications, and RESTful web services specifically for the insurance industry"
                />

                <Job companyName="GrabCAD" position="Senior Software Engineer" from="03.2019" to="10.2019"
                     achievements="designing, developing and supporting innovative solutions for 3D printers and also for one of the largest online community of professional engineers, designers and manufacturers."
                />

                <Job companyName="Omniva" position="FullStack Engineer" from="05.2018" to="02.2019"
                     achievements={[
                       "developing business logic for the largest sorting line in the Baltic countries",
                       "active participating in launch of a few new projects",
                       "support and troubleshooting of Estonian sorting center"
                     ]}
                />

                <Job companyName="T-Systems RUS" position="Senior Software Engineer" from="02.2017" to="04.2018"
                     achievements={[
                       "technical project leading an internal project for the largest telecommunications provider in Europe",
                       "supervise the whole development cycle, from concept to delivery, including architecture, testing and so on",
                       "prototyping, development and integration in close cooperation with Product Owner",
                       "mentoring less experienced team members"
                     ]}
                />

                <Job companyName="T-Systems RUS" position="Software Engineer" from="06.2014" to="02.2017"/>
                <Job companyName="T-Systems RUS" position="Junior Software Engineer" from="06.2013" to="06.2014"/>
              </div>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default WorkPage;
