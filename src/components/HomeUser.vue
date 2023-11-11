<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row align="center">
      <v-col class="text-center">
        <h1 class="display-2">Boost Your Business with Digital Marketing</h1>
        <p class="subtitle-1">Maximize your online presence and reach your target audience.</p>
        <v-btn color="primary" to="/services">Explore Services</v-btn>
      </v-col>
    </v-row>

    <!-- About Us Section -->
    <v-row>
      <v-col>
        <h2 class="headline text-center">About Us</h2>
        <p class="text-center">Discover our journey and mission in the world of digital marketing.</p>
        <v-btn outlined color="primary" to="/about">Learn More</v-btn>
      </v-col>
    </v-row>

    <!-- Our Services Section -->
    <v-row>
      <v-col>
        <h2 class="headline text-center">Our Services</h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col v-for="service in services" :key="service.title" class="service-card">
        <v-card elevation="5">
          <v-card-title class="headline">{{ service.title }}</v-card-title>
          <v-card-subtitle>Your data is ready</v-card-subtitle>
          <v-card-text>{{ service.description }}</v-card-text>
          <v-card-actions>
            <v-btn outlined color="primary">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
        <!-- Testimonials Section -->
    <v-row>
      <v-col>
        <h2 class="headline text-center">What Our Clients Say</h2>
        <!-- Add a carousel or grid for testimonials -->
    </v-col>
    </v-row>
    <!-- Call to Action Section -->
    <v-row>
      <v-col>
        <h2 class="headline text-center">Ready to Boost Your Business?</h2>
        <p class="text-center">Get in touch with us today for a personalized digital marketing strategy.</p>
        <v-btn color="primary" to="/contact" class="mx-auto">Get in Touch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: 'Search Engine Optimization (SEO)', description: 'Improve your website ranking on search engines.' },
        { title: 'Social Media Marketing', description: 'Engage with your audience on social platforms.' },
        { title: 'Content Marketing', description: 'Create valuable content to attract and retain customers.' },
        // Add more services as needed
      ],
    };
  },
};
</script>

<style scoped>
.service-card {
  margin: 20px 10px;
}

/* Add your custom styles here */
</style>
