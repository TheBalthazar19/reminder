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
        const reminder = { id, title, date, description, time };
        this.reminders.set(id, reminder);
    }
    exists(id) {
        return this.reminders.has(id);
    }
    getAllReminders() {
        return Array.from(this.reminders.values());
    }
    getReminder(id) {
        return this.reminders.get(id) || null;
    }
    removeReminder(id) {
        return this.reminders.delete(id);
    }
    updateReminder(id, title, date, time, description) {
        if (!this.reminders.has(id)) {
            return false;
        }
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
}
// Example Usage:
const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Doctor Appointment", new Date("2025-03-15"), "10:00 AM", "Visit Dr. Smith at 10 AM");
console.log(reminderDB.getAllReminders());
reminderDB.updateReminder("2", "Dentist Appointment", new Date("2025-03-16"), "11:00 AM");
console.log(reminderDB.getAllReminders());
reminderDB.removeReminder("1");
console.log(reminderDB.getAllReminders());
