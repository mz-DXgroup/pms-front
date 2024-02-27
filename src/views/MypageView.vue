<template>
  <div>
    <TopbarView />
    <div>
      <h4 class="mt-3 ms-3">
        개인이력카드 조회
        <button class="btn btn-primary">
          <router-link to="/edit" class="link">정보 수정</router-link>
        </button>
      </h4>
    </div>
    <div class="card mt-3 ms-3 me-3">
      <div class="card-header bg-secondary fw-bold">기본정보</div>
      <div class="card-body">
        <table class="table">
          <tr>
            <th scope="row">성명 (한글)</th>
            <td>김나영</td>
            <th scope="row">성명 (영문)</th>
            <td>Nayoung Kim</td>
          </tr>
          <tr>
            <th scope="row">생년월일</th>
            <td>2023-02-27</td>
            <th scope="row">나이</th>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">법인명</th>
            <td>메가존.디지털</td>
            <th scope="row">소속</th>
            <td>메가존.디지털 / ICT 본부 / PMO팀 / 정규직</td>
          </tr>
          <tr>
            <th scope="row">직급</th>
            <td>사원</td>
            <th scope="row">직무</th>
            <td>업무분석가</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>nayoungk@mz.co.kr</td>
            <th scope="row">연락처</th>
            <td>010-0000-0000</td>
          </tr>
          <tr>
            <th scope="row">가용인력여부</th>
            <td>예</td>
            <th scope="row">상태</th>
            <td>재직</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="card mt-3 ms-3 me-3">
      <h5 class="card-header">수행경력</h5>
      <div class="card-body">
        <table class="table">
          <tr>
            <th scope="row">프로젝트</th>
            <th scope="row">담당업무</th>
            <th scope="row">시작일</th>
            <th scope="row">종료일</th>
            <th scope="row">고객사(원청사)</th>
            <th scope="row">고객사(발주사)</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TopbarView from "@/components/common/TopbarView.vue";

export default {
  setup() {

    return {  };
  },
  methods: {
  },
  components: {
    TopbarView,
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
</style>
