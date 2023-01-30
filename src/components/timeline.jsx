import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at SAMSUNG VIETNAM MOBILE R&D CENTER <span>07/2018 - 08/2018</span>
                        </h2>
                        <p>
                          {/*I recently have joined the Juniper Networs as a*/}
                          {/*Software Developer-Intern in the DevOps team. My major*/}
                          {/*part of the work has been into the field of creating*/}
                          {/*sustainable and flexible CI/CD (Continuous Integration*/}
                          {/*& Continuous Development) pipelines which enables*/}
                          {/*developers at Juniper to do rapid development. I am*/}
                          {/*also exploring the role of container technology like*/}
                          {/*Docker and container-orchrastation technologies like*/}
                          {/*K8s, Swarm to create industry standard production*/}
                          {/*environments.*/}
                          Learned about data structures and algorithms, Java Android;
                          Completed final test
                          Technology used: Java, C/C++
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Web Develop at VIETTEL CYBERSPACE CENTER <span>2018-2022</span>
                        </h2>
                        <p>
                          <li>Developing projects in service of telecommunications.</li>
                          <li>Giving solutions to problems requiring large number of users.</li>
                          <li>Working with users/clients, relevant parties and delivery teams to collect information.</li>
                          <li>Discussing with testers and BA teams to clarify and ensure that functionality matches user.</li>
                          <li>Responsible for creating, listing and prioritizing backlogs for web products.</li>
                          <li>Coordinating with developers and testers to improve UI/UX and logic for product functions.</li>
                          <li>Responsible for continuous improvement development, HA, load balance for server stability</li>
                          <li>Prioritize work for the team on Jira using Scrum/Agile.</li>
                          <li>Implementing CICD following correct software process on outstanding projects</li>
                          <li>Excellent Employee of the Month</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer at VMO <span>01/2022-03/2022</span>
                        </h2>
                        <p>
                          Skill: React.js, HTML, CSS, Django
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
