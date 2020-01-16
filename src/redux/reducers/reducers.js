export default (state = [], action) => {
  switch (action.type) {
    case 'SET_LIST1':
      return {
        ...state,
        list1: action.photos
      }
    case 'SET_LIST2':
      return {
        ...state,
        list2: action.photos
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