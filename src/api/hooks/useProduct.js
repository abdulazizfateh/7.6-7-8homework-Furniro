import { useQuery } from "@tanstack/react-query"
import { api } from "../api"

export const useProduct = (params) => {
    return useQuery({
        queryKey: ["product", params],
        queryFn: () => api.get("/products", { params }),
    });
};