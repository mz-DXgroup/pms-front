<template>
  <div>
    <TopbarView />
    <div class="card mt-3 me-3 ms-3">
      <div class="card-header bg-secondary fw-bold text-white">계획</div>
      <div class="card-body">
        <p>dd</p>
      </div>
    </div>

    <div class="card mt-3 me-3 ms-3">
      <div class="card-header bg-secondary fw-bold text-white">수행</div>
      <div class="card-body">
        <p>dd</p>
      </div>
    </div>

    <div class="card mt-3 me-3 ms-3">
      <div class="card-header bg-secondary fw-bold text-white">완료</div>
      <div class="card-body">
        <p>dd</p>
      </div>
    </div>

    <div class="card mt-3 me-3 ms-3">
      <div class="card-header bg-secondary fw-bold text-white">종료</div>
      <div class="card-body">
        <p>dd</p>
      </div>
    </div>
  </div>
</template>

<script>
import TopbarView from '@/components/common/TopbarView.vue';

export default {
  components: {
    TopbarView
  },
  setup () {
    

    return {}
  }
};
</script>

<style scoped>

</style>