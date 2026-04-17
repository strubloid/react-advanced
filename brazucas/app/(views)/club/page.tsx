"use client";
import { lazy } from "react";
import delay from "../../components/demo2/Delay";

const Club = lazy(() =>
    delay(import("../../components/demo2/Club"), 3000).then((m) => ({
        default: (m as { Club: React.ComponentType }).Club,
    }))
);

export default function Page() {
    return <Club />;
}
