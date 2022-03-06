import Head from "next/head";
import Image from "next/image";
import { AppHead } from "../components/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Navy vet studying computer science" />
        <link rel="icon" href="/favicon.ico" />
        <AppHead />
      </Head>

      <header>
        <div id="intro">
          <h1>Christopher Campbell</h1>
          <p className="statement" aria-label="Positioning Statement">
            United States Navy veteran.
            <br />
            Computer science students at the University of North Dakota
            <br />
            Self-motivated and reliable
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
                <strong>campbell.chrismn</strong>@gmail.com
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
              <span>800 n 3rd st.</span>
              <br />
              <span>Grand Forks, ND 58203</span>
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
              <span>
                <a href="https://github.com/DatSoup/">DatSoup</a>
              </span>
            </div>
          </div>
        </aside>
      </header>
      <div id="content">
        <main>
          <section role="list" aria-labelledby="experience-header">
            <h2 id="experience-header">Experience</h2>

            <details
              className="job"
              role="listitem"
              aria-labelledby="job-header-Sprung-Services"
              open=""
            >
              <summary
                className="job-header callout"
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

              <ul className="job-history">
                <li>
                  <span className="dates">December 2020–Present</span>:{" "}
                  <strong>Relief Boiler Operator</strong>
                </li>
              </ul>

              <ul className="job-description">
                <li>
                  Recived my Minnesota 1st class {`'A'`} boilers license
                  allowing me to operate high and low pressure boilers with
                  associated engines and turbines of any horsepower. In addition
                  I can personally be in charge of boilers up to 500 horsepower.
                </li>

                <li className="callout"></li>

                <li>
                  This job operates off of a job board. When a company is in
                  need of a relief operator the reach to Sprung Services. Sprung
                  then lists the jobs for any avaialble operator to pick up.
                </li>

                <li>
                  As a relief boiler operator for Sprung Services, my
                  responsibility is to operate and safeguard high and low
                  pressure boilers unique to each job site with their associated
                  turbine, feed, steam, chemical, and condensate systems.
                </li>

                <li>
                  This job also includes operational and preventative
                  maintenance items including, but not limited to, perfoming
                  water samples to test plant chemistry, blowing down steam
                  traps, perfoming lube oil inspections, ensuring proper
                  operation of outdoor components, and checking/validating
                  safety equipment.
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
                  Seasonal, part time job which involves shipping and recieving
                  goods to include washers, dryers, refigerators, television,
                  computers, laptops, monitors, and a plethora of other tech
                  products.
                </li>

                <li>
                  In addition product flow, I also worked customer service when
                  need arose. Requiring the prioritization of empathy in helping
                  customers manage whatever needs they may have while shopping
                  with us at Best Buy.
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
                  Navy, maintaining reactor room facilities and equipment aboard
                  the aircraft carrier USS Dwight D. Eisenhower. Recived a
                  secret security clearance and filled positions as operator and
                  maintenance technician, as well as qualifying chief reactor
                  watch, a senior supervisory watch station in the reactor room.
                  Skilled with the operation and maintenance of mechanical
                  systems to include primary coolant systems, reactor safeguard
                  systems, steam plant systems, hydraulic plant systems, high
                  and low-pressure air, sea and fresh water, and
                  piping/electrical system diagrams.
                </li>

                <li>
                  Qualified Chief Reactor Watch, QA, Craftsman, and Damage
                  Control team leader.
                </li>

                <li>
                  Routinely perform maintenance on all propulsion related
                  nuclear and non-nuclear mechanical systems. Including
                  preventative maintenance items requiring complete disassembly,
                  greasing, and reassembly of a 4160-volt turbine attached lube
                  oil pump. complete disassembly, cleaning, and reassembly of
                  our plants Delaval lube oil purifier. As well as participating
                  in semi-annually in reactor fill testing, ensuring proper
                  operations of the reactor safeguard system.
                </li>

                <li>
                  While in the shipyard, I was a member of the work controls
                  team. Our responsibility was to verify all shipyard
                  maintenance documents and ensure their accuracy with our
                  current shipboard rules and regulations. As well, we were
                  responsible for verifying all on ship maintenance for reactor
                  mechanical division to ensure that workstations/controls
                  weren’t overlapping between reactor mechanical division and
                  shipyard contractors.
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

              <ul className="job-description"></ul>
            </details>
            <hr />
          </section>

          <section role="list" aria-labelledby="education-header">
            <h2 id="education-header">Education and training</h2>

            <div
              role="listitem"
              aria-labelledby="school-header-university-of-north-dakota"
            >
              <h3 id="school-header-university-of-north-dakota">
                University of North Dakota
              </h3>
              <ul className="degrees">
                <li>
                  <strong>(in progress)</strong>, Working on my B.S. degree in
                  computer science (2021-present)
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
                  <strong>A.A</strong>, Dean{`'`}s list (2021)
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
              <li>Experienced with python and C++</li>

              <li>
                Currently learning HTML, Java, CSS, and React (all utlized in
                the production of this portfolio)
              </li>

              <li>
                Experienced in troubleshooting and repair of steam
                generators/boilers and their associated sub systems.
              </li>

              <li className="callout">
                Experienced in anaylzing and responding to integrated plant
                operation on nuclear and non nuclear steam/electric plants.
              </li>

              <li>
                As a qualified personal qulification standard (PQS) card signer
                onboard the USS Dwight D. Eisenhower I am also well versed in
                teaching and verify individuals levels of knowledge on plant
                systems and components.
              </li>

              <li>
                Experienced in the proper handling of both classified and
                hazerdous materials (HAZMAT).
              </li>

              <li>
                Experienced in shipboard firefighiting to including proper
                utilization of SCBAs, FFEs (Firefighting ensambles), desmoking
                equipment, and firefighting agents (class A-D).
              </li>

              <li>
                Experienced in navigating high stress and high pressure
                situations stemming from experience in responding to real time
                reactor plant casualties.
              </li>
            </ul>
          </section>
          <hr />
        </div>
        <hr />
        <article aria-labelledby="about-header" className={styles.articleAbout}>
          <h2 id="about-header">About This Resume</h2>
          <Image src="/me.jpg" width="500" height="500"></Image>
          <p>
            Shout out to Elizabeth Jorgensen who laid the framwork for this
            porfolio. This is a next.js project. A next.js webserver running on
            Vercel generates this resume. It is very light on client-side JS.
          </p>
          <p>This is a portfolio project.</p>
          <p>
            Please{" "}
            <a href="#contact">
              contact me via the means above with any inquiries
            </a>{" "}
            or for access to source code. Because this resume reveals personally
            identifiable information, it{`'`}s public on GitHub.
          </p>
          <p>
            This page and the{" "}
            <a href={process.env.NEXT_PUBLIC_VERCEL_URL}>
              {process.env.NEXT_PUBLIC_VERCEL_URL.replace(
                /http|https/,
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
