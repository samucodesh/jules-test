# Manual Testing Steps for Dashboard Functionality

This document outlines the manual testing steps to verify the functionality of the Task Dashboard.

## 1. Initial State (No Tasks)

*   **Ensuring No Tasks in Local Storage:**
    *   Open the browser's developer tools (usually by pressing F12).
    *   Navigate to the "Application" tab (Chrome/Edge) or "Storage" tab (Firefox).
    *   Under "Local Storage", find the entry for the application's domain.
    *   Verify that the `tasks` key is either not present or its value is an empty array (`[]`). If it exists with data, manually delete the `tasks` key.
*   **Expected Dashboard Display:**
    *   Navigate to `dashboard.html`.
    *   **Total Tasks:** Should display "0".
    *   **Completed Tasks:** Should display "0".
    *   **Pending Tasks:** Should display "0".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should display a message like "No tasks yet. Add some tasks in the to-do list!" or similar, indicating there's no data to show.

## 2. Adding Tasks

*   **Steps:**
    1.  Navigate to `index.html`.
    2.  In the input field, type "Task 1" and click "Add Task".
    3.  Type "Task 2" and click "Add Task".
    4.  Type "Task 3" and click "Add Task".
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "3".
    *   **Completed Tasks:** Should display "0".
    *   **Pending Tasks:** Should display "3".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should show:
        *   Done: 0
        *   To Do: 3

## 3. Completing a Task

*   **Steps:**
    1.  Navigate to `index.html`.
    2.  Find "Task 1" in the list.
    3.  Click on "Task 1" text or the checkbox next to it (if checkboxes are implemented for completion) to mark it as completed. The task should visually change (e.g., line-through).
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "3".
    *   **Completed Tasks:** Should display "1".
    *   **Pending Tasks:** Should display "2".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should show:
        *   Done: 1
        *   To Do: 2

## 4. Adding More Tasks

*   **Steps:**
    1.  Navigate to `index.html`.
    2.  Type "Task 4" and click "Add Task".
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "4".
    *   **Completed Tasks:** Should display "1" (from "Task 1" completed earlier).
    *   **Pending Tasks:** Should display "3".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should show:
        *   Done: 1
        *   To Do: 3

## 5. Completing All Tasks

*   **Steps:**
    1.  Navigate to `index.html`.
    2.  Mark "Task 2", "Task 3", and "Task 4" as completed.
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "4".
    *   **Completed Tasks:** Should display "4".
    *   **Pending Tasks:** Should display "0".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should show:
        *   Done: 4
        *   To Do: 0

## 6. Clearing Completed Tasks (from index.html)

*   **Steps:**
    1.  Navigate to `index.html`. (All tasks should be completed from the previous step).
    2.  Click the "Clear Completed" button.
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "0".
    *   **Completed Tasks:** Should display "0".
    *   **Pending Tasks:** Should display "0".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should display a message like "No tasks yet. Add some tasks in the to-do list!"

## 7. Deleting Selected Tasks (from index.html)

*   **Steps:**
    1.  Navigate to `index.html`.
    2.  Add a new task: "Test Delete 1".
    3.  Add another new task: "Test Delete 2". (Total tasks: 2, Pending: 2, Completed: 0)
    4.  Select "Test Delete 1" by clicking on its text/checkbox (depending on how selection for deletion is implemented - assuming clicking the task item itself makes it "selected" for deletion if there isn't a separate checkbox for selection).
    5.  Click the "Delete Selected" button.
*   **Expected Dashboard Display after navigating to `dashboard.html`:**
    *   **Total Tasks:** Should display "1" (only "Test Delete 2" remains).
    *   **Completed Tasks:** Should display "0".
    *   **Pending Tasks:** Should display "1".
*   **Expected "Task Breakdown by Status" Section:**
    *   Should show:
        *   Done: 0
        *   To Do: 1

## 8. Navigation

*   **Steps & Expected Outcome:**
    1.  Open `index.html`.
    2.  Click the "View Task Dashboard" link.
        *   **Expected:** The browser navigates to `dashboard.html`. The URL changes to `dashboard.html`.
    3.  On `dashboard.html`, click the "Back to To-Do List" link.
        *   **Expected:** The browser navigates back to `index.html`. The URL changes to `index.html`.

## 9. Responsiveness (Conceptual)

*   **How to Check:**
    1.  Open `dashboard.html` in a desktop browser.
    2.  Open Developer Tools (F12).
    3.  Enable device emulation mode (often an icon of a phone/tablet in DevTools).
    4.  Select different device presets (e.g., "iPhone X", "iPad", "Galaxy S5") or manually resize the viewport width and height.
*   **Elements to Pay Attention To:**
    *   **Overall Layout:** Does the container (`<div class="container">`) resize appropriately? Does it become too wide or too narrow, causing content to overflow or be squished?
    *   **Text Readability:** Is all text (headings, paragraph text in stats, list items in breakdown) still easily readable? Does it wrap correctly?
    *   **Navigation Links:** Is the "Back to To-Do List" link still visible and clickable?
    *   **Stats Section:** Do the "Overall Statistics" and "Task Breakdown by Status" sections stack vertically if there isn't enough horizontal space? Are their contents still legible?
    *   **No Horizontal Scrollbar:** Ensure that no horizontal scrollbar appears at common mobile/tablet breakpoints, as this indicates content is overflowing its container.
    *   **Padding and Margins:** Check that padding and margins look appropriate on smaller screens, not too large to waste space or too small to make elements feel cramped. The `@media (max-width: 600px)` rules in `style.css` should specifically be tested.

This detailed plan should cover the verification of the dashboard's core functionality.
