export type Insight = {
  slug: string; title: string; description: string; published: string;
  sections: { heading: string; paragraphs: string[]; checklist?: string[] }[];
  related: { href: string; label: string }[];
};

export const insights: Insight[] = [
  {
    slug: 'dedicated-finance-team-vs-accounting-outsourcing',
    title: 'Dedicated finance team vs accounting outsourcing: who owns the work?',
    description: 'Compare dedicated accounting capacity with a managed finance service using scope, supervision, review, continuity and transition requirements.',
    published: '2026-10-30',
    sections: [
      { heading: 'Start with the accountability you need', paragraphs: [
        'A finance team can be short of capacity, short of process ownership, or both. Those are different problems. Adding people can help a well-defined workflow absorb more work. It does not, by itself, create a close calendar, resolve unclear approvals or make another organisation accountable for an entire function.',
        'Before comparing proposals, write down what you expect to hand over. “Reconcile these accounts using our checklist and send exceptions to our controller” describes capacity within your process. “Run the agreed reconciliation function to a defined timetable and report exceptions” describes a managed service. Neither model removes the need to agree who makes decisions and approves the output.',
      ] },
      { heading: 'When a dedicated team fits', paragraphs: [
        'Dedicated accounting capacity fits when your process is established and someone on your side can assign work, answer questions and review results. You retain control of priorities and procedures. The provider supplies the agreed roles and supports their delivery within the responsibilities set out in the engagement.',
        'This can suit recurring bookkeeping, reconciliation preparation or reporting support where the work can be explained and checked. Assess the management capacity you will need alongside the people you want to add. If your reviewers are already the bottleneck, increasing preparation capacity may simply move the queue downstream.',
      ], checklist: ['Document the recurring tasks and examples of acceptable work.', 'Name the person who assigns priorities and the person who approves outputs.', 'Set a route for unanswered questions and exceptions.', 'Confirm role coverage, onboarding and handover responsibilities.'] },
      { heading: 'When a managed finance service fits', paragraphs: [
        'A managed service fits when you want a provider to own delivery of a defined process. The agreement needs to state the outputs, timetable, review points and reporting obligations. It also needs to describe the inputs you supply and what happens when they are incomplete or late.',
        'For example, an accounts payable scope might cover invoice preparation and exception reporting while payment authorisation remains with your business. A reporting service might prepare an agreed close pack while your finance leadership retains accounting-policy decisions and final sign-off. Accountability is useful only when these boundaries are visible.',
      ] },
      { heading: 'Compare the whole operating cost', paragraphs: [
        'Compare proposals against the same workload, not simply the number of people or the headline monthly fee. Include your review time, process documentation, access setup, training, escalation and continuity arrangements. Ask which items are included and which require a change to scope.',
        'Avoid treating a dedicated role as a guaranteed quantity of completed work without considering complexity, source-data quality and available review. Equally, do not assume a managed fee covers every exception or a permanent increase in volume. Put workload assumptions and a change process into the proposal.',
      ] },
      { heading: 'Use the same questions for both proposals', paragraphs: [
        'Ask each provider to walk through a normal work cycle and an exception. Follow a task from the arrival of source documents to preparation, review, correction and approval. The handoffs often reveal more than a general description of the service.',
      ], checklist: ['What information must we supply, and by when?', 'Who reviews the work before it comes to us?', 'Which decisions and approvals remain with our organisation?', 'How are errors, delays and unresolved questions recorded and escalated?', 'What happens if a team member is unavailable or scope changes?', 'How do we obtain our documentation and remove access when the engagement ends?'] },
      { heading: 'Make the transition a decision checkpoint', paragraphs: [
        'Start with a bounded scope and agreed acceptance criteria. Decide how you will assess completeness, exception handling and the effort your reviewers spend on the output. Review the initial work cycles before increasing scope. A transition should test the proposed operating model, not just whether a person can access the software.',
        'If the initial work shows that procedures are incomplete, resolve those gaps explicitly. You may need process design before additional capacity, or a different balance between client direction and provider ownership. Record the decision and update responsibilities rather than letting the engagement drift into a model neither side priced or planned.',
      ] },
      { heading: 'How this maps to Hexa', paragraphs: [
        'Hexa Support provides capacity that you direct within your process. Hexa Delivery runs an agreed function to service levels. Hexa Centre brings several functions under dedicated leadership and governance. Use the service and operating-model pages below to scope a conversation around the work you need done.',
        'The right choice depends on your workload, management capacity and required controls. Confirm legal, regulatory and professional sign-off responsibilities with the relevant advisers; this guide is an operating-model comparison, not jurisdiction-specific professional advice.',
      ] },
    ],
    related: [{ href: '/offshore-accounting-teams', label: 'Dedicated offshore accounting teams' }, { href: '/finance', label: 'Finance shared services' }, { href: '/support', label: 'Hexa Support' }, { href: '/delivery', label: 'Hexa Delivery' }],
  },
  {
    slug: 'outsourcing-month-end-close-controls',
    title: 'Outsourcing month-end close: a checklist for controls and handoffs',
    description: 'Plan a month-end close handover with a clear calendar, reconciliation ownership, review evidence, exception handling and agreed service measures.',
    published: '2026-10-30',
    sections: [
      { heading: 'Define what close support includes', paragraphs: [
        'Month-end close is a chain of dependent tasks. A reconciliation may wait for a bank feed; a journal may need an approved calculation; consolidation may depend on entity submissions. Moving preparation work to another team will not remove those dependencies. A useful handover makes them explicit.',
        'Begin with a task inventory rather than a promise to close faster. Record what is prepared, the source information, the owner, the reviewer and the approval required before an item is complete. Separate routine preparation from accounting judgement and final sign-off. Agree which responsibilities remain with your finance leadership.',
      ] },
      { heading: 'Build a calendar around inputs and approvals', paragraphs: [
        'For each task, record when its inputs become available and when its output is needed by the next person. Include the time needed for review and correction. Agree how late source information affects the timetable, who can approve a change and how affected stakeholders will be told.',
        'Define completion in terms of usable output. “File uploaded” may not mean “reconciliation reviewed and exceptions assigned.” If preparation and review are measured separately, make the boundary clear so an apparently completed task does not hide an unresolved dependency.',
      ], checklist: ['Name an owner for every source input and close task.', 'Include reviewer availability and approval deadlines.', 'Identify dependencies between entities and workstreams.', 'Define escalation for missing inputs and blocked tasks.', 'Keep a dated record of material calendar changes.'] },
      { heading: 'Preserve reconciliation and journal controls', paragraphs: [
        'For reconciliations, agree the account population, source documents, supporting evidence and treatment of unresolved items. Decide who investigates a difference and who can approve its disposition. A completed checklist should point to evidence that a reviewer can inspect.',
        'For journals, distinguish preparation, approval and posting permissions. Do not grant a wider role simply to avoid a handoff. Discuss access and segregation of duties with your control owners, and document how exceptions are handled when the normal approver is unavailable. The appropriate controls depend on your organisation and systems.',
      ] },
      { heading: 'Keep exceptions visible', paragraphs: [
        'Use a shared exception log that records the issue, affected account or deliverable, owner, next action and target decision date. The log should show what remains unresolved at sign-off and who has accepted that position. Avoid hiding open items in email threads or treating a sent query as a resolved issue.',
        'Agree which exceptions require immediate escalation and which can be handled through the normal review cadence. Specify the decision-maker as well as the escalation channel. A provider can prepare information and propose an action, but cannot take a retained management decision simply because a deadline is approaching.',
      ] },
      { heading: 'Choose measures that reveal the handoffs', paragraphs: [
        'Use your existing close baseline to choose service measures. Depending on the scope, these may include delivery against agreed task deadlines, review rework, unresolved reconciliation items and the age of outstanding exceptions. Define the denominator and completion rule for each measure before comparing periods.',
        'Review timeliness alongside quality and retained review effort. A shorter preparation cycle is not an improvement if it creates more corrections or leaves your controller with a larger unresolved backlog. Separate delays caused by missing client inputs from provider delivery issues while still reporting the overall close outcome.',
      ] },
      { heading: 'Test the handover before widening scope', paragraphs: [
        'Select a bounded group of tasks and agree acceptance criteria. Run through source access, preparation, review and exception escalation using the planned roles. Confirm that your reviewers can find the supporting evidence and that the next person in the process can use the output.',
        'At the review checkpoint, record the gaps, owner and corrective action. Extend scope when the process is understood and the responsibilities are workable. Do not assume that a successful routine cycle also proves readiness for year-end, a new entity or a major system change; plan those transitions separately.',
      ], checklist: ['Is the supporting evidence accessible to the reviewer?', 'Are preparation and approval responsibilities clear?', 'Can an exception reach an authorised decision-maker?', 'Does the calendar allow review and correction?', 'Are access removal, documentation return and continuity covered?'] },
      { heading: 'Discuss the operating model, not just the deadline', paragraphs: [
        'Dedicated close support can work within your existing process when you retain direction and review. A managed record-to-report service needs a broader scope and service-level agreement. A multi-entity finance centre adds leadership and governance across workstreams. Choose the model around the accountability you want to delegate.',
        'Hexa’s finance services include bookkeeping, reconciliations, close and reporting preparation. Use the links below to compare the engagement models and discuss your task inventory. This guide is a planning aid; it does not prescribe an accounting policy, audit conclusion or regulatory control standard.',
      ] },
    ],
    related: [{ href: '/finance', label: 'Finance and accounting shared services' }, { href: '/delivery', label: 'Managed service with Hexa Delivery' }, { href: '/centre', label: 'A dedicated finance capability centre' }, { href: '/security', label: 'Security and data controls' }],
  },
];
