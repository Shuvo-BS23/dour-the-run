import { event } from "../../models";
import axios from "../../utils/axiosWrapper";

class EventsData {
  getAll(): Promise<event[]> {
    return axios.get("/events.json");
  }
  createEvent(data: event): Promise<event> {
    return axios.post("/events.json", data);
  }
}

export default new EventsData();
