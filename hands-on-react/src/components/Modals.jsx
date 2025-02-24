export default ({member, handleClose, handleChange}) => {
   return (
    <dialog id="model-member" open>
        <article>
            <a href="#close"
            aria-label="Close"
            className="close"
            data-target="modal-member"
            onClick={handleClose}
            ></a>
            
            <hgroup>
              <div style={{ display: "flex", gap: "1rem" }}>
                <img
                  style={{ width: "200px" }}
                  src={`images/${member.slug}`}
                  alt={member.name}
                />
                <hgroup>
                  <h1>{member.name}</h1>
                  <p>{member.bio}</p>
                  <hgroup>
                    <a href="#" role="button" className="outline"
                    onClick={() => {handleChange(Number(member.id) - 1)}}
                    >
                      previous
                    </a>
                    <a href="#" role="button" className="outline"
                    onClick={() => {handleChange(Number(member.id) + 1)}}
                    >
                      next
                    </a>
                  </hgroup>
                </hgroup>
              </div>
            </hgroup>
        </article>
    </dialog>
   ) 
};