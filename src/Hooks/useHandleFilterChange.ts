export default function useHandleFilterChange(key: string, value: string | null, setSearchParams:(prevParams: any)=>void) {
    setSearchParams((prevParams: { delete: (arg0: string) => void; set: (arg0: string, arg1: string) => void }) => {
        if (value === null) {
            prevParams.delete(key);
        } else {
            prevParams.set(key, value);
        }
        return prevParams;
    });
}