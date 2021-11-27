import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

function Messages() {
  const router = useRouter();
  const { data: messages, error } = useSWR("/api/contact/");

  if (!messages) {
    return <p>Loading...</p>;
  }

  if (error) {
    router.push("/");
  }
  console.log(messages);

  return <ul></ul>;
}

export default Messages;
