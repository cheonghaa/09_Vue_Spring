import axios from "axios";
const instance = axios.create({
    timeout: 1000,
});
// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        // config.headers : 요청 헤더
        return config;
    },
    (error) => {
        // 요청 중 에러가 난 경우
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => {
        // 정상 응답인 경우 (200, 404)
        return response;
    },
    async (error) => {
        // 에러 응답인 경우(401, 403, 305, 500 등)
        return Promise.reject(error);
    }
);
export default instance; // 인터셉터가 적용된 axios 인스턴스
