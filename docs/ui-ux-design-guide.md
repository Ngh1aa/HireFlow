# HireFlow - UI/UX Design Guide

Tai lieu nay mo ta huong thiet ke giao dien cho HireFlow - Recruitment & Candidate Management System. Noi dung duoc viet cho muc dich portfolio UI/UX, Product Design, IT Business Analyst va Front-end Developer co ban.

## 1. UI/UX Concept Direction

HireFlow nen duoc thiet ke nhu mot B2B HR SaaS dashboard: gon gang, dang tin cay, de scan thong tin va tap trung vao tac vu tuyen dung hang ngay. Trai nghiem khong nen mang tinh marketing hay trang tri qua nhieu; man hinh dau tien sau login phai la workspace that su giup HR lam viec.

### Design Personality

- Professional: dung cho phong HR, Hiring Manager va Interviewer.
- Operational: uu tien bang, filter, trang thai, pipeline va action ro rang.
- Trustworthy: su dung nen sang, card trang, border nhe, text de doc.
- Data-driven: KPI, chart don gian, badge, stage count va performance table.
- Minimal but complete: it mau, it hieu ung, nhung moi flow chinh deu co UI day du.

### Product Experience Principle

- Moi man hinh phai tra loi cau hoi: nguoi dung can biet gi, can quyet dinh gi, va can lam gi tiep theo?
- CTA chinh phai nam o vung de thay: Create Job, Add Candidate, Schedule Interview, Submit Feedback.
- Trang thai recruitment phai nhin thay ngay: stage badge, job status, interview status, result badge.
- Cac bang can de scan theo cot, khong nen dat qua nhieu text dai trong mot row.
- Kanban phai tao cam giac co the keo tha, ngay ca khi chi la prototype.

## 2. Design System

### Foundation

Design system nen gom 5 lop:

- Tokens: color, typography, spacing, radius, border, shadow.
- Components: button, input, select, badge, table, card, modal, kanban card.
- Patterns: dashboard grid, filter bar, detail page, split layout, empty state.
- States: default, hover, focus, active, disabled, error, empty, loading.
- Screen templates: list page, detail page, dashboard page, form modal, report page.

### Tone

- B2B SaaS.
- Clean enterprise UI.
- HR technology.
- Structured workflow.
- Calm, clear, practical.

## 3. Color Palette

### Core Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | `#2563EB` | Main CTA, active navigation, links |
| Primary Dark | `#1D4ED8` | Button hover, strong active state |
| Background | `#F8FAFC` | App background |
| Surface | `#FFFFFF` | Cards, modals, tables |
| Surface Muted | `#F1F5F9` | Table header, subtle panels |
| Text Primary | `#111827` | Main content |
| Text Secondary | `#6B7280` | Descriptions and metadata |
| Text Muted | `#9CA3AF` | Captions, placeholder |
| Border | `#E5E7EB` | Card, table, input border |
| Border Strong | `#CBD5E1` | Hover border, dividers |
| Success | `#16A34A` | Hired, completed, positive result |
| Warning | `#F59E0B` | Draft, scheduled, pending |
| Danger | `#DC2626` | Rejected, cancelled, fail |
| Info | `#0EA5E9` | Neutral progress, info status |

### Badge Colors

| Badge | Background | Text |
| --- | --- | --- |
| Applied | `#DBEAFE` | `#1E40AF` |
| Screening | `#FEF3C7` | `#92400E` |
| Interview | `#E0F2FE` | `#075985` |
| Technical Test | `#EDE9FE` | `#5B21B6` |
| Final Interview | `#FCE7F3` | `#9D174D` |
| Offer | `#FEF3C7` | `#92400E` |
| Hired | `#DCFCE7` | `#166534` |
| Rejected | `#FEE2E2` | `#991B1B` |
| Open | `#DCFCE7` | `#166534` |
| Draft | `#FEF3C7` | `#92400E` |
| Closed | `#FEE2E2` | `#991B1B` |
| Scheduled | `#DBEAFE` | `#1E40AF` |
| Completed | `#DCFCE7` | `#166534` |
| Cancelled | `#FEE2E2` | `#991B1B` |
| Pass | `#DCFCE7` | `#166534` |
| Fail | `#FEE2E2` | `#991B1B` |
| Pending | `#FEF3C7` | `#92400E` |

### Usage Rules

- Background tong the dung mau sang, khong dung gradient lon cho main app.
- Sidebar co the dung dark navy `#111827` de tao cam giac enterprise.
- Card nen dung background trang va border nhe thay vi shadow dam.
- Primary blue chi dung cho CTA, active state va data highlight quan trong.
- Badge dung mau nhat de tranh gay mat khi scan bang.

## 4. Typography System

### Font

Font recommended: Inter. Neu dung Figma, co the chon Plus Jakarta Sans, Geist, Manrope hoac Lexend neu muon cam giac hien dai hon.

### Type Scale

| Style | Size | Weight | Line Height | Usage |
| --- | --- | --- | --- | --- |
| H1 | 30-32px | 600-700 | 38-40px | Login headline, major page title |
| H2 | 24px | 600-700 | 32px | Main section title |
| H3 | 20px | 600 | 28px | Detail card title |
| Section Title | 16-18px | 600 | 24px | Panel title, table title |
| Body | 14-16px | 400 | 22-24px | Normal text |
| Body Medium | 14px | 500-600 | 20px | Table cell, form label |
| Caption | 12-13px | 500-600 | 16-18px | Badge, metadata, helper text |
| KPI Number | 28-32px | 700 | 36px | Dashboard metric |

### Typography Rules

- Page title phai ngan gon: Dashboard, Jobs, Candidates, Pipeline.
- Subtitle nen giai thich gia tri cua man hinh trong mot cau ngan.
- Table header dung uppercase nhe, 12px, mau text secondary.
- Badge text dung 12px, semibold.
- Khong dung font trang tri vi day la san pham B2B.

## 5. Layout Structure

### Global Layout

Desktop layout:

- Sidebar: 240-272px.
- Top bar: 72-84px.
- Main content: max width 1440-1500px.
- Content padding: 24-32px.
- Section gap: 20-24px.

Tablet layout:

- Sidebar thu gon thanh drawer hoac icon rail.
- KPI grid tu 4 cot thanh 2 cot.
- Table co horizontal scroll.
- Modal van giu 2 cot neu du rong, chuyen 1 cot khi hep.

Mobile layout:

- Sidebar thanh drawer.
- KPI grid 1 cot.
- Table co the bien thanh card list.
- Kanban giu horizontal scroll.
- Form 1 cot.

### Sidebar

Sidebar gom:

- Logo HireFlow.
- Navigation items: Dashboard, Jobs, Candidates, Pipeline, Interviews, Reports, Settings.
- Workspace/user section o cuoi sidebar.
- Collapse/logout icon neu can.

Design rule:

- Item height: 40-44px.
- Gap giua items: 6-8px.
- Icon 18-20px.
- Active item: background nhe hoac left indicator mau primary.
- Label can trai, icon va text align center.

### Top Bar

Top bar gom:

- Page title va subtitle/eyebrow.
- Search input.
- Notification icon.
- Quick action button.
- User avatar/profile.

Design rule:

- Khong nen qua cao.
- Search width desktop: 320-420px.
- Action chinh dat ben phai.
- Neu man hinh list page, CTA phai trung voi tac vu chinh cua page.

### Main Content

Main content gom cac block:

- Page header.
- Filter bar.
- KPI cards.
- Data visualization.
- Table/list.
- Side panel hoac activity cards.

Design rule:

- Card padding: 20-24px.
- Card radius: 10-16px.
- Gap giua cards: 16-24px.
- Table row height: 56-64px.
- Khong de dashboard qua rong hai ben; dung max width.

## 6. Component List

### Button

Components:

- Button / Primary
- Button / Secondary
- Button / Ghost
- Button / Danger
- Button / Icon

States:

- Default
- Hover
- Active
- Focus
- Disabled
- Loading

Button usage:

- Primary: Add Candidate, Create Job, Schedule Interview, Submit Feedback.
- Secondary: Save Draft, Export Report.
- Ghost: View, Edit, Cancel.
- Danger: Close Job, Reject Candidate, Cancel Interview.
- Icon: notification, menu, action menu, close modal.

### Input And Form

Components:

- Input / Text
- Input / Search
- Select / Default
- Date Picker / Default
- Textarea / Default
- File Upload / Mock
- Checkbox / Default
- Radio / Default

States:

- Default
- Focus
- Filled
- Error
- Disabled

Form rules:

- Label dat tren input.
- Helper text dat duoi input khi can giai thich.
- Error text mau danger, ngan gon.
- Desktop form dai nen chia 2 cot.
- Mobile form chuyen 1 cot.

### Card

Components:

- Card / KPI
- Card / Candidate
- Card / Job
- Card / Interview
- Card / Report
- Card / Activity
- Card / Empty State

Card rules:

- KPI card co icon, label, number, trend, short description.
- Candidate card co avatar, name, position, stage, rating, source, skills.
- Job card/table row co title, department, status, deadline, candidate count.
- Activity card co icon, message, timestamp.

### Badge

Badge groups:

- Badge / Stage
- Badge / Job Status
- Badge / Interview Status
- Badge / Result
- Badge / Role

Badge rules:

- Background mau nhat.
- Text mau dam hon cung hue.
- Height 24-28px.
- Padding horizontal 8-10px.
- Radius 999px.

### Table

Table includes:

- Header row.
- Data row.
- Checkbox select.
- Avatar/name cell.
- Status badge.
- Rating cell.
- Action menu.
- Empty state.
- Pagination.

Table rules:

- Header background `#F8FAFC`.
- Row hover background `#F8FAFC`.
- Row height 56-64px.
- Action menu nam cot cuoi.
- Neu du lieu rong, hien empty state co icon, title, helper text va CTA.

### Modal

Modal usage:

- Create Job.
- Add Candidate.
- Schedule Interview.
- Submit Feedback.

Modal structure:

- Header: title, short description, close icon.
- Body: fields grouped by section.
- Footer: Cancel and Save/Submit.

Modal rules:

- Width 640-760px cho form trung binh.
- Width 860-960px neu form 2 cot va nhieu section.
- Max height 85-90vh.
- Body scroll khi can.
- CTA primary nam ben phai footer.

### Kanban Card

Candidate card includes:

- Avatar placeholder.
- Candidate name.
- Applied position.
- Rating.
- Experience.
- Source.
- Applied date.
- Skill tags.

Kanban rules:

- Column width: 260-300px.
- Column min height: 560px.
- Column header co stage name va count.
- Card compact, padding 12-14px.
- Hover state nhe: border primary hoac shadow nhe.
- Board co horizontal scroll tren desktop/tablet/mobile.

## 7. Detailed Screen-By-Screen UI Description

### 7.1 Login Page

Goal: tao cam giac chuyen nghiep, de login va phu hop B2B SaaS.

Layout:

- 2 columns.
- Left: login form.
- Right: HR/recruitment dashboard illustration hoac product preview.
- Background sang, co the dung subtle blue tint.

Content:

- Logo HireFlow.
- Headline: Welcome back.
- Supporting copy: Manage your hiring pipeline with clarity.
- Email input.
- Password input.
- Remember me checkbox.
- Forgot password link.
- Login button.

UX notes:

- Form card can giua theo chieu doc.
- CTA Login dung primary.
- Illustration khong nen lam roi mat hoac co qua nhieu chu.
- Neu prototype Figma, click Login di den Dashboard.

### 7.2 Dashboard Page

Goal: giup HR va Hiring Manager nhin nhanh hieu qua tuyen dung.

Header:

- Title: Dashboard.
- Subtitle: Overview of your recruitment performance.
- Search bar.
- Button: Add Candidate.

KPI cards:

- Total Candidates.
- Open Jobs.
- Interviews This Week.
- Offer Rate.

Moi KPI card:

- Icon.
- Label.
- Number.
- Trend indicator.
- Short description.

Main content:

- Recruitment Pipeline Overview o ben trai.
- Candidates by Stage chart/progress bars.
- Upcoming Interviews o ben phai.
- Recent Activities o ben phai hoac duoi upcoming.
- Active Jobs table ben duoi.

UX notes:

- KPI grid 4 cot desktop.
- Chart/pipeline chiem vung lon nhat vi la thong tin quan trong.
- Upcoming interviews can hien candidate, role, interviewer, date/time va status.
- Active jobs table can co candidate count va deadline.

### 7.3 Jobs Page

Goal: quan ly vi tri tuyen dung.

Header:

- Title: Jobs.
- CTA: Create Job.

Filter bar:

- Search job.
- Department filter.
- Status filter.

Table columns:

- Job Title.
- Department.
- Location.
- Type.
- Candidates.
- Deadline.
- Status.
- Actions.

Actions:

- View.
- Edit.
- Close.

UX notes:

- Status badge Draft/Open/Closed ro rang.
- Candidate count nen la so dam de scan nhanh.
- Deadline nen co mau warning neu sap den han trong ban nang cao.
- Empty state: Create a job posting to begin tracking candidates.

### 7.4 Job Detail Page

Goal: xem chi tiet mot job va danh sach ung vien lien quan.

Header:

- Job title.
- Status badge.
- Edit Job button.
- Close Job button.

Overview:

- Department.
- Location.
- Employment type.
- Salary range.
- Deadline.
- Created date.
- Hiring manager.

Main layout:

- Left column: job description, requirements.
- Right column: overview card, recruitment progress.
- Bottom: candidates for this job table.

UX notes:

- Requirements nen hien dang tag hoac bullet.
- Recruitment progress nen hien stage count/progress.
- Candidate table ben duoi giup tiep tuc flow sang Candidate Detail.

### 7.5 Candidates Page

Goal: quan ly toan bo ung vien.

Header:

- Title: Candidates.
- CTA: Add Candidate.

Filter bar:

- Search candidate.
- Filter by job.
- Filter by stage.
- Filter by source.

Table columns:

- Candidate.
- Applied Position.
- Stage.
- Rating.
- Source.
- Experience.
- Applied Date.
- Actions.

Actions:

- View Profile.
- Move Stage.
- Schedule Interview.

UX notes:

- Candidate cell can co avatar, name, email.
- Rating dung star hoac number 1-5.
- Stage badge la visual cue quan trong nhat.
- Row hover giup table co cam giac interactive.

### 7.6 Candidate Detail Page

Goal: xem ho so ung vien, lich su phong van va trang thai recruitment.

Header:

- Avatar.
- Name.
- Email.
- Phone.
- Current stage badge.
- Rating.
- Move Stage button.
- Schedule Interview button.

Sections:

- Candidate Information.
- Applied Job.
- Skills.
- CV / Portfolio.
- Notes.
- Interview History.
- Activity Timeline.

UX notes:

- Header phai noi bat vi day la ngữ cảnh chinh.
- Notes nen o card rieng de HR doc nhanh.
- Timeline nen sap xep moi nhat len truoc trong ban thuc te.
- Interview history co table nho de xem round, interviewer, date, result.

### 7.7 Pipeline Page

Goal: theo doi recruitment stage bang kanban board.

Top controls:

- Job filter.
- Search candidate.
- Optional stage summary.

Columns:

- Applied.
- Screening.
- Interview.
- Offer.
- Hired.
- Rejected.

Card content:

- Candidate name.
- Position.
- Rating.
- Experience.
- Skills.
- Source.
- Applied date.

UX notes:

- Moi cot co stage name va candidate count.
- Horizontal scroll neu nhieu cot.
- Drag affordance co the la hover shadow, cursor, hoac icon grip.
- Rejected va Hired cot nen co mau header nhe khac de phan biet terminal stage.

### 7.8 Interview Schedule Page

Goal: quan ly lich phong van.

Header:

- Title: Interviews.
- CTA: Schedule Interview.

Controls:

- Status filter.
- Interviewer filter.
- Toggle List / Calendar.

List/table columns:

- Candidate.
- Position.
- Interviewer.
- Round.
- Date & Time.
- Meeting Type.
- Status.
- Result.
- Actions.

Actions:

- View.
- Reschedule.
- Add Feedback.

UX notes:

- Upcoming interviews nen noi bat hon interview da completed.
- Meeting type online/offline phai ro.
- Online co meeting link; offline co location/room.
- Add Feedback la action quan trong sau khi interview completed.

### 7.9 Interview Feedback Page

Goal: giup Interviewer danh gia ung vien nhanh va co cau truc.

Content:

- Candidate summary card.
- Interview information.
- Rating criteria.
- Feedback textarea.
- Recommendation select.
- Submit button.

Criteria:

- Communication Skill.
- Technical Skill.
- Problem Solving.
- Culture Fit.
- Experience Match.

UX notes:

- Diem 1-5 nen dung slider, radio, hoac segmented rating.
- Recommendation chi co Pass, Fail, Consider.
- Helper text: Rate the candidate based on this interview round.
- Submit Feedback button dung primary va nam cuoi form.

### 7.10 Reports Page

Goal: cung cap insight tong quan ve tuyen dung.

Header:

- Title: Reports.
- Date range filter.
- Export Report button.

Metrics:

- Total Applicants.
- Average Time to Hire.
- Offer Acceptance Rate.
- Conversion Rate.

Charts:

- Candidate source performance.
- Conversion by stage.
- Candidate volume by stage.

Table:

- Job performance table.
- Columns: Job, Total Candidates, Interviews, Offers, Hired, Rejected, Conversion.

UX notes:

- Bao cao nen don gian, uu tien insight de doc.
- Khong can chart phuc tap cho portfolio junior.
- Export button la secondary action.

### 7.11 Settings / User Management Page

Goal: quan ly nguoi dung va quyen truy cap co ban.

Header:

- Title: Settings.
- CTA: Add User.

User table columns:

- User.
- Email.
- Role.
- Status.
- Last Active.
- Actions.

Roles:

- HR Admin.
- Hiring Manager.
- Interviewer.

UX notes:

- Role badge can ro rang.
- Active/Inactive badge dung mau nhe.
- Permission matrix co the dat ben phai hoac ben duoi table.
- UI nen don gian vi khong phai module chinh cua MVP.

## 8. UX Flow Explanation

### Flow 1: Create Job

Dashboard -> Jobs -> Create Job -> Fill form -> Save Draft or Publish -> Job appears in Jobs list.

Design notes:

- Dashboard nen co shortcut Create Job neu open jobs thap.
- Create Job modal chia thanh Job Information va Job Details.
- Save Draft va Publish nen la hai action ro rang.

### Flow 2: Add Candidate

Candidates -> Add Candidate -> Select Job -> Fill candidate information -> Save -> Candidate appears in Applied stage.

Design notes:

- Add Candidate form can co section: Profile, Application, CV/Portfolio, Notes.
- Applied stage la default stage.
- Sau khi save, hien success toast va row moi trong table.

### Flow 3: Move Candidate In Pipeline

Pipeline -> Select candidate card -> Move to next stage -> Stage updated -> Timeline records activity.

Design notes:

- Kanban card can co hover/drag state.
- Drop target column can highlight.
- Sau khi move, hien toast: Candidate moved to Interview.
- Candidate Detail timeline ghi lai stage change.

### Flow 4: Schedule Interview

Candidate Detail -> Schedule Interview -> Select interviewer/date/time/round -> Save -> Interview appears in Interviews page.

Design notes:

- Candidate va job nen duoc pre-filled neu schedule tu Candidate Detail.
- Date/time la required.
- Interview status default la Scheduled.

### Flow 5: Submit Feedback

Interviews -> Open interview -> Feedback form -> Rate candidate -> Submit recommendation -> Candidate profile updated.

Design notes:

- Interviewer can xem candidate summary truoc khi cham diem.
- Submit xong, interview result cap nhat Pass/Fail/Pending.
- Candidate timeline them activity Feedback submitted.

## 9. Microcopy

### Empty State

- No candidates found.
- Start by adding your first candidate to this job.
- No interviews scheduled this week.
- Create a job posting to begin tracking candidates.
- No jobs match your filters.
- Try adjusting your search or filter criteria.
- This pipeline stage is empty.
- Candidates moved to this stage will appear here.

### Button Text

- Add Candidate.
- Create Job.
- Schedule Interview.
- Submit Feedback.
- Move Stage.
- Export Report.
- View Profile.
- Save Draft.
- Publish Job.
- Close Job.
- Reschedule.
- Add Feedback.
- Edit Role.

### Error Message

- Please enter a valid email address.
- Job title is required.
- Candidate name is required.
- Interview date cannot be in the past.
- Please select an interviewer before scheduling.
- Please select a job before adding this candidate.
- Overall rating is required before submitting feedback.
- Recommendation is required.

### Success Message

- Candidate added successfully.
- Candidate profile updated successfully.
- Job published successfully.
- Job saved as draft.
- Interview scheduled successfully.
- Feedback submitted successfully.
- Candidate moved successfully.
- User role updated successfully.
- Report exported successfully.

### Helper Text

- Use a clear job title candidates can recognize.
- Select the current stage of this candidate in the hiring process.
- Add notes that help the hiring team understand the candidate context.
- Rate the candidate based on this interview round.
- Closed jobs remain visible for reporting history.

## 10. Responsive Behavior

### Desktop

- Sidebar fixed on the left.
- Dashboard KPI cards in 4 columns.
- Main dashboard uses two-column layout below KPIs.
- Tables show full columns.
- Kanban board scrolls horizontally if viewport is narrow.
- Modal forms can use 2 columns.

### Tablet

- Sidebar collapses into drawer or narrow icon rail.
- KPI cards become 2 columns.
- Tables use horizontal scroll.
- Search and filters wrap to multiple lines.
- Detail pages become one-column or stacked sections.
- Modal remains centered and responsive.

### Mobile

- Sidebar becomes drawer opened by menu icon.
- KPI cards become 1 column.
- Topbar stacks title and search.
- Tables can become card list in high-fidelity design.
- Kanban remains horizontal scroll.
- Forms become 1 column.
- Modal uses full-width layout with body scroll.

## 11. Figma Auto Layout Guide

### Global Frame

- Desktop frame: 1440px width.
- Root layout: horizontal auto layout.
- Sidebar width: 240-272px fixed.
- Main workspace: fill container.
- Main workspace direction: vertical.

### Sidebar

- Direction: vertical.
- Width: fixed.
- Padding: 20-24px.
- Gap: 24px.
- Logo section: horizontal auto layout.
- Navigation group: vertical auto layout, gap 6-8px.
- User workspace section: vertical or horizontal, placed at bottom using spacer/fill.

### Navigation Item

- Direction: horizontal.
- Height: 40-44px.
- Padding: 10-12px.
- Gap: 10px.
- Icon fixed 18-20px.
- Label fill container.
- Radius: 8-10px.

### Top Bar

- Direction: horizontal.
- Height: 72-84px.
- Padding: 20-28px.
- Align center.
- Title block: vertical auto layout.
- Actions: horizontal auto layout, gap 12px.
- Search input: fixed width desktop, fill on tablet/mobile.

### Main Content

- Direction: vertical.
- Padding: 24-32px.
- Gap: 20-24px.
- Width: fill container with max content width if needed.
- Each section uses auto layout or grid-like frames.

### KPI Card

- Direction: vertical.
- Padding: 20px.
- Gap: 12-16px.
- Width: fill container.
- Min height: 120px.
- Header row: horizontal auto layout with label left and icon right.

### Table Row

- Direction: horizontal.
- Height: 56-64px.
- Padding left/right: 16px.
- Each cell uses fixed or fill width.
- Candidate cell uses horizontal auto layout: avatar + text stack.
- Action cell aligned right.

### Candidate Card

- Direction: vertical.
- Padding: 12-14px.
- Gap: 10px.
- Width: fill container.
- Header: horizontal auto layout.
- Skill tags: horizontal wrap if possible.

### Kanban Column

- Direction: vertical.
- Width: 260-300px.
- Padding: 12px.
- Gap: 10-12px.
- Header: horizontal auto layout with stage name and count.
- Card stack: vertical auto layout.

### Form Field

- Direction: vertical.
- Gap: 6-8px.
- Label: caption/medium.
- Input: fixed height 40-44px.
- Helper/error text: caption.

### Modal

- Direction: vertical.
- Width: 640-960px depending on form.
- Header: horizontal auto layout.
- Body: vertical auto layout, gap 16-20px.
- Field grid: two columns on desktop.
- Footer: horizontal auto layout, actions aligned right.

## 12. Figma Component Naming

### Foundation

- Color / Primary
- Color / Success
- Color / Warning
- Color / Danger
- Type / H1
- Type / H2
- Type / Body
- Type / Caption

### Buttons

- Button / Primary
- Button / Secondary
- Button / Ghost
- Button / Danger
- Button / Icon

### Inputs

- Input / Default
- Input / Filled
- Input / Error
- Input / Disabled
- Input / Search
- Select / Default
- Textarea / Default
- Checkbox / Default
- Radio / Default

### Badges

- Badge / Stage / Applied
- Badge / Stage / Screening
- Badge / Stage / Interview
- Badge / Stage / Technical Test
- Badge / Stage / Final Interview
- Badge / Stage / Offer
- Badge / Stage / Hired
- Badge / Stage / Rejected
- Badge / Status / Draft
- Badge / Status / Open
- Badge / Status / Closed
- Badge / Interview / Scheduled
- Badge / Interview / Completed
- Badge / Interview / Cancelled
- Badge / Result / Pass
- Badge / Result / Fail
- Badge / Result / Pending
- Badge / Role / HR Admin
- Badge / Role / Hiring Manager
- Badge / Role / Interviewer

### Cards

- Card / KPI
- Card / Candidate
- Card / Job
- Card / Interview
- Card / Report
- Card / Activity
- Card / Empty State

### Tables

- Table / Header
- Table / Row
- Table / Cell / Candidate
- Table / Cell / Status
- Table / Cell / Action
- Table / Pagination

### Navigation And Layout

- Sidebar / Default
- Sidebar / Collapsed
- Navigation / Item
- Topbar / Default
- Layout / Page Header
- Layout / Filter Bar

### Modals

- Modal / Create Job
- Modal / Add Candidate
- Modal / Schedule Interview
- Modal / Submit Feedback
- Modal / Add User

### Kanban

- Kanban / Board
- Kanban / Column
- Kanban / Header
- Kanban / Candidate Card

## 13. Prototype Interaction Guide

### Main Navigation

- Click Login -> Dashboard.
- Click Dashboard menu -> Dashboard page.
- Click Jobs menu -> Jobs page.
- Click Candidates menu -> Candidates page.
- Click Pipeline menu -> Pipeline page.
- Click Interviews menu -> Interviews page.
- Click Reports menu -> Reports page.
- Click Settings menu -> User Management page.

### Job Flow

- Click Create Job -> Open Create Job modal.
- Click Save Draft -> Close modal and show Draft job in Jobs table.
- Click Publish Job -> Close modal and show Open status.
- Click job row -> Job Detail page.
- Click Edit Job -> Open Edit Job modal.
- Click Close Job -> Change status to Closed.

### Candidate Flow

- Click Add Candidate -> Open Add Candidate modal.
- Click Save -> Candidate appears in Candidates table.
- Click candidate row -> Candidate Detail page.
- Click Move Stage -> Open stage dropdown/modal.
- Click Schedule Interview -> Open Schedule Interview modal.

### Pipeline Flow

- Click Pipeline menu -> Pipeline page.
- Click candidate card -> Candidate Detail.
- Drag candidate card to next column -> Stage update state.
- Use Smart Animate lightly for card movement if desired.

### Interview Flow

- Click Schedule Interview -> Open modal.
- Click interview row -> Interview detail or Feedback page.
- Click Add Feedback -> Feedback page/modal.
- Click Submit Feedback -> Success state and completed result.

### Reports And Settings

- Click Reports -> Reports page.
- Click Export Report -> Success toast.
- Click Settings -> User Management page.
- Click Add User -> Add User modal.
- Click Edit Role -> Edit Role modal.

### Prototype Notes

- Keep interactions simple and demo-friendly.
- Use instant transition or dissolve for most navigation.
- Use Smart Animate only for modal open/close or kanban movement.
- Avoid complex animation that distracts from product logic.

## 14. Portfolio Case Study Presentation Structure

### 1. Project Cover

- Project name: HireFlow - Recruitment & Candidate Management System.
- Role: UI/UX Designer, Product Designer, Business Analyst.
- Tools: Figma, HTML/CSS/JavaScript.
- Short tagline: A structured hiring workspace for job, candidate, interview, and pipeline management.

### 2. Context

- Explain that many small businesses manage recruitment with spreadsheets, email, chat, and manual CV folders.
- Mention the impact: unclear candidate status, slow follow-up, weak reporting, scattered information.

### 3. Problem Statement

Example:

Small HR teams need a clear and centralized way to track candidates, interviews, hiring stages, and recruitment performance without relying on fragmented manual tools.

### 4. Target Users

- HR Admin.
- Hiring Manager.
- Interviewer.
- Candidate.
- Company Admin.

For each user, show:

- Goal.
- Pain point.
- Key task.

### 5. Product Goals

- Centralize candidate and job information.
- Make recruitment pipeline visible.
- Reduce manual tracking.
- Improve collaboration between HR, managers, and interviewers.
- Provide simple reporting for recruitment decisions.

### 6. Scope

Show MVP in scope and out of scope.

In scope:

- Dashboard.
- Jobs.
- Candidates.
- Pipeline.
- Interviews.
- Feedback.
- Reports.
- Settings.

Out of scope:

- Backend.
- AI CV screening.
- Email automation.
- Advanced analytics.
- Third-party ATS integration.

### 7. Information Architecture

Show sitemap:

- Login.
- Dashboard.
- Jobs.
- Candidates.
- Pipeline.
- Interviews.
- Reports.
- Settings.

### 8. User Flows

Present 5 main flows:

- Create Job.
- Add Candidate.
- Move Candidate in Pipeline.
- Schedule Interview.
- Submit Feedback.

### 9. Wireframe Or Low-Fidelity Layout

Show early structure:

- Sidebar + topbar.
- Dashboard card layout.
- Table layout.
- Candidate detail layout.
- Kanban board layout.

### 10. Design System

Show:

- Color palette.
- Typography.
- Buttons.
- Inputs.
- Badges.
- Cards.
- Tables.
- Modals.
- Kanban card.

### 11. High-Fidelity Screens

Show final screens:

- Login.
- Dashboard.
- Jobs.
- Job Detail.
- Candidates.
- Candidate Detail.
- Pipeline.
- Interviews.
- Feedback.
- Reports.
- Settings.

### 12. Prototype

Explain interactions:

- Login to dashboard.
- Create job modal.
- Add candidate modal.
- Candidate row to detail.
- Pipeline drag interaction.
- Schedule interview modal.
- Submit feedback.

### 13. Front-End Implementation

If presenting as BA/UIUX + Front-end portfolio, include:

- HTML/CSS/JavaScript static prototype.
- Mock data.
- Responsive layout.
- Search/filter UI.
- Modal interactions.
- Kanban drag simulation.

### 14. Outcome And Learning

Mention:

- Practiced translating business problems into product flows.
- Designed a complete B2B SaaS dashboard system.
- Created reusable components and consistent visual hierarchy.
- Built a static interactive prototype suitable for portfolio presentation.

## Quick Portfolio Summary

HireFlow is a recruitment management SaaS concept designed to help small and medium businesses centralize job postings, candidate profiles, pipeline tracking, interview schedules, evaluation feedback, and recruitment reports. The design focuses on clean enterprise UI, clear information hierarchy, role-based workflows, and practical dashboard patterns for HR teams.
