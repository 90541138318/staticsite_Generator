<template>
  <section class="hero text-white text-center d-flex align-items-center justify-content-center">
    <div data-aos="fade-up">
      <h1 class="display-3 fw-bold mb-3">Welcome to <span class="text-warning">TechWorld</span></h1>
      <p class="lead mb-4">Stay ahead in technology, AI, and web development trends.</p>
      <router-link to="/articles" class="btn btn-lg btn-warning shadow">Explore Articles</router-link>
    </div>
  </section>

  <section class="py-5">
    <div class="container text-center">
      <h2 class="mb-4" data-aos="fade-down">What We Offer</h2>
      <div class="row">
        <div v-for="(feature, index) in features" :key="index" class="col-md-4 mb-4" data-aos="zoom-in" :data-aos-delay="index*150">
          <div class="card shadow-lg border-0 h-100">
            <img :src="feature.image" class="card-img-top">
            <div class="card-body">
              <h5 class="fw-bold">{{ feature.title }}</h5>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { title: 'AI Insights', desc: 'Learn how AI is reshaping industries.', image: 'https://www.quantilope.com/hubfs/AI%20Insights.png' },
  { title: 'Web Development', desc: 'Stay updated with modern frameworks.', image: 'https://beta.synodus.com/wp-content/uploads/2022/10/web-development-frameworks.jpeg' },
  { title: 'Cloud Computing', desc: 'Master AWS, Azure & Google Cloud.', image: 'https://i0.wp.com/jeetechacademy.com/wp-content/uploads/2023/05/Cloud-Computing-1.png?fit=1024%2C575&ssl=1' }
];
</script>

<style scoped>
.hero {
  height: 80vh;
  background: url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  position: relative;
}
.hero::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
}
.hero > div {
  position: relative;
  z-index: 2;
}
</style>
