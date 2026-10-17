---
title: "10 Best Practices for Salesforce Sharing"
description: "How to design a sharing architecture that keeps your org secure, compliant and fast as it grows."
series: "Best Practices"
tags: ["Architecture", "Sharing & Visibility"]
date: 2025-09-07 21:15:57 -0300
cover: /assets/images/posts/10-best-practices-for-salesforce-sharing.jpg
cover_alt: "It features a central, rounded square shape, which has a cloud icon inside, similar to the Salesforce logo. From this central hub, several lines branch out, connecting it to smaller nodes arranged in a circular pattern. These nodes contain simple icons representing data: a stack of files, a database cylinder, and a cloud. The overall image represents a digital network with a focus on organized data access and security."
medium_url: https://medium.com/@diogoramos-dev/10-best-practices-for-salesforce-sharing-2121e5211c72
---

Many things are simple in Salesforce. You create objects, configure fields, customize an entire app, add some validation rules, and even automate processes with Flows. But as your applications grow more complex, you’ll encounter a crucial layer that requires careful setup to ensure your Salesforce org is secure, compliant, and avoids unnecessary risks to the business: **the sharing architecture**.

The sharing architecture of your org defines which records users will be able to view and edit. When you create a custom object, Salesforce automatically assigns a default OWD to it (which I think is wrong; the OWD configuration should be part of the object creation screen). This hides the complexity of the decision and makes people accept whatever default OWD is assigned as if it were correct.

If you are an experienced Salesforce architect, you know that when creating an object, at the very least you need to consider whether it requires changes to its OWD and/or a sharing rule. The more complex the business, the higher the chance that sticking to the default for all objects is not the right approach.

There are many sharing mechanisms: OWD, Sharing Rules, Roles and Role Hierarchy, and more. Understanding when to use each one and how to configure them is essential.

Here are the 10 best practices for configuring Sharing in Salesforce.

## 1. Define Your Security Principle

The principle of least privilege is a classic in information security stating that a user should only have access to the data necessary to perform their role. Recently, while reading a [Salesforce document](https://architect.salesforce.com/well-architected/trusted/secure#Sharing_and_Visibility), I came across a new recommendation. Instead of using the principle of least privilege, they suggest that for internal users, you follow what I call the principle of base privilege. In this principle, the internal user has read access to all objects that do not contain sensitive information. Although Salesforce does not explain why they recommend this, I believe it relates to performance. It makes sense when we consider that objects with sensitive information would remain protected.

Whichever principle you or your company choose to follow, the important thing is to stick with it. Don’t let your org turn into a mess. Keep consistency and let the principle serve as the foundation for your sharing mechanisms.

## 2. Design for Compliance & Data Privacy

If you work in a company or for a client in a regulated industry such as finance or healthcare, it’s extremely important to pay attention to industry regulations. Research the applicable data laws. Talk to your stakeholders about the subject. Finally, identify which objects and fields need to be private.

Don’t be misled by defaults and don’t assume the current sharing model is correct. Ask specifically about it. Reevaluate existing mechanisms and verify whether any are out of compliance.

When it comes to compliance and data privacy, it’s always better to be proactive.

## 3. Understand How Sharing Works in the Backend

One of the most important things that can set you apart from other professionals is understanding how things work behind the scenes. You don’t need to be an expert, but having knowledge of the architecture behind sharing mechanisms will help you make better decisions, understand why a user does or doesn’t have access, and evaluate performance problems related to sharing.

In this [link](https://developer.salesforce.com/docs/atlas.en-us.salesforce_record_access_under_the_hood.meta/salesforce_record_access_under_the_hood/uth_preface.htm), Salesforce explains in detail how sharing works under the hood. I recommend reading it. It will be eye-opening and will change the way you look at a simple sharing rule from now on.

## 4. Avoid Redundant Rules

If you read the article I suggested in number 3, you probably realized that each sharing mechanism adds an extra processing layer in Salesforce. The more mechanisms to evaluate, the more calculations need to be made, and as a result, performance is affected.

When designing a sharing architecture, prioritize the mechanisms that are more general, meaning those that cover more groups with a single configuration.

Also, make sure you don’t create unnecessary sharing rules. Sometimes, an implicit sharing mechanism is already providing access to those records. Evaluate each rule carefully and only create it if it is truly needed.

## 5. Document Your Decisions

Documentation. Some love it. Others hate it. The truth is it has pros and cons.

It can be outdated. It can be boring and tedious to read.

But it can also be valuable, containing useful information for anyone who needs it.

I believe the problem is not documentation itself, but the lack of processes to create it with standards, store it in a place where everyone can find it, review it periodically, and so on. But that’s a topic for another article.

Here, I just want to say that documentation should be viewed positively. You need a central place for recording decisions related to sharing architecture. You need a place to check how certain access is being granted. You need to understand why certain sharing rules were created.

The format of the documentation will depend on your company. But if you don’t have documentation, good luck wasting hours digging through metadata to find that information.

## 6. Adopt a Naming Convention

Naming things is never easy; a name has the important role of summarizing a component’s purpose in just a few words. That’s why adopting a naming convention will help you not only name new mechanisms but also understand existing ones.

With a good naming convention, you avoid constantly consulting documentation and can often understand rules just by their names.

## 7. Reevaluate Your Sharing Architecture Regularly

Projects change, companies change, requirements change too. It’s important to reassess whether your sharing architecture still makes sense.

I’ve seen cases where a client kept creating the same sharing rules for each new partner just because that’s how they started. But after a while, they had so many partners that it no longer made sense to create those rules manually, especially since they could replace them with sharing sets.

In short, don’t let your sharing architecture grow disorderly. Monitor new mechanisms created by other teams and developers to ensure alignment with the overall strategy. And whenever you notice things aren’t scaling well, make or suggest the necessary changes.

Regulations and laws can also change. I know it’s hard to keep track of every legal update that may affect your client, but doing so will make you stand out. Again, you don’t need to be an expert, you will still need to confirm with stakeholders who have the expertise, but you can be proactive and ask if a certain law applies to a particular use case. And keep in mind, it’s much better to make changes with time to plan than to have to rush because an audit found compliance issues in your implementation.

## 8. Plan for Scalability

If your org has large data volumes, you need to be cautious whenever making changes to sharing mechanisms. Remember, changes to these mechanisms can trigger a recalculation process, and if many records are impacted, this recalculation can take a long time.

It is recommended that before making changes that affect many records, you test them in a Full Sandbox. Make the change and verify whether there was any impact.

There are other things you can do, such as deferring sharing calculation, but still, testing in a sandbox is always the ideal approach.

## 9. Limit Apex Managed Sharing

One of the available sharing mechanisms is Apex Managed Sharing, where records are shared via Apex code.

As powerful and flexible as it is, it has downsides: it adds complexity, makes it difficult to debug and review access issues, complicates compliance checks, increases maintenance overhead, and can create serious performance problems at scale.

That’s why it should be avoided and only used if all other available mechanisms do not meet business needs.

## 10. Minimize Manual Sharing

Manual sharing can be extremely convenient, but it should never become part of a process.

Besides being unscalable, manual sharing, like Apex Managed Sharing, is difficult to debug and audit, and it can seriously impact performance if many records are shared using this mechanism.

Another problem with manual sharing is that it does not follow rule changes. Declarative mechanisms always recalculate sharing when updated, ensuring only users who should have access according to new requirements will have it. Manual sharing, however, will remain unchanged unless manually updated, which could result in incorrectly granting access to users who shouldn’t have it.

Therefore, minimize the use of manual sharing and reserve it only for exceptional cases.

## Conclusion

Sharing architecture may seem complicated, and it truly is. But if you don’t manage it, it can grow disorderly, turn into a pile of rules that nobody understands, and eventually become such a maintenance nightmare that you’d rather pretend your Wi-Fi is down just to avoid working on it.

By applying these best practices, you’re not just preventing problems but also building a foundation of control and confidence. You’ll know exactly how and why access is granted, ensuring your org is secure, compliant, and performs reliably at scale.

Ultimately, these practices let you stop fighting fires and reacting to issues, and instead start designing and building a robust, clean, and secure system from the start.
