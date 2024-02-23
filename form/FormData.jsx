import React, { useState } from 'react';

function Home() {
    // ফর্ম ডেটা স্টেট
    const [formData, setFormData] = useState({
        name: 'Tamanna',
        email: 'tamannahemi123@gmail.com',
        message: 'Hello'
    });

    // ইনপুট চেঞ্জ হ্যান্ডলার
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // ফর্ম সাবমিট হ্যান্ডলার
    const handleSubmit = (e) => {
        e.preventDefault();

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
                const { name, email, message } = formData;
        
                const response = await fetch('http://example.com/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });
        
                if (response.ok) {
                    console.log('Form submitted successfully!');
                
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    console.error('Failed to submit form!');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        
        console.log(formData);
        // সাবমিটের পরে ফর্ম ডেটা ক্লিয়ার 
        setFormData({
            name: 'Tabassum',
            email: 'tamannahemi123456@gmail.com',
            message: 'Hi'
        });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;
