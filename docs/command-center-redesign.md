# HireFlow Command Center Redesign

This document reframes HireFlow from a traditional admin dashboard into a Recruitment Command Center / Hiring Operating System.

## 1. New Concept Direction

HireFlow should feel like the operating layer for hiring decisions, not just a place to store jobs and candidates. The new product direction is:

**Recruitment Command Center / Hiring Operating System**

The interface should help HR teams understand:

- Which roles are moving.
- Which candidates are waiting.
- Which interviews need feedback.
- Which pipeline stages are crowded.
- What action should happen next.

Visual references:

- Linear for workflow clarity.
- Raycast for command-center behavior.
- Attio CRM for premium data objects.
- Vercel dashboard for restrained polish.
- Notion workspace for calm information hierarchy.

## 2. Why The Old Layout Was Not Distinctive Enough

The previous dashboard was clean and usable, but it followed a familiar admin template pattern:

- Wide left sidebar.
- Topbar with title and search.
- Equal KPI cards in a row.
- Progress bars.
- Tables and list cards.

This pattern is practical, but it does not strongly communicate a premium HR Tech product. The redesign changes the experience by:

- Replacing the wide sidebar with a bottom floating command dock.
- Turning the topbar into a command header.
- Replacing equal KPI cards with a large Hiring Pulse hero.
- Presenting candidate movement as a workflow map.
- Using insight panels to guide decisions.
- Replacing basic tables with role cards and board-first layouts.
- Prioritizing side-drawer and command interactions for a smoother product feel.

## 3. New Design System

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| Background | `#F3F4F6` / `#F8FAFC` | Premium light app canvas |
| Surface | `#FFFFFF` | Cards, panels, modals |
| Surface Soft | `#F9FAFB` | Column backgrounds, subtle sections |
| Text Primary | `#0F172A` | Strong headings and primary content |
| Text Secondary | `#64748B` | Metadata and helper text |
| Border | `#E2E8F0` | Soft structure |
| Primary | `#2563EB` | Main action, active state |
| Primary Soft | `#DBEAFE` | Active backgrounds |
| Accent Purple | `#7C3AED` | Premium workflow accent |
| Accent Mint | `#14B8A6` | Positive movement, secondary accent |
| Warning | `#F59E0B` | Bottlenecks and pending states |
| Danger | `#EF4444` | Rejected, fail, urgent |
| Success | `#22C55E` | Hired, completed, healthy |

### Typography

- Page title: 34-40px, 700-800.
- Hero metric: 42-72px, 800.
- Section title: 20-24px, 700.
- Card title: 15-17px, 600-700.
- Body: 14-15px, 400-500.
- Caption: 12-13px, 700-900.

### Shape And Depth

- Card radius: 8-10px.
- Button radius: 6-8px.
- Badge radius: 999px.
- Modal radius: 10-12px.
- Shadow: minimal, low-opacity, used only for floating navigation and overlays.
- Avoid large rounded cards, pastel-heavy gradients, pill-shaped main containers, and soft neumorphism.

## 4. Dashboard Redesign

### Structure

1. Bottom floating command dock.
2. Command header.
3. Hiring Pulse hero card.
4. Attention Needed insight panel.
5. Candidate Flow Map.
6. Top Active Roles.
7. Activity Stream.
8. Upcoming Interviews mini panel.

### Hiring Pulse Hero

Purpose: make the dashboard feel like an operating center.

Content:

- Title: Hiring Pulse.
- Main metric: Offer Rate.
- Summary sentence: "15 candidates are moving across 4 active roles this week."
- Supporting chips: Open Roles, Interviews This Week, Pending Feedback, Rejected.
- Stage flow: Applied -> Screening -> Interview -> Offer -> Hired.

### Attention Needed Panel

Purpose: create a smart product feeling.

Insights:

- 2 interviews need feedback.
- Screening is getting crowded.
- UX Designer role is moving fast.

CTA:

- Review pending feedback.

### Candidate Flow Map

Purpose: replace static progress bars with a workflow-first map.

Stages:

- Applied.
- Screening.
- Interview.
- Technical Test.
- Final Interview.
- Offer.
- Hired.
- Rejected.

Candidate compact cards:

- Avatar initials.
- Candidate name.
- Role.
- Rating.
- Waiting time.

### Top Active Roles

Role cards replace a plain table.

Each role card includes:

- Job title.
- Department.
- Status.
- Candidate count.
- Deadline.
- Mini stage distribution bar.
- Hiring manager avatar.
- CTA: View Pipeline.

## 5. Pipeline Page Redesign

The Pipeline page should be the flagship screen of HireFlow.

### Top Summary

- Selected Role.
- Total Candidates.
- Avg Time in Stage.
- Pending Feedback.
- Offer Rate.

### Controls

- Role filter.
- Candidate search.
- View toggle: Board / List.

### Board

- Full-width stage board.
- Columns: Applied, Screening, Interview, Offer, Hired, Rejected.
- Each column shows count and health text.
- Bottleneck stages show warning styling.
- Candidate cards show rating, experience, waiting time, source, skills, and quick action.

### List View

The list view exists for users who want dense scanning, but the board remains the primary experience.

## 6. Candidate Detail Redesign

Candidate Detail should answer five questions immediately:

- Who is this candidate?
- Which role did they apply for?
- What stage are they in?
- Have they interviewed?
- What should happen next?

### New Layout

- Candidate profile hero.
- Current stage tracker.
- Evaluation score card.
- Resume/portfolio links.
- Interview timeline.
- Notes panel.
- Recommended next action card.

### Recommended Next Action

Examples:

- Review pending feedback.
- Schedule next step.
- Move to next stage.
- Reject candidate.
- Prepare offer.

## 7. Component Redesign

### KPI

Old: equal cards in a row.

New:

- One hero metric card.
- Supporting metric chips.
- Stage flow visualization.
- Trend badges.

### Navigation

Old: wide text sidebar.

New:

- Bottom floating command dock.
- White rectangular surface with thin border.
- Small 8-10px radius, not pill-shaped.
- Icon + label navigation items.
- Active item uses dark navy background with white text.
- Primary navigation only: Dashboard, Jobs, Candidates, Pipeline, Interviews, Reports.
- Settings stays in the user/profile area instead of the main dock.

### Candidate Card

Includes:

- Avatar initials.
- Name.
- Role.
- Stage.
- Rating.
- Waiting time.
- Source.
- Quick action.

### Role Card

Includes:

- Job title.
- Department.
- Status.
- Candidate count.
- Deadline.
- Mini pipeline distribution.
- Hiring manager.
- View Pipeline CTA.

### Insight Card

Includes:

- Severity: Low / Medium / High.
- Short insight.
- Explanation.
- Suggested action.

### Table

When tables are needed:

- Use card-table hybrid row styling.
- Increase row spacing.
- Make name cell visually strongest.
- Keep status badges subtle.
- Place actions at the end.

## 8. Responsive Behavior

### Desktop

- Bottom floating command dock stays fixed above the bottom viewport edge.
- Command header uses large title and right-side actions.
- Dashboard uses hero + insight split layout.
- Pipeline board uses horizontal scroll if needed.

### Tablet

- Rail can expand into drawer.
- Dashboard hero and insight stack.
- KPI/summary cards move to 2 columns.
- Tables scroll horizontally.

### Mobile

- Rail becomes drawer.
- Command header stacks.
- Hero cards shrink but remain editorial.
- Candidate Flow Map and Pipeline Board scroll horizontally.
- Candidate Detail stacks into one column.

## 9. Prototype Interaction

- Command search opens quick search overlay.
- Click candidate card opens side drawer detail.
- Click insight opens related filtered list.
- Drag candidate between stages.
- Quick action on candidate card opens action menu.
- Hover role card reveals View Pipeline.
- Click activity item opens related candidate/job/interview detail.
- Prefer side drawer over page navigation for candidate review.

## 10. Microcopy

- 2 interviews need feedback.
- Screening is getting crowded.
- UX Designer role is moving fast.
- Review candidate.
- Move to next stage.
- Schedule next step.
- No candidates stuck here.
- Pipeline looks healthy.
- Keep momentum high.
- See bottlenecks before candidates stall.
- Close the feedback loop.
- Role is moving fast.

## 11. Figma AI Prompt

```text
Design a sharp enterprise B2B SaaS dashboard for "HireFlow", a Recruitment Command Center / Hiring Operating System for HR teams. Use a precise editorial HR Tech command-center style inspired by Linear, Attio CRM, modern ATS platforms, and enterprise workflow products. Do not use overly rounded corners, pastel-heavy cards, pill-shaped main containers, or soft neumorphism. Replace the traditional vertical admin sidebar with a bottom floating command dock centered above the viewport bottom edge. The dock should be a clean white rectangular surface with thin border #E2E8F0, subtle shadow, backdrop blur, 12px radius, 8px padding, HF logo, icon+label nav items, and dark navy active item with white text and 8px radius. Nav items: Home, Jobs, Candidates, Pipeline, Interviews, Reports. Settings should be accessible from the user profile menu, not the dock. Create a command header with breadcrumb "Recruitment OS / Dashboard", large title "Hiring Command Center", subtitle "Track candidates, interviews, and hiring progress in one workspace.", command search with Ctrl K hint, New Candidate button, Schedule Interview button, notifications, and user profile.

Main dashboard layout: large rectangular Hiring Command Summary hero block taking 60-70% width with white surface, strong left border accent, clear dividers, main metric "27% Offer Rate", summary "15 candidates are moving across 4 active roles this week.", compact supporting data chips for 4 Open Roles, 4 Interviews This Week, 2 Pending Feedback, 2 Rejected Candidates, and a stage flow Applied -> Screening -> Interview -> Offer -> Hired. Add right-side Attention Needed insight panel with smart recommendation cards: "2 interviews need feedback", "Screening is getting crowded", "UX Designer role is moving fast", and CTA "Review pending feedback".

Below, create Recruitment Funnel as a horizontal workflow board with stages Applied, Screening, Interview, Technical Test, Final Interview, Offer, Hired, Rejected. Each stage has compact candidate cards with avatar initials, candidate name, role, rating, waiting time, and status tag. Add Role Performance as card-table hybrid layout with job title, department, hiring manager, candidate count, mini pipeline distribution bar, deadline, status, and View Pipeline CTA. Add Activity Stream and Interview Queue mini panel. Use colors #F6F7F9, #FFFFFF, #F1F5F9, #0F172A, #64748B, #E2E8F0, #2563EB, #111827, #16A34A, #D97706, #DC2626. Use Inter or Geist. Card radius 8-10px, button radius 6-8px, input radius 8px, modal radius 10-12px, strong typography, minimal icons, clear hierarchy, strong dividers, and realistic enterprise SaaS spacing.
```

## 12. React + Tailwind Prompt

```text
Build a React + Tailwind CSS static prototype for "HireFlow", a Recruitment Command Center / Hiring Operating System. Use mock data only, no backend. Implement a sharp enterprise light-mode B2B SaaS UI with a bottom floating command dock, command header, Hiring Command Summary hero, Attention Needed insights, Recruitment Funnel workflow map, Role Performance card-table hybrid, Activity Stream, Interview Queue, Pipeline board, and Candidate Detail decision page. Avoid overly rounded corners and pastel-heavy dashboard styling.

Use lucide-react icons. Use Inter font. Tailwind palette: slate text, blue primary, violet accent, teal accent, amber warning, red danger, green success. Avoid generic admin dashboard layout. The Dashboard must not use a row of equal KPI cards; instead use one large Hiring Pulse hero with supporting metric chips and stage flow visualization. Pipeline page must include role filter, search, Board/List toggle, top summary cards, stage columns with candidate count, waiting time, bottleneck indicator, and draggable-looking candidate cards. Candidate Detail must include profile hero, stage tracker, evaluation score, resume/portfolio links, interview timeline, notes panel, and recommended next action.

Create reusable components: BottomCommandDock, CommandHeader, HiringCommandSummary, InsightPanel, RecruitmentFunnel, FlowStage, CompactCandidateCard, RolePerformanceCard, ActivityStream, InterviewQueue, PipelineBoard, PipelineColumn, CandidateCard, CandidateDetailHero, StageTracker, EvaluationScore, NotesPanel, Modal, Button, Badge, CommandPalette, CandidateDrawer. Make layout responsive: desktop split layouts, tablet stacked panels, mobile compact bottom dock and single-column cards. Include interactions: dock switching between Dashboard/Pipeline/Candidate Detail, command search overlay, Board/List toggle, mock drag visual on candidate cards, insight card navigation, quick action buttons, and candidate card side drawer. Keep code clean and portfolio-ready.
```
