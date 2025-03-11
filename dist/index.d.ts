type Reminder = {
    id: string;
    title: string;
    description?: string;
    date: Date;
    time?: string;
    completed: boolean;
};
declare class ReminderDatabase {
    private reminders;
    constructor();
    createReminder(id: string, title: string, date: Date, time?: string, description?: string): void;
    exists(id: string): boolean;
    markReminderAsCompleted(id: string): boolean;
    unmarkReminderAsCompleted(id: string): boolean;
    getAllReminders(): Reminder[];
    getReminder(id: string): Reminder | null;
    getAllRemindersMarkedAsCompleted(): Reminder[];
    getAllRemindersNotMarkedAsCompleted(): Reminder[];
    getAllRemindersDueByToday(): Reminder[];
    updateReminder(id: string, title?: string, date?: Date, time?: string, description?: string): boolean;
    removeReminder(id: string): boolean;
}
declare const reminderDB: ReminderDatabase;
