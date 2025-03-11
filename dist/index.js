"use strict";
class ReminderDatabase {
    reminders;
    constructor() {
        this.reminders = new Map();
    }
    createReminder(id, title, date, time, description) {
        if (this.reminders.has(id)) {
            throw new Error("Reminder with this ID already exists.");
        }
        const reminder = { id, title, date, time, description, completed: false };
        this.reminders.set(id, reminder);
    }
    exists(id) {
        return this.reminders.has(id);
    }
    markReminderAsCompleted(id) {
        if (!this.reminders.has(id))
            return false;
        const reminder = this.reminders.get(id);
        reminder.completed = true;
        this.reminders.set(id, reminder);
        return true;
    }
    unmarkReminderAsCompleted(id) {
        if (!this.reminders.has(id))
            return false;
        const reminder = this.reminders.get(id);
        reminder.completed = false;
        this.reminders.set(id, reminder);
        return true;
    }
    getAllReminders() {
        return Array.from(this.reminders.values());
    }
    getReminder(id) {
        return this.reminders.get(id) || null;
    }
    getAllRemindersMarkedAsCompleted() {
        return Array.from(this.reminders.values()).filter((reminder) => reminder.completed);
    }
    getAllRemindersNotMarkedAsCompleted() {
        return Array.from(this.reminders.values()).filter((reminder) => !reminder.completed);
    }
    getAllRemindersDueByToday() {
        const today = new Date();
        return Array.from(this.reminders.values()).filter((reminder) => reminder.date.toDateString() === today.toDateString());
    }
    updateReminder(id, title, date, time, description) {
        if (!this.reminders.has(id))
            return false;
        const reminder = this.reminders.get(id);
        if (title)
            reminder.title = title;
        if (date)
            reminder.date = date;
        if (time)
            reminder.time = time;
        if (description)
            reminder.description = description;
        this.reminders.set(id, reminder);
        return true;
    }
    removeReminder(id) {
        return this.reminders.delete(id);
    }
}
// 📌 Example Usage
const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Doctor Appointment", new Date("2025-03-15"), "10:00 AM", "Visit Dr. Smith");
reminderDB.createReminder("2", "Dentist Appointment", new Date(), "3:00 PM", "Teeth cleaning");
console.log("All Reminders:", reminderDB.getAllReminders());
console.log("Reminder with ID '1':", reminderDB.getReminder("1"));
reminderDB.markReminderAsCompleted("1");
console.log("Completed Reminders:", reminderDB.getAllRemindersMarkedAsCompleted());
reminderDB.unmarkReminderAsCompleted("1");
console.log("Reminders Not Completed:", reminderDB.getAllRemindersNotMarkedAsCompleted());
console.log("Reminders Due Today:", reminderDB.getAllRemindersDueByToday());
reminderDB.updateReminder("1", "Updated Doctor Appointment", new Date("2025-03-16"), "11:00 AM", "Updated Description");
console.log("Updated Reminders:", reminderDB.getAllReminders());
reminderDB.removeReminder("2");
console.log("After Deletion:", reminderDB.getAllReminders());
