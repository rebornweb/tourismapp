import React, { useState, useEffect } from 'react';

interface ServiceProps {
  orderId: string;
}

const AvailableServicesList: React.FC<ServiceProps> = ({ orderId }) => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://your-express-server-url.com/api/orders/${orderId}/services`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setServices(data.services || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching available services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, [orderId]);

  return (
    <div>
      <h2>Available Services for Order ID: {orderId}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : services.length === 0 ? (
        <p>No available services found.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.name}</strong>
              <p>{service.description}</p>
              {/* Display more service details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailableServicesList;
