import { Metadata } from "next";
import { redirect } from "next/navigation";
import { personalInfo } from "@/data/personal";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download resume",
};

export default function ResumePage() {
  // Redirect to Google Drive resume
  redirect(personalInfo.resumeUrl);
}
