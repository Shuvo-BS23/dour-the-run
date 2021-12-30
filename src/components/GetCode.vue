<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default defineComponent({
  name: "get",
  setup() {
    const sendPostRequest = async (code: string) => {
      try {
        const firstResponse = await axios({
          method: "POST",
          url: "https://www.strava.com/oauth/token",
          params: {
            client_id: "75194",
            client_secret: "14411813529f3df102615214a20b2774750c9f62",
            grant_type: "authorization_code",
            code: code,
          },
        });

        const token = firstResponse.data;
        console.log(token); // Keep this line only if you need the token for something else later
      } catch (e) {
        console.log(e);
      }
    };
    onMounted(() => {
      const router = useRoute();
      const q = router.query;
      if (!("code" in q)) {
        console.log("Key Not found!!");
        //   Redirect To DashBoard
      }
      const code: any = q.code;
      sendPostRequest(code);
    });
  },
});
</script>
