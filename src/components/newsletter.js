import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <header className="newsletter-header">
                <h1>Newsletter</h1>
            </header>

            <section className="newsletter-events">
                <p>Welcome to our newsletter! Here are some highlights from our recent events:</p>

                <h2>Message From the New President</h2>
                <p>To the Psi Omega Brotherhood,</p>
                <p>It is a great honor to have been elected by my fellow brothers to be the next president of DKE Psi Omega. I am proud to represent this chapter for the next term and want to bring it as much success as possible. Jacob has done a fantastic job as president, and I aim to build off of what he has accomplished.</p>
                <p>This year has been difficult. We have once again found obstacles in recruiting and campus presence. Even with a tough year, I believe we now have a great opportunity to flip the script in the coming semester. All signs point to a powerful resurgence in recruitment numbers, and our location change will no doubt turn heads. If the golden age of Psi Omega isn’t already upon us, we’re not far away from it. There is no reason to view the future in any way other than promising.</p>
                <p>As for next semester’s executive board, I am expecting greatness. The group is experienced, intelligent, and highly motivated. They know what it will take to overcome any hurdle that comes their way, and I look forward to taking care of business with them.</p>
                <p>It’s an exciting time to be a DKE at RPI. I am confident that any goal we set will be accomplished.</p>
                <p>The Psi Omega Brotherhood’s support is greatly valued, and we are looking forward to your continued confidence in us.</p>
                <p>ITB,<br />Ben Rodgers</p>

                <h2>Message From the President</h2>
                <p>To our esteemed alumni,</p>
                <p>As we embark on a new academic year, Psi Omega is poised and prepared, having weathered both setbacks and successes in the past year. I am excited to inform you that, after more than a year of concerted efforts by the Psi Omega Alumni Association (POAA), we are relocating from our home of nearly a decade. I had the privilege of leading our housing committee as we meticulously searched the Troy area for an ideal new residence. Following extensive deliberations, the Brotherhood, with support from the POAA and DKE IHQ’s Deke Property Group, has chosen to move to 1599 Tibbits Ave. This new location offers superior facilities for our operations and affords us greater independence from RPI’s stringent oversight.</p>
                <p>As we begin this new chapter for Psi Omega, I also close my chapter as your President. It has been an exhilarating journey over the past four semesters. I am confident in passing the baton to Ben Rodgers, whose clear vision reassures me about our fraternity’s future. I am certain that under his leadership, Psi Omega will reach new heights.</p>
                <p>In response to evolving student perspectives on fraternity life, we are overhauling our recruitment strategy. We are implementing new systems to enhance our operations based on the insights gained over the last year. Despite the challenges faced this semester, these changes promise substantial improvements in our recruitment efforts.</p>
                <p>However, challenges remain. As we settle next to Freshman Hill, we anticipate facing unexpected costs to make our new house a welcoming home. The support from our alumni worldwide during these transformative times has been invaluable, and for that, we are immensely grateful.</p>
                <p>ITB,<br />Jacob Edwards</p>

                <h2>Sweethearts</h2>
                <p>The brotherhood has decided to sweetheart two sisters from Alpha Gamma Delta, Jolie Dolan and Brother Mackenzie (Left), and Meghan Shipley and Brother Rodgers (Right).</p>
            </section>

            <footer className="newsletter-footer">
                <h2>Past Newsletters</h2>
                <ul>
                    <li><a href="/newsletters/fall-2023">Fall 2023 Newsletter</a></li>
                    <li><a href="/newsletters/spring-2023">Spring 2023 Newsletter</a></li>
                    <li><a href="/newsletters/fall-2022">Fall 2022 Newsletter</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Newsletter;
