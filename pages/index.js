import Head from "next/head";
import Image from "next/image";
import { AppHead } from "../components/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <html lang="en"></html>
      <Head>
        <meta name="description" content="Navy vet studying computer science" />
        <title>Christopher Campbell Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <AppHead />
      </Head>

      <header>
        <div id="intro">
          <h1>Christopher Campbell</h1>
          <p className="statement" aria-label="Positioning Statement">
            United States Navy Veteran. <br />
            Studying Cybersecurity
            <br />
            Self-motivated, reliable, and punctual
            <br />
            <br />
            <strong>Current Certificate:</strong> Google Cybersecurity Career
            Certificate
            <br></br>
            <strong>Future Certificate:</strong> Taking Comptia Sec+ in August
            2023
            <br></br>
            <strong>Current Licensure:</strong> 1st class A Boiler Engineer
          </p>
        </div>

        <aside role="table" id="contact" aria-label="Contact Info">
          <div role="row" className="contact-item">
            <div
              role="cell"
              aria-labelledby="contact-label-email"
              className="contact-label"
            >
              <i
                className="fad fa-envelope-open-text"
                title="email"
                aria-hidden="true"
              ></i>
              <span id="contact-label-email" className="sr-only">
                email:
              </span>
            </div>
            <div
              role="cell"
              className="contact-info"
              aria-describedby="contact-label-email"
            >
              <a href="campbell.chrismn@gmail.com">
                <strong>campbell.chrismn@gmail.com</strong>
              </a>
            </div>
          </div>

          <div role="row" className="contact-item">
            <div
              role="cell"
              aria-labelledby="contact-label-phone"
              className="contact-label"
            >
              <i className="fad fa-phone" title="phone" aria-hidden="true"></i>
              <span id="contact-label-phone" className="sr-only">
                phone:
              </span>
            </div>
            <div
              role="cell"
              className="contact-info"
              aria-describedby="contact-label-phone"
            >
              <a href="tel:+13197778372">
                +1 <strong>(757) 355-1393</strong>
              </a>
            </div>
          </div>

          <div role="row" className="contact-item">
            <div
              role="cell"
              aria-labelledby="contact-label-address"
              className="contact-label"
            >
              <i
                className="fad fa-mailbox"
                title="address"
                aria-hidden="true"
              ></i>
              <span id="contact-label-address" className="sr-only">
                address:
              </span>
            </div>
            <div
              role="cell"
              className="contact-info"
              aria-describedby="contact-label-address"
            >
              <strong>1818 E 7th St.</strong>
              <br />
              <strong>Duluth, MN 55812</strong>
            </div>
          </div>

          <div role="row" className="contact-item">
            <div
              role="cell"
              aria-labelledby="contact-label-GitHub"
              className="contact-label"
            >
              <i
                className="fab fa-github"
                title="GitHub"
                aria-hidden="true"
              ></i>
              <span id="contact-label-GitHub" className="sr-only">
                GitHub:
              </span>
            </div>
            <div
              role="cell"
              className="contact-info"
              aria-describedby="contact-label-GitHub"
            >
              <strong>
                <a href="https://github.com/DatSoup/">DatSoup</a>
              </strong>
            </div>
          </div>
        </aside>
      </header>
      <div id="content">
        <main>
          <section role="list" aria-labelledby="experience-header">
            <h2 id="experience-header">Experience</h2>
            <a>
              <em>(click drop down arrows for further details)</em>
            </a>

            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-Essentia-Health"
              open=""
            >
              <summary
                className="job-header callout"
                aria-labelledby="job-header-Essentia-Health"
              >
                <h3 className="inline" id="job-header-Essentia-Health">
                  Essentia Health
                </h3>
                , Duluth, MN<strong> — Boiler Operator</strong>
                <p className="job-history timeline">June 2022–Present</p>
              </summary>

              <ul className="job-description">
                <li>
                  Maintain and operate high pressure boilers at multiples
                  Essentia health buildings, including, St. Mary{`'`}s hospital,
                  1st street clinic building, and the new Vision Northland
                  hospital in Duluth Minnesota. This includes associated sub
                  systems such as steam, feed, condensate, makeup water, and
                  domestic hot/cold water.
                  <br />
                  <br />
                </li>

                <li>
                  Conduct daily water tests on all eight high pressure boilers
                  on the Duluth campuses, analyzing total dissolved solids
                  (TDS), P and M alkalinity, polymer, and sulfites. Expertly
                  balance boiler chemistry to prevent damage to water tube side,
                  ensuring optimal performance.
                  <br />
                  <br />
                </li>

                <li>
                  Respond to phone calls for hospital maintenance requests,
                  prioritizing issues and dispatching appropriate personnel to
                  resolve urgent matters. Effectively balance the importance of
                  the issue and available resources to ensure prompt and
                  efficient service.
                  <br />
                  <br />
                </li>
                <li>
                  Collaborate with a team to design, manufacture, and assemble
                  signs for all Essentia campuses spanning over 30 cities in
                  Minnesota and North Dakota.
                  <br />
                  <br />
                </li>
                <li>
                  Utilize Gravotech software to create designs and send the data
                  from the desktop to a rotary engraving machine, calibrating
                  the machine on the x, y, and z axes. Work with acrylic,
                  aluminum, and plastic sheets to engrave and paint signs,
                  ensuring precise and professional results.
                  <br />
                  <br />
                </li>
                <li>
                  Manage the alarms and programming for the building automation
                  system across multiple hospitals, utilizing Niagara for
                  monitoring and adjusting remote operation of air-handlers,
                  pumps, and solenoids.
                  <br />
                  <br />
                </li>
              </ul>
            </details>
            <hr />
            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-Sprung-Services"
              open=""
            >
              <summary
                className="job-header"
                aria-labelledby="job-header-Sprung-Services"
              >
                <h3 className="inline" id="job-header-Sprung-Services">
                  Sprung Services
                </h3>
                , New Brighton, MN<strong> — Relief Boiler Operator</strong>
                <p
                  className="job-history timeline"
                  prev="December 2020–Present"
                >
                  December 2020–Present
                </p>
              </summary>

              <ul className="job-description">
                <li>
                  Obtained my Minnesota 1st class {`'A'`} boilers license
                  allowing me to operate high- and low-pressure boilers with
                  associated engines and turbines of any horsepower. I can
                  personally be in charge of boilers up to 500 horsepower.
                  <br />
                  <br />
                </li>

                <li className="callout"></li>

                <li>
                  This job operates off of a job board. When a company is in
                  need of a relief operator the reach to Sprung Services. Sprung
                  then lists the jobs for any available operator to pick up.
                  <br />
                  <br />
                </li>

                <li>
                  As a relief boiler operator for Sprung Services, my
                  responsibility is to operate and safeguard high and low
                  pressure boilers unique to each job site with their associated
                  turbine, feed, steam, chemical, and condensate systems.
                  <br />
                  <br />
                </li>

                <li>
                  This job also includes operational and preventative
                  maintenance items including, but not limited to, performing
                  water samples to test plant chemistry, blowing down steam
                  traps, performing lube oil inspections, ensuring proper
                  operation of outdoor components, and checking/validating
                  safety equipment.
                  <br />
                  <br />
                </li>
              </ul>
            </details>
            <hr />

            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-best-buy"
              open=""
            >
              <summary
                className="job-header"
                aria-labelledby="job-header-best-buy"
              >
                <h3 className="inline" id="jjob-header-best-buy">
                  Best Buy
                </h3>
                , Grand Forks, ND<strong> — Product Flow</strong>
                <p className="job-history timeline">October 2021–March 2022</p>
              </summary>

              <ul className="job-description">
                <li>
                  This was a part time job I worked while attending school in
                  person at UND. The job responsibilities included shipping and
                  receiving goods to include washers, dryers, refrigerators,
                  televisions, computers, laptops, monitors, and a plethora of
                  other tech products. I also ensured the sales floor was
                  porperly stocked at all times.
                  <br />
                  <br />
                </li>

                <li>
                  In addition to product flow, I also worked customer service
                  when the need arose. This required the prioritization of
                  empathy in helping customers manage whatever needs they may
                  have while shopping with us at Best Buy.
                  <br />
                  <br />
                </li>
                <li>
                  I also obtained experience working at the Geek Squad precinct.
                  At the precinct, we would assist customers in troubleshooting
                  and repair of desktops, laptops, TVs, phones, and tablets.
                  <br />
                  <br />
                </li>
              </ul>
            </details>
            <hr />

            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-united-states-navy"
            >
              <summary
                className="job-header"
                aria-labelledby="job-header-united-states-navy"
              >
                <h3 className="inline" id="job-header-united-states-navy">
                  United States Navy
                </h3>
                , Norfolk, VA<strong> — Nuclear Machinist Mate</strong>
                <p className="job-history timeline">Jan 2014–Jan 2020</p>
              </summary>

              <ul className="job-description">
                <li>
                  <em className="product">Professional Summary</em>: I served
                  for six years as a Nuclear Machinist Mate in the United States
                  Navy, maintaining reactor room facilities and equipment
                  onboard the aircraft carrier USS Dwight D. Eisenhower. I
                  received a secret security clearance and filled positions as
                  operator and maintenance technician. While onboard I qualified
                  chief reactor watch, a senior supervisory watch station in the
                  reactor room. I obtained skills with the operation and
                  maintenance of mechanical systems to include primary coolant
                  systems, reactor safeguard systems, steam plant systems,
                  hydraulic plant systems, high and low-pressure air, sea and
                  fresh water, and piping/electrical system diagrams.
                  <br />
                  <br />
                </li>

                <li>
                  Qualified Chief Reactor Watch, QA, Craftsman, and Damage
                  Control team leader.
                  <br />
                  <br />
                </li>

                <li>
                  Routinely performed maintenance on all propulsion related
                  nuclear and non-nuclear mechanical systems. This included
                  preventative maintenance items requiring complete disassembly,
                  greasing, and reassembly of a 4160-volt turbine attached lube
                  oil pump. complete disassembly, cleaning, and reassembly of
                  our plants Delaval lube oil purifier. I also as participated
                  in semi-annual reactor fill testing, ensuring proper
                  operations of the reactor safeguard system.
                  <br />
                  <br />
                </li>

                <li>
                  While in the shipyard, I was a member of the work controls
                  team. Our responsibility was to verify all shipyard
                  maintenance documents and ensure their accuracy with our
                  current shipboard rules and regulations. We were also
                  responsible for verifying all on ship{`'`}s company
                  maintenance for reactor mechanical division to ensure that
                  workstations/controls weren{`’`}t overlapping between reactor
                  mechanical division and shipyard contractors.
                  <br />
                  <br />
                </li>
              </ul>
            </details>
            <hr />

            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-carondelet-villag"
            >
              <summary
                className="job-header"
                aria-labelledby="job-header-carondelet-villagl"
              >
                <h3 className="inline" id="job-header-carondelet-village">
                  Carondelet Village
                </h3>
                , St. Paul, MN<strong> — Food Service Assistant</strong>
                <p className="job-history timeline">
                  Full Time–June 2012-June 2014
                </p>
              </summary>

              <ul className="job-description">
                <li>
                  This was my first full time job prior to joining the Navy. My
                  primary responsibility was to serve food in a kindly fassion
                  to the elderly who lived in the retirement home.
                  <br />
                  <br />
                </li>

                <li>
                  In addition, I was responsible for cleaning all dishes,
                  maintaining general cleanliness of my workstation, and weekly
                  deep cleaning of the kitchen and cooking exhaust baffles.
                  <br />
                </li>
              </ul>
            </details>
            <hr />
          </section>

          <section role="list" aria-labelledby="education-header">
            <h2 id="education-header">Education and Training</h2>

            <div
              role="listitem"
              aria-labelledby="school-header-university-of-north-dakota"
            >
              <h3 id="school-header-university-of-north-dakota">
                University of North Dakota
              </h3>
              <ul className="degrees">
                <li>
                  <strong>
                    Masters Degree (Estimated graduation Summer 2025)
                  </strong>
                  <br></br>I will be starting this program in the Fall of 2023.{" "}
                </li>
              </ul>
            </div>

            <div
              role="listitem"
              aria-labelledby="school-header-university-of-north-dakota"
            >
              <h3 id="school-header-university-of-north-dakota">
                University of North Dakota
              </h3>
              <ul className="degrees">
                <li>
                  <strong>Bachelor's Degree</strong>, Bachelor of Arts degree in
                  General Studies with a Minor in Computer Science. <br></br>
                  <strong>
                    (With my previous Naval nuclear power training and
                    Mechanical Engineering course work, the majority of my
                    formal education has been in math and science)
                  </strong>
                </li>
              </ul>
            </div>

            <div
              role="listitem"
              aria-labelledby="school-header-century-college"
            >
              <h3 id="school-header-century-college">Centruy College</h3>
              <ul className="degrees">
                <li>
                  <strong>Associate of Arts Degree</strong>, Dean{`'`}s list
                  (2021)
                </li>
              </ul>
            </div>
            <div
              role="listitem"
              aria-labelledby="school-header-united-states-navy"
            >
              <h3 id="school-header-united-states-navy">United States Navy</h3>
              <ul className="degrees">
                <li>
                  <strong>Nuclear Prototype Training Unit</strong>, Ballston
                  Spa, NY (2015)
                </li>

                <li>
                  <strong>Naval Nuclear Power School</strong>, Goose Creek, SC
                  (2015)
                </li>

                <li>
                  <strong>Naval Nuclear “A” School</strong>, Goose Creek, SC
                  (2014)
                </li>
              </ul>
            </div>
          </section>
        </main>
        <div id="sidebar">
          <section aria-labelledby="skills-header">
            <h2 id="skills-header">Skills</h2>
            <ul id="skills">
              <li className="callout">
                Primary software language experience thus far has been in
                Python.
                <br />
                <br />
              </li>

              <li>
                Currently learning HTML, Java, CSS, and React (all utilized in
                the production of this portfolio). With an introduction to
                computer science with C++.
                <br />
                <br />
              </li>

              <li>
                Experienced in troubleshooting and repair of steam
                generators/boilers and their associated sub systems.
                <br />
                <br />
              </li>

              <li>
                Experienced in analyzing and responding to integrated plant
                operation on nuclear and non-nuclear steam/electric plants.
                <br />
                <br />
              </li>

              <li>
                As a qualified personal qualification standard (PQS) card signer
                onboard the USS Dwight D. Eisenhower, I am also well versed in
                teaching and verify individual{`'`}s levels of knowledge on
                plant systems and components.
                <br />
                <br />
              </li>

              <li>
                Experienced in the proper handling of confidential documents.
                <br />
                <br />
              </li>

              <li>
                Experienced in firefighting to including proper utilization of
                SCBAs, FFEs (Firefighting ensembles), de-smoking equipment, and
                firefighting agents (class A-D).
                <br />
                <br />
              </li>

              <li className="callout">
                Experienced in navigating high stress and high pressure
                situations stemming from experience in responding to real time
                reactor plant casualties.
                <br />
                <br />
              </li>
            </ul>
          </section>
          <hr />
        </div>
        <hr />
        <article aria-labelledby="about-header" className={styles.articleAbout}>
          <h2 id="about-header">About This Resume</h2>
          <p>
            Special thanks to Jeffrey Mendez (a11ywatch) in helping me
            develop/navigate some of the more technical hang ups with this
            portfolio. This is a next.js project. A next.js webserver running on
            Vercel generates this resume.
          </p>
          <p>
            This is a portfolio project and this resume is public on GitHub.
          </p>
          <p>
            I spent six years in naval nuclear power and it was an honor to be
            able to serve my country and learn a valuable trade at the same
            time. However, nuclear power was never something I was passionate
            about. While studying mechanical engineering at the University of
            North Dakota, I was reminded of my love for computers and
            programming during a computer application in engineering course. In
            this course we learned how to code using C++. Although this class
            was not simple, it reawakened a passion within myself. I am now
            excited and engaged on this new life path of computer science.
          </p>
          <p>
            This page and the{" "}
            <a href={process.env.NEXT_PUBLIC_VERCEL_URL}>
              {process.env.NEXT_PUBLIC_VERCEL_URL.replace(
                /https|http/,
                ""
              ).replace("://", "")}
            </a>{" "}
            subdomain comply to Level AA of the Web Content Accessibility
            Guidelines 2.1 at{" "}
            <a href="https://www.w3.org/TR/WCAG21/">
              https://www.w3.org/TR/WCAG21/
            </a>
            . This claim is made on 2021-09-29 and relies on the following Web
            content technologies: the Firefox{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector">
              Accessibility Inspector
            </a>
            , <a href="https://wave.webaim.org/">WAVE</a>,{" "}
            <a href="https://github.com/ffoodd/a11y.css/">a11y.css</a>, and{" "}
            <a href="https://a11ywatch.com/">A11yWatch</a>. (I chose to target
            Level AA because of the Level AAA criteria governing{" "}
            <a href="https://www.w3.org/TR/WCAG21/#readable">
              jargon, abbreviations, and reading level
            </a>
            .)
          </p>
        </article>
      </div>
    </>
  );
}
