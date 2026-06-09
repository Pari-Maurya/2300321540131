# Notification System Assessment

## Overview

This project implements a notification management system consisting of:

- Custom Logging Middleware
- Backend Notification Service
- Frontend Notification Dashboard
- Notification Prioritization Engine

The system fetches notifications from the evaluation service, prioritizes them based on predefined rules, and displays them through a user-friendly interface.

---

## Repository Structure

```text
.
├── logging-middleware
│   ├── src
│   ├── package.json
│   └── README.md
│
├── notification-app-be
│   ├── src
│   │   ├── services
│   │   └── utils
│   ├── package.json
│   └── .env
│
├── notification-app-fe
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── utils
│   ├── package.json
│   └── .env
│
├── Notification_System_Design.md
└── README.md
```

---

# Logging Middleware

## Objective

A reusable logging package that sends application logs to the evaluation service.

### Features

- Input validation
- Supports frontend and backend logging
- Remote log submission
- Error handling
- Reusable implementation

### Usage

```javascript
await Log(
  "backend",
  "info",
  "service",
  "Notification fetched successfully"
);
```

### Supported Stacks

- backend
- frontend

### Supported Levels

- debug
- info
- warn
- error
- fatal

---

# Backend Application

## Objective

Fetch notifications from the evaluation API and prioritize them according to business rules.

### Technologies Used

- Node.js
- JavaScript
- Axios
- dotenv

### Features

- Secure token-based authentication
- Notification retrieval
- Priority calculation
- Sorting and ranking
- Top-N notification generation

### Run Backend

Install dependencies:

```bash
npm install
```

Create `.env`

```env
ACCESS_TOKEN=your_access_token
```

Start:

```bash
node src/index.js
```

---

# Frontend Application

## Objective

Display notifications and allow users to view prioritized notifications.

### Technologies Used

- React
- Vite
- Material UI
- Axios
- React Router

### Features

#### All Notifications Page

- Display all notifications
- Filter by type
- Mark notifications as viewed
- Responsive design

Supported Types:

- Placement
- Result
- Event

#### Priority Notifications Page

- Top N selection
- Priority-based ranking
- Dynamic updates

### Run Frontend

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_ACCESS_TOKEN=your_access_token
```

Start:

```bash
npm run dev
```

---

# Notification Prioritization

Notifications are ranked using the following order:

| Priority | Type |
|----------|------|
| 1 | Placement |
| 2 | Result |
| 3 | Event |

For notifications of the same type, newer notifications receive higher priority.

### Scoring Formula

```text
score = (typeWeight × constant) + timestamp
```

Weights:

```text
Placement = 3
Result = 2
Event = 1
```

---

# Scalability Considerations

Current implementation:

```text
O(n log n)
```

using sorting.

For larger datasets, a Min Heap approach can be used:

```text
O(n log k)
```

where `k` is the number of required top notifications.

---

# Error Handling

Implemented error handling for:

- Invalid authentication token
- API failures
- Empty responses
- Invalid logging parameters
- Network failures

---

# Assumptions

- Evaluation service remains available.
- Notifications contain valid timestamps.
- Authentication token is provided through environment variables.
- Notification types are limited to Placement, Result, and Event.

---

# Future Enhancements

- Real-time notification updates
- WebSocket integration
- User authentication
- Persistent notification history
- Notification preferences
- Advanced filtering and search

---

## Author

Submitted as part of the Full Stack Notification System Assessment.
