import React from "react";
import ProjectPreview from "./ProjectPreview";

const Hero = () => {
    // mock project data
    const projects = [
        {
            image: "https://placeimg.com/200/200/tech",
            description: "A project about the impact of AI in society.",
        },
        {
            image: "https://placeimg.com/200/200/nature",
            description: "A project about the cognitive processes in animals.",
        },
        {
            image: "https://placeimg.com/200/200/arch",
            description: "A project about cognitive science in architecture.",
        },
    ];

    return (
        <section style={{backgroundColor: "black", color: "silver", padding: "50px"}}>
            <h2 style={{textAlign: "center", marginBottom: "50px"}}>Welcome to RPI CogSci Department</h2>
            <p style={{textAlign: "center", marginBottom: "50px"}}>Explore our projects and learn more about us.</p>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                {projects.map((project, index) => (
                    <ProjectPreview key={index} image={project.image} description={project.description} />
                ))}
            </div>
        </section>
    );
};

export default Hero;
