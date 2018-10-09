import React from 'react';

const ProjectSummary = ({project}) => {
    return(
            <div className="card z-depth-0 project-summery">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p className="grey-text">10 october,12.03 AM</p>
                </div>
            </div>
    );

}
export default ProjectSummary;