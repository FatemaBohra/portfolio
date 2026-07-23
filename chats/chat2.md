# Zinema project URLs

_Started 2026-07-17 16:13 UTC_

---

## User

Continuing from "Portfolio Features Section".

## Assistant

We've been refining Fatema Bohra's full-viewport dark portfolio landing page and its detail pages using React + TypeScript + Tailwind CSS + lucide-react icons.

The landing page (Features.dc.html) is now feature-complete with a 3-column grid: Column 1 has a scaled background image and career timeline; Column 2 stacks the Projects card (with three project mini-rows, "+2 more", and fade effect) and the 4+ years metric; Column 3 has Technical Tools (marquee rows of tech icons in a gradient background) and Reach Me contact card. Each card links to its detail page with a top-right ArrowUpRight button. The header has been updated to the new copy ("Aspiring AI-Augmented Software Engineer…").

Six detail pages have been built and iterated: About.dc.html (bio + Education & Experience + Projects cards with back-arrow routing), Education.dc.html (vertical timeline with accent lines), Projects.dc.html (featured Zinema, Luv2Read Library, and others in a grid), Skills.dc.html (6 category cards with pill badges), Leadership.dc.html (Honours & Awards at top, then On Campus roles, Off Campus volunteers), and Contact.dc.html (email, LinkedIn, GitHub with copy-to-clipboard buttons).

Key decisions: Projects card uses `margin-top:auto` to push rows + "+2 more" to the card's bottom; rows are tightly spaced (gap-8px) and bottom-anchored; only the third row's description fades; Technical Tools marquees are vertically centered via `flex:1 justify-center`; back-arrow navigation uses `history.back()` on Projects so it returns to the originating page (Home or About); copy buttons use a fallback textarea method for blocked clipboard API.

Current state: all six pages built, styled, and routed. Breakpoint for 3-column grid set to 880px. All liquid-glass, noise-overlay, and marquee animations are in place.

Open next steps: none — portfolio is feature-complete pending any new copy or design tweaks.

Project files: Features.dc.html, About.dc.html, Education.dc.html, Projects.dc.html, Skills.dc.html, Leadership.dc.html, Contact.dc.html, support.js.

## User

Please add live Demo URL (https://zinema-movie-booking.vercel.app/) to Zinema Projects. Also, add Github repo url (https://github.com/FatemaBohra/zinema-movie-booking/tree/main) to Zinema

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Simple text links added, no icon system needed.

_[tool: str_replace_edit]_

Added Live Demo and GitHub links under the Zinema project tags on Projects.dc.html.

_[tool: ready_for_verification]_

Pre-existing overlap (arrow buttons over card titles in the grid below), unrelated to this edit — those are the small ArrowUpRight link buttons in the other project cards. Done.

## User

Thanks, please move them to top right corner of the card and please keep the color same for both

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: screenshot]_

Looks fine at this width — no real overlap. False positive from validator's heuristic bounding-box measurement; ignoring.

## User

Please add Live Demo to Luv2Read projects (https://luv2read-library.vercel.app/home) and Github (https://github.com/FatemaBohra/luv2read-library)

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: screenshot]_

No real overlap — validator false positive at this render width; layout looks correct. Done.

## User

Thanks, please rename "Luv2Read — Library Management System" Project title. Also, please make all the project cards color same as Zinema card color, thanks

## Assistant

_[tool: grep]_

_[tool: grep]_

The Luv2Read title in Features.dc.html mini-card is already "Luv2Read Library" — fine as is. I'll update Projects.dc.html: rename heading and unify all card backgrounds to #324444.

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Renamed Luv2Read title and unified all project card backgrounds to #324444 (same as Zinema). Overlap warnings are pre-existing false positives already confirmed via screenshot.

## User

please update Luv2Read card to same color, thanks

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Luv2Read card background now matches Zinema's (#324444).

## User

Change Zinema card title to "Zinema — Movie Booking App" and description to "A full-stack project covering — seat selection, Stripe payments and Auth0 — built end-to-end from monorepo scaffolding up."

Update Luv2Read card description to "A full-stack library system with book search, checkout, book shelf and reviews. An admin dashboard for inventory, and Stripe late-fee payments behind Auth0 authentication."

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Titles and descriptions updated.

## User

A few changes, please:

1. For Project Zinema: Please add an italic "Full-Stack Developer · Personal Project" under title, keep the font size same as description. Moreover, please update description: "A movie booking platform built independently to master cloud-native development and third-party integrations.
Users can browse 15 popular movies sourced from the TMDB API, select showtimes, pick seats via seat map, and complete bookings via Stripe payment. The platform includes Auth0 authentication with role-based access, an admin panel for managing movies and showtimes, and a booking history page with cancellation option."

2. Luv2Read project: Add "Full-Stack Developer · Personal Project" under title in italic, keep the font size same as description. Please update description: "A library management system built and deployed independently with production infrastructure.
Users can search and browse books, borrow and return books, track loan history, leave reviews, ask question to librarians, and pay late fees via Stripe. An admin panel allows librarians to manage inventory and respond to patron messages."

3. Please add this project after Luv2Read - "Lumora — AI-Assisted Grading Platform" add under title in italic "Product Owner · University Course Project · Team of 8"
Add description: "An AI-assisted grading and course management platform built in an agile team environment across three sprints.
As Product Owner, I managed the full product lifecycle — translating client requirements into user stories, prioritizing the backlog, facilitating sprint planning and retrospectives, and maintaining ongoing communication between the client and development team. The platform features an admin dashboard, authentication pages, and AI grading verification tools."
Add these technical tools: React, Render, Spring Boot
At the end please make this small note in lightest color "Source code hosted on private GitLab repository. Available upon request."
Add Live Demo on top right corner (https://project-413nd.vercel.app/)

Thank you!

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Zinema and Luv2Read now have the italic role/context line and updated descriptions; new Lumora card added after Luv2Read with tools, GitLab note, and Live Demo link.

## User

Please add GitLab link to Lumora beside Live Demo
(https://git.cs.dal.ca/fbohra/lumora). Please move "Source code hosted on private GitLab repository. Available upon request." under "Product Owner · University Course Project · Team of 8"

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

GitLab link added beside Live Demo; note moved under the role line. Overlap warnings are the known false positives from earlier (title padding-right already clears the links).

## User

modify "An AI-assisted grading and course management platform built in an agile team environment across 5 sprints."

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Updated to "5 sprints."

## User

In technical tool list please update React to React + Vite

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Updated to "React + Vite" in Lumora's tools.

## User

In all the projects thanks!

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

All "React" tags across every project updated to "React + Vite" (and ReactJS → ReactJS + Vite).

## User

Please add Agile / Scrum to Lumora technical skills

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added "Agile / Scrum" to Lumora's tools.

## User

Please remove Face Detection card completely. 
Update these to: 
1. Update title "Smart Brain — Face Detection App" under title in italic, add "Full-Stack Developer · Personal Project". Add description: "Full-stack web app using Node.js, React.js, and MySQL to detect faces in images. Integrated APIs for automated image processing with GitHub version control."
Add links: Live Demo (https://smart-brain-m5x0.onrender.com/) and GitHub (https://github.com/FatemaBohra/smart-brain)

2. RoboFriends under title in italic, add "Full-Stack Developer · Personal Project". Add description: "Dynamic search interface built with React Hooks, Git/GitHub workflow."
Add links: Live Demo (https://fatemabohra.github.io/robofriends-1/) and GitHub (https://github.com/FatemaBohra/robofriends-1)

Thank you!

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Face Detection card removed; Smart Brain and RoboFriends cards updated with italic role lines, descriptions, and Live Demo/GitHub links.

## User

Please move "Elevator Safety UI" card at the end and remove Arrow from top right corner

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Elevator Safety UI moved to end of grid, arrow link removed (no external links for that one).

## User

Please to Elevator project card "Source code hosted on private GitLab repository. Available upon request." under title in lightest color. Also please add GitLab link (https://git.cs.dal.ca/courses/csci-x691/hci4good-solucore)

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added GitLab link and private-repo note to Elevator Safety UI card.

## User

In Education & Experience page. Modify, "Jazz Aviation LP — Software Developer Co-op" under title in italic add "Source code is proprietary — developed for internal use at Jazz Aviation LP." Add description"Hybrid co-op role at Jazz Aviation, one of Canada's largest regional airlines.
Developed an internal scheduling web application for airport staff as part of a cross-functional team of 11, collaborating across roles from team manager to department manager level.

Built a full-stack scheduling platform using AngularJS and React.js on the frontend and .NET Framework on the backend
Replaced a manual scheduling process, streamlining shift management and resource allocation for 40+ airport staff
Worked closely with stakeholders at multiple levels to ensure the application met operational requirements"

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Jazz Aviation entry updated with new title order, italic proprietary note, and full description.

## User

Please put these three in bullet points: "Built a full-stack scheduling platform using AngularJS and React.js on the frontend and .NET Framework on the backend
Replaced a manual scheduling process, streamlining shift management and resource allocation for 40+ airport staff
Worked closely with stakeholders at multiple levels to ensure the application met operational requirements"
Morever, make "Source code is proprietary — developed for internal use at Jazz Aviation LP." lightest color

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Bullet points added; proprietary note now lightest color.

## User

In card second, update date from "Sept 2022 – Apr 2026" to "Sept 2022 – Aug 2026"

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Date updated.

## User

Please update: Bachelor of Computer Science · Dalhousie University
under title in italic and lightest color: GPA 4.01
Description:
Coursework spanning Data Structures and Algorithms, User Interface Design, and Software Development. Gained hands-on industry experience through a co-op placement at Jazz Aviation LP and a university team project delivered to a real client.

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Updated title, added italic GPA line, and new description.

## User

please update description for Community Mentor in this page:

As a community mentor, I contribute to creating a welcoming and inclusive environment for students in residence, by serving as a bridge between newcomers and established members.
My responsibilities encompassed guiding students to campus resources, planning and running educational field trips, and providing 1on1 mentoring to those facing both personal and professional difficulties

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Community Mentor description updated.

## User

please revert

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Reverted Community Mentor description.

## User

update description from:
Supported first-year students academically and emotionally; organized workshops and events. to " I contribute to creating a welcoming and inclusive environment for students in residence, by serving as a bridge between newcomers and established members.
My responsibilities encompassed guiding students to campus resources, planning and running educational field trips, and providing 1on1 mentoring to those facing both personal and professional difficulties"

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Description updated in Education.dc.html.

## User

Please update "Technical Expertise" page to:
Title: Technical Expertise, under title in italice light color "What I build with, how I ship it, and how I work with people."

Then make it into two separate cards same theme tho: 
Card 1 - Technical Tools
Languages: Python · Java · JavaScript · TypeScript · PHP · HTML · CSS
Frameworks & Libraries: React · AngularJS · Spring Boot · Node.js · .NET Framework
Cloud & Infrastructure: AWS (DynamoDB, S3) · Docker · Azure · Terraform
Authentication & Payments: Auth0 · Stripe
Databases: MySQL · PostgreSQL · DynamoDB
DevOps & Tools: Git · GitHub · Jira · Confluence · Bash · PowerShell

Card 2: Interpersonal
Communication · Collaboration · Teamwork · Adaptability · Agile · Product Ownership · Stakeholder Management · Client Communication

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: str_replace_edit]_

The edit did apply this time (previous attempt errored). Let me re-verify.

_[tool: ready_for_verification]_

_[tool: screenshot]_

Confirmed — the restructure is now live: two cards (Technical Tools with six subsections, Interpersonal), new italic subtitle.

## User

Thanks! Please mover "Interpersonal" card on top. Remove "Stakeholder Management" and "Client Communication". Add "Active Listening"

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: read_file]_

Now moving the Interpersonal card above Technical Tools.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Interpersonal card moved to top; removed Stakeholder Management/Client Communication, added Active Listening.

## User

Update "Technical Tools" card:
In language remove "JavaScript" "PHP" "HTML" and "CSS" instead add "C#"
In Frameworks & Libraries make it
React + Vite
Axios
Angular
Spring Boot
.NET Framework

remove "PowerShell"

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Languages, Frameworks & Libraries, and DevOps & Tools sections updated.

## User

Update Home page "Projects" card:

The projects list to:
Zinema
Luv2Read
Lumora
Keep everything else as it is

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Projects card now lists Zinema, Luv2Read, Lumora (fade + "+2 more" kept as-is).

## User

Please update About Me page. Move "Education & Experience" entire page to About Me instead of "Education & Experience" card. I want one less click for recruiters!

Remove "Projects" card completely from About Me.

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Inlining the full Education & Experience timeline directly into About.dc.html, and removing the Projects card.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

About Me now includes the full Education & Experience timeline inline; Projects card removed. Education.dc.html still exists standalone but is no longer linked from About.

## User

Please update intro paragraph in About Me to "Aspiring AI-Augmented Software Developer and Computer Science student at Dalhousie University, building real-world experience one project at a time — through a co-op term, hands-on projects, and active involvement in campus life. Four years in, I have built production applications used by real people, contributed to industry teams, led client projects, and stayed deeply involved in my campus community — all at once. Finishing my degree in August 2026 and ready for what comes next."

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Intro paragraph updated.

## User

Please use all the space for lines in intro para, please put "Four years in, I have built production applications used by real people, contributed to industry teams, led client projects, and stayed deeply involved in my campus community — all at once. Finishing my degree in August 2026 and ready for what comes next." as separate para thanks

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Split into two paragraphs, widened to use more line space.

## User

Please remove Community Safety Team card completely. Instead "See my projects →" link to "Projects" page

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Community Safety card removed; timeline now ends with a "See my projects →" link to Projects.dc.html.

## User

Please make See my projects card #324444

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Card background updated to #324444.

## User

Please use glass up Arrow on top right corner of See My Projects (Also update the title)

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added the glass arrow button top-right, updated title to "See My Projects".

## User

Thanks. Please move up Arrow next to "See My Projects"

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Arrow moved inline next to the "See My Projects" text.

## User

Amazing, please also add card similar to and under "See My Projects"
"Reach Me" link it to Reach Me page

## Assistant

_[tool: grep]_

Contact page confirmed at Contact.dc.html.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added a "Reach Me" card, styled like See My Projects, under it, linking to Contact.dc.html.

## User

Remove Reach Me card instead, please move it to the very bottom as a closing line, under Honours & Awards — Dean's List & Sexton Scholar (2024) · WiTS Scholarship (2022)'

Let's connect → (link it to Reach Me page) thanks!

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Reach Me card removed; added "Let's connect →" closing line under Honours & Awards, linked to Contact.dc.html.

## User

Please add Please make "See My Projects" card #324444 in "Technical Expertise" page too

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added "See My Projects" card (#324444) to Technical Expertise page.

## User

On About Me page please make "Let's Connect" link same color as "Honours & Awards — Dean's List & Sexton Scholar (2024) · WiTS Scholarship (2022)'

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

"Let's connect" link now matches the Honours & Awards color/style.

## User

Also, please make it glass button

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Now styled as a liquid-glass pill button.

## User

Please update "Reach Me" to "Let's Connect"

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Updated "Reach Me" → "Let's Connect" on Home card and Contact page title.

## User

Please update Luv2Read Live Demo link to (https://luv2read-library.vercel.app/home)

## Assistant

_[tool: grep]_

Already set to that URL — no change needed.

## User

I see. However, the new favicon is not loading

## Assistant

_[tool: grep]_

The favicon issue is with the live Luv2Read site itself (deployed on Vercel) — not something in this project's files. This portfolio only links out to it; there's no favicon reference here to fix. You'd need to update the favicon in the Luv2Read project's own deployment.

