export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      const {job: jobWillAddFav} = action.payload;
      const newFavList = [...state.favoriteJobs, jobWillAddFav];
      return {...state, favoriteJobs: newFavList};

    case 'REMOVE_FAV':
      const {job: jobThatWillRemove} = action.payload;
      const favList = [...state.favoriteJobs];
      const indexOfJob = favList.indexOf(jobThatWillRemove);
      favList.splice(indexOfJob, 1);
      return {...state, favoriteJobs: favList};

    default:
      return state;
  }
};
