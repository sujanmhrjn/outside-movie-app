import * as React from "react";
import "./api/mock-server";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1 className="font-bold text-red-400 text-3xl">
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);