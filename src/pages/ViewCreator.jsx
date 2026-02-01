import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
const { id } = useParams();
const navigate = useNavigate();
const [creator, setCreator] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetchCreator();
}, [id]);

async function fetchCreator() {
const { data, error } = await supabase
.from('creators')
.select('*')
.eq('id', id)
.single();

if (error) {
console.error('Error fetching creator:', error);
} else {
setCreator(data);
}
setLoading(false);
}

async function handleDelete() {
const confirmDelete = window.confirm(
'Are you sure you want to delete this creator?'
);
if (!confirmDelete) return;

const { error } = await supabase
.from('creators')
.delete()
.eq('id', id);

if (error) {
console.error('Error deleting creator:', error);
} else {
navigate('/');
}
}

if (loading) return <p>Loading...</p>;

if (!creator) return <p>Creator not found.</p>;

return (
<div className="page view-creator">
<header className="page-header">
  <div>
    <p className="eyebrow">Creator Profile</p>
    <h1>{creator.name}</h1>
    <p className="subhead">Explore this creator's work and learning resources.</p>
  </div>
  <div className="header-actions">
    <Link to="/" className="btn ghost">Back</Link>
    <Link to={`/edit/${creator.id}`} className="btn">Edit</Link>
  </div>
</header>
<section className="creator-profile panel">
  <div className="creator-profile-media">
    {creator.imageURL ? (
      <img src={creator.imageURL} alt={creator.name} />
    ) : (
      <div className="image-placeholder">No image provided</div>
    )}
  </div>
  <div className="creator-profile-body">
    <p>{creator.description}</p>
    <a className="creator-link" href={creator.url} target="_blank" rel="noopener noreferrer">
      Visit Channel
    </a>
    <div className="actions">
      <button onClick={handleDelete} className="btn danger">Delete</button>
    </div>
  </div>
</section>
</div>
);
}

export default ViewCreator;
