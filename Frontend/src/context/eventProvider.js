import { createContext, useContext, useState } from "react";
import {
    getEventRequest,
    toggleTaskDoneRequest 
} from '../api/events.api'
import { eventContext } from "./eventContext";

export const useEvents = () => {
    const context = useContext(eventContext);
    if(context === undefined) {
        throw new Error ("Event tasks must be within a event provider");
    }
    return context;
};

export const TaskContextProvider = ({ children }) => {
    const [events, setEvents] = useState ([]);
    async function loadEvents () {
        const response = await getEventRequest ();
        setEvents(response.data);
    }
  
    // const toggleTaskDone = async (id) => {
    //   try {
    //     const taskFound = tasks.find((task) => task.id === id);
    //     await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
    //     setTasks(
    //       tasks.map((task) =>
    //         task.id === id ? { ...task, done: !task.done } : task
    //       )
    //     );
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  
    return (
      <eventContext.Provider
        value={{
          events,
          loadEvents
        }}
      >
        {children}
      </eventContext.Provider>
    );
  };