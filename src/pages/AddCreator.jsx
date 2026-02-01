import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
name: '',
url: '',
description: '',
imageURL: ''
});

function handleChange(e) {
const { name, value } = e.target;
setFormData((prev) => ({
...prev,
[name]: value
}));
}

async function handleSubmit(e) {
e.preventDefault();

const { error } = await supabase
.from('creators')
.insert([formData]);

if (error) {
console.error('Error adding creator:', error);
} else {
navigate('/');
}
}

return (
<div className="page add-creator">
<header className="page-header">
  <div>
    <p className="eyebrow">Add Creator</p>
    <h1>New Creator Profile</h1>
    <p className="subhead">
      Share a channel, blog, or playlist that helps others learn to code.
    </p>
  </div>
  <Link to="/" className="btn ghost">
    Back
  </Link>
</header>
<form onSubmit={handleSubmit} className="panel">
<label>
Name *
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
/>
</label>

<label>
URL *
<input
type="url"
name="url"
value={formData.url}
onChange={handleChange}
required
/>
</label>

<label>
Description *
<textarea
name="description"
value={formData.description}
onChange={handleChange}
required
/>
</label>

<label>
Image URL (optional)
<input
type="url"
name="imageURL"
value={formData.imageURL}
onChange={handleChange}
/>
</label>

<div className="form-actions">
  <button type="submit" className="btn">Add Creator</button>
  <Link to="/" className="btn ghost">Cancel</Link>
</div>
</form>
</div>
);
}

export default AddCreator;
