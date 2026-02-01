import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

function ShowCreators() {
const [creators, setCreators] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetchCreators();
}, []);

async function fetchCreators() {
const { data, error } = await supabase
.from('creators')
.select('*');

if (error) {
console.error('Error fetching creators:', error);
} else {
setCreators(data);
}
setLoading(false);
}

if (loading) return <p>Loading...</p>;

return (
<div className="page">
<header className="page-header">
  <div>
    <p className="eyebrow">Creator Directory</p>
    <h1>Creatorverse</h1>
    <p className="subhead">
      Discover coding educators, engineers, and builders sharing what they know.
    </p>
  </div>
  <Link to="/new" className="btn">
    Add New Creator
  </Link>
</header>

{creators.length === 0 ? (
<div className="panel empty-state">
  <h3>No creators yet</h3>
  <p>Add the first creator to kickstart the directory.</p>
</div>
) : (
<div className="grid creator-grid">
{creators.map((creator) => (
<Card
key={creator.id}
id={creator.id}
name={creator.name}
url={creator.url}
description={creator.description}
imageURL={creator.imageURL}
/>
))}
</div>
)}
</div>
);
}


export default ShowCreators;
