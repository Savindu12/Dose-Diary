import axios from 'axios';

export const getEventRequest = async () => {
    await axios.get("http://localhost:8080/api/events");
}

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:8080/api/events/${id}`, {
    done,
  });

