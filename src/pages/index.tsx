import React from "react";
import Badges from "../components/Badges";
import Skill from "../models/Skill";

import javaLogo from "../assets/img/skills/java.svg";
import kotlinLogo from "../assets/img/skills/kotlin.svg";
import reactLogo from "../assets/img/skills/react.svg";
import typescriptLogo from "../assets/img/skills/typescript.svg";
import ContactData from "../components/ContactData";
import Typist from "../components/Typist";

import Navbar from "../components/Navbar";
import MainLayout from "../MainLayout";
import githubLogo from "../assets/img/social/github.svg";
import linkedinLogo from "../assets/img/social/linkedin.svg";
import facebookLogo from "../assets/img/social/facebook.svg";
import telegramLogo from "../assets/img/social/telegram.svg";
import Contact from "../models/Contact";

const contacts = [
  new Contact("https://github.com/miron4dev", "Github", githubLogo),
  new Contact("https://linkedin.com/in/miron4dev", "LinkedIn", linkedinLogo),
  new Contact("https://facebook.com/miron4dev", "Facebook", facebookLogo),
  new Contact("https://t.me/miron4dev", "Telegram", telegramLogo)
];

const skills = [
  new Skill("Java", javaLogo),
  new Skill("Kotlin", kotlinLogo),
  new Skill("TypeScript", typescriptLogo),
  new Skill("React", reactLogo)
];

class IndexPage extends React.Component {

  render() {
    return (
      <MainLayout title="Evgeny Mironenko | Software Engineer"
                  description="Personal website by Evgeny Mironenko Senior Software Engineer.
                  Java, Kotlin, Spring, React, TypeScript. Currently based in Amsterdam, Netherlands."
                  keywords="Evgeny, Mironenko, Evgeny Mironenko, Software Engineer,
                  Software Developer, Java, Kotlin, Typescript, React"
                  isRoot={true}>
        <div className="d-flex flex-column main-layout">
          <Navbar/>
          <div className="container-fluid container">
            <main>
              <section className="mb-3">
                <div>
                  <h1><Typist messages={["Evgeny Mironenko"]}/></h1>
                  <p className="lead">Software Engineer & Proud Geek</p>
                  <p>Currently based in Amsterdam, Netherlands</p>
                </div>
              </section>
              <ContactData contacts={contacts} email="miron4dev@gmail.com"/>
              <div className="separator my-5"/>
              <h2>Tech I like to work with</h2>
              <Badges skills={skills}/>
            </main>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default IndexPage;
