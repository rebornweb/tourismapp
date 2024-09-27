// components/UserProfile.tsx
import React from 'react';
import { Box, Heading, Text, Image, Stack, Button } from '@chakra-ui/react';


interface User {
  sid: string;
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Box color='header.100' style={styles.container}>
      <img src={user.picture} alt={user.name} style={styles.picture} />
      <div style={styles.info}>
        <h2>{user.name}</h2>
        <p><strong>Nickname:</strong> {user.nickname}</p>
        <p><strong>Email:</strong> {user.email} {user.email_verified ? '(Verified)' : '(Not Verified)'}</p>
        <p><strong>Locale:</strong> {user.locale}</p>
        <p><strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleString()}</p>
      </div>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  picture: {
    borderRadius: '50%',
    marginRight: '20px',
  },
  info: {
    lineHeight: '1.6',
  },
};

export default UserProfile;
