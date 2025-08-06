<template>
  <div class="row">
    <!-- Sidebar -->
    <aside class="col-md-3 mb-4" data-aos="fade-right">
      <h4 class="mb-3 text-primary fw-bold">Categories</h4>
      <ul class="list-group shadow-sm">
        <li v-for="cat in categories" :key="cat" 
            class="list-group-item list-group-item-action"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat">
          {{ cat }}
        </li>
      </ul>
    </aside>

    <!-- Main Articles -->
    <section class="col-md-9">
      <h2 class="mb-4 text-center fw-bold" data-aos="fade-down">
        <i class="bi bi-newspaper me-2"></i> Latest Articles
      </h2>
      <div class="row">
        <div v-for="(a, i) in filteredArticles" :key="i" 
             class="col-md-6 mb-4"
             data-aos="fade-up" 
             :data-aos-delay="i * 150">
          <div class="card h-100 shadow-sm">
            <img :src="a.image" class="card-img-top" alt="article image">
            <div class="card-body">
              <h5 class="fw-bold">{{ a.title }}</h5>
              <p class="text-muted">{{ a.summary }}</p>
              <a href="#" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-box-arrow-up-right"></i> Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredArticles.length === 0" class="text-center py-5" data-aos="fade-up">
        <i class="bi bi-emoji-frown display-4 text-muted"></i>
        <p class="mt-3">No articles found in this category.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = ref(['All', 'AI', 'Web Dev', 'Cloud']);
const selectedCategory = ref('All');

const articles = ref([
  { title: 'AI in Healthcare', summary: 'AI is revolutionizing diagnosis and treatment.', category: 'AI', image: 'https://www.strategyand.pwc.com/m1/en/strategic-foresight/sector-strategies/healthcare/ai-powered-healthcare-solutions/img01-section1.jpg' },
  { title: 'Vue.js Tips', summary: 'Boost your Vue workflow with these quick tips.', category: 'Web Dev', image: 'https://johobase.com/jb/wp-content/uploads/2021/03/vue-js-the-progressive-javascript-framework-eye-catching.png' },
  { title: 'Cloud Basics', summary: 'Understand cloud computing fundamentals.', category: 'Cloud', image: 'https://digitalcloud.training/wp-content/uploads/2018/11/Copy-of-Blog-Image.png?update_image_id_1753758856' },
  { title: 'AI in Business', summary: 'How AI drives smarter decisions in companies.', category: 'AI', image: 'https://www.b2blearning.eu/534-thickbox_default/ai-for-ceos-and-managers.jpg' },
]);

const filteredArticles = computed(() =>
  selectedCategory.value === 'All'
    ? articles.value
    : articles.value.filter(a => a.category === selectedCategory.value)
);

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.list-group-item.active {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>
