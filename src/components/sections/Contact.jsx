  import { useState } from "react";

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log('Form submitted:', formData);
    //   alert('Thank you for your message! I\'ll get back to you as soon as possible.');
    //   setFormData({ name: '', email: '', message: '' });
    // };

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Make sure this URL matches your Spring Boot backend's endpoint
    const response = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Success: The email was sent
      alert("Thank you for your message! I'll get back to you as soon as possible.");
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
    } else {
      // Error from the server
      const errorText = await response.text();
      alert(`There was an error: ${errorText}`);
    }
  } catch (error) {
    // Network error
    console.error('Error submitting form:', error);
    alert('An unexpected error occurred. Please check your network connection.');
  }
};

    return (
      <section 
        id="contact" 
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #a2999e 0%, #846a6a 100%)' }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#eef0f2' }}>
              Contact
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#eef0f2', opacity: 0.9 }}>
              Feel free to Contact me by submitting the form below and I will get
              back to you as soon as possible
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl p-8 shadow-2xl"
              style={{ 
                backgroundColor: 'rgba(238, 240, 242, 0.95)', 
                backdropFilter: 'blur(20px)' 
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-3 text-lg" style={{ color: '#353b3c' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                    className="w-full px-6 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none text-lg"
                    style={{
                      backgroundColor: '#ffffff',
                      borderColor: '#c6c7c4',
                      color: '#353b3c'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a2999e';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 153, 158, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#c6c7c4';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-3 text-lg" style={{ color: '#353b3c' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className="w-full px-6 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none text-lg"
                    style={{
                      backgroundColor: '#ffffff',
                      borderColor: '#c6c7c4',
                      color: '#353b3c'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a2999e';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 153, 158, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#c6c7c4';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-3 text-lg" style={{ color: '#353b3c' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Enter Your Message"
                    required
                    className="w-full px-6 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none resize-none text-lg"
                    style={{
                      backgroundColor: '#ffffff',
                      borderColor: '#c6c7c4',
                      color: '#353b3c'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a2999e';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 153, 158, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#c6c7c4';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, #a2999e, #846a6a)',
                    color: '#eef0f2'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 12px 30px rgba(162, 153, 158, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;