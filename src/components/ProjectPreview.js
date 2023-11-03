import React from 'react';

const containerStyle = {
    width: '200px',
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
};

const descriptionStyle = {
    color: 'silver',
};

const ProjectPreview = React.memo(({ image, description }) => {
    const altText = description || 'Project preview image';

    return (
        <figure style={containerStyle} className="project-preview">
            <img src={image} alt={altText} style={imageStyle} />
            <figcaption style={descriptionStyle}>{description}</figcaption>
        </figure>
    );
});

export default ProjectPreview;
