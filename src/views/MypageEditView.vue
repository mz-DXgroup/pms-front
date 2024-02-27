<template>
  <div>
    <TopbarView />
    <h4 class="mt-3 ms-3 me-3">
      개인이력카드 수정
    </h4>
    <div class="card mt-3 ms-3 me-3">
      <div class="card-header bg-secondary fw-bold">기본정보</div>
      <div class="card-body">
        <input type="file" accept="image/*" @change="changeImage" />

        <div class="preview">
          <img src="previewImage" />
        </div>

        
        <table class="table">
          <tr>
            <th scope="row">성명 (한글)</th>
            <td><input type="text"></td>
            <th scope="row">성명 (영문)</th>
            <td><input type="text"></td>
          </tr>
          <tr>
            <th scope="row">생년월일</th>
            <td><input type="text"></td>
            <th scope="row">나이</th>
            <td><input type="text"></td>
          </tr>
          <tr>
            <th scope="row">법인명</th>
            <td><input type="text"></td>
            <th scope="row">소속</th>
            <td><input type="text"></td>
          </tr>
          <tr>
            <th scope="row">직급</th>
            <td><input type="text"></td>
            <th scope="row">직무</th>
            <td><input type="text"></td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td><input type="text"></td>
            <th scope="row">연락처</th>
            <td><input type="text"></td>
          </tr>
          <tr>
            <th scope="row">가용인력여부</th>
            <td><input type="text"></td>
            <th scope="row">상태</th>
            <td><input type="text"></td>
          </tr>
        </table>
      </div>
    </div>
      </div>
</template>

<script>
import TopbarView from "@/components/common/TopbarView.vue";

export default {
  setup () {

    return {}
  },
  components: {
    TopbarView
  },
}
</script>

<style scoped>
</style>
