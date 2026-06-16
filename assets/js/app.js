"use strict";

const pageMeta = {
  dashboard: ["Recruitment analytics", "Analytics"],
  jobs: ["Job management", "Jobs"],
  "job-detail": ["Job management", "Job Detail"],
  candidates: ["Candidate management", "Candidates"],
  "candidate-detail": ["Candidate management", "Candidate Detail"],
  pipeline: ["Recruitment pipeline", "Kanban Pipeline"],
  interviews: ["Interview schedule", "Interviews"],
  feedback: ["Evaluation form", "Interview Feedback"],
  reports: ["Recruitment analytics", "Reports"],
  settings: ["User and permission management", "Settings"],
};

const pipelineStages = ["Applied", "Screening", "Interview", "Offer", "Hired", "Rejected"];
const candidateStages = [
  "Applied",
  "Screening",
  "Interview",
  "Technical Test",
  "Final Interview",
  "Offer",
  "Hired",
  "Rejected",
];

let jobs = [
  {
    id: "job-001",
    title: "UI/UX Designer",
    department: "Product",
    location: "Ho Chi Minh City",
    type: "Full-time",
    salary: "$900 - $1,400",
    description:
      "Design end-to-end recruitment and HR product experiences across web dashboards, candidate portals, and internal workflows.",
    requirements: ["Figma proficiency", "Portfolio with product case studies", "Research and usability testing"],
    createdDate: "2026-05-12",
    deadline: "2026-06-24",
    status: "Open",
  },
  {
    id: "job-002",
    title: "Front-end Developer",
    department: "Engineering",
    location: "Da Nang",
    type: "Full-time",
    salary: "$1,000 - $1,800",
    description:
      "Build responsive interfaces for SaaS workflows using modern JavaScript, reusable components, and accessible UI patterns.",
    requirements: ["HTML/CSS/JavaScript", "React fundamentals", "API integration mindset"],
    createdDate: "2026-05-15",
    deadline: "2026-06-28",
    status: "Open",
  },
  {
    id: "job-003",
    title: "Business Analyst",
    department: "Business",
    location: "Hybrid",
    type: "Full-time",
    salary: "$800 - $1,300",
    description:
      "Elicit requirements, map recruitment processes, write user stories, and support delivery teams from discovery to release.",
    requirements: ["Requirement gathering", "BPMN or user flow skill", "Clear documentation"],
    createdDate: "2026-05-20",
    deadline: "2026-07-05",
    status: "Open",
  },
  {
    id: "job-004",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$1,800 - $2,800",
    description:
      "Own roadmap priorities for HR workflow products and coordinate discovery, delivery, stakeholder alignment, and launch planning.",
    requirements: ["Roadmap ownership", "Stakeholder management", "Metrics-driven decisions"],
    createdDate: "2026-05-18",
    deadline: "2026-06-30",
    status: "Draft",
  },
  {
    id: "job-005",
    title: "QA Tester",
    department: "Engineering",
    location: "Ho Chi Minh City",
    type: "Contract",
    salary: "$600 - $1,000",
    description:
      "Create and execute test scenarios for recruitment workflows, forms, reports, permissions, and responsive dashboards.",
    requirements: ["Manual testing", "Test case writing", "Basic SQL is a plus"],
    createdDate: "2026-05-10",
    deadline: "2026-06-18",
    status: "Open",
  },
  {
    id: "job-006",
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Ha Noi",
    type: "Full-time",
    salary: "$700 - $1,100",
    description:
      "Plan recruitment marketing campaigns, manage candidate sources, and improve inbound applicant quality across channels.",
    requirements: ["Content planning", "Campaign reporting", "SEO and social media basics"],
    createdDate: "2026-04-28",
    deadline: "2026-06-05",
    status: "Closed",
  },
];

let candidates = [
  {
    id: "cand-001",
    name: "Linh Tran",
    email: "linh.tran@example.com",
    phone: "+84 901 120 338",
    jobId: "job-001",
    source: "LinkedIn",
    stage: "Interview",
    rating: 4.8,
    cvLink: "https://example.com/cv/linh-tran",
    portfolio: "https://portfolio.example.com/linh",
    expectedSalary: "$1,300",
    experience: 4,
    skills: ["Figma", "UX Research", "Design System"],
    notes: "Strong product thinking and clear case-study storytelling.",
    appliedDate: "2026-05-22",
  },
  {
    id: "cand-002",
    name: "Minh Pham",
    email: "minh.pham@example.com",
    phone: "+84 903 552 188",
    jobId: "job-002",
    source: "Referral",
    stage: "Technical Test",
    rating: 4.5,
    cvLink: "https://example.com/cv/minh-pham",
    portfolio: "https://github.com/minhpham",
    expectedSalary: "$1,600",
    experience: 3,
    skills: ["React", "TypeScript", "CSS"],
    notes: "Good front-end fundamentals; technical test in progress.",
    appliedDate: "2026-05-24",
  },
  {
    id: "cand-003",
    name: "Anh Nguyen",
    email: "anh.nguyen@example.com",
    phone: "+84 909 442 001",
    jobId: "job-003",
    source: "Website",
    stage: "Screening",
    rating: 4.2,
    cvLink: "https://example.com/cv/anh-nguyen",
    portfolio: "",
    expectedSalary: "$1,000",
    experience: 2,
    skills: ["User Stories", "Wireframe", "SQL"],
    notes: "Junior BA profile with practical internship experience.",
    appliedDate: "2026-05-25",
  },
  {
    id: "cand-004",
    name: "Bao Le",
    email: "bao.le@example.com",
    phone: "+84 912 442 222",
    jobId: "job-004",
    source: "LinkedIn",
    stage: "Applied",
    rating: 3.9,
    cvLink: "https://example.com/cv/bao-le",
    portfolio: "",
    expectedSalary: "$2,400",
    experience: 6,
    skills: ["Roadmap", "Stakeholders", "Analytics"],
    notes: "Needs product discovery screening before shortlist.",
    appliedDate: "2026-05-28",
  },
  {
    id: "cand-005",
    name: "Chi Vo",
    email: "chi.vo@example.com",
    phone: "+84 905 778 120",
    jobId: "job-005",
    source: "Job Board",
    stage: "Offer",
    rating: 4.7,
    cvLink: "https://example.com/cv/chi-vo",
    portfolio: "",
    expectedSalary: "$900",
    experience: 5,
    skills: ["Manual Test", "Regression", "Jira"],
    notes: "Offer package approved by hiring manager.",
    appliedDate: "2026-05-18",
  },
  {
    id: "cand-006",
    name: "Duy Hoang",
    email: "duy.hoang@example.com",
    phone: "+84 908 221 009",
    jobId: "job-002",
    source: "Website",
    stage: "Rejected",
    rating: 2.8,
    cvLink: "https://example.com/cv/duy-hoang",
    portfolio: "https://github.com/duyhoang",
    expectedSalary: "$1,200",
    experience: 1,
    skills: ["HTML", "CSS", "JavaScript"],
    notes: "Rejected after screening due to experience mismatch.",
    appliedDate: "2026-05-16",
  },
  {
    id: "cand-007",
    name: "Gia Bui",
    email: "gia.bui@example.com",
    phone: "+84 906 330 187",
    jobId: "job-006",
    source: "Facebook",
    stage: "Hired",
    rating: 4.6,
    cvLink: "https://example.com/cv/gia-bui",
    portfolio: "",
    expectedSalary: "$950",
    experience: 3,
    skills: ["SEO", "Content", "Campaigns"],
    notes: "Accepted offer before job was closed.",
    appliedDate: "2026-04-30",
  },
  {
    id: "cand-008",
    name: "Hieu Dang",
    email: "hieu.dang@example.com",
    phone: "+84 904 811 230",
    jobId: "job-003",
    source: "Referral",
    stage: "Final Interview",
    rating: 4.9,
    cvLink: "https://example.com/cv/hieu-dang",
    portfolio: "",
    expectedSalary: "$1,250",
    experience: 4,
    skills: ["BPMN", "Agile", "Stakeholders"],
    notes: "Excellent stakeholder communication and process mapping.",
    appliedDate: "2026-05-19",
  },
  {
    id: "cand-009",
    name: "Khanh Do",
    email: "khanh.do@example.com",
    phone: "+84 907 119 664",
    jobId: "job-001",
    source: "Job Board",
    stage: "Applied",
    rating: 3.7,
    cvLink: "https://example.com/cv/khanh-do",
    portfolio: "https://portfolio.example.com/khanh",
    expectedSalary: "$1,100",
    experience: 2,
    skills: ["UI Design", "Prototype", "Branding"],
    notes: "Portfolio reviewed; needs UX process validation.",
    appliedDate: "2026-05-31",
  },
  {
    id: "cand-010",
    name: "Lan Mai",
    email: "lan.mai@example.com",
    phone: "+84 909 778 334",
    jobId: "job-005",
    source: "Website",
    stage: "Interview",
    rating: 4.1,
    cvLink: "https://example.com/cv/lan-mai",
    portfolio: "",
    expectedSalary: "$850",
    experience: 2,
    skills: ["Test Case", "API Test", "Postman"],
    notes: "Interview scheduled with QA lead.",
    appliedDate: "2026-05-29",
  },
  {
    id: "cand-011",
    name: "Nam Truong",
    email: "nam.truong@example.com",
    phone: "+84 903 111 908",
    jobId: "job-002",
    source: "LinkedIn",
    stage: "Screening",
    rating: 4.0,
    cvLink: "https://example.com/cv/nam-truong",
    portfolio: "https://github.com/namtruong",
    expectedSalary: "$1,500",
    experience: 3,
    skills: ["Vue", "JavaScript", "Tailwind"],
    notes: "Strong UI implementation; React depth needs checking.",
    appliedDate: "2026-06-01",
  },
  {
    id: "cand-012",
    name: "Oanh Phan",
    email: "oanh.phan@example.com",
    phone: "+84 912 555 400",
    jobId: "job-004",
    source: "Referral",
    stage: "Offer",
    rating: 4.4,
    cvLink: "https://example.com/cv/oanh-phan",
    portfolio: "",
    expectedSalary: "$2,600",
    experience: 7,
    skills: ["Discovery", "SaaS", "Leadership"],
    notes: "Offer pending finance approval.",
    appliedDate: "2026-05-14",
  },
  {
    id: "cand-013",
    name: "Quang Vu",
    email: "quang.vu@example.com",
    phone: "+84 906 702 213",
    jobId: "job-003",
    source: "Job Board",
    stage: "Applied",
    rating: 3.6,
    cvLink: "https://example.com/cv/quang-vu",
    portfolio: "",
    expectedSalary: "$900",
    experience: 1,
    skills: ["Excel", "Documentation", "UAT"],
    notes: "Potential BA intern profile.",
    appliedDate: "2026-06-02",
  },
  {
    id: "cand-014",
    name: "Thao Ho",
    email: "thao.ho@example.com",
    phone: "+84 908 445 777",
    jobId: "job-001",
    source: "Website",
    stage: "Hired",
    rating: 4.8,
    cvLink: "https://example.com/cv/thao-ho",
    portfolio: "https://portfolio.example.com/thao",
    expectedSalary: "$1,350",
    experience: 5,
    skills: ["UX Strategy", "Research", "Workshop"],
    notes: "Accepted offer and onboarding scheduled.",
    appliedDate: "2026-05-02",
  },
  {
    id: "cand-015",
    name: "Vy Nguyen",
    email: "vy.nguyen@example.com",
    phone: "+84 907 990 812",
    jobId: "job-006",
    source: "Facebook",
    stage: "Rejected",
    rating: 3.0,
    cvLink: "https://example.com/cv/vy-nguyen",
    portfolio: "",
    expectedSalary: "$800",
    experience: 2,
    skills: ["Social Media", "Copywriting", "Ads"],
    notes: "Rejected after final review due to campaign analytics gap.",
    appliedDate: "2026-05-06",
  },
];

let interviews = [
  {
    id: "int-001",
    candidateId: "cand-001",
    jobId: "job-001",
    interviewer: "Mai Nguyen",
    round: "UX Interview",
    date: "2026-06-05",
    time: "09:30",
    type: "Online",
    location: "Google Meet",
    status: "Scheduled",
    feedback: "",
    result: "Pending",
  },
  {
    id: "int-002",
    candidateId: "cand-002",
    jobId: "job-002",
    interviewer: "Son Le",
    round: "Technical Test Review",
    date: "2026-06-06",
    time: "14:00",
    type: "Online",
    location: "Zoom",
    status: "Scheduled",
    feedback: "",
    result: "Pending",
  },
  {
    id: "int-003",
    candidateId: "cand-008",
    jobId: "job-003",
    interviewer: "Hanh Tran",
    round: "Final Interview",
    date: "2026-06-07",
    time: "10:00",
    type: "Offline",
    location: "Room A2",
    status: "Scheduled",
    feedback: "",
    result: "Pending",
  },
  {
    id: "int-004",
    candidateId: "cand-010",
    jobId: "job-005",
    interviewer: "Bao Pham",
    round: "QA Interview",
    date: "2026-06-08",
    time: "15:30",
    type: "Online",
    location: "Microsoft Teams",
    status: "Scheduled",
    feedback: "",
    result: "Pending",
  },
  {
    id: "int-005",
    candidateId: "cand-005",
    jobId: "job-005",
    interviewer: "Bao Pham",
    round: "Final Review",
    date: "2026-05-29",
    time: "13:30",
    type: "Offline",
    location: "Room B1",
    status: "Completed",
    feedback: "Strong QA process and clear bug reporting examples.",
    result: "Pass",
  },
  {
    id: "int-006",
    candidateId: "cand-006",
    jobId: "job-002",
    interviewer: "Son Le",
    round: "Screening",
    date: "2026-05-22",
    time: "11:00",
    type: "Online",
    location: "Google Meet",
    status: "Completed",
    feedback: "Candidate needs more production JavaScript experience.",
    result: "Fail",
  },
  {
    id: "int-007",
    candidateId: "cand-012",
    jobId: "job-004",
    interviewer: "Tuan Do",
    round: "Leadership Interview",
    date: "2026-05-28",
    time: "16:00",
    type: "Offline",
    location: "Room C3",
    status: "Completed",
    feedback: "Strong product strategy and stakeholder facilitation.",
    result: "Pass",
  },
  {
    id: "int-008",
    candidateId: "cand-015",
    jobId: "job-006",
    interviewer: "Linh Dao",
    round: "Marketing Review",
    date: "2026-05-20",
    time: "09:00",
    type: "Online",
    location: "Zoom",
    status: "Cancelled",
    feedback: "Cancelled after role was closed.",
    result: "Fail",
  },
];

let users = [
  { id: "user-001", name: "Minh Anh", email: "minh.anh@hireflow.test", role: "HR Admin", status: "Active" },
  { id: "user-002", name: "Hanh Tran", email: "hanh.tran@hireflow.test", role: "Hiring Manager", status: "Active" },
  { id: "user-003", name: "Son Le", email: "son.le@hireflow.test", role: "Interviewer", status: "Active" },
  { id: "user-004", name: "Bao Pham", email: "bao.pham@hireflow.test", role: "Interviewer", status: "Active" },
  { id: "user-005", name: "Tuan Do", email: "tuan.do@hireflow.test", role: "Hiring Manager", status: "Invited" },
];

const permissions = [
  ["View Dashboard", "Yes", "Yes", "Limited"],
  ["Manage Jobs", "Yes", "Limited", "No"],
  ["Manage Candidates", "Yes", "Limited", "No"],
  ["Move Candidate Stage", "Yes", "Yes", "No"],
  ["Schedule Interview", "Yes", "Limited", "No"],
  ["Submit Feedback", "Yes", "Yes", "Yes"],
  ["View Reports", "Yes", "Yes", "No"],
  ["Manage Users", "Yes", "No", "No"],
];

const state = {
  view: "dashboard",
  search: "",
  selectedJobId: "job-003",
  selectedCandidateId: "cand-001",
  filters: {
    jobSearch: "",
    department: "All",
    jobStatus: "All",
    candidateSearch: "",
    candidateJob: "All",
    candidateStage: "All",
    candidateSource: "All",
    pipelineJob: "All",
    pipelineSearch: "",
    pipelineView: "Board",
    interviewStatus: "All",
    interviewMode: "List",
  },
};

const appShell = document.getElementById("appShell");
const loginScreen = document.getElementById("loginScreen");
const pageContent = document.getElementById("pageContent");
const pageTitle = document.getElementById("pageTitle");
const pageEyebrow = document.getElementById("pageEyebrow");
const globalSearch = document.getElementById("globalSearch");
const sidebar = document.getElementById("sidebar");
const modalRoot = document.getElementById("modalRoot");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalBody = document.getElementById("modalBody");
const toast = document.getElementById("toast");
const commandOverlay = document.getElementById("commandOverlay");
const commandInput = document.getElementById("commandInput");
const commandResults = document.getElementById("commandResults");
const candidateDrawer = document.getElementById("candidateDrawer");
const drawerTitle = document.getElementById("drawerTitle");
const drawerBody = document.getElementById("drawerBody");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toClass(value = "") {
  return String(value).toLowerCase().replaceAll(" ", "-");
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function getJob(id) {
  return jobs.find((job) => job.id === id);
}

function getCandidate(id) {
  return candidates.find((candidate) => candidate.id === id);
}

function getCandidateJob(candidate) {
  return getJob(candidate.jobId) || { title: "Unassigned", department: "Unknown" };
}

function candidateMatchesSearch(candidate, search) {
  const job = getCandidateJob(candidate);
  const haystack = [
    candidate.name,
    candidate.email,
    candidate.source,
    candidate.stage,
    candidate.skills.join(" "),
    job.title,
    job.department,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(search.trim().toLowerCase());
}

function jobMatchesSearch(job, search) {
  const haystack = [job.title, job.department, job.location, job.status, job.type]
    .join(" ")
    .toLowerCase();
  return haystack.includes(search.trim().toLowerCase());
}

function getUnique(values) {
  return ["All", ...Array.from(new Set(values)).sort()];
}

function statusBadge(value) {
  const normalized = toClass(value).replace("technical-test", "technical").replace("final-interview", "final");
  return `<span class="badge ${normalized}">${escapeHtml(value)}</span>`;
}

function ratingStars(value) {
  return `<span class="rating"><i data-lucide="star"></i>${Number(value).toFixed(1)}</span>`;
}

function tags(values) {
  return `<div class="tag-list">${values.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function metricCard(label, value, note, icon, tone = "") {
  return `
    <article class="metric-card">
      <div class="metric-top">
        <div>
          <p>${escapeHtml(label)}</p>
          <strong>${escapeHtml(value)}</strong>
        </div>
        <span class="stat-icon ${tone}"><i data-lucide="${icon}"></i></span>
      </div>
      <small>${escapeHtml(note)}</small>
    </article>
  `;
}

function tableEmpty(colspan, title = "No records found", note = "Try a different search or filter.") {
  return `
    <tr>
      <td colspan="${colspan}">
        <div class="empty-state">
          <div>
            <span class="stat-icon"><i data-lucide="inbox"></i></span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(note)}</p>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.add("is-hidden"), 2600);
}

function openCommandSearch() {
  commandOverlay.classList.remove("is-hidden");
  commandOverlay.setAttribute("aria-hidden", "false");
  commandInput.value = globalSearch.value;
  renderCommandResults(commandInput.value);
  refreshIcons();
  requestAnimationFrame(() => commandInput.focus());
}

function closeCommandSearch() {
  commandOverlay.classList.add("is-hidden");
  commandOverlay.setAttribute("aria-hidden", "true");
}

function renderCommandResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const candidateResults = candidates
    .filter((candidate) => (!normalized ? true : candidateMatchesSearch(candidate, normalized)))
    .slice(0, 5)
    .map(
      (candidate) => `
        <button class="command-result" data-command-candidate="${candidate.id}" type="button">
          <span class="avatar">${initials(candidate.name)}</span>
          <span>
            <strong>${escapeHtml(candidate.name)}</strong>
            <small>${escapeHtml(getCandidateJob(candidate).title)} - ${escapeHtml(candidate.stage)}</small>
          </span>
        </button>
      `,
    )
    .join("");
  const jobResults = jobs
    .filter((job) => (!normalized ? true : jobMatchesSearch(job, normalized)))
    .slice(0, 4)
    .map(
      (job) => `
        <button class="command-result" data-command-job="${job.id}" type="button">
          <span class="stat-icon"><i data-lucide="briefcase-business"></i></span>
          <span>
            <strong>${escapeHtml(job.title)}</strong>
            <small>${escapeHtml(job.department)} - ${escapeHtml(job.status)}</small>
          </span>
        </button>
      `,
    )
    .join("");

  commandResults.innerHTML = `
    <div class="command-result-group">
      <p>People</p>
      ${candidateResults || `<div class="command-empty-row">No candidates found</div>`}
    </div>
    <div class="command-result-group">
      <p>Roles</p>
      ${jobResults || `<div class="command-empty-row">No roles found</div>`}
    </div>
  `;
  commandResults.querySelectorAll("[data-command-candidate]").forEach((button) => {
    button.addEventListener("click", () => {
      closeCommandSearch();
      openCandidateDrawer(button.dataset.commandCandidate);
    });
  });
  commandResults.querySelectorAll("[data-command-job]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedJobId = button.dataset.commandJob;
      closeCommandSearch();
      setView("job-detail");
    });
  });
  refreshIcons();
}

function openCandidateDrawer(candidateId) {
  const candidate = getCandidate(candidateId);
  if (!candidate) return;
  const job = getCandidateJob(candidate);
  const candidateInterviews = interviews.filter((interview) => interview.candidateId === candidate.id);
  drawerTitle.textContent = candidate.name;
  drawerBody.innerHTML = `
    <div class="drawer-profile">
      <span class="avatar">${initials(candidate.name)}</span>
      <div>
        <h3>${escapeHtml(candidate.name)}</h3>
        <p>${escapeHtml(job.title)} - ${escapeHtml(candidate.email)}</p>
        <div class="action-row">
          ${statusBadge(candidate.stage)}
          ${ratingStars(candidate.rating)}
          <span class="badge">${escapeHtml(candidate.source)}</span>
        </div>
      </div>
    </div>
    <div class="drawer-section">
      <h4>Decision Context</h4>
      <div class="drawer-metrics">
        <span><strong>${candidate.experience} yrs</strong> Experience</span>
        <span><strong>${candidate.expectedSalary}</strong> Expected</span>
        <span><strong>${candidateInterviews.length}</strong> Interviews</span>
      </div>
    </div>
    <div class="drawer-section">
      <h4>Skills</h4>
      ${tags(candidate.skills)}
    </div>
    <div class="drawer-section">
      <h4>Next Action</h4>
      <p>${candidateInterviews.some((interview) => interview.result === "Pending") ? "Review pending feedback before moving this candidate." : "Schedule next step or move candidate to the next stage."}</p>
      <div class="action-row">
        <button class="btn btn-primary" data-drawer-open-detail="${candidate.id}" type="button">Open profile</button>
        <button class="btn" data-action="schedule-for-candidate" data-candidate-id="${candidate.id}" type="button">Schedule</button>
      </div>
    </div>
  `;
  candidateDrawer.classList.remove("is-hidden");
  candidateDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  drawerBody.querySelector("[data-drawer-open-detail]").addEventListener("click", (event) => {
    state.selectedCandidateId = event.currentTarget.dataset.drawerOpenDetail;
    closeCandidateDrawer();
    setView("candidate-detail");
  });
  drawerBody.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      closeCandidateDrawer();
      handleAction(event, element);
    });
  });
  refreshIcons();
}

function closeCandidateDrawer() {
  candidateDrawer.classList.add("is-hidden");
  candidateDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setView(view) {
  state.view = view;
  window.location.hash = view;
  showApp();
  renderApp();
  sidebar.classList.remove("is-open");
  pageContent.focus({ preventScroll: true });
}

function showLogin() {
  appShell.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  window.location.hash = "login";
  refreshIcons();
}

function showApp() {
  loginScreen.classList.add("is-hidden");
  appShell.classList.remove("is-hidden");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateHeader() {
  const [eyebrow, title] = pageMeta[state.view] || pageMeta.dashboard;
  pageEyebrow.textContent = eyebrow;
  pageTitle.textContent = title;
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });
}

function renderApp() {
  updateHeader();
  const renderers = {
    dashboard: renderDashboard,
    jobs: renderJobs,
    "job-detail": renderJobDetail,
    candidates: renderCandidates,
    "candidate-detail": renderCandidateDetail,
    pipeline: renderPipeline,
    interviews: renderInterviews,
    feedback: renderFeedback,
    reports: renderReports,
    settings: renderSettings,
  };
  pageContent.innerHTML = (renderers[state.view] || renderDashboard)();
  bindViewEvents();
  refreshIcons();
}

function renderDashboard() {
  const totalCandidates = candidates.length;
  const openJobs = jobs.filter((j) => j.status === "Open").length;
  const scheduledInterviews = interviews.filter((i) => i.status === "Scheduled").length;
  const offerRate = Math.round((candidates.filter((c) => ["Offer", "Hired"].includes(c.stage)).length / Math.max(totalCandidates, 1)) * 100);
  const upcomingInterviews = interviews.filter((i) => i.status === "Scheduled").slice(0, 4);
  const recentActivity = [
    { icon: "user-plus", title: "Linh Tran moved to Interview", note: "UI/UX Designer candidate selected for UX interview." },
    { icon: "calendar-plus", title: "Four interviews scheduled", note: "Interviewers assigned across BA, QA, and Front-end roles." },
    { icon: "badge-check", title: "Chi Vo moved to Offer", note: "Hiring Manager approved QA Tester offer recommendation." },
  ];
  const activeJobs = jobs.filter((j) => j.status === "Open").slice(0, 5);

  return `
    <section class="dashboard-grid" aria-label="Recruitment dashboard">
      <section class="kpi-grid">
        <article class="metric-card">
          <div class="metric-top">
            <div>
              <p>Total Candidates</p>
              <strong>${totalCandidates}</strong>
            </div>
            <span class="stat-icon teal"><i data-lucide="users"></i></span>
          </div>
          <small>Across ${openJobs} open positions</small>
        </article>

        <article class="metric-card">
          <div class="metric-top">
            <div>
              <p>Open Jobs</p>
              <strong>${openJobs}</strong>
            </div>
            <span class="stat-icon"><i data-lucide="briefcase-business"></i></span>
          </div>
          <small>Active job postings</small>
        </article>

        <article class="metric-card">
          <div class="metric-top">
            <div>
              <p>Interviews Scheduled</p>
              <strong>${scheduledInterviews}</strong>
            </div>
            <span class="stat-icon warning"><i data-lucide="calendar-days"></i></span>
          </div>
          <small>Pending interviews</small>
        </article>

        <article class="metric-card">
          <div class="metric-top">
            <div>
              <p>Offer Rate</p>
              <strong>${offerRate}%</strong>
            </div>
            <span class="stat-icon success"><i data-lucide="badge-check"></i></span>
          </div>
          <small>Offer and hired candidates</small>
        </article>
      </section>

      <section class="dashboard-bottom-grid">
        <article class="panel pipeline-overview">
          <header class="panel-header">
            <div>
              <h2>Pipeline Overview</h2>
              <p>Candidate distribution across stages</p>
            </div>
          </header>
          <div class="pipeline-bars">
            ${renderPipelineBars()}
          </div>
        </article>

        <article class="panel upcoming-interviews">
          <header class="panel-header">
            <div>
              <h2>Upcoming Interviews</h2>
              <p>${upcomingInterviews.length} scheduled</p>
            </div>
            <button class="btn" data-view="interviews" type="button">View all</button>
          </header>
          <div class="interview-list">
            ${upcomingInterviews.map((interview) => {
              const candidate = getCandidate(interview.candidateId);
              const job = getJob(interview.jobId);
              return `
                <div class="interview-item">
                  <span class="avatar">${initials(candidate.name)}</span>
                  <div class="interview-body">
                    <p><strong>${escapeHtml(candidate.name)}</strong> - ${escapeHtml(interview.round)}</p>
                    <span>${escapeHtml(job.title)} with ${escapeHtml(interview.interviewer)}</span>
                    <span>${formatDate(interview.date)} at ${escapeHtml(interview.time)}</span>
                  </div>
                  ${statusBadge(interview.status)}
                </div>
              `;
            }).join("")}
          </div>
        </article>

        <article class="panel recent-activity">
          <header class="panel-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest updates</p>
            </div>
          </header>
          <div class="activity-list">
            ${recentActivity.map((item) => `
              <div class="activity-item">
                <span class="activity-icon"><i data-lucide="${item.icon}"></i></span>
                <div class="activity-body">
                  <p>${escapeHtml(item.title)}</p>
                  <span>${escapeHtml(item.note)}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="panel active-jobs">
          <header class="panel-header">
            <div>
              <h2>Active Jobs</h2>
              <p>${openJobs} open positions</p>
            </div>
            <button class="btn" data-view="jobs" type="button">View all</button>
          </header>
          <div class="job-list">
            ${activeJobs.map((job) => {
              const count = candidates.filter((c) => c.jobId === job.id).length;
              return `
                <div class="job-card" data-job-view="${job.id}">
                  <div class="job-card-info">
                    <strong>${escapeHtml(job.title)}</strong>
                    <small>${escapeHtml(job.department)} - ${escapeHtml(job.location)}</small>
                  </div>
                  <div class="job-card-meta">
                    <span class="badge">${count} candidates</span>
                    ${statusBadge(job.status)}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </article>
      </section>
    </section>
  `;
}

function renderPipelineBars() {
  const stages = ["Applied", "Screening", "Interview", "Offer", "Hired", "Rejected"];
  const max = Math.max(...stages.map((s) => candidates.filter((c) => c.stage === s || (s === "Interview" && ["Technical Test", "Final Interview"].includes(c.stage))).length), 1);
  return stages.map((stage) => {
    const count = stage === "Interview"
      ? candidates.filter((c) => ["Interview", "Technical Test", "Final Interview"].includes(c.stage)).length
      : candidates.filter((c) => c.stage === stage).length;
    const width = Math.round((count / max) * 100);
    const tone = stage === "Hired" || stage === "Offer" ? "success" : stage === "Rejected" ? "danger" : "";
    return `
      <div class="progress-row">
        <header>
          <span>${escapeHtml(stage)}</span>
          <strong>${count}</strong>
        </header>
        <div class="progress-track">
          <div class="progress-fill ${tone}" style="width: ${width}%"></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderPulseStage(stage) {
  const count = candidates.filter((candidate) => getPipelineBucket(candidate.stage) === stage || candidate.stage === stage).length;
  const max = Math.max(...["Applied", "Screening", "Interview", "Offer", "Hired"].map((item) => candidates.filter((candidate) => getPipelineBucket(candidate.stage) === item || candidate.stage === item).length), 1);
  const width = Math.max((count / max) * 100, count ? 16 : 0);
  return `
    <div class="pulse-stage">
      <div>
        <span>${escapeHtml(stage)}</span>
        <strong>${count}</strong>
      </div>
      <div class="pulse-stage-track"><i style="width: ${width}%"></i></div>
    </div>
  `;
}

function renderInsightItem(severity, title, note) {
  return `
    <button class="insight-item" data-view-target="${severity === "High" ? "feedback" : "pipeline"}" type="button">
      <span class="insight-severity ${severity.toLowerCase()}">${escapeHtml(severity)}</span>
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(note)}</small>
    </button>
  `;
}

function renderFlowStage(stage) {
  const stageCandidates = candidates
    .filter((candidate) => candidate.stage === stage)
    .slice(0, 3);
  const allCount = candidates.filter((candidate) => candidate.stage === stage).length;
  return `
    <article class="flow-stage-card ${toClass(stage)}">
      <header>
        <span>${escapeHtml(stage)}</span>
        <strong>${allCount}</strong>
      </header>
      <div class="flow-stage-stack">
        ${
          stageCandidates.length
            ? stageCandidates.map((candidate) => renderCompactCandidate(candidate)).join("")
            : `<div class="flow-empty">No candidates stuck here</div>`
        }
      </div>
    </article>
  `;
}

function renderCompactCandidate(candidate) {
  const job = getCandidateJob(candidate);
  const waiting = Math.max(1, Math.round((new Date("2026-06-04") - new Date(`${candidate.appliedDate}T00:00:00`)) / 86400000));
  return `
    <button class="compact-candidate-card" data-candidate-drawer="${candidate.id}" type="button">
      <span class="avatar">${initials(candidate.name)}</span>
      <span>
        <strong>${escapeHtml(candidate.name)}</strong>
        <small>${escapeHtml(job.title)} - ${waiting}d wait</small>
      </span>
      ${ratingStars(candidate.rating)}
    </button>
  `;
}

function renderRoleCard(job) {
  const rows = candidates.filter((candidate) => candidate.jobId === job.id);
  const manager = job.department === "Engineering" ? "Son Le" : job.department === "Product" ? "Hanh Tran" : "Minh Anh";
  return `
    <article class="role-card" data-job-row="${job.id}">
      <header>
        <div>
          <span class="command-label">${escapeHtml(job.department)}</span>
          <h3>${escapeHtml(job.title)}</h3>
        </div>
        ${statusBadge(job.status)}
      </header>
      <div class="role-card-meta">
        <span><strong>${rows.length}</strong> candidates</span>
        <span>Due ${formatDate(job.deadline)}</span>
      </div>
      <div class="mini-pipeline-bar">
        ${["Applied", "Screening", "Interview", "Offer", "Hired", "Rejected"]
          .map((stage) => {
            const count = rows.filter((candidate) => getPipelineBucket(candidate.stage) === stage || candidate.stage === stage).length;
            return `<i class="${toClass(stage)}" style="flex-grow: ${Math.max(count, 1)}" title="${escapeHtml(stage)}: ${count}"></i>`;
          })
          .join("")}
      </div>
      <footer>
        <span><span class="avatar">${initials(manager)}</span>${escapeHtml(manager)}</span>
        <button class="btn btn-ghost" data-job-view="${job.id}" type="button">View Pipeline</button>
      </footer>
    </article>
  `;
}

function renderStageProgress() {
  const max = Math.max(...candidateStages.map((stage) => candidates.filter((candidate) => candidate.stage === stage).length), 1);
  return candidateStages
    .map((stage) => {
      const count = candidates.filter((candidate) => candidate.stage === stage).length;
      const width = Math.max((count / max) * 100, count ? 12 : 0);
      const tone = stage === "Rejected" ? "danger" : stage === "Hired" ? "success" : stage === "Offer" ? "warning" : "";
      return `
        <div class="progress-row">
          <header>
            <span>${escapeHtml(stage)}</span>
            <strong>${count}</strong>
          </header>
          <div class="progress-track">
            <div class="progress-fill ${tone}" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderRecentActivities() {
  const items = [
    ["user-plus", "Linh Tran moved to Interview", "UI/UX Designer candidate selected for UX interview."],
    ["calendar-plus", "Four interviews scheduled", "Interviewers were assigned across BA, QA, and Front-end roles."],
    ["badge-check", "Chi Vo moved to Offer", "Hiring Manager approved QA Tester offer recommendation."],
    ["briefcase-business", "Business Analyst job is active", "Three candidates are currently attached to this opening."],
  ];
  return items
    .map(
      ([icon, title, note]) => `
      <div class="activity-item">
        <span class="activity-icon"><i data-lucide="${icon}"></i></span>
        <div class="activity-body">
          <p>${escapeHtml(title)}</p>
          <span>${escapeHtml(note)}</span>
        </div>
      </div>
    `,
    )
    .join("");
}

function renderInterviewItem(interview) {
  const candidate = getCandidate(interview.candidateId);
  const job = getJob(interview.jobId);
  return `
    <div class="interview-item">
      <span class="avatar">${initials(candidate.name)}</span>
      <div class="interview-body">
        <p>${escapeHtml(candidate.name)} - ${escapeHtml(interview.round)}</p>
        <span>${escapeHtml(job.title)} with ${escapeHtml(interview.interviewer)}</span>
        <span>${formatDate(interview.date)} at ${escapeHtml(interview.time)} - ${escapeHtml(interview.type)}</span>
      </div>
      ${statusBadge(interview.result)}
    </div>
  `;
}

function renderJobs() {
  const filtered = getFilteredJobs();
  return `
    <section class="page-header">
      <div>
        <h2>Job Management</h2>
        <p>Create, publish, track, and close open positions across departments.</p>
      </div>
      <button class="btn btn-primary" data-action="create-job" type="button">
        <i data-lucide="plus"></i>
        Create job
      </button>
    </section>

    <section class="panel">
      <div class="filter-bar">
        <input id="jobSearch" type="search" placeholder="Search jobs" value="${escapeHtml(state.filters.jobSearch)}" />
        ${selectHtml("departmentFilter", getUnique(jobs.map((job) => job.department)), state.filters.department)}
        ${selectHtml("jobStatusFilter", getUnique(jobs.map((job) => job.status)), state.filters.jobStatus)}
      </div>
    </section>

    <section class="panel">
      <header class="panel-header">
        <div>
          <h2>Job List</h2>
          <p>${filtered.length} result${filtered.length === 1 ? "" : "s"} found.</p>
        </div>
      </header>
      ${renderJobsTable(filtered)}
    </section>
  `;
}

function getFilteredJobs() {
  const search = [state.search, state.filters.jobSearch].filter(Boolean).join(" ");
  return jobs.filter((job) => {
    const matchesText = search ? jobMatchesSearch(job, search) : true;
    const matchesDepartment = state.filters.department === "All" || job.department === state.filters.department;
    const matchesStatus = state.filters.jobStatus === "All" || job.status === state.filters.jobStatus;
    return matchesText && matchesDepartment && matchesStatus;
  });
}

function renderJobsTable(rows, options = {}) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Job</th>
            <th>Department</th>
            <th>Location</th>
            <th>Status</th>
            <th>Candidates</th>
            <th>Deadline</th>
            ${options.compact ? "" : "<th>Action</th>"}
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((job) => {
                    const count = candidates.filter((candidate) => candidate.jobId === job.id).length;
                    return `
                      <tr class="clickable-row" data-job-row="${job.id}">
                        <td>
                          <div class="table-cell-main">
                            <span class="stat-icon"><i data-lucide="briefcase-business"></i></span>
                            <span>
                              <strong>${escapeHtml(job.title)}</strong>
                              <small>${escapeHtml(job.type)} - ${escapeHtml(job.salary)}</small>
                            </span>
                          </div>
                        </td>
                        <td>${escapeHtml(job.department)}</td>
                        <td>${escapeHtml(job.location)}</td>
                        <td>${statusBadge(job.status)}</td>
                        <td><strong>${count}</strong></td>
                        <td>${formatDate(job.deadline)}</td>
                        ${options.compact ? "" : `<td><button class="btn btn-ghost" data-job-view="${job.id}" type="button"><i data-lucide="eye"></i>View</button></td>`}
                      </tr>
                    `;
                  })
                  .join("")
              : tableEmpty(options.compact ? 6 : 7)
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderJobDetail() {
  const job = getJob(state.selectedJobId) || jobs[0];
  state.selectedJobId = job.id;
  const jobCandidates = candidates.filter((candidate) => candidate.jobId === job.id);
  const stageCounts = candidateStages.map((stage) => ({
    stage,
    count: jobCandidates.filter((candidate) => candidate.stage === stage).length,
  }));
  const max = Math.max(...stageCounts.map((item) => item.count), 1);

  return `
    <section class="detail-hero panel">
      <div class="detail-title">
        <span class="stat-icon"><i data-lucide="briefcase-business"></i></span>
        <div>
          <h2>${escapeHtml(job.title)}</h2>
          <p>${escapeHtml(job.department)} - ${escapeHtml(job.location)} - ${escapeHtml(job.type)}</p>
          <div class="action-row" style="margin-top: 12px;">
            ${statusBadge(job.status)}
            <span class="badge">${escapeHtml(job.salary)}</span>
            <span class="badge">${jobCandidates.length} candidates</span>
          </div>
        </div>
      </div>
      <div class="page-actions">
        <button class="btn" data-action="edit-job" data-job-id="${job.id}" type="button">
          <i data-lucide="pencil"></i>
          Edit
        </button>
        <button class="btn btn-danger" data-action="close-job" data-job-id="${job.id}" type="button">
          <i data-lucide="lock"></i>
          Close job
        </button>
      </div>
    </section>

    <section class="grid grid-3">
      <div class="info-item">
        <span>Created date</span>
        <strong>${formatDate(job.createdDate)}</strong>
      </div>
      <div class="info-item">
        <span>Deadline</span>
        <strong>${formatDate(job.deadline)}</strong>
      </div>
      <div class="info-item">
        <span>Hiring progress</span>
        <strong>${jobCandidates.filter((candidate) => ["Offer", "Hired"].includes(candidate.stage)).length} late-stage candidates</strong>
      </div>
    </section>

    <section class="split-layout">
      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Job Information</h2>
            <p>Business context, responsibilities, and core requirements.</p>
          </div>
        </header>
        <h3>Description</h3>
        <p>${escapeHtml(job.description)}</p>
        <h3 style="margin-top: 18px;">Requirements</h3>
        ${tags(job.requirements)}
      </article>

      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Recruitment Progress</h2>
            <p>Distribution of candidates for this role.</p>
          </div>
        </header>
        <div class="progress-list">
          ${stageCounts
            .map((item) => {
              const width = Math.max((item.count / max) * 100, item.count ? 12 : 0);
              return `
                <div class="progress-row">
                  <header>
                    <span>${escapeHtml(item.stage)}</span>
                    <strong>${item.count}</strong>
                  </header>
                  <div class="progress-track"><div class="progress-fill" style="width: ${width}%"></div></div>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    </section>

    <section class="panel">
      <header class="panel-header">
        <div>
          <h2>Candidate List For This Job</h2>
          <p>${jobCandidates.length} candidate${jobCandidates.length === 1 ? "" : "s"} attached to ${escapeHtml(job.title)}.</p>
        </div>
        <button class="btn btn-primary" data-action="create-candidate" data-job-id="${job.id}" type="button">
          <i data-lucide="user-plus"></i>
          Add candidate
        </button>
      </header>
      ${renderCandidateTable(jobCandidates)}
    </section>
  `;
}

function renderCandidates() {
  const filtered = getFilteredCandidates();
  return `
    <section class="page-header">
      <div>
        <h2>Candidate Management</h2>
        <p>Search, filter, review, and move candidates through recruitment stages.</p>
      </div>
      <button class="btn btn-primary" data-action="create-candidate" type="button">
        <i data-lucide="user-plus"></i>
        Add candidate
      </button>
    </section>

    <section class="panel">
      <div class="filter-bar">
        <input id="candidateSearch" type="search" placeholder="Search candidates" value="${escapeHtml(state.filters.candidateSearch)}" />
        ${selectHtml("candidateJobFilter", ["All", ...jobs.map((job) => job.title)], state.filters.candidateJob)}
        ${selectHtml("candidateStageFilter", getUnique(candidateStages), state.filters.candidateStage)}
        ${selectHtml("candidateSourceFilter", getUnique(candidates.map((candidate) => candidate.source)), state.filters.candidateSource)}
      </div>
    </section>

    <section class="panel">
      <header class="panel-header">
        <div>
          <h2>Candidate Table</h2>
          <p>${filtered.length} result${filtered.length === 1 ? "" : "s"} found.</p>
        </div>
      </header>
      ${renderCandidateTable(filtered)}
    </section>
  `;
}

function getFilteredCandidates() {
  const search = [state.search, state.filters.candidateSearch].filter(Boolean).join(" ");
  return candidates.filter((candidate) => {
    const job = getCandidateJob(candidate);
    const matchesText = search ? candidateMatchesSearch(candidate, search) : true;
    const matchesJob = state.filters.candidateJob === "All" || job.title === state.filters.candidateJob;
    const matchesStage = state.filters.candidateStage === "All" || candidate.stage === state.filters.candidateStage;
    const matchesSource = state.filters.candidateSource === "All" || candidate.source === state.filters.candidateSource;
    return matchesText && matchesJob && matchesStage && matchesSource;
  });
}

function renderCandidateTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Applied Position</th>
            <th>Stage</th>
            <th>Rating</th>
            <th>Source</th>
            <th>Experience</th>
            <th>Applied Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((candidate) => {
                    const job = getCandidateJob(candidate);
                    return `
                      <tr class="clickable-row" data-candidate-row="${candidate.id}">
                        <td>
                          <div class="table-cell-main">
                            <span class="avatar">${initials(candidate.name)}</span>
                            <span>
                              <strong>${escapeHtml(candidate.name)}</strong>
                              <small>${escapeHtml(candidate.email)}</small>
                            </span>
                          </div>
                        </td>
                        <td>${escapeHtml(job.title)}</td>
                        <td>${statusBadge(candidate.stage)}</td>
                        <td>${ratingStars(candidate.rating)}</td>
                        <td>${escapeHtml(candidate.source)}</td>
                        <td>${candidate.experience} years</td>
                        <td>${formatDate(candidate.appliedDate)}</td>
                        <td>
                          <button class="btn btn-ghost" data-candidate-view="${candidate.id}" type="button">
                            <i data-lucide="eye"></i>
                            View
                          </button>
                        </td>
                      </tr>
                    `;
                  })
                  .join("")
              : tableEmpty(8)
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderCandidateDetail() {
  const candidate = getCandidate(state.selectedCandidateId) || candidates[0];
  state.selectedCandidateId = candidate.id;
  const job = getCandidateJob(candidate);
  const candidateInterviews = interviews.filter((interview) => interview.candidateId === candidate.id);
  const pendingInterview = candidateInterviews.find((interview) => interview.result === "Pending");
  const completedInterviews = candidateInterviews.filter((interview) => interview.status === "Completed").length;
  const timeline = [
    ["Applied", `Candidate applied for ${job.title}`, candidate.appliedDate],
    [candidate.stage, `Current stage updated to ${candidate.stage}`, "2026-06-03"],
    ["Note", candidate.notes, "2026-06-03"],
  ];

  return `
    <section class="candidate-command-hero">
      <div class="candidate-command-main">
        <div class="detail-title">
          <span class="avatar candidate-hero-avatar">${initials(candidate.name)}</span>
          <div>
            <span class="command-label">Candidate Profile</span>
            <h2>${escapeHtml(candidate.name)}</h2>
            <p>${escapeHtml(job.title)} - ${escapeHtml(candidate.email)} - ${escapeHtml(candidate.phone)}</p>
            <div class="action-row" style="margin-top: 14px;">
              ${statusBadge(candidate.stage)}
              ${ratingStars(candidate.rating)}
              <span class="badge">${escapeHtml(candidate.source)}</span>
            </div>
          </div>
        </div>
        <div class="stage-tracker">
          ${candidateStages
            .slice(0, 7)
            .map((stage) => `<span class="${candidateStages.indexOf(stage) <= candidateStages.indexOf(candidate.stage) ? "is-complete" : ""}">${escapeHtml(stage)}</span>`)
            .join("")}
        </div>
      </div>
      <aside class="next-action-card">
        <span class="command-label">Recommended Next Action</span>
        <h3>${pendingInterview ? "Review pending feedback" : "Schedule next step"}</h3>
        <p>${
          pendingInterview
            ? `${pendingInterview.interviewer} needs to close the ${pendingInterview.round} loop.`
            : `${candidate.name} is ready for a structured follow-up.`
        }</p>
        <button class="btn" data-action="edit-candidate" data-candidate-id="${candidate.id}" type="button">
          <i data-lucide="pencil"></i>
          Edit
        </button>
        <button class="btn btn-primary" data-action="schedule-for-candidate" data-candidate-id="${candidate.id}" type="button">
          <i data-lucide="calendar-plus"></i>
          Schedule next step
        </button>
      </aside>
    </section>

    <section class="candidate-decision-grid">
      <article class="panel command-panel evaluation-card">
        <header class="panel-header">
          <div>
            <span class="command-label">Evaluation Score</span>
            <h2>${Number(candidate.rating).toFixed(1)} / 5</h2>
            <p>${completedInterviews} completed interview${completedInterviews === 1 ? "" : "s"} recorded.</p>
          </div>
        </header>
        <div class="score-ring" style="--score: ${(candidate.rating / 5) * 100}%"><span>${Number(candidate.rating).toFixed(1)}</span></div>
        ${tags(candidate.skills)}
      </article>

      <article class="panel command-panel">
        <header class="panel-header">
          <div>
            <span class="command-label">Candidate Context</span>
            <h2>Profile Signals</h2>
            <p>Key details HR needs before the next decision.</p>
          </div>
        </header>
        <div class="info-grid compact-info-grid">
          <div class="info-item"><span>Applied job</span><strong>${escapeHtml(job.title)}</strong></div>
          <div class="info-item"><span>Expected salary</span><strong>${escapeHtml(candidate.expectedSalary)}</strong></div>
          <div class="info-item"><span>Experience</span><strong>${candidate.experience} years</strong></div>
          <div class="info-item"><span>CV</span><strong><a href="${escapeHtml(candidate.cvLink)}" target="_blank" rel="noreferrer">Open CV</a></strong></div>
          <div class="info-item"><span>Portfolio</span><strong>${candidate.portfolio ? `<a href="${escapeHtml(candidate.portfolio)}" target="_blank" rel="noreferrer">Open portfolio</a>` : "Not provided"}</strong></div>
          <div class="info-item"><span>Move stage</span><strong>${selectHtml("moveStageSelect", candidateStages, candidate.stage)}</strong></div>
        </div>
      </article>
    </section>

    <section class="candidate-detail-layout">
      <article class="panel command-panel">
        <header class="panel-header">
          <div>
            <span class="command-label">Interview Timeline</span>
            <h2>What happened so far</h2>
            <p>${candidateInterviews.length} interview record${candidateInterviews.length === 1 ? "" : "s"} for this candidate.</p>
          </div>
        </header>
        <div class="timeline-list">
          ${candidateInterviews.map((interview) => renderInterviewTimeline(interview)).join("") || `<div class="flow-empty">No interviews scheduled yet.</div>`}
        </div>
      </article>

      <aside class="stack">
        <article class="panel command-panel">
          <header class="panel-header">
            <div>
              <span class="command-label">Notes Panel</span>
              <h2>Hiring Context</h2>
            </div>
          </header>
          <p>${escapeHtml(candidate.notes)}</p>
        </article>

        <article class="panel command-panel">
          <header class="panel-header">
            <div>
              <span class="command-label">Activity Timeline</span>
              <h2>Recent Movement</h2>
            </div>
          </header>
          <div class="timeline-list">
            ${timeline
              .map(
                ([title, note, date]) => `
                <div class="timeline-item">
                  <span class="activity-icon"><i data-lucide="clock-3"></i></span>
                  <div class="timeline-body">
                    <p>${escapeHtml(title)}</p>
                    <span>${escapeHtml(note)}</span>
                    <span>${formatDate(date)}</span>
                  </div>
                </div>
              `,
              )
              .join("")}
          </div>
        </article>
      </aside>
    </section>
  `;
}

function renderInterviewTimeline(interview) {
  const job = getJob(interview.jobId);
  return `
    <div class="timeline-item interview-timeline-item">
      <span class="activity-icon"><i data-lucide="${interview.result === "Pass" ? "badge-check" : interview.result === "Fail" ? "circle-x" : "message-square-warning"}"></i></span>
      <div class="timeline-body">
        <p>${escapeHtml(interview.round)} - ${statusBadge(interview.result)}</p>
        <span>${escapeHtml(job.title)} with ${escapeHtml(interview.interviewer)}</span>
        <span>${formatDate(interview.date)} at ${escapeHtml(interview.time)} - ${escapeHtml(interview.status)}</span>
      </div>
    </div>
  `;
}

function renderPipeline() {
  const filtered = getPipelineCandidates();
  const selectedRole = state.filters.pipelineJob === "All" ? "All active roles" : state.filters.pipelineJob;
  const pendingFeedback = interviews.filter((interview) => interview.result === "Pending").length;
  const offerCount = filtered.filter((candidate) => ["Offer", "Hired"].includes(candidate.stage)).length;
  const offerRate = Math.round((offerCount / Math.max(filtered.length, 1)) * 100);

  return `
    <section class="pipeline-command-header">
      <div>
        <span class="command-label">Pipeline Operating Board</span>
        <h2>See bottlenecks before candidates stall</h2>
        <p>Move candidates, review waiting time, and keep each role flowing.</p>
      </div>
      <div class="page-actions">
        ${selectHtml("pipelineJobFilter", ["All", ...jobs.map((job) => job.title)], state.filters.pipelineJob)}
        <input id="pipelineSearch" type="search" placeholder="Search candidate" value="${escapeHtml(state.filters.pipelineSearch)}" />
        <div class="segmented">
          <button class="${state.filters.pipelineView === "Board" ? "is-active" : ""}" data-pipeline-mode="Board" type="button">Board</button>
          <button class="${state.filters.pipelineView === "List" ? "is-active" : ""}" data-pipeline-mode="List" type="button">List</button>
        </div>
      </div>
    </section>

    <section class="pipeline-ops-grid">
      ${metricCard("Selected Role", selectedRole, "Current pipeline scope", "scan-search")}
      ${metricCard("Total Candidates", filtered.length, "Candidates matching this view", "users", "teal")}
      ${metricCard("Avg Time in Stage", "4.2 days", "Mock operating metric", "timer", "warning")}
      ${metricCard("Pending Feedback", pendingFeedback, "Interviews waiting for evaluation", "message-square-warning", "danger")}
      ${metricCard("Offer Rate", `${offerRate}%`, "Offer and hired candidates in scope", "badge-check", "success")}
    </section>

    ${
      state.filters.pipelineView === "List"
        ? `<section class="panel command-panel">${renderCandidateTable(filtered)}</section>`
        : `<section class="kanban-board command-kanban-board" aria-label="Recruitment pipeline">
            ${pipelineStages.map((stage) => renderPipelineColumn(stage, filtered)).join("")}
          </section>`
    }
  `;
}

function getPipelineCandidates() {
  const search = [state.search, state.filters.pipelineSearch].filter(Boolean).join(" ");
  return candidates.filter((candidate) => {
    const job = getCandidateJob(candidate);
    const matchesJob = state.filters.pipelineJob === "All" || job.title === state.filters.pipelineJob;
    const matchesSearch = search ? candidateMatchesSearch(candidate, search) : true;
    return matchesJob && matchesSearch;
  });
}

function getPipelineBucket(stage) {
  if (stage === "Technical Test" || stage === "Final Interview") return "Interview";
  return pipelineStages.includes(stage) ? stage : "Applied";
}

function renderPipelineColumn(stage, rows) {
  const stageCandidates = rows.filter((candidate) => getPipelineBucket(candidate.stage) === stage);
  const isBottleneck = ["Screening", "Interview"].includes(stage) && stageCandidates.length >= 2;
  return `
    <div class="kanban-column command-kanban-column ${isBottleneck ? "has-bottleneck" : ""}" data-stage="${stage}">
      <header class="kanban-header">
        <span>
          <strong>${escapeHtml(stage)}</strong>
          ${isBottleneck ? `<small>Bottleneck risk</small>` : `<small>Pipeline looks healthy</small>`}
        </span>
        <span class="badge ${toClass(stage)}">${stageCandidates.length}</span>
      </header>
      <div class="kanban-body">
        ${
          stageCandidates.length
            ? stageCandidates.map((candidate) => renderCandidateCard(candidate)).join("")
            : `<div class="empty-state command-empty"><div><span class="stat-icon"><i data-lucide="check-circle-2"></i></span><h3>No candidates stuck here</h3><p>Pipeline looks healthy.</p></div></div>`
        }
      </div>
    </div>
  `;
}

function renderCandidateCard(candidate) {
  const job = getCandidateJob(candidate);
  const waiting = Math.max(1, Math.round((new Date("2026-06-04") - new Date(`${candidate.appliedDate}T00:00:00`)) / 86400000));
  return `
    <article class="candidate-card" draggable="true" data-candidate-card="${candidate.id}">
      <div class="candidate-card-header">
        <span class="avatar">${initials(candidate.name)}</span>
        <span>
          <strong>${escapeHtml(candidate.name)}</strong>
          <small>${escapeHtml(job.title)}</small>
        </span>
      </div>
      <div class="candidate-card-meta">
        <span>${ratingStars(candidate.rating)}</span>
        <span>${candidate.experience} yrs</span>
        <span>${waiting}d waiting</span>
        <span>${escapeHtml(candidate.source)}</span>
      </div>
      ${tags(candidate.skills.slice(0, 3))}
      <div class="candidate-card-actions">
        <span>${statusBadge(candidate.stage)}</span>
        <button class="icon-btn" type="button" aria-label="Quick action"><i data-lucide="more-horizontal"></i></button>
      </div>
    </article>
  `;
}

function renderInterviews() {
  const rows = getFilteredInterviews();
  const calendarDays = ["2026-06-04", "2026-06-05", "2026-06-06", "2026-06-07", "2026-06-08", "2026-06-09", "2026-06-10"];
  return `
    <section class="page-header">
      <div>
        <h2>Interview Schedule</h2>
        <p>Plan interview rounds, assign interviewers, and track feedback status.</p>
      </div>
      <button class="btn btn-primary" data-action="create-interview" type="button">
        <i data-lucide="calendar-plus"></i>
        Create interview
      </button>
    </section>

    <section class="panel">
      <div class="toolbar-row">
        <div class="segmented">
          <button class="${state.filters.interviewMode === "List" ? "is-active" : ""}" data-interview-mode="List" type="button">List</button>
          <button class="${state.filters.interviewMode === "Calendar" ? "is-active" : ""}" data-interview-mode="Calendar" type="button">Calendar</button>
        </div>
        ${selectHtml("interviewStatusFilter", getUnique(interviews.map((interview) => interview.status)), state.filters.interviewStatus)}
      </div>
    </section>

    ${
      state.filters.interviewMode === "Calendar"
        ? `
          <section class="calendar-strip">
            ${calendarDays
              .map((date) => {
                const dayInterviews = interviews.filter((interview) => interview.date === date);
                return `
                  <article class="calendar-day ${date === "2026-06-04" ? "is-today" : ""}">
                    <span class="eyebrow">${new Intl.DateTimeFormat("en", { weekday: "short" }).format(new Date(`${date}T00:00:00`))}</span>
                    <strong>${new Date(`${date}T00:00:00`).getDate()}</strong>
                    <small>${dayInterviews.length} interview${dayInterviews.length === 1 ? "" : "s"}</small>
                  </article>
                `;
              })
              .join("")}
          </section>
        `
        : ""
    }

    <section class="panel">
      <header class="panel-header">
        <div>
          <h2>Interview List</h2>
          <p>${rows.length} schedule record${rows.length === 1 ? "" : "s"} found.</p>
        </div>
      </header>
      ${renderInterviewTable(rows)}
    </section>
  `;
}

function getFilteredInterviews() {
  return interviews.filter((interview) => {
    const candidate = getCandidate(interview.candidateId);
    const job = getJob(interview.jobId);
    const haystack = [candidate.name, job.title, interview.interviewer, interview.round, interview.status, interview.result]
      .join(" ")
      .toLowerCase();
    const matchesText = state.search ? haystack.includes(state.search.trim().toLowerCase()) : true;
    const matchesStatus = state.filters.interviewStatus === "All" || interview.status === state.filters.interviewStatus;
    return matchesText && matchesStatus;
  });
}

function renderInterviewTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Job</th>
            <th>Interviewer</th>
            <th>Round</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((interview) => {
                    const candidate = getCandidate(interview.candidateId);
                    const job = getJob(interview.jobId);
                    return `
                      <tr>
                        <td>
                          <div class="table-cell-main">
                            <span class="avatar">${initials(candidate.name)}</span>
                            <span>
                              <strong>${escapeHtml(candidate.name)}</strong>
                              <small>${escapeHtml(interview.type)} - ${escapeHtml(interview.location)}</small>
                            </span>
                          </div>
                        </td>
                        <td>${escapeHtml(job.title)}</td>
                        <td>${escapeHtml(interview.interviewer)}</td>
                        <td>${escapeHtml(interview.round)}</td>
                        <td>${formatDate(interview.date)} ${escapeHtml(interview.time)}</td>
                        <td>${statusBadge(interview.status)}</td>
                        <td>${statusBadge(interview.result)}</td>
                      </tr>
                    `;
                  })
                  .join("")
              : tableEmpty(7)
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderFeedback() {
  const interview =
    interviews.find((item) => item.status === "Scheduled") ||
    interviews.find((item) => item.status === "Completed") ||
    interviews[0];
  const candidate = getCandidate(interview.candidateId);
  const job = getJob(interview.jobId);
  const criteria = ["Communication Skill", "Technical Skill", "Problem Solving", "Culture Fit", "Experience Match", "Overall Rating"];

  return `
    <section class="split-layout">
      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Candidate Info</h2>
            <p>${escapeHtml(interview.round)} for ${escapeHtml(job.title)}.</p>
          </div>
          ${statusBadge(interview.result)}
        </header>
        <div class="detail-title">
          <span class="avatar">${initials(candidate.name)}</span>
          <div>
            <h2>${escapeHtml(candidate.name)}</h2>
            <p>${escapeHtml(candidate.email)} - ${escapeHtml(candidate.phone)}</p>
            <div class="action-row" style="margin-top: 12px;">
              ${statusBadge(candidate.stage)}
              ${ratingStars(candidate.rating)}
            </div>
          </div>
        </div>
        <div class="info-grid" style="margin-top: 18px;">
          <div class="info-item">
            <span>Interviewer</span>
            <strong>${escapeHtml(interview.interviewer)}</strong>
          </div>
          <div class="info-item">
            <span>Date</span>
            <strong>${formatDate(interview.date)}</strong>
          </div>
          <div class="info-item">
            <span>Time</span>
            <strong>${escapeHtml(interview.time)}</strong>
          </div>
        </div>
      </article>

      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Interview Feedback</h2>
            <p>Evaluation criteria and recommendation.</p>
          </div>
        </header>
        <form id="feedbackForm">
          <div class="evaluation-grid">
            ${criteria
              .map(
                (criterion, index) => `
                <div class="rating-control">
                  <label for="rating-${index}">${escapeHtml(criterion)}</label>
                  <input id="rating-${index}" name="${escapeHtml(criterion)}" type="range" min="1" max="5" step="1" value="${index === 5 ? 4 : 3}" />
                  <span class="rating-value" data-rating-value="rating-${index}">${index === 5 ? 4 : 3}</span>
                </div>
              `,
              )
              .join("")}
            <label class="field">
              Strengths
              <textarea name="strengths">Clear communication and strong role fit.</textarea>
            </label>
            <label class="field">
              Weaknesses
              <textarea name="weaknesses">Needs more evidence around delivery ownership.</textarea>
            </label>
            <label class="field">
              Recommendation
              ${selectHtml("recommendationSelect", ["Pass", "Fail", "Consider"], "Pass")}
            </label>
          </div>
          <div class="modal-actions">
            <button class="btn btn-primary" type="submit">
              <i data-lucide="send"></i>
              Submit feedback
            </button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderReports() {
  const total = candidates.length;
  const hired = candidates.filter((candidate) => candidate.stage === "Hired").length;
  const offerAccepted = Math.round((hired / Math.max(candidates.filter((candidate) => ["Offer", "Hired"].includes(candidate.stage)).length, 1)) * 100);
  const sourceStats = getUnique(candidates.map((candidate) => candidate.source))
    .filter((source) => source !== "All")
    .map((source) => {
      const sourceCandidates = candidates.filter((candidate) => candidate.source === source);
      return {
        source,
        count: sourceCandidates.length,
        hired: sourceCandidates.filter((candidate) => candidate.stage === "Hired").length,
      };
    });

  return `
    <section class="grid grid-4">
      ${metricCard("Total Applicants", total, "All candidates in the mock ATS", "users", "teal")}
      ${metricCard("Conversion Rate", `${Math.round((hired / total) * 100)}%`, "Hired candidates over total applicants", "chart-no-axes-combined")}
      ${metricCard("Average Time To Hire", "18 days", "Portfolio metric based on sample process", "timer", "warning")}
      ${metricCard("Offer Acceptance", `${offerAccepted}%`, "Accepted offers over offer-stage candidates", "badge-check", "success")}
    </section>

    <section class="split-layout">
      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Conversion Rate By Stage</h2>
            <p>Candidate distribution across the funnel.</p>
          </div>
        </header>
        <div class="progress-list">
          ${renderStageProgress()}
        </div>
      </article>

      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Candidate Source Performance</h2>
            <p>Source volume and hiring outcome.</p>
          </div>
        </header>
        <div class="source-grid">
          ${sourceStats
            .map(
              (item) => `
              <div class="source-item">
                <span>
                  <strong>${escapeHtml(item.source)}</strong>
                  <span>${item.count} candidates</span>
                </span>
                ${statusBadge(`${item.hired} hired`)}
              </div>
            `,
            )
            .join("")}
        </div>
      </article>
    </section>

    <section class="panel">
      <header class="panel-header">
        <div>
          <h2>Job Performance Table</h2>
          <p>Recruitment outcomes by job opening.</p>
        </div>
      </header>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
              <th>Total Candidates</th>
              <th>Interviewing</th>
              <th>Offers</th>
              <th>Hired</th>
              <th>Rejected</th>
            </tr>
          </thead>
          <tbody>
            ${jobs
              .map((job) => {
                const rows = candidates.filter((candidate) => candidate.jobId === job.id);
                return `
                  <tr>
                    <td><strong>${escapeHtml(job.title)}</strong><small class="meta-line">${escapeHtml(job.department)}</small></td>
                    <td>${statusBadge(job.status)}</td>
                    <td>${rows.length}</td>
                    <td>${rows.filter((candidate) => ["Interview", "Technical Test", "Final Interview"].includes(candidate.stage)).length}</td>
                    <td>${rows.filter((candidate) => candidate.stage === "Offer").length}</td>
                    <td>${rows.filter((candidate) => candidate.stage === "Hired").length}</td>
                    <td>${rows.filter((candidate) => candidate.stage === "Rejected").length}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="page-header">
      <div>
        <h2>Settings / User Management</h2>
        <p>Manage internal users and role-based permission visibility.</p>
      </div>
      <button class="btn btn-primary" data-action="add-user" type="button">
        <i data-lucide="user-plus"></i>
        Add user
      </button>
    </section>

    <section class="split-layout">
      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>User List</h2>
            <p>${users.length} workspace users.</p>
          </div>
        </header>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Permission status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${users
                .map(
                  (user) => `
                  <tr>
                    <td>
                      <div class="table-cell-main">
                        <span class="avatar">${initials(user.name)}</span>
                        <span>
                          <strong>${escapeHtml(user.name)}</strong>
                          <small>${escapeHtml(user.email)}</small>
                        </span>
                      </div>
                    </td>
                    <td>${escapeHtml(user.role)}</td>
                    <td>${statusBadge(user.status)}</td>
                    <td>
                      <button class="btn btn-ghost" data-action="edit-user" data-user-id="${user.id}" type="button">
                        <i data-lucide="pencil"></i>
                        Edit role
                      </button>
                    </td>
                  </tr>
                `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel">
        <header class="panel-header">
          <div>
            <h2>Role & Permission</h2>
            <p>Feature access by user role.</p>
          </div>
        </header>
        <div class="permission-list">
          ${permissions
            .map(
              ([feature, hr, manager, interviewer]) => `
              <div class="permission-item">
                <div class="activity-body">
                  <p>${escapeHtml(feature)}</p>
                  <span>HR Admin: ${escapeHtml(hr)} - Hiring Manager: ${escapeHtml(manager)} - Interviewer: ${escapeHtml(interviewer)}</span>
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}

function selectHtml(id, options, selected) {
  return `
    <select id="${id}">
      ${options
        .map((option) => `<option value="${escapeHtml(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`)
        .join("")}
    </select>
  `;
}

function showModal({ eyebrow = "HireFlow", title, body, onMount }) {
  modalEyebrow.textContent = eyebrow;
  modalTitle.textContent = title;
  modalBody.innerHTML = body;
  modalRoot.classList.remove("is-hidden");
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  refreshIcons();
  if (typeof onMount === "function") onMount();
}

function closeModal() {
  modalRoot.classList.add("is-hidden");
  modalRoot.setAttribute("aria-hidden", "true");
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function openJobModal(jobId) {
  const job = jobId ? getJob(jobId) : null;
  showModal({
    eyebrow: "Job management",
    title: job ? "Edit job" : "Create job",
    body: `
      <form id="jobForm">
        <div class="form-grid">
          <label>Job Title<input name="title" required value="${escapeHtml(job?.title || "")}" /></label>
          <label>Department<input name="department" required value="${escapeHtml(job?.department || "")}" /></label>
          <label>Location<input name="location" required value="${escapeHtml(job?.location || "")}" /></label>
          <label>Employment Type<input name="type" required value="${escapeHtml(job?.type || "Full-time")}" /></label>
          <label>Salary Range<input name="salary" required value="${escapeHtml(job?.salary || "")}" /></label>
          <label>Deadline<input name="deadline" type="date" required value="${escapeHtml(job?.deadline || "2026-07-15")}" /></label>
          <label>Status${selectHtml("jobStatusInput", ["Draft", "Open", "Closed"], job?.status || "Draft")}</label>
          <label class="full">Job Description<textarea name="description" required>${escapeHtml(job?.description || "")}</textarea></label>
          <label class="full">Requirements<textarea name="requirements" required>${escapeHtml(job?.requirements?.join(", ") || "")}</textarea></label>
        </div>
        <div class="modal-actions">
          <button class="btn" type="button" data-action="modal-cancel">Cancel</button>
          <button class="btn btn-primary" type="submit"><i data-lucide="save"></i>Save job</button>
        </div>
      </form>
    `,
    onMount: () => {
      document.getElementById("jobForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
          title: form.get("title").trim(),
          department: form.get("department").trim(),
          location: form.get("location").trim(),
          type: form.get("type").trim(),
          salary: form.get("salary").trim(),
          description: form.get("description").trim(),
          requirements: form
            .get("requirements")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
          createdDate: job?.createdDate || "2026-06-04",
          deadline: form.get("deadline"),
          status: document.getElementById("jobStatusInput").value,
        };
        if (job) {
          Object.assign(job, payload);
          showToast("Job updated.");
        } else {
          const newJob = { id: `job-${String(jobs.length + 1).padStart(3, "0")}`, ...payload };
          jobs = [newJob, ...jobs];
          state.selectedJobId = newJob.id;
          showToast("Job created.");
        }
        closeModal();
        renderApp();
      });
    },
  });
}

function openCandidateModal(candidateId, presetJobId) {
  const candidate = candidateId ? getCandidate(candidateId) : null;
  const defaultJobId = presetJobId || candidate?.jobId || jobs[0].id;
  showModal({
    eyebrow: "Candidate management",
    title: candidate ? "Edit candidate" : "Add candidate",
    body: `
      <form id="candidateForm">
        <div class="form-grid">
          <label>Full Name<input name="name" required value="${escapeHtml(candidate?.name || "")}" /></label>
          <label>Email<input name="email" type="email" required value="${escapeHtml(candidate?.email || "")}" /></label>
          <label>Phone<input name="phone" required value="${escapeHtml(candidate?.phone || "")}" /></label>
          <label>Applied Position
            <select id="candidateJobInput">
              ${jobs.map((job) => `<option value="${job.id}" ${job.id === defaultJobId ? "selected" : ""}>${escapeHtml(job.title)}</option>`).join("")}
            </select>
          </label>
          <label>Source<input name="source" required value="${escapeHtml(candidate?.source || "Website")}" /></label>
          <label>Current Stage${selectHtml("candidateStageInput", candidateStages, candidate?.stage || "Applied")}</label>
          <label>Rating<input name="rating" type="number" min="1" max="5" step="0.1" required value="${escapeHtml(candidate?.rating || "3.5")}" /></label>
          <label>Experience<input name="experience" type="number" min="0" max="20" required value="${escapeHtml(candidate?.experience || "1")}" /></label>
          <label>Expected Salary<input name="expectedSalary" value="${escapeHtml(candidate?.expectedSalary || "")}" /></label>
          <label>Applied Date<input name="appliedDate" type="date" required value="${escapeHtml(candidate?.appliedDate || "2026-06-04")}" /></label>
          <label class="full">CV Link<input name="cvLink" value="${escapeHtml(candidate?.cvLink || "https://example.com/cv/new-candidate")}" /></label>
          <label class="full">Portfolio Link<input name="portfolio" value="${escapeHtml(candidate?.portfolio || "")}" /></label>
          <label class="full">Skills<textarea name="skills" required>${escapeHtml(candidate?.skills?.join(", ") || "")}</textarea></label>
          <label class="full">Notes<textarea name="notes">${escapeHtml(candidate?.notes || "")}</textarea></label>
        </div>
        <div class="modal-actions">
          <button class="btn" type="button" data-action="modal-cancel">Cancel</button>
          <button class="btn btn-primary" type="submit"><i data-lucide="save"></i>Save candidate</button>
        </div>
      </form>
    `,
    onMount: () => {
      document.getElementById("candidateForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
          name: form.get("name").trim(),
          email: form.get("email").trim(),
          phone: form.get("phone").trim(),
          jobId: document.getElementById("candidateJobInput").value,
          source: form.get("source").trim(),
          stage: document.getElementById("candidateStageInput").value,
          rating: Number(form.get("rating")),
          cvLink: form.get("cvLink").trim(),
          portfolio: form.get("portfolio").trim(),
          expectedSalary: form.get("expectedSalary").trim(),
          experience: Number(form.get("experience")),
          skills: form
            .get("skills")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
          notes: form.get("notes").trim(),
          appliedDate: form.get("appliedDate"),
        };
        if (candidate) {
          Object.assign(candidate, payload);
          showToast("Candidate updated.");
        } else {
          const newCandidate = { id: `cand-${String(candidates.length + 1).padStart(3, "0")}`, ...payload };
          candidates = [newCandidate, ...candidates];
          state.selectedCandidateId = newCandidate.id;
          showToast("Candidate added.");
        }
        closeModal();
        renderApp();
      });
    },
  });
}

function openInterviewModal(candidateId) {
  const selectedCandidate = candidateId ? getCandidate(candidateId) : candidates[0];
  showModal({
    eyebrow: "Interview schedule",
    title: "Create interview",
    body: `
      <form id="interviewForm">
        <div class="form-grid">
          <label>Candidate
            <select id="interviewCandidateInput">
              ${candidates.map((candidate) => `<option value="${candidate.id}" ${candidate.id === selectedCandidate.id ? "selected" : ""}>${escapeHtml(candidate.name)}</option>`).join("")}
            </select>
          </label>
          <label>Job
            <select id="interviewJobInput">
              ${jobs.map((job) => `<option value="${job.id}" ${job.id === selectedCandidate.jobId ? "selected" : ""}>${escapeHtml(job.title)}</option>`).join("")}
            </select>
          </label>
          <label>Interviewer<input name="interviewer" required value="Mai Nguyen" /></label>
          <label>Interview Round<input name="round" required value="Screening" /></label>
          <label>Date<input name="date" type="date" required value="2026-06-12" /></label>
          <label>Time<input name="time" type="time" required value="10:00" /></label>
          <label>Meeting Type${selectHtml("meetingTypeInput", ["Online", "Offline"], "Online")}</label>
          <label>Meeting Link / Location<input name="location" required value="Google Meet" /></label>
        </div>
        <div class="modal-actions">
          <button class="btn" type="button" data-action="modal-cancel">Cancel</button>
          <button class="btn btn-primary" type="submit"><i data-lucide="save"></i>Save interview</button>
        </div>
      </form>
    `,
    onMount: () => {
      document.getElementById("interviewForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
          id: `int-${String(interviews.length + 1).padStart(3, "0")}`,
          candidateId: document.getElementById("interviewCandidateInput").value,
          jobId: document.getElementById("interviewJobInput").value,
          interviewer: form.get("interviewer").trim(),
          round: form.get("round").trim(),
          date: form.get("date"),
          time: form.get("time"),
          type: document.getElementById("meetingTypeInput").value,
          location: form.get("location").trim(),
          status: "Scheduled",
          feedback: "",
          result: "Pending",
        };
        interviews = [payload, ...interviews];
        showToast("Interview scheduled.");
        closeModal();
        renderApp();
      });
    },
  });
}

function openUserModal(userId) {
  const user = userId ? users.find((item) => item.id === userId) : null;
  showModal({
    eyebrow: "User management",
    title: user ? "Edit role" : "Add user",
    body: `
      <form id="userForm">
        <div class="form-grid">
          <label>Name<input name="name" required value="${escapeHtml(user?.name || "")}" /></label>
          <label>Email<input name="email" type="email" required value="${escapeHtml(user?.email || "")}" /></label>
          <label>Role${selectHtml("roleInput", ["HR Admin", "Hiring Manager", "Interviewer"], user?.role || "Interviewer")}</label>
          <label>Status${selectHtml("statusInput", ["Active", "Invited", "Inactive"], user?.status || "Invited")}</label>
        </div>
        <div class="modal-actions">
          <button class="btn" type="button" data-action="modal-cancel">Cancel</button>
          <button class="btn btn-primary" type="submit"><i data-lucide="save"></i>Save user</button>
        </div>
      </form>
    `,
    onMount: () => {
      document.getElementById("userForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
          name: form.get("name").trim(),
          email: form.get("email").trim(),
          role: document.getElementById("roleInput").value,
          status: document.getElementById("statusInput").value,
        };
        if (user) {
          Object.assign(user, payload);
          showToast("User updated.");
        } else {
          users = [{ id: `user-${String(users.length + 1).padStart(3, "0")}`, ...payload }, ...users];
          showToast("User added.");
        }
        closeModal();
        renderApp();
      });
    },
  });
}

function bindViewEvents() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewTarget));
  });

  document.querySelectorAll("[data-job-row], [data-job-view]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedJobId = element.dataset.jobRow || element.dataset.jobView;
      setView("job-detail");
    });
  });

  document.querySelectorAll("[data-candidate-row], [data-candidate-view]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      state.selectedCandidateId = element.dataset.candidateRow || element.dataset.candidateView;
      setView("candidate-detail");
    });
  });

  document.querySelectorAll("[data-candidate-drawer]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      openCandidateDrawer(element.dataset.candidateDrawer);
    });
  });

  bindFilter("jobSearch", "jobSearch");
  bindFilter("departmentFilter", "department", "change");
  bindFilter("jobStatusFilter", "jobStatus", "change");
  bindFilter("candidateSearch", "candidateSearch");
  bindFilter("candidateJobFilter", "candidateJob", "change");
  bindFilter("candidateStageFilter", "candidateStage", "change");
  bindFilter("candidateSourceFilter", "candidateSource", "change");
  bindFilter("pipelineJobFilter", "pipelineJob", "change");
  bindFilter("pipelineSearch", "pipelineSearch");
  bindFilter("interviewStatusFilter", "interviewStatus", "change");

  document.querySelectorAll("[data-interview-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.interviewMode = button.dataset.interviewMode;
      renderApp();
    });
  });

  document.querySelectorAll("[data-pipeline-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.pipelineView = button.dataset.pipelineMode;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => handleAction(event, element));
  });

  const moveStage = document.getElementById("moveStageSelect");
  if (moveStage) {
    moveStage.addEventListener("change", () => {
      const candidate = getCandidate(state.selectedCandidateId);
      candidate.stage = moveStage.value;
      showToast(`${candidate.name} moved to ${candidate.stage}.`);
      renderApp();
    });
  }

  bindKanbanEvents();
  bindFeedbackEvents();
}

function bindFilter(elementId, filterKey, eventName = "input") {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.addEventListener(eventName, () => {
    state.filters[filterKey] = element.value;
    renderApp();
    requestAnimationFrame(() => {
      const next = document.getElementById(elementId);
      if (next && eventName === "input") {
        next.focus();
        next.setSelectionRange(next.value.length, next.value.length);
      }
    });
  });
}

function handleAction(event, element) {
  const action = element.dataset.action;
  if (action === "modal-cancel") closeModal();
  if (action === "create-job") openJobModal();
  if (action === "edit-job") openJobModal(element.dataset.jobId);
  if (action === "close-job") {
    const job = getJob(element.dataset.jobId);
    job.status = "Closed";
    showToast(`${job.title} closed.`);
    renderApp();
  }
  if (action === "create-candidate") openCandidateModal(null, element.dataset.jobId);
  if (action === "edit-candidate") openCandidateModal(element.dataset.candidateId);
  if (action === "schedule-for-candidate") openInterviewModal(element.dataset.candidateId);
  if (action === "create-interview") openInterviewModal();
  if (action === "add-user") openUserModal();
  if (action === "edit-user") openUserModal(element.dataset.userId);
}

function bindKanbanEvents() {
  let draggedId = null;
  document.querySelectorAll("[data-candidate-card]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      draggedId = card.dataset.candidateCard;
      card.classList.add("is-dragging");
      event.dataTransfer.setData("text/plain", draggedId);
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
    });
    card.addEventListener("click", () => {
      openCandidateDrawer(card.dataset.candidateCard);
    });
  });

  document.querySelectorAll(".kanban-column").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("is-over");
    });
    column.addEventListener("dragleave", () => column.classList.remove("is-over"));
    column.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain") || draggedId;
      const candidate = getCandidate(id);
      if (candidate) {
        candidate.stage = column.dataset.stage;
        showToast(`${candidate.name} moved to ${candidate.stage}.`);
      }
      column.classList.remove("is-over");
      renderApp();
    });
  });
}

function bindFeedbackEvents() {
  document.querySelectorAll("input[type='range']").forEach((range) => {
    range.addEventListener("input", () => {
      const value = document.querySelector(`[data-rating-value="${range.id}"]`);
      if (value) value.textContent = range.value;
    });
  });

  const form = document.getElementById("feedbackForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const scheduled = interviews.find((item) => item.status === "Scheduled") || interviews[0];
    const candidate = getCandidate(scheduled.candidateId);
    const recommendation = document.getElementById("recommendationSelect").value;
    scheduled.status = "Completed";
    scheduled.result = recommendation === "Consider" ? "Pending" : recommendation;
    scheduled.feedback = `Recommendation: ${recommendation}. Feedback submitted from portfolio demo.`;
    if (recommendation === "Pass" && candidate.stage === "Interview") {
      candidate.stage = "Final Interview";
    }
    showToast("Feedback submitted.");
    renderApp();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.getElementById("menuButton").addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
  });

  const profileMenu = document.getElementById("profileMenu");
  const profileDropdown = document.getElementById("profileDropdownMenu");

  if (profileMenu && profileDropdown) {
    profileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("is-open");
      profileDropdown.setAttribute("aria-hidden", profileDropdown.classList.contains("is-open") ? "false" : "true");
    });

    document.addEventListener("click", (e) => {
      if (!profileMenu.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove("is-open");
        profileDropdown.setAttribute("aria-hidden", "true");
      }
    });

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        profileDropdown.classList.remove("is-open");
        showLogin();
      });
    }
  }

  document.getElementById("quickNewCandidate").addEventListener("click", () => openCandidateModal());
  document.getElementById("quickScheduleInterview").addEventListener("click", () => openInterviewModal());

  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    setView("dashboard");
    showToast("Welcome back to HireFlow.");
  });

  globalSearch.addEventListener("input", () => {
    state.search = globalSearch.value;
    renderApp();
  });
  globalSearch.addEventListener("focus", openCommandSearch);

  commandInput.addEventListener("input", () => renderCommandResults(commandInput.value));
  document.getElementById("commandClose").addEventListener("click", closeCommandSearch);
  commandOverlay.addEventListener("click", (event) => {
    if (event.target === commandOverlay) closeCommandSearch();
  });

  document.getElementById("drawerClose").addEventListener("click", closeCandidateDrawer);
  document.getElementById("drawerScrim").addEventListener("click", closeCandidateDrawer);

  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalRoot.addEventListener("click", (event) => {
    if (event.target === modalRoot) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openCommandSearch();
    }
    if (event.key === "Escape" && !commandOverlay.classList.contains("is-hidden")) closeCommandSearch();
    if (event.key === "Escape" && !candidateDrawer.classList.contains("is-hidden")) closeCandidateDrawer();
    if (event.key === "Escape" && !modalRoot.classList.contains("is-hidden")) closeModal();
  });

  const hash = window.location.hash.replace("#", "");
  if (hash === "login") {
    showLogin();
  } else if (hash && pageMeta[hash]) {
    state.view = hash;
    showApp();
    renderApp();
  } else {
    showApp();
    renderApp();
  }
});
