type Reminder = {
  id: string;
  title: string;
  description?: string;
  date: Date; // The date and time
  time?: string; // Optional separate time field
};

class ReminderDatabase {
  private reminders: Map<string, Reminder>;

  constructor() {
    this.reminders = new Map();
  }

  createReminder(id: string, title: string, date: Date, time?: string, description?: string): void {
    if (this.reminders.has(id)) {
      throw new Error("Reminder with this ID already exists.");
    }
    const reminder: Reminder = { id, title, date, description, time };
    this.reminders.set(id, reminder);
  }

  exists(id: string): boolean {
    return this.reminders.has(id);
  }

  getAllReminders(): Reminder[] {
    return Array.from(this.reminders.values());
  }

  getReminder(id: string): Reminder | null {
    return this.reminders.get(id) || null;
  }

  removeReminder(id: string): boolean {
    return this.reminders.delete(id);
  }

  updateReminder(id: string, title?: string, date?: Date, time?: string, description?: string): boolean {
    if (!this.reminders.has(id)) {
      return false;
    }
    const reminder = this.reminders.get(id)!;
    if (title) reminder.title = title;
    if (date) reminder.date = date;
    if (time) reminder.time = time;
    if (description) reminder.description = description;
    this.reminders.set(id, reminder);
    return true;
  }
}

// Example Usage:
const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Doctor Appointment", new Date("2025-03-15T10:00:00"), "10:00 AM", "Visit Dr. Smith at 10 AM");
console.log(reminderDB.getAllReminders());
reminderDB.updateReminder("2", "Dentist Appointment", new Date("2025-03-16T11:00:00"), "11:00 AM");
console.log(reminderDB.getAllReminders());
reminderDB.removeReminder("1");
console.log(reminderDB.getAllReminders());
