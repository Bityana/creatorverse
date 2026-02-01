import { Link } from 'react-router-dom';


function Card({ id, name, url, description, imageURL }) {

return (

<article className="creator-card">
  {imageURL && (
    <img
      src={imageURL}
      alt={name}
      className="creator-image"
    />
  )}
  <div className="creator-content">
    <h3>{name}</h3>
    <p>{description}</p>
    <a className="creator-link" href={url} target="_blank" rel="noopener noreferrer">
      Visit Channel
    </a>
  </div>
  <footer className="creator-actions">
    <Link to={`/creator/${id}`} className="btn ghost">
      View
    </Link>
    <Link to={`/edit/${id}`} className="btn ghost">
      Edit
    </Link>
  </footer>
</article>

);

}


export default Card;
