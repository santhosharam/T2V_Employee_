# Airtable Setup Instructions

To connect your "Let Us Connect" form to Airtable, follow these steps to create your Base and Table.

## 1. Create a New Base
1.  Log in to [Airtable](https://airtable.com/).
2.  Click **"Create a base"**.
3.  Name it something like **"T2V Leads"**.

## 2. Configure the Table
Rename "Table 1" to **"Leads"** (or change the code to match your table name).
Set up the columns (fields) with the following **exact names** and **types**:

| Field Name | Type | Options |
| :--- | :--- | :--- |
| **First Name** | Single line text | |
| **Last Name** | Single line text | |
| **Work Email** | Email | |
| **Company Name** | Single line text | |
| **Job Title** | Single line text | |
| **Phone Number** | Phone number | |
| **Company Size** | Single select | Options: `1-50`, `51-200`, `201-1000`, `1000+` |
| **Challenge** | Single select | Options: `recruitment`, `compliance`, `data-unification`, `knowledge`, `other` |
| **Status** | Single select | Options: `New`, `Contacted`, `Qualified`, `Lost`. Set default to `New`. |
| **Submission Date** | Created time | |

## 3. Get Your API Credentials
You need two pieces of information:

### A. Base ID
1.  Open your new Base.
2.  Look at the URL bar. It looks like `https://airtable.com/appXXXXXXXXXXXXXX/tbl...`
3.  The part starting with `app` is your **Base ID** (e.g., `appK7v...`).

### B. Personal Access Token (API Key)
1.  Go to [Airtable Developer Hub](https://airtable.com/create/tokens).
2.  Click **"Create token"**.
3.  **Name:** "T2V Website Form".
4.  **Scopes:** Add `data.records:write` and `schema.bases:read`.
5.  **Access:** Add the **"T2V Leads"** base you just created.
6.  Click **"Create token"** and **COPY IT IMMEDIATELY**. You won't see it again.

## 4. Connect to Your Project
Create a file named `.env` in the root of your project (if it doesn't exist) and add:

```env
VITE_AIRTABLE_API_KEY=your_token_starting_with_pat...
VITE_AIRTABLE_BASE_ID=your_base_id_starting_with_app...
```

> **Security Note:** Since this is a client-side application, your API Token will be visible to advanced users inspecting the network traffic. For a production enterprise app, it is recommended to proxy these requests through a secure backend API.
