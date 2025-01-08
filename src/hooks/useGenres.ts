import genre from "@/data/genre";
export interface Genre{
    id: number;
    name: string
    image_background: string
}
const useGenres = () => ({data: genre,  error: null, isLoding: false});

export default useGenres


