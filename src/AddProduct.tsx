import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [gst, setGst] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('products').insert([
      {
        name,
        price: parseFloat(price),
        stock_qty: parseInt(stock),
        gst_percent: parseFloat(gst),
      },
    ]);

    if (error) {
      alert('Error: ' + error.message);
    } else {
      alert('✅ Product added!');
      setName('');
      setPrice('');
      setStock('');
      setGst('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Stock (kg)"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        placeholder="GST %"
        type="number"
        value={gst}
        onChange={(e) => setGst(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
