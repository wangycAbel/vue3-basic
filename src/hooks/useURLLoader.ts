import axios from "axios";
import { reactive, toRefs } from "vue";
interface IResult<T> {
  result: T | null;
  loading: boolean;
  error: any;
}
const useURLLoader = <T=any>(url: string) => {
  const data: IResult<T> = reactive({
    result: null,
    loading: true,
    error: null,
  });
  axios
    .get(url)
    .then((res) => {
      data.result = res.data;
    })
    .catch((err) => {
      data.error = err;
    })
    .finally(() => {
      data.loading = false;
    });
  return toRefs(data);
};
export default useURLLoader;
