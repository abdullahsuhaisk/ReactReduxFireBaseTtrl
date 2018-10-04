import React from 'react'

export default (props) => {
    console.log(props);
    const id = props.match.params.id;
    console.log(id);
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">
                    Project Details {id}
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed necessitatibus minus expedita voluptas autem eius voluptatibus exercitationem, modi id. Minus expedita at ullam, corporis debitis similique doloremque quo nobis.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by suha</div>
                <div> 10nd October</div>
            </div>
        </div>
    </div>
  )
}
