import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from '@mui/icons-material/Work';

// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FreeLance
          </h3>
          <p> Role: FullStack Web Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          LearnSmasher EduTech LLP
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Role: Full Stack Web Developer-Full Time Intern
          </h4>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
