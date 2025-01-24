import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Container } from '@mui/material';

const teamMembers = [
  {
    name: 'Ali Khan',
    role: 'Founder & CEO',
    avatar: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Sara Ahmed',
    role: 'Marketing Head',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    name: 'Hamza Sheikh',
    role: 'Lead Developer',
    avatar: 'https://via.placeholder.com/150',
  },
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', py: 5 }}>
      <Container>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
          About Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 4, color: '#555', maxWidth: '800px', mx: 'auto' }}
        >
          Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience, 
          offering a wide range of high-quality products, exceptional customer service, and a user-friendly shopping experience.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                }}
              >
                <CardContent>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: '#555', maxWidth: '600px', mx: 'auto' }}
          >
            Our mission is to revolutionize the e-commerce industry by delivering innovative solutions, empowering businesses, and creating a seamless shopping experience for customers around the globe.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

