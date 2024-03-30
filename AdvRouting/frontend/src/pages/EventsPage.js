import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventsPage() {
  const data = useLoaderData();
  // if (data.isError){
  //   return <p>{data.message}</p>
  // }
  // const events = data.events;
  // return <EventsList events={data.events} />;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw { message: 'an  error occured' };
    // we can do this. but using the alternative:
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "could not fetch data." }, { status: 500 });
    // return { isError: true, message: 'failed to fetch.'}
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
