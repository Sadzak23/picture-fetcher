export const setHotTickets = (photos) => ({
  type: 'SET_HOT_TICKETS',
  photos
});

export const setUpcomingEvents = (photos) => ({
  type: 'SET_UPCOMING_EVENTS',
  photos
});

export const setFilter = (text) => ({
  type: 'SET_FILTER',
  text
});