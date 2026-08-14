# FlowChain

### Industrial Operations & Supply Chain Intelligence Platform

🌐 **Live Demo:** [https://danalhazmi.github.io/FlowChain-Industrial-Operations-Supply-Chain-Intelligence/](https://danalhazmi.github.io/FlowChain-Industrial-Operations-Supply-Chain-Intelligence/)

> **Connect the operation. Understand the data. Enable the decision.**

FlowChain is a connected **Industrial Operations & Supply Chain Intelligence platform** designed to demonstrate how operational data, workflows, access governance, and analytics can work together within a single ecosystem.

Instead of treating assets, suppliers, requests, users, permissions, and analytics as isolated components, FlowChain connects them into a unified operational concept that supports **operational visibility, workflow management, access governance, and data-driven decision-making**.


## 🚀 Project Overview

In industrial environments, operational information is distributed across multiple areas such as:

- Assets
- Suppliers
- Maintenance
- Operational Requests
- Telemetry
- User Identity
- Access Permissions
- Performance Data
- Analytics

When these elements operate separately, understanding the complete operational picture becomes more difficult.

**FlowChain addresses this concept by connecting these layers into one system.**

The platform follows the movement of information through:

**User → Access → Operations → Workflow → Data → Analytics → Decision**

The project was designed as a **Connected Operational System**, rather than a traditional website consisting of independent pages.

---

## 🎯 Project Vision

FlowChain was built around one core question:

> **What if the problem is not a lack of data, but the fact that data, operations, and decisions are disconnected?**

The goal was to create an operational concept that demonstrates how different organizational processes can interact within the same ecosystem.

FlowChain connects:

- Users
- Access Governance
- Assets
- Suppliers
- Operational Requests
- Workflows
- Operational Data
- Analytics
- Decision Intelligence

This creates a connected flow from the point where a user enters the system to the point where operational data is transformed into actionable insights.

---

## ✨ Key Features

| FeatureDescription           |                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 🔐 Access Governance         | Every new account goes through an Access Request → Pending → Approve/Reject workflow before gaining access. |
| 🧭 Role-Based Access Control | Standard Users and Administrators get different views and permissions across the platform.                  |
| ⚙️ Asset Intelligence        | Real-time monitoring of industrial assets, telemetry, alerts, and maintenance schedules.                    |
| 🤝 Supplier Intelligence     | Tracks supplier performance, lead time, contract status, and risk level.                                    |
| 📋 Operational Workflow      | Structured request lifecycle: Submitted → In Review → Approved → Completed.                                 |
| 📊 Live Power BI Analytics   | Executive dashboard connected to a live Power BI report with KPIs, trends, and performance insights.        |

---

## 🧩 System Architecture

FlowChain is structured around three connected layers:

### 1. Operational Layer

The Operational Layer focuses on operational visibility and workflow management.

It includes:

- Asset Intelligence
- Monitored Assets
- Live Telemetry
- Maintenance Tracking
- Supplier Management
- Supplier Performance
- Operational Requests
- Operational Workflows

This layer allows users to understand the current operational state and interact with operational processes.

---

### 2. Governance Layer

The Governance Layer controls **who can access the platform and what they are authorized to access**.

It includes:

- Employee Identity Verification
- Access Requests
- Work / National ID Verification
- Access Approval
- Access Rejection
- Role-Based Access Control (RBAC)
- Session Management
- Admin Control Center
- User Access Management

The access model follows:

**Identity → Authentication → Authorization → Role → Access**

![Admin Access Management](Screenshots/admin-access-management.png)

---

### 3. Analytics Layer

The Analytics Layer transforms operational information into executive-level insights.

It includes:

- Power BI (Live Embedded Report)
- Operational KPIs
- Performance Trends
- Supplier Performance
- Request Analysis
- Operational Insights
- Decision Intelligence

The purpose of this layer is to move beyond simply displaying data and instead use it to support operational understanding and decision-making.

![Power BI Analytics](Screenshots/powerbi-analytics.png)

---

## 🔐 Access Governance & Permissions

Access governance is a core part of FlowChain.

The platform does not treat authentication as simply entering a username and password.

When a new employee creates an account, an **Access Request** is created containing relevant employee information such as:

- Full Name
- Corporate Email
- Work / National ID
- Request ID
- Account Information

The request initially enters a **Pending** state.

The account does not receive platform access until the request has been reviewed and approved.

---

## 🛡️ Role-Based Access Control

FlowChain uses a **Role-Based Access Control (RBAC)** concept to control access to different areas of the platform.

The user's account type determines the experience and permissions available to that user.

The system distinguishes between authorized administrative users and standard users.

### Standard Users

Standard users can access the operational experience of the platform according to their assigned permissions.

This includes areas such as:

- Home
- About
- Operations
- Asset Intelligence
- Suppliers
- Operational Requests
- Support

### Administrators

Administrators have additional permissions for managing access and reviewing protected operational and analytical areas.

Administrative capabilities include:

- Reviewing Access Requests
- Verifying Employee Information
- Approving Access
- Rejecting Access
- Managing User Access
- Access Governance
- Admin Control Center
- Protected Analytics

This ensures that administrative functionality is not exposed as part of the standard user experience.

![Admin Control Center](Screenshots/admin-control-center.png)

---

## 🔑 Access Request Lifecycle

The access process follows a defined workflow:

```text
Account Registration
        ↓
Access Request Created
        ↓
      Pending
        ↓
Identity Verification
        ↓
    Admin Review
        ↓
   ┌───────────────┐
   ↓               ↓
Approve          Reject
   ↓               ↓
Access Granted   Access Denied
   ↓
Role Assigned (Standard User / Administrator)
   ↓
Platform Access Enabled
