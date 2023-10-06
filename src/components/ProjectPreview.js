import React from 'react';

const ProjectPreview = ({ image, description }) => {
    return (
        <div style={{width: "200px", textAlign: "center"}}>
            <img src={image} alt={description} style={{width: "100%", height: "200px", objectFit: "cover"}} />
            <p style={{color: "silver"}}>{description}</p>
        </div>
    );
};

export default ProjectPreview;
