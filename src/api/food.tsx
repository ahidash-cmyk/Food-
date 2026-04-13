import axios from 'axios'
const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
})
// ✅ جلب التصنيفات
export const getCategories = async () => {
    const res = await api.get("/categories.php")
    return res.data;
}
// ✅ جلب الوجبات حسب التصنيف
export const getMealsByCategory = async (category: string) => {
        const res = await api.get(`/filter.php?c=${category}`)
        return res.data;
}
// ✅ جلب تفاصيل الوجبة
export const searchMeals = async (query: string) => {
    const res = await api.get(`/search.php?s=${query}`)
    return res.data;
}