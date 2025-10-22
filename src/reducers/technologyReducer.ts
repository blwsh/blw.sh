export default function technologyReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_TECHNOLOGY':
      return {
        ...state,
        technologies: [...state.technologies, action.payload]
      }
    case 'REMOVE_TECHNOLOGY':
      return {
        ...state,
        technologies: state.technologies.filter((technology: any) => technology.id !== action.payload)
      }
  }
}