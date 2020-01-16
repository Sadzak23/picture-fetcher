export default (state = [], action) => {
  switch (action.type) {
    case 'SET_HOT_TICKETS':
      return {
        ...state,
        hotTickets: action.photos
      }
    case 'SET_UPCOMING_EVENTS':
      return {
        ...state,
        upcomingEvents: action.photos
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.text
      }
    default:
      return state;
  }
}