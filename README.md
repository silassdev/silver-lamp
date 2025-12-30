# 🛡️ GitBattle

GitBattle is a modern, full-stack web application that allows developers to compare GitHub profiles using a weighted scoring algorithm. It delivers real-time insights into developer activity, visual comparisons, and a global leaderboard that highlights top-performing profiles within the community.

The project is designed to demonstrate production-grade architecture, secure authentication flows, and scalable data handling using modern web technologies.

---

## Features

### Real-Time GitHub Statistics

Fetches live data such as stars, followers, and public repositories using the GitHub API via the Octokit SDK.

### Weighted Scoring Algorithm

Calculates a unified **DevScore** that reflects both activity and community impact rather than relying on a single metric.

### Interactive Data Visualization

Profile comparisons are displayed using radar charts, enabling quick and intuitive analysis of strengths across multiple metrics.

### Global Leaderboard

Battle results are persisted in MongoDB Atlas using atomic upsert logic, ensuring accurate and race-condition-safe updates.

### Multi-Provider Authentication

Supports secure authentication with GitHub and Google using Auth.js (v5), following modern OAuth and OpenID Connect standards.

### Server-Side Business Logic

Uses Next.js Server Actions to handle sensitive operations securely while maintaining excellent performance and developer experience.

---

## Tech Stack

| Category           | Technology              |
| ------------------ | ----------------------- |
| Framework          | Next.js 15 (App Router) |
| Language           | TypeScript              |
| Styling            | Tailwind CSS, shadcn/ui |
| Database           | MongoDB Atlas           |
| ORM                | Mongoose                |
| Authentication     | Auth.js (v5)            |
| Data Visualization | Recharts                |

---

## Architecture

GitBattle follows a **Backend-for-Frontend (BFF)** architecture.

The client interacts exclusively with server-side logic through encrypted Server Actions. These actions handle all communication with external APIs and the database, ensuring:

* Improved security by keeping secrets server-only
* Reduced client complexity
* Better performance through controlled data fetching and caching

---

## Scoring Logic

To ensure fair and transparent comparisons, GitBattle computes a developer’s score using a weighted formula:

```
Score = (Stars × 10) + (Followers × 5) + (Public Repositories × 2)
```

This approach balances popularity, community trust, and development activity.

---

## Developer Principles and Best Practices

GitBattle was built with a strong focus on professional engineering standards:

* **Type Safety**
  Full TypeScript coverage across models, components, and server logic.

* **Security**
  All credentials and API tokens are handled strictly on the server. Authentication follows current OAuth and OpenID Connect best practices.

* **Performance**
  Optimized database access using Mongoose connection pooling and Next.js caching strategies.

* **User Experience**
  Fully responsive interface with accessible UI components, meaningful loading states, and clear data presentation.

---

## License

This project is released under the MIT License.
You are free to use, modify, and distribute it in accordance with the license terms.

---

If you want, I can also:

* Add a **Contributing** section
* Write a **Roadmap** section
* Optimize this README for GitHub SEO
* Tailor it for recruiters or portfolio presentation
