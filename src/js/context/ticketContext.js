// src/js/context/ticketContext.js
import { AuthContext } from "./authContext.js";

let tickets = [];

/** Save all tickets for the logged-in user */
export const saveTickets = (updatedTickets) => {
    const user = AuthContext.getUser(); // Changed from getCurrentUser to AuthContext.getUser
    if (user) {
        tickets = updatedTickets;
        localStorage.setItem(
            `user_${user.email}_ticket`,
            JSON.stringify(updatedTickets)
        );
    } else {
        tickets = [];
    }
};

/** Add a new ticket for the user */
export const addTicket = (newTicket) => {
    const user = AuthContext.getUser(); // Changed here
    if (!user) return;

    const updatedTickets = [...tickets, newTicket];
    tickets = updatedTickets;
    localStorage.setItem(
        `user_${user.email}_ticket`,
        JSON.stringify(updatedTickets)
    );
};

/** Update a ticket by its ID */
export const updateTicket = (id, updatedFields) => {
    const user = AuthContext.getUser(); // Changed here
    if (!user) return;

    const updatedTickets = tickets.map((t) =>
        t.id === id ? { ...t, ...updatedFields } : t
    );
    saveTickets(updatedTickets);
};

/** Delete a ticket by its ID */
export const deleteTicket = (id) => {
    const user = AuthContext.getUser(); // Changed here
    if (!user) return;

    const updatedTickets = tickets.filter((t) => t.id !== id);
    saveTickets(updatedTickets);
};

/** Load tickets for the logged-in user */
export const loadTickets = () => {
    const user = AuthContext.getUser(); // Changed here
    if (user) {
        const saved =
            JSON.parse(localStorage.getItem(`user_${user.email}_ticket`)) || [];
        tickets = saved;
    } else {
        tickets = [];
    }
    return tickets;
};

/** Return current tickets in memory */
export const getTickets = () => tickets;

/** Initialize context on page load */
export const initTickets = () => {
    loadTickets();
};