function joinedLogger(level, sep) {
  // write your code here

  function validator(...messageListItem) {
    const messageList = [...messageListItem];
    let result = "";

    messageList.forEach((message) => {
      if (message.level >= level && !result) result += message.text;
      else if (message.level >= level && !!result) result += sep + message.text;
    });

    ws.write(result); // hackerRank use this to evaluate - can ignore this in real world coding
    return result;
  }

  return validator;
}
