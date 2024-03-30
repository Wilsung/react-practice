import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'
// import { json, redirect } from "react-router-dom";

export default function EditEventPage(){
    const data = useRouteLoaderData('event-detail');
    const event = data.event;
    return (
        <EventForm event={event} method="PATCH"/>
    )
}

// export async function action({ request, params }) {
//     const data = await request.formData();
//     const method = request.method;
  
//     const eventData = {
//       title: data.get("title"),
//       image: data.get("image"),
//       date: data.get("date"),
//       description: data.get("description"),
//     };
  
//     let url = "http://localhost:8080/events"
  
//     if (method === 'PATCH'){
//       url = "http://localhost:8080/events/" + params.eventId;
//     }
//     const response = await fetch(url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(eventData),
//     });
  
//     if (response.status === 422){
//       return response;
//     }
  
//     if (!response.ok) {
//       throw json({ mesasage: "could not save event." }, { status: 500 });
//     } else {
//       return redirect('/events');
//       // this is to move the user to other page after submitting form.
//     }
//   }