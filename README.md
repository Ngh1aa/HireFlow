# HireFlow - Recruitment & Candidate Management System

HireFlow is a front-end portfolio project for a recruitment and candidate management system. It demonstrates business analysis, product thinking, UI/UX design, and clean static front-end implementation for an HR recruitment workflow.

## 1. Product Idea Summary

HireFlow helps small and medium businesses manage hiring from job creation to candidate intake, CV screening, interview scheduling, evaluation, offer, hire, or rejection. The system replaces scattered spreadsheets, email threads, manual CV folders, and informal notes with a structured recruitment workspace.

The project is designed for a student or junior candidate who wants to show capability in:

- Requirement gathering and business problem analysis.
- User persona and role definition.
- MVP scope planning.
- User flows and process flows.
- Functional requirements and business rules.
- User stories with acceptance criteria.
- Dashboard, table, form, and kanban UI design.
- Responsive HTML, CSS, and JavaScript implementation.

## 2. Business Problem

Many small companies manage recruitment through Google Sheets, email, chat messages, and local CV folders. This causes operational issues:

- HR cannot clearly see which stage each candidate is in.
- Hiring Managers lack visibility into role progress and hiring efficiency.
- Interviewers have no single place to view schedules and submit feedback.
- Candidate information is spread across emails, CV files, notes, and sheets.
- Potential candidates may be missed because follow-up is manual.
- The company cannot easily measure pass/fail rates, source quality, or time to hire.
- Recruitment pipeline status is not visual.
- Role-based access between HR Admin, Hiring Manager, and Interviewer is unclear.

## 3. Target Users

### HR Admin

The HR Admin owns daily recruitment operations.

Main needs:

- Create and manage job postings.
- Add and update candidate profiles.
- Move candidates between recruitment stages.
- Schedule interviews and assign interviewers.
- Track pipeline progress and recruitment KPIs.
- Manage users and permissions.

### Hiring Manager

The Hiring Manager owns hiring needs for a department.

Main needs:

- View jobs related to their department.
- Review candidates for their roles.
- Make shortlist, offer, or reject decisions.
- Track recruitment progress and reports.

### Interviewer

The Interviewer participates in candidate evaluation.

Main needs:

- View assigned interviews.
- Review candidate information before the interview.
- Submit feedback and recommendation.
- Record strengths, weaknesses, and rating criteria.

### Candidate

The Candidate is the external applicant whose data is managed by the system.

Main needs:

- Submit application information.
- Provide CV, portfolio, and contact details.
- Receive updates from HR through external communication channels.

### Company Admin

The Company Admin supervises system adoption and governance.

Main needs:

- Ensure role permissions are configured correctly.
- Monitor recruitment transparency.
- Support internal process standardization.

## 4. MVP Scope

### In Scope

- Dashboard overview.
- Job management.
- Candidate management.
- Recruitment pipeline tracking.
- Interview scheduling.
- Interview feedback form.
- Report overview.
- Basic role and permission management.
- Mock data stored in JavaScript.
- Static front-end implementation.

### Out of Scope

- Real email automation.
- AI CV screening.
- Payment.
- Payroll.
- Full HRM employee management.
- Real-time chat.
- Advanced analytics.
- Third-party ATS integration.
- Backend authentication.
- Database persistence.

## 5. Feature List

- Login page with branded visual panel.
- Sidebar navigation and top navigation.
- Dashboard KPI cards.
- Candidate stage summary.
- Recruitment pipeline overview.
- Recent activities.
- Upcoming interviews.
- Active jobs table.
- Job list with search and filters.
- Job detail page with progress and candidate list.
- Candidate table with search and filters.
- Candidate detail page with profile, skills, notes, timeline, and interview history.
- Kanban recruitment pipeline with simulated drag and drop.
- Interview schedule list and calendar view.
- Interview feedback form with rating criteria.
- Reports page with funnel, source, and job performance data.
- Settings and user management page.
- Modal forms for creating jobs, candidates, interviews, and users.
- Status badges, tags, empty states, and responsive layout.

## 6. Sitemap

- Login
- Dashboard
- Jobs
- Job Detail
- Candidates
- Candidate Detail
- Kanban Pipeline
- Interview Schedule
- Interview Feedback
- Reports
- Settings / User Management

## 7. User Flow

### Flow 1: Create Job Posting

HR Admin logs in -> opens Jobs page -> clicks Create Job -> enters job title, department, location, employment type, salary, description, requirements, and deadline -> saves as Draft or Open -> job appears in Job List.

### Flow 2: Add Candidate

HR Admin logs in -> opens Candidates page -> clicks Add Candidate -> selects applied job -> enters profile, contact, source, CV, skills, expected salary, and notes -> saves candidate -> candidate appears in Applied stage.

### Flow 3: Schedule Interview

HR Admin selects candidate -> clicks Schedule -> chooses interviewer, date, time, meeting type, and interview round -> saves interview -> interview appears in Interview Schedule.

### Flow 4: Submit Interview Feedback

Interviewer opens assigned interview -> reviews candidate and job information -> rates evaluation criteria -> writes strengths and weaknesses -> selects recommendation -> submits feedback -> candidate and interview records are updated.

### Flow 5: Move Candidate Through Pipeline

HR Admin opens Kanban Pipeline -> drags candidate card to another stage -> system updates candidate status -> candidate card appears under the new stage -> activity can be reviewed on the candidate profile.

## 8. User Stories With Acceptance Criteria

### US-001: Create job posting

As an HR Admin, I want to create a new job posting so that I can start collecting candidates for an open position.

Acceptance Criteria:

- HR Admin can enter title, department, location, type, salary, description, requirements, and deadline.
- HR Admin can save the job as Draft or Open.
- Required fields are validated before saving.
- New job appears in the job list after saving.

### US-002: Edit job information

As an HR Admin, I want to edit job information so that published job details remain accurate.

Acceptance Criteria:

- HR Admin can update core job fields.
- Updated job information is reflected on the job detail page.
- Existing candidates attached to the job are not removed when the job is edited.

### US-003: Close job posting

As an HR Admin, I want to close a job posting so that candidates are no longer added to a completed role.

Acceptance Criteria:

- HR Admin can change job status to Closed.
- Closed jobs are visually marked with a status badge.
- Closed jobs still keep historical candidate and interview records.

### US-004: View dashboard

As an HR Admin, I want to view recruitment KPIs so that I can understand current hiring performance quickly.

Acceptance Criteria:

- Dashboard displays total candidates, open jobs, interviews, offer rate, and rejected candidates.
- Dashboard displays candidate distribution by stage.
- Dashboard displays upcoming interviews and recent activities.

### US-005: Search and filter jobs

As an HR Admin, I want to search and filter jobs so that I can find openings faster.

Acceptance Criteria:

- User can search jobs by title, department, location, or status.
- User can filter jobs by department.
- User can filter jobs by status.
- Filtered result count is visible.

### US-006: Add candidate

As an HR Admin, I want to add a candidate profile so that the applicant can be tracked in the recruitment process.

Acceptance Criteria:

- HR Admin can enter name, email, phone, applied job, source, stage, rating, CV link, skills, and notes.
- New candidate is saved to the candidate list.
- Candidate appears in the selected job and pipeline stage.

### US-007: View candidate detail

As an HR Admin, I want to view candidate details so that I can evaluate profile, notes, interview history, and stage.

Acceptance Criteria:

- Candidate detail displays contact information, applied job, CV link, portfolio, skills, and notes.
- Candidate timeline is visible.
- Interview history is visible when interview records exist.

### US-008: Move candidate stage

As an HR Admin, I want to move candidates between stages so that recruitment status stays updated.

Acceptance Criteria:

- HR Admin can update the candidate stage from the candidate detail page.
- HR Admin can simulate movement through the kanban board.
- Updated stage is reflected in candidate table, detail page, dashboard, and pipeline.

### US-009: Use kanban pipeline

As an HR Admin, I want to view candidates in a kanban pipeline so that I can track recruitment progress visually.

Acceptance Criteria:

- Pipeline displays Applied, Screening, Interview, Offer, Hired, and Rejected columns.
- Candidate cards display name, applied job, rating, experience, source, applied date, avatar, and skill tags.
- Cards can be dragged between columns in the UI demo.

### US-010: Schedule interview

As an HR Admin, I want to schedule an interview so that interviewers and candidates are aligned on time and round.

Acceptance Criteria:

- HR Admin can select candidate, job, interviewer, round, date, time, meeting type, and location.
- New interview appears in the interview list.
- Interview status defaults to Scheduled.

### US-011: View assigned interviews

As an Interviewer, I want to view assigned interviews so that I know my upcoming evaluation tasks.

Acceptance Criteria:

- Interview schedule displays candidate name, job, interviewer, round, date, time, type, status, and result.
- Scheduled, completed, and cancelled interviews have clear badges.
- User can switch between list and calendar summary.

### US-012: Submit feedback

As an Interviewer, I want to submit interview feedback so that hiring decisions can be recorded.

Acceptance Criteria:

- Feedback form includes communication, technical, problem solving, culture fit, experience match, and overall rating.
- Interviewer can enter strengths and weaknesses.
- Interviewer can submit Pass, Fail, or Consider recommendation.
- Submitted feedback updates the interview record.

### US-013: View reports

As a Hiring Manager, I want to view recruitment reports so that I can understand hiring performance.

Acceptance Criteria:

- Reports display total applicants, conversion rate, average time to hire, and offer acceptance rate.
- Reports show candidate source performance.
- Reports show job performance table.

### US-014: Manage users

As an HR Admin, I want to manage users so that team members have correct roles.

Acceptance Criteria:

- HR Admin can add a new user.
- HR Admin can edit user role and status.
- User list displays name, email, role, and permission status.

### US-015: View role permissions

As a Company Admin, I want to view role permissions so that access control is clear.

Acceptance Criteria:

- Settings page displays features and access level for HR Admin, Hiring Manager, and Interviewer.
- Permission values can be Yes, Limited, or No.
- Manage Users is only available to HR Admin in the defined permission matrix.

## 9. Functional Requirements

| ID | Description | Priority | Related Role |
| --- | --- | --- | --- |
| FR-001 | The system shall allow HR Admin to create job postings. | Must Have | HR Admin |
| FR-002 | The system shall allow HR Admin to edit job postings. | Must Have | HR Admin |
| FR-003 | The system shall allow HR Admin to close job postings. | Must Have | HR Admin |
| FR-004 | The system shall display job status as Draft, Open, or Closed. | Must Have | HR Admin, Hiring Manager |
| FR-005 | The system shall display candidate count for each job. | Must Have | HR Admin, Hiring Manager |
| FR-006 | The system shall allow users to search jobs. | Should Have | HR Admin, Hiring Manager |
| FR-007 | The system shall allow users to filter jobs by department and status. | Should Have | HR Admin, Hiring Manager |
| FR-008 | The system shall allow HR Admin to add candidate profiles. | Must Have | HR Admin |
| FR-009 | The system shall allow HR Admin to edit candidate profiles. | Must Have | HR Admin |
| FR-010 | The system shall display candidate contact information, CV link, portfolio, skills, and notes. | Must Have | HR Admin, Hiring Manager, Interviewer |
| FR-011 | The system shall allow users to search candidates. | Must Have | HR Admin, Hiring Manager |
| FR-012 | The system shall allow users to filter candidates by job, stage, and source. | Must Have | HR Admin, Hiring Manager |
| FR-013 | The system shall display candidate stage badges. | Must Have | HR Admin, Hiring Manager, Interviewer |
| FR-014 | The system shall allow HR Admin and Hiring Manager to move candidate stage. | Must Have | HR Admin, Hiring Manager |
| FR-015 | The system shall provide a kanban pipeline view. | Must Have | HR Admin, Hiring Manager |
| FR-016 | The system shall display candidate cards in the kanban pipeline. | Must Have | HR Admin, Hiring Manager |
| FR-017 | The system shall support simulated drag and drop for candidate stage movement. | Should Have | HR Admin |
| FR-018 | The system shall allow HR Admin to create interview schedules. | Must Have | HR Admin |
| FR-019 | The system shall display interview date, time, round, interviewer, meeting type, status, and result. | Must Have | HR Admin, Interviewer |
| FR-020 | The system shall allow users to filter interviews by status. | Should Have | HR Admin, Interviewer |
| FR-021 | The system shall provide interview list and calendar summary views. | Should Have | HR Admin, Interviewer |
| FR-022 | The system shall provide an interview feedback form. | Must Have | HR Admin, Hiring Manager, Interviewer |
| FR-023 | The system shall capture ratings for communication, technical skill, problem solving, culture fit, experience match, and overall rating. | Must Have | Interviewer |
| FR-024 | The system shall capture strengths, weaknesses, and recommendation. | Must Have | Interviewer |
| FR-025 | The system shall update interview result after feedback submission. | Must Have | Interviewer |
| FR-026 | The system shall display dashboard KPIs. | Must Have | HR Admin, Hiring Manager |
| FR-027 | The system shall display recruitment reports. | Should Have | HR Admin, Hiring Manager |
| FR-028 | The system shall display candidate source performance. | Should Have | HR Admin, Hiring Manager |
| FR-029 | The system shall display job performance data. | Should Have | HR Admin, Hiring Manager |
| FR-030 | The system shall allow HR Admin to add and edit users. | Must Have | HR Admin |
| FR-031 | The system shall display a role and permission matrix. | Must Have | HR Admin, Company Admin |
| FR-032 | The system shall provide responsive layout for desktop and tablet. | Must Have | All Roles |

## 10. Business Rules

- BR-001: Only HR Admin can create, edit, or close a job posting.
- BR-002: A closed job cannot receive new candidates in a production version.
- BR-003: A candidate must be linked to one applied job.
- BR-004: A candidate cannot be moved to Offer unless at least one interview exists in a production version.
- BR-005: Interview feedback cannot be submitted without an overall rating.
- BR-006: Interview result must be Pass, Fail, or Pending.
- BR-007: Recommendation must be Pass, Fail, or Consider.
- BR-008: Only HR Admin can manage users.
- BR-009: Interviewers can submit feedback but cannot move candidate stages.
- BR-010: Hiring Managers can view reports but cannot manage users.
- BR-011: Candidate stage must be one of Applied, Screening, Interview, Technical Test, Final Interview, Offer, Hired, or Rejected.
- BR-012: Job status must be Draft, Open, or Closed.
- BR-013: Candidate rating must be between 1 and 5.
- BR-014: Interview date and time are required when scheduling an interview.
- BR-015: CV link is recommended for candidate review but can be mocked in the portfolio version.

## 11. Data Model Suggestion

### Job

| Field | Type | Description |
| --- | --- | --- |
| id | String | Unique job identifier |
| title | String | Job title |
| department | String | Hiring department |
| location | String | Work location |
| type | String | Employment type |
| salary | String | Salary range |
| description | Text | Job description |
| requirements | Array | Job requirements |
| createdDate | Date | Created date |
| deadline | Date | Application deadline |
| status | Enum | Draft, Open, Closed |

### Candidate

| Field | Type | Description |
| --- | --- | --- |
| id | String | Unique candidate identifier |
| name | String | Candidate full name |
| email | String | Candidate email |
| phone | String | Candidate phone |
| jobId | String | Related job |
| source | String | Candidate source |
| stage | Enum | Current recruitment stage |
| rating | Number | Score from 1 to 5 |
| cvLink | String | CV URL |
| portfolio | String | Portfolio URL |
| expectedSalary | String | Expected salary |
| experience | Number | Years of experience |
| skills | Array | Skill tags |
| notes | Text | Internal HR notes |
| appliedDate | Date | Application date |

### Interview

| Field | Type | Description |
| --- | --- | --- |
| id | String | Unique interview identifier |
| candidateId | String | Related candidate |
| jobId | String | Related job |
| interviewer | String | Assigned interviewer |
| round | String | Interview round |
| date | Date | Interview date |
| time | Time | Interview time |
| type | Enum | Online or Offline |
| location | String | Meeting link or room |
| status | Enum | Scheduled, Completed, Cancelled |
| feedback | Text | Interview feedback |
| result | Enum | Pass, Fail, Pending |

### User

| Field | Type | Description |
| --- | --- | --- |
| id | String | Unique user identifier |
| name | String | User full name |
| email | String | User email |
| role | Enum | HR Admin, Hiring Manager, Interviewer |
| status | Enum | Active, Invited, Inactive |

## 12. Sample Mock Data

### Jobs

| Job | Department | Location | Type | Status |
| --- | --- | --- | --- | --- |
| UI/UX Designer | Product | Ho Chi Minh City | Full-time | Open |
| Front-end Developer | Engineering | Da Nang | Full-time | Open |
| Business Analyst | Business | Hybrid | Full-time | Open |
| Product Manager | Product | Remote | Full-time | Draft |
| QA Tester | Engineering | Ho Chi Minh City | Contract | Open |
| Digital Marketing Executive | Marketing | Ha Noi | Full-time | Closed |

### Candidates

| Name | Applied Position | Stage | Rating | Source | Experience |
| --- | --- | --- | --- | --- | --- |
| Linh Tran | UI/UX Designer | Interview | 4.8 | LinkedIn | 4 years |
| Minh Pham | Front-end Developer | Technical Test | 4.5 | Referral | 3 years |
| Anh Nguyen | Business Analyst | Screening | 4.2 | Website | 2 years |
| Bao Le | Product Manager | Applied | 3.9 | LinkedIn | 6 years |
| Chi Vo | QA Tester | Offer | 4.7 | Job Board | 5 years |
| Duy Hoang | Front-end Developer | Rejected | 2.8 | Website | 1 year |
| Gia Bui | Digital Marketing Executive | Hired | 4.6 | Facebook | 3 years |
| Hieu Dang | Business Analyst | Final Interview | 4.9 | Referral | 4 years |
| Khanh Do | UI/UX Designer | Applied | 3.7 | Job Board | 2 years |
| Lan Mai | QA Tester | Interview | 4.1 | Website | 2 years |
| Nam Truong | Front-end Developer | Screening | 4.0 | LinkedIn | 3 years |
| Oanh Phan | Product Manager | Offer | 4.4 | Referral | 7 years |
| Quang Vu | Business Analyst | Applied | 3.6 | Job Board | 1 year |
| Thao Ho | UI/UX Designer | Hired | 4.8 | Website | 5 years |
| Vy Nguyen | Digital Marketing Executive | Rejected | 3.0 | Facebook | 2 years |

### Interviews

| Candidate | Job | Interviewer | Round | Date | Time | Status | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Linh Tran | UI/UX Designer | Mai Nguyen | UX Interview | 2026-06-05 | 09:30 | Scheduled | Pending |
| Minh Pham | Front-end Developer | Son Le | Technical Test Review | 2026-06-06 | 14:00 | Scheduled | Pending |
| Hieu Dang | Business Analyst | Hanh Tran | Final Interview | 2026-06-07 | 10:00 | Scheduled | Pending |
| Lan Mai | QA Tester | Bao Pham | QA Interview | 2026-06-08 | 15:30 | Scheduled | Pending |
| Chi Vo | QA Tester | Bao Pham | Final Review | 2026-05-29 | 13:30 | Completed | Pass |
| Duy Hoang | Front-end Developer | Son Le | Screening | 2026-05-22 | 11:00 | Completed | Fail |
| Oanh Phan | Product Manager | Tuan Do | Leadership Interview | 2026-05-28 | 16:00 | Completed | Pass |
| Vy Nguyen | Digital Marketing Executive | Linh Dao | Marketing Review | 2026-05-20 | 09:00 | Cancelled | Fail |

## 13. UI Screen Description

### Login Page

Contains HireFlow logo, email input, password input, forgot password link, login button, and a generated SaaS recruitment illustration.

### Dashboard Page

Contains KPI cards, recruitment pipeline progress, upcoming interviews, recent activities, and active jobs table.

### Jobs Page

Contains job list table, search, department filter, status filter, create job button, status badges, candidate count, and deadline.

### Job Detail Page

Contains job information, description, requirements, candidate list, recruitment progress, and actions for edit or close job.

### Candidates Page

Contains candidate table, search, job filter, stage filter, source filter, rating display, stage badge, and view action.

### Candidate Detail Page

Contains candidate profile, contact details, applied job, CV link, portfolio link, skills, notes, timeline activity, interview history, and move stage control.

### Kanban Pipeline Page

Contains pipeline columns, candidate cards, job filter, candidate search, stage summary, and simulated drag-and-drop movement.

### Interview Schedule Page

Contains list/calendar switch, interview records, interview status badges, interviewer name, candidate name, and create interview button.

### Interview Feedback Page

Contains candidate information, interview round, rating criteria, feedback text areas, recommendation dropdown, and submit feedback button.

### Reports Page

Contains total applicants, conversion rate, average time to hire, offer acceptance rate, candidate source performance, and job performance table.

### Settings / User Management Page

Contains user list, role, permission status, add user button, edit role action, and role permission matrix.

## 14. Design System Suggestion

For a full UI/UX and Figma-ready design specification, see [HireFlow UI/UX Design Guide](docs/ui-ux-design-guide.md).
For the premium Recruitment Command Center redesign direction, see [HireFlow Command Center Redesign](docs/command-center-redesign.md).

### Visual Style

- Modern SaaS dashboard.
- Clean and professional interface.
- Minimal color usage with clear information hierarchy.
- Dense but readable tables for operational work.
- Compact panels with 8px radius.
- Strong status badges for stage, job, interview, and result states.

### Color Tokens

| Token | Value | Usage |
| --- | --- | --- |
| Primary | #2563EB | Main actions, active navigation |
| Background | #F8FAFC | App background |
| Surface | #FFFFFF | Panels and tables |
| Text | #111827 | Main text |
| Muted Text | #6B7280 | Supporting text |
| Border | #E5E7EB | Dividers and controls |
| Success | #16A34A | Hired, completed, positive status |
| Warning | #F59E0B | Draft, scheduled, pending status |
| Danger | #DC2626 | Rejected, cancelled, fail status |
| Teal | #0F766E | Secondary HR accent |

### Typography

- Font: Inter.
- Large page headings: 22px to 24px.
- Card metrics: 26px to 30px.
- Body text: 14px to 16px.
- Table labels and badges: 12px to 13px.

### Components

- Sidebar navigation.
- Topbar with search and profile menu.
- KPI card.
- Table.
- Status badge.
- Tag.
- Kanban column.
- Candidate card.
- Modal form.
- Segmented control.
- Empty state.
- Toast notification.

## 15. User Roles

| Feature | HR Admin | Hiring Manager | Interviewer |
| --- | --- | --- | --- |
| View Dashboard | Yes | Yes | Limited |
| Manage Jobs | Yes | Limited | No |
| Manage Candidates | Yes | Limited | No |
| Move Candidate Stage | Yes | Yes | No |
| Schedule Interview | Yes | Limited | No |
| Submit Feedback | Yes | Yes | Yes |
| View Reports | Yes | Yes | No |
| Manage Users | Yes | No | No |

## 16. Tech Stack

- HTML5.
- CSS3.
- JavaScript.
- Mock data in JavaScript.
- Lucide icons from CDN.
- Google Fonts with Inter.
- No backend.
- No database.

## 17. Project Structure

```text
HireFlow/
  index.html
  README.md
  assets/
    css/
      styles.css
    img/
      hireflow-login-visual.png
    js/
      app.js
```

## 18. How To Run

This is a static front-end project. Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## 19. Future Improvements

- Add real authentication and role-based route protection.
- Persist data with a backend API and database.
- Add real email notifications for interview invitations.
- Add candidate CV upload and file storage.
- Add AI-assisted CV parsing and candidate matching.
- Add advanced reporting for source quality and time-to-hire.
- Add audit log for candidate stage movements.
- Add interviewer availability calendar.
- Add candidate portal for self-service application tracking.
- Add integration with LinkedIn, email, and ATS platforms.

## 20. CV Project Description

HireFlow - Recruitment & Candidate Management System

Role: Business Analyst & UI/UX Designer

Type: HRM / Recruitment Management System

Tools: Figma, HTML/CSS/JavaScript

- Analyzed recruitment workflows including job posting, candidate screening, interview scheduling, evaluation, and offer management.
- Defined user roles, MVP scope, business rules, user stories, acceptance criteria, and functional requirements.
- Designed dashboard, candidate pipeline, job management, interview schedule, and role-based permission flows.
- Transformed fragmented hiring operations into a structured recruitment management system with clear UI logic and business process visibility.
- Built a responsive static front-end prototype using HTML, CSS, JavaScript, mock data, tables, modals, filters, and kanban interaction.

## 21. Development Plan

### Step 1: Business Discovery

- Identify recruitment problems in small and medium companies.
- Define target users and stakeholders.
- Document current pain points and desired outcomes.

### Step 2: Scope Definition

- Define MVP scope and out-of-scope items.
- Prioritize features with Must Have, Should Have, and Could Have labels.
- Confirm role permissions.

### Step 3: Requirements Documentation

- Write user stories and acceptance criteria.
- Write functional requirements.
- Write business rules and data model.

### Step 4: Information Architecture

- Create sitemap.
- Define navigation structure.
- Map core user flows for job creation, candidate management, interview scheduling, feedback, and stage movement.

### Step 5: UI/UX Design

- Define design system tokens.
- Design dashboard, jobs, candidates, pipeline, interviews, reports, and settings screens.
- Create responsive layouts for desktop and tablet.

### Step 6: Front-end Implementation

- Build static HTML shell.
- Create CSS visual system and responsive layout.
- Add mock data in JavaScript.
- Render screens dynamically.
- Add modals, filters, search, and kanban interactions.

### Step 7: Testing and Portfolio Polish

- Check JavaScript syntax.
- Verify core navigation and screen rendering.
- Review responsive behavior.
- Polish README documentation.
- Prepare CV project summary.
