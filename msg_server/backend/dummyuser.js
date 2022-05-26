const users = [];

// add user to specific chatroom
function join_user(id, username, room){
  const newUser = {id, username, room};
  users.push(newUser);
  console.log("users" + users);

  return newUser;
}

// ge particular user id to return
function get_current_user(id){
  return users.findIndex((newUser) => newUser.id === id);
}

// when user disconnect -> object deleted from array
function user_disconnect(id){
  const index = users.findIndex((newUser) => newUser.id === id);

  // splice removes or replaces object
  if(index !== -1){
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  join_user,
  get_current_user,
  user_disconnect
};