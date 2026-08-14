# FlowChain

### Industrial Operations & Supply Chain Intelligence Platform

🌐 **Live Demo:**  
https://danalhazmi.github.io/FlowChain-Industrial-Operations-Supply-Chain-Intelligence/

> **Connect the operation. Understand the data. Enable the decision.**

FlowChain is a connected **Industrial Operations & Supply Chain Intelligence platform** designed to demonstrate how operational data, workflows, identity, access governance, supplier intelligence, and analytics can work together within a single ecosystem.

Rather than treating assets, suppliers, requests, users, permissions, and analytics as isolated components, FlowChain connects them through a unified operational concept that follows the movement of information from:

**User → Access → Operations → Workflow → Data → Analytics → Decision**

The project combines **Industrial Operations, Supply Chain Intelligence, Access Governance, Workflow Management, Business Intelligence, and UX/UI design** into one connected platform experience.

---

# 🚀 Project Overview

Industrial environments depend on multiple types of information operating simultaneously.

These may include:

- Assets
- Asset Telemetry
- Maintenance
- Suppliers
- Procurement
- Operational Requests
- User Identity
- Access Permissions
- Operational Performance
- Analytics
- Decision-Making

When these elements operate independently, the operational picture becomes fragmented.

A user may know the status of an asset without understanding its maintenance requirements, while supplier performance, operational requests, access permissions, and analytical insights may exist somewhere else.

**FlowChain explores the concept of connecting these layers into one operational ecosystem.**

The platform was designed around the idea that operational intelligence should not stop at displaying information.

It should connect:

**Visibility → Workflow → Governance → Analytics → Decision**

---

# 🎯 Project Vision

FlowChain was built around one central question:

> **What if the problem is not a lack of data, but the fact that data, operations, and decisions are disconnected?**

The goal was not to create a traditional website consisting of independent pages.

Instead, FlowChain was designed as a **Connected Operational System** where each part has a specific purpose and contributes to the wider operational lifecycle.

The platform connects:

- User identity
- Access governance
- Operational intelligence
- Supplier management
- Asset monitoring
- Operational workflows
- Analytics
- Decision intelligence

This creates a system concept where information moves continuously through the organization rather than remaining isolated within individual modules.

---

# 🧩 System Architecture

FlowChain is organized around three interconnected system layers.

## 1. Operational Layer

The Operational Layer focuses on operational visibility and workflow execution.

It includes:

- Asset Intelligence
- Monitored Assets
- Asset Details
- Live Telemetry
- Operational Efficiency
- Critical Alerts
- Maintenance Tracking
- Supplier Management
- Supplier Performance
- Supplier Risk
- Operational Requests
- Maintenance Requests
- Inventory Requests
- Supplier Requests
- Operational Support Requests
- Workflow Tracking

---

## 2. Governance Layer

The Governance Layer controls **who can access the platform, how access is granted, and what each account type is authorized to use.**

It includes:

- User Identity
- Employee Information
- Institutional Email Verification
- Work / National ID
- Access Requests
- Request Status
- Identity Verification
- Access Approval
- Access Rejection
- Role-Based Access Control (RBAC)
- Session Management
- Admin Control Center
- User Management

The access lifecycle follows:

**Identity → Access Request → Verification → Approval → Authorization → Platform Access**

---

## 3. Analytics Layer

The Analytics Layer transforms operational information into decision-oriented insights.

It includes:

- Power BI
- Executive Analytics
- Operational KPIs
- Supplier Performance
- Asset Insights
- Request Analysis
- Performance Trends
- Operational Trends
- Decision Intelligence
- Actionable Insights

The analytics lifecycle follows:

**Operational Data → Analysis → Insight → Decision**

---

# 🔐 Access Governance & Permissions

Access governance is a core part of FlowChain.

The platform does not treat authentication as simply entering a username and password.

Instead, access is controlled through an approval-based process.

A new employee first submits an **Access Request** containing the required identity and organizational information.

The request remains:

**Pending**

until an authorized administrator reviews it.

The administrator can then:

**Approve → Access Granted**

or

**Reject → Access Denied**

This creates an access lifecycle based on:

**Identity → Verification → Authorization → Role → Access**

---

# 👤 User Roles & Permissions

FlowChain uses a role-based access concept where the experience and available capabilities depend on the user's account type.

The platform contains two primary account types:

## Employee

The Employee account represents a standard operational user.

Employees can access the operational side of the platform and interact with the capabilities intended for day-to-day operational use.

### Employee Access

Employees can access:

- Home
- About
- Operations
- Asset Intelligence
- Asset Details
- Suppliers
- Supplier Information
- Operational Requests
- Request Submission
- Request Tracking
- Support

Employees can:

- View operational information
- Explore monitored assets
- Review asset status
- View telemetry and operational indicators
- Review supplier information
- Submit operational requests
- Track submitted requests
- Access support functionality

### Employee Restrictions

Employees do **not** have administrative authorization.

They cannot:

- Approve access requests
- Reject access requests
- Manage employee accounts
- Control user authorization
- Access the Admin Control Center
- Manage platform-level permissions
- Access administrator-only analytics areas

---

# 🛡️ Administrator

The Administrator account represents an authorized platform administrator.

Administrators have access to the operational experience in addition to protected administrative and analytical capabilities.

### Administrator Access

Administrators can access:

- Public Operational Experience
- Operations
- Asset Intelligence
- Suppliers
- Operational Requests
- Analytics
- Power BI Executive Dashboard
- Admin Control Center
- Access Request Management
- User Management
- Identity Verification
- Access Approval
- Access Rejection

### Administrator Capabilities

Administrators can:

- Review employee access requests
- Review employee identity information
- Verify submitted employee information
- Approve access requests
- Reject access requests
- Manage authorized users
- Control administrative access
- Monitor platform activity
- Review supplier performance
- Access protected analytics
- Review operational insights

The administrator therefore acts as the governance layer between:

**Requested Access → Verified Identity → Authorized Account**

---

# 🔄 Access Request Lifecycle

FlowChain includes an approval workflow for new platform access.

The process begins when an employee submits an access request.

```text
Employee
   ↓
Access Request
   ↓
Pending
   ↓
Admin Review
   ↓
Identity Verification
   ↓
 ┌───────────────┐
 │               │
Approve        Reject
 │               │
 ↓               ↓
Access          Access
Granted         Denied
