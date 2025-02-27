const Comment = (props) => {
  return (
    <>
      <div className="Comment">
        <div className="UserInfo">
          <img src={props.author.avatarUrl} alt={props.author.name} />
        </div>
        <div className="UserInfo-name">{props.author.name}</div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    </>
  );
};

export default Comment;
