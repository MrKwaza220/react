import "./Nav.scss";

export default ({ cast, onChoice }) => {
  return (
    <nav>
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">
              Cast
            </summary>
            <ul role="listbox">
              {cast.map((member) => (
                <li key={member.id}>
                  <a
                    onClick={() => {
                      onChoice(member);
                    }}
                    data-tooltip={member.name}
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img
              style={{ height: "50px" }}
              src="images/logo_bug_stargazers.svg"
              alt="Stargazers"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
