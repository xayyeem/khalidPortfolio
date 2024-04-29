import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shambhunath Institute of Engineering and Technology
          </h3>
          <p> Bachelor of Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CDL Government Polytechnic Nathusari Chopta
          </h3>

          <p> Diploma in Engineering</p>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Diploma in Engineering
          </h4> */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ewing Christian Public Senior Secondary School
          </h3>
          <p> High School (X)</p>

          {/* <h4 className="vertical-timeline-element-subtitle">
            High School (X)
          </h4> */}
          
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
