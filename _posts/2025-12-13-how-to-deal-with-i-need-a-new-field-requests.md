---
title: "How to Deal with “I Need a New Field” Requests"
description: "5 strategies to understand vague asks, uncover real needs, and define meaningful business requirements."
tags: ["Business Analysis", "Administration", "Architecture", "Development"]
date: 2025-12-13 20:59:03 -0300
cover: /assets/images/posts/how-to-deal-with-i-need-a-new-field-requests.jpg
cover_caption: "Photo by <a href=\"https://unsplash.com/@sajadnori?utm_source=medium&amp;utm_medium=referral\">Sajad Nori</a> on <a href=\"https://unsplash.com?utm_source=medium&amp;utm_medium=referral\">Unsplash</a>"
medium_url: https://medium.com/@diogoramos-dev/how-to-deal-with-i-need-a-new-field-requests-a6110f8f7bdf
---

A user sends you a message: “We need a new field for XYZ.”

If you have worked with Salesforce for a while, it is very likely you already received this kind of request. If you did not, I am sure you will receive one someday.

And this is not exclusive to the Salesforce industry, users tend to think that adding fields is:

**Easy**

“It’s just one field, you don’t have to do anything else!”

**Fast**

“Can you do it quickly before the meeting with the client?”

**Simple**

“It is just a text field, no validations needed.”

That is understandable, users should not really know how the system works, and how complex creating a new field can be. This is our job.

That is why it is so important to know what to do when you receive such requests.

Having strategies to handle these situations will help you avoid unnecessary customizations and will also turn you into a better professional, a professional who really understands the users and knows how to uncover their real needs.

These are five strategies you can use to turn vague asks into solid solutions.

## 1. Ask the 5 Whys

The 5 Whys technique is a method used for uncovering the root cause of a defect or problem by asking ‘why’ five times. The idea is that each iteration reveals a new layer of the problem being analyzed and layer by layer, you reach the root cause. The number of iterations does not need to be exactly five, it can be less or more. The important thing here is to identify the source of the problem.

Although it was originally used for understanding the origin of a problem, this technique can also be used as a tool for refining a requirement. And, if we agree that almost every requirement is the attempt to solve a user problem, then, we can say that this is what we are doing when refining a requirement.

In Salesforce projects, “I need a new field” is rarely about the field itself. It is often a symptom of something deeper, a gap in process, visibility, or communication.

The 5 Whys helps us to identify the real pain, the real problem the user is facing. Sometimes, creating a field can seem like the solution for a user but will adding the field really solve the issue? Only by having full clarity of the problem can we define whether this is the best solution or not.

Examples of the 5 Whys technique:

**Example 1: The “Add a Checkbox” Request**

User says: “We need a checkbox for ‘Client Contacted’.”

Why 1: Why do you need that checkbox?

→ “To know if someone has contacted the client.”

Why 2: Why do you need to know that?

→ “Because sometimes clients are contacted twice by different reps.”

Why 3: Why are reps contacting clients twice?

→ “Because they don’t see updates in the system.”

Why 4: Why don’t they see updates?

→ “Because notes are saved in different fields and objects.”

Why 5: Why are notes spread across objects?

→ “Because there’s no standard place to log client interactions.”

→ Root cause: The issue isn’t a missing checkbox, but a lack of a consistent client interaction process or centralized logging system.

**Example 2: The “Add a Field to the Form” Request**

User says: “Can you add a field for ‘Region’ on the Account form?”

Why 1: Why do you need a region field?

→ “Because we want to assign accounts based on region.”

Why 2: Why do you need to assign accounts by region?

→ “Because regional managers want to see only their accounts.”

Why 3: Why can’t they filter their accounts today?

→ “Because the territory settings are outdated.”

Why 4: Why are the territory settings outdated?

→ “Because the territory model hasn’t been updated since last year.”

Why 5: Why hasn’t it been updated?

→ “Because no one owns that process.”

→ Root cause: The problem isn’t a missing field but a lack of ownership over territory management.

Sure, the applicability of this technique will depend on your context and scenario, but I find it very useful for these new field requests as it can dig layer by layer until you uncover that the issue isn’t necessarily a missing field, it may be a process that is not being followed, a validation that is wrong or bad data that is not being cleaned.

The 5 Whys is a simple, but powerful technique. Do not underestimate its capacity and use it for the health of your Org.

## 2. Map the User Journey

Many times, when a field is “needed”, there is a problem in the current process. Maybe a step is not being fully followed, a stage is completely missed, or the process is outdated.

That is why you need to map the User Journey. The User Journey is the sequence of stages of a process. You must identify who works in each phase, what actions each persona takes in that phase, and what moves from one step to the next.

With this complete journey on your hands, you can then analyze:

- Is this process being followed?

- Are we missing something from the process?
- What is working and what is not in the current process?

After answering the above questions, you start to define the to-be version of the process. The enhanced version without bottlenecks and improved efficiency. See, I did not mention “new version with the new field”.

The new version can obviously introduce one or more new fields, sometimes even new objects. But by doing a full scan of the current process and comparing it with the to-be version, we are capable of providing a real solution.

Examples of User Journey Maps:

**Example 1: Opportunity Follow-Up Process**

Initial request: “I need a new field to indicate if the customer was contacted after the demo.”

User Journey (as-is):

Sales Rep

- Conducts product demo
- Manually follows up with the customer
- Updates notes in different places (Activity, Notes, Chatter)

Sales Manager

- Reviews Opportunities weekly
- Tries to understand which deals are stalled and why

Pain points identified:

- Follow-ups are not consistently logged in the same place
- Managers cannot easily see if a follow-up happened or not
- Sales reps are unsure what exactly should be updated after a demo

Insight after mapping the journey:  
The problem is not the lack of a “Follow-Up Done” field, but the absence of a clear post-demo step in the sales process and a standard way to register follow-up activities.

**Example 2: Account Onboarding Process**

Initial request: “We need a new field to track onboarding status.”

User Journey (as-is):

Sales Rep

- Marks the Opportunity as Closed Won
- Sends an email to the onboarding team

Onboarding Specialist

- Receives information via email
- Starts onboarding tasks manually

Operations Manager

- Tries to understand which customers are already onboarded

Pain points identified:

- No clear transition between Sales and Onboarding
- Onboarding progress is tracked outside Salesforce
- Different people have different definitions of “onboarded”

Insight after mapping the journey:  
The request for an “Onboarding Status” field reveals a missing onboarding process in Salesforce. The real need is a defined onboarding flow with stages and ownership, not just a single status field.

When you map the full user journey, you often realize that the request for a new field is just a symptom. The real problem usually lives in the process, not in the data model.

## 3. Define the Outcome, Not the Task

When users ask for a new field, they are usually proposing a task, not describing the outcome they are trying to achieve. As professionals responsible for designing solutions, our job is to pause and ask a simple but powerful question: What does success look like if this field existed?

By focusing on the desired outcome, you shift the conversation away from implementation details and toward business value. Instead of discussing what to build, you start discussing what should change in the process, in decision-making, or in visibility once the problem is solved.

This approach helps avoid building fields that technically fulfill a request but fail to deliver real value. A field only makes sense if it enables a clear result, such as better reporting, clearer ownership, faster decisions, or reduced errors.

Examples of defining the outcome:

**Example 1:**

Initial request: “I need a new field to indicate if legal has reviewed this Opportunity.”

Outcome-driven questions:

- What problem happens today if legal does not review the Opportunity
- What decision depends on knowing that legal approval happened?
- At what point in the process does this information matter?

Defined outcome:  
The business wants to prevent Opportunities from being closed without legal review and ensure legal is involved before final negotiations.

Insight:  
The real outcome is risk prevention, not data capture. The solution may involve an approval process, stage-based validations, or entry criteria that enforce legal review. A field might be part of the solution, but it is not the core requirement.

**Example 2:**

Initial request: “We need a field to track why an Opportunity is stuck.”

Outcome-driven questions:

- What does “stuck” mean in this context?
- What action should be taken once the reason is known?
- Who is responsible for unblocking the Opportunity?

Defined outcome:  
Sales leadership wants to proactively identify stalled deals and take action to move them forward or close them as lost.

Insight:  
The outcome is pipeline health and actionable visibility. The solution could involve stage aging, alerts, reports, or process guidance. A single free-text field explaining why something is stuck does not guarantee action or improvement.

By defining the outcome first, you ensure that every configuration decision is intentional and aligned with business goals. This mindset keeps your Org cleaner, your solutions more effective, and your stakeholders focused on results rather than tasks.

## 4. Cross-Check Existing Fields

Before creating anything new, take a step back and explore what already exists in the Org. Very often, a request for a new field comes from a lack of awareness, inconsistent naming, or data being stored in a place the user does not usually look at.

Salesforce Orgs evolve over time. Fields get created by different teams, consultants, or partners, sometimes to solve similar problems. As a result, the same concept may already exist, just under a different label, object, or context. Creating yet another field for the same purpose only increases redundancy and makes the data model harder to understand and maintain.

Cross-checking existing fields helps keep the Org clean and consistent. It reduces duplicate data, avoids conflicting sources of truth, and prevents future confusion for users, admins, and developers. This step is especially important before agreeing to a new requirement, because once a field is created and populated, it becomes much harder to remove.

This strategy also creates an opportunity to revisit naming conventions, field descriptions, and page layouts. Sometimes the right solution is not a new field, but making an existing one more visible, better labeled, or better explained.

Examples of cross-checking existing fields:

**Example 1**

Initial request: “We need a new field to store the customer’s industry details.”

What is discovered during the review:  
An Industry field already exists on Account, but users are not using it consistently because the values are too generic and the field is hidden on the page layout.

Insight:  
The problem is not the absence of a field, but poor visibility and usability of an existing one. Updating picklist values and improving the page layout solves the issue without adding new data.

**Example 2**

Initial request: “Can we add a field to track the contract start date?”

What is discovered during the review:  
The Contract object already contains a Start Date field, but the team is working mostly from the Opportunity and is unaware of it.

Insight:  
Instead of duplicating the field on Opportunity, the solution may involve better training, related lists, or automation to surface the existing data where it is needed.

Cross-checking existing fields is a simple step, but it has a big impact. It reinforces data integrity, reduces technical debt, and ensures that new configurations are intentional rather than reactive.

## 5. Prototype the Story

Before implementing any change in production, it is often worth slowing down and visualizing the solution. Instead of immediately building the requested field, create a simple prototype in a sandbox or represent the idea using diagrams, screenshots, or flow sketches.

Prototyping shifts the conversation from abstract descriptions to something concrete. When users see how the change would look and behave in the system, misunderstandings surface quickly. What sounded correct in words may feel wrong or incomplete once visualized.

This approach is especially effective for vague requests, because it allows both sides to validate assumptions early. It helps confirm whether the proposed solution actually supports the desired outcome or if adjustments are needed before any real implementation effort begins.

Prototyping also creates a safe space for experimentation. Since nothing is final, users feel more comfortable giving feedback, changing their minds, or realizing that the original request does not fully address their problem.

Examples of prototyping the story:

**Example 1**

Initial request: “I need a new field to capture customer risk.”

Prototype approach:  
A sandbox prototype is created showing the new field on the page layout, along with sample values and a simple report that uses the field.

What is revealed:  
During the review, stakeholders realize that “risk” means different things to different teams. Some associate it with financial risk, others with churn risk or compliance risk.

Insight:  
The prototype exposes ambiguity in the requirement. The real need is to define what type of risk is being tracked before deciding whether a single field, multiple fields, or a different solution is required.

**Example 2**

Initial request: “Can we add a field to capture the reason why this record was updated?”

Prototype approach:  
A sandbox prototype is created with the new field added to the page layout and marked as required on save.

What is revealed:  
When users try the prototype, they realize that the record is updated frequently by automations, integrations, and background jobs, not only by humans. Requiring the field breaks automations and creates friction in daily work.

Insight:  
The prototype reveals that the request does not consider how the system actually behaves. The real need may be auditability or change tracking, which could be better addressed with field history tracking, reports, or platform features rather than a manual field.

Prototyping the story helps transform assumptions into conversations, ensuring that what gets built is aligned with a shared understanding of the real problem and the desired outcome.

## Conclusion

If you are an experienced professional, you know that creating a new field is not always easy, fast, and simple. Fields can have different types, specific rules and you may want to make a field accessible for specific users and available in some pages, but not in others. Fields can be classified, tracked, and encrypted. A field can be made available for external systems, it can be required or dependent on another value. It can trigger automations or be part of an existing validation rule.

What if your Org reaches the limit of custom fields for an Object? Now, before adding the new field, you will have to delete a field, which will involve analyzing which fields are not being used and can be removed.

And in the end, all of this work would be insufficient if the field was not really needed. Sometimes the field already exists, but it has a different name. Sometimes it exists, but it was not in the layout or the user didn’t have access to it.

So, do not fall into the trap of wanting to show off for your users. Do not try to be seen as the fastest to tackle a task, but prefer to be seen as the smartest one, who can find solutions where no one else can.

Take your time to investigate, understand the user needs first, then analyze your Org, only then you are free to create the field.

## Summary

**1. Ask the 5 Whys  
**Go beyond the initial request. Ask “why” multiple times until you reach the real reason behind the need. Most “field requests” are symptoms, not root causes.

**2. Map the User Journey  
**Understand where in the process this data fits. Is it used for reporting, automation, validation, or decision-making? Mapping the flow reveals hidden dependencies.

**3. Define the Outcome, Not the Task  
**Ask what success looks like if the field existed. This shifts the focus from what to build to what result it should enable.

**4. Cross-Check Existing Fields  
**Before creating anything, explore if a similar field already exists, maybe with a different label or object. This step avoids redundancy, keeps data clean, and prevents confusion for other users and admins.

**5.Prototype the Story  
**Instead of immediately building, mock up the change in a sandbox or diagram and review it with the requester. Visual feedback often reveals misunderstandings and helps everyone align on the real requirement before implementation.
