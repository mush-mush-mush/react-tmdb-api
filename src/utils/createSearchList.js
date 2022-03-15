/* eslint-disable import/no-anonymous-default-export */

export default (results) => {
  const newResults = results.map((item) => {
    return {
      mediaType: item.media_type,
      id: item.id,
      title: item.title || item.name,
      image: item.poster_path || item.profile_path,
      overview: item.known_for_department || (item.overview.length > 225 ? item.overview.slice(0, 222) + '...' : item.overview),
    };
  });

  return newResults;
};
