type Reminder = {
    id: string;
    title: string;
    description?: string;
    date: Date;
    time?: string;
};
declare class ReminderDatabase {
    private reminders;
    constructor();
    createReminder(id: string, title: string, date: Date, time?: string, description?: string): void;
    exists(id: string): boolean;
    getAllReminders(): Reminder[];
    getReminder(id: string): Reminder | null;
    removeReminder(id: string): boolean;
    updateReminder(id: string, title?: string, date?: Date, time?: string, description?: string): boolean;
}
declare const reminderDB: ReminderDatabase;
