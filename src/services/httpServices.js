import axios from "axios";

export const ACCESS_TOKEN_ADMIN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGVmYzU3YWUwZTIwZWEwM2ZiMjcwOGY0ZGY2NWJjY2MyYzBjOWQ1MjM1Yzc5MzQ4NzA3N2NhOTAyYWI1Mzg0MDE1MWE3NTI5OTI4OTg3NjIiLCJpYXQiOjE3MTA5OTE5ODcuMzI0OTE3LCJuYmYiOjE3MTA5OTE5ODcuMzI0OTIsImV4cCI6MTc0MjUyNzk4Ny4yMDYxMTksInN1YiI6IjQiLCJzY29wZXMiOltdfQ.FxRnZistkKGMKY8-MqVjFldU8ypO0VtY2aR0c2Y2VTCLC7zuM6mWmyb0EsUatb5OLS1unp5UZZsS8YeevlR5seSti3EJYCjqjHzPVKE_vT9b8xYIcmPCzz3XGTzLaZKK2SDcpVa7lQZVf-2nSRJ_lgS498tXG6yjm1MreJYrMN23iZQ-OHdjnmeomYaD9b-IMo1Ms46U0KHPeVXvfMrg6NFuaNwmm7ugAZRH6scXyRKAAyJQ2tIj2ZP6UxrX9H-8zM10fFJPDWyao8mOFGsXF9kSgBYtsiTNexNamxZ6U7A15YVq632ZRJ4AZRy7iWSiJJF_fAarw5R5ZjM0iscziFI7UWTGwArCNGZlZqzRuqmXnZ1PN8nuBhkY-TfLvsZyYEaPj4iSe0bb68s-TJdT7cGyzJuEl0lQoLVxwrsv_TiUPWMsem_RNXVsRgV_B8y4WpflvL93w7rO2yABUS5NxQhlVSuNGYBiq5qA4G2zV3swtb4WC0WYWRy8YZ1XxdCf2CRwtpnHum-NJ6_3CA_ZvljnjV2B4O85EoWmPHzxnMcCri9hfaWzDTG8ENnl-N2WkdlxzjvUZhznNpT59YN__WkGiJI3fCZJCgco1QiSSxRUwMv8k3u8tVHcxPgN5KDSysO195jg7RVUKO9kNxSXAO5pZuEJsTMi3Ix6htoKCoQ";

const axiosWithAuth = () => {
  const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
    contentType: "application/json",
    accept: "application/json",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Expose-Headers": "*",
      "Cache-Control": "no-cache,no-store",
      Authorization: `Bearer ${ACCESS_TOKEN_ADMIN}`,
    },
  });

  return instance;
};

const httpServices = {
  get: (url, params = {}) => {
    return axiosWithAuth()
      .get(url, {
        params,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err?.response?.data;
      });
  },
  post: (url, params = {}) => {
    return axiosWithAuth()
      .post(url, params)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err?.response?.data;
      });
  },

  put: (url, params = {}) => {
    return axiosWithAuth()
      .put(url, params)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err?.response?.data;
      });
  },
  patch: (url, params = {}) => {
    return axiosWithAuth()
      .patch(url, params)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err?.response?.data;
      });
  },
  delete: (url, params = {}) => {
    return axiosWithAuth()
      .delete(url, {
        ...params,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err?.response?.data;
      });
  },
};

export default httpServices;
