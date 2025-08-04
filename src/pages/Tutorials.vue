<template>
  <div class="row">
    <aside class="col-md-3 mb-4">
      <h4>Skill Levels</h4>
      <ul class="list-group">
        <li v-for="lvl in levels" :key="lvl"
            class="list-group-item list-group-item-action"
            :class="{ active: selectedLevel === lvl }"
            @click="selectedLevel = lvl">{{ lvl }}</li>
      </ul>
    </aside>

    <section class="col-md-9">
      <h2 class="mb-4">Coding Tutorials</h2>
      <div class="row">
        <div v-for="(t, i) in filteredTutorials" :key="i" class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <img :src="t.image" class="card-img-top">
            <div class="card-body">
              <h5>{{ t.title }}</h5>
              <p>{{ t.summary }}</p>
              <a href="#" class="btn btn-outline-success btn-sm">Start Learning</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const levels = ref(['All', 'Beginner', 'Intermediate', 'Advanced']);
const selectedLevel = ref('All');

const tutorials = ref([
  { title: 'Vue Basics', summary: 'Intro to Vue 3.', level: 'Beginner', image: 'https://tse3.mm.bing.net/th/id/OIP._PMc0fM-9RY85bJ7d0RtdgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { title: 'Bootstrap Grid', summary: 'Master responsive design.', level: 'Beginner', image: 'https://www.smashingapps.com/wp-content/uploads/2014/03/jquerypluginsuser19.jpg' },
  { title: 'Pinia Store', summary: 'State management in Vue.', level: 'Intermediate', image: 'https://th.bing.com/th/id/OIP.BmMT6Xq5SiDfGHkbxnDilwHaFd?w=209&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3' }
]);

const filteredTutorials = computed(() =>
  selectedLevel.value === 'All'
    ? tutorials.value
    : tutorials.value.filter(t => t.level === selectedLevel.value)
);
</script>
