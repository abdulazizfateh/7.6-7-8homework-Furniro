import { useQuery } from "@tanstack/react-query"
import { api } from "../api"

export const useProduct = (params) => {
    return useQuery({
        queryKey: ["product", params],
        queryFn: () => api.get(`/products`, { params }),
    });
};

export const useProductItem = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => api.get(`/products/${id}`)
    })
}

export const useProductCategory = (category, enabled = true, params) => {
    return useQuery({
        queryKey: ["product", category, params],
        queryFn: () => api.get(`/products/category/${category}`, { params }),
        enabled,
    })
}

export const useProductSearch = (params, enabled) => {
    return useQuery({ 
        queryKey: ["product", params],
        queryFn: () => api.get(`/products/search`, { params }),
        enabled: !!params.q,
    })
}