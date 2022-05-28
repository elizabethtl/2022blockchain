const users = [];

// add user to specific chatroom
function join_user(id, username, room){
  console.log("---join_user---");
  const newUser = {id, username, room};
  console.log("new user: " + newUser.id + " " + newUser.username + " " + newUser.room);
  users.push(newUser);
  console.log("length: " + users.length);
  console.log("users: " + users[users.length-1].id + " " + users[users.length-1].username);
  console.log("---join_user---");
  return newUser;
}

// get particular user id to return
function get_current_user(id){
  let userIndex = users.findIndex((newUser) => newUser.id === id);
  return users[userIndex];
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