---
title: "Sample post: formatting reference"
description: A template that shows every formatting element the blog supports. Copy it to _posts/ to start a new article.
series: Best Practices
tags: [Apex, Template]
date: 2026-10-16
---

This is a **draft**. Files in `_drafts/` are not published. To publish an article, save it in `_posts/` with a name like `2026-10-16-my-article.md`.

## Headings structure the article

Use `##` for sections and `###` for subsections. Keep paragraphs short. Readers skim before they commit to reading.

### Lists

- Unordered items use `-`
- Like this one
  - And can be nested

1. Ordered items use numbers
2. Like this

## Code

Inline code looks like `Database.update(records, false)`. Blocks get syntax highlighting:

```apex
public with sharing class AccountService {
    public static void markInactive(Set<Id> accountIds) {
        List<Account> accounts = [
            SELECT Id, Active__c FROM Account WHERE Id IN :accountIds
        ];
        for (Account acc : accounts) {
            acc.Active__c = false;
        }
        update accounts; // one DML for the whole set
    }
}
```

```javascript
import { LightningElement, api } from 'lwc';

export default class Greeting extends LightningElement {
    @api name = 'World';
}
```

## Quotes and callouts

> A blockquote is good for a key takeaway or a quote from someone else.

<p class="callout"><strong>Tip:</strong> a callout highlights a note, a warning or a rule of thumb.</p>

## Tables

| Sharing tool       | Use when                          |
| ------------------ | --------------------------------- |
| OWD                | Setting the most restrictive base |
| Role hierarchy     | Managers need their team's data   |
| Sharing rules      | Exceptions by criteria or owner   |

## Images

Put images in `assets/images/` and reference them like this:

`![Alt text describing the image](/assets/images/my-diagram.png)`

---

That's it. Write in Markdown, commit, and GitHub Pages builds the site.
