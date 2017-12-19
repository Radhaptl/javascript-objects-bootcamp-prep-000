var playlist = { camilaCabello: 'Havana',
  taylorSwift: 'Ready for it?'};

function updatePlaylist(playlist, artistName, SongTitle) {
  return Object.assign({}, playlist,{ [artistName]: SongTitle} )
}

